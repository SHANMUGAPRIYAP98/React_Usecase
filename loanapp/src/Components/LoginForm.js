import React from 'react'
import { useState } from 'react';
import { Redirect } from 'react-router';
import { useHistory, useLocation } from 'react-router-dom';
import { TextField, Button, Card, CardContent, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EmailSharpIcon from '@material-ui/icons/EmailSharp';
import VisibilitySharpIcon from '@material-ui/icons/VisibilitySharp';
import { useFormik } from 'formik';
import emailjs from 'emailjs-com';
import * as Yup from 'yup';
import axios from 'axios'
import swal from 'sweetalert';
export default function LoginForm() {
    const auth = {
        isAuthenticated: false,
        authenticated() {
            this.isAuthenticated = true;
        }
    }
    const [direct, setDirect] = useState(false)
    const history = useHistory()
    const { state } = useLocation()
    const loginBut=()=>
    {

       auth.authenticated(()=>
       {
           setDirect(true);
       })
       history.push('/loan')
    
    }
    const validationSchema = Yup.object({
        mail: Yup.string().required("Email-Id is Required").email("Enter a Valid Email"),
        pass: Yup.string().required("Password  is Required")
    })
    const dburl="http://localhost:8080/login/getMailPass";
    
    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            mail: '',
            pass: ''
        },
        validationSchema,
    })
 
    function sendMail(event)
    {
        const mail=values.mail;
        axios.get(`${dburl}/${mail}`).then(res=>res.data).then((res)=>
        {
           console.log(res)
            if(res.mail==values.mail&&res.pass==values.pass)
            {
                swal("Login Successful","","success")

            }
            else
            {
                swal("Invalid Username or Password","","error")
            }
        }).catch((e)=>
        {
            swal("Invalid Username or Password","","error")
        })
        // event.preventDefault();
        //  emailjs.sendForm('gmail', 'email-template', event.target, 'user_bJdyl453vkTqnN9w2PzX9')
        //         .then((result) => {
        //             console.log(result.text);
        //         }, (error) => {
        //             console.log(error.text);
        //         });
    }
    const useStyles = makeStyles({
        style: {
            width: 400,
            marginLeft: 600,
            marginTop: 10,
            backgroundColor: '#AF7AC5',
            height: 350,
            fontFamily: 'Tahoma',
            fontSize: 16

        }
    })
    const classes = useStyles()
    const register = () => {
        history.push('/register')
    }
    if(direct===true)
    {
      return <Redirect to={state?.from || '/loan'}></Redirect>
    }


    return (
        <div>
            <Card className={classes.style}>
                <CardContent>
                    <form onSubmit={sendMail} autoComplete="off" noValidate>
                        <table>
                            <tbody>
                                <tr><td><EmailSharpIcon style={{ color: '#2E4053' }} /></td><td><TextField variant="outlined" name="mail" label="Email-Id" type="email" value={values.mail} onChange={handleChange} helperText={errors.mail ? errors.mail : null} /></td></tr>
                                <br></br>
                                <tr><IconButton style={{ color: '#2E4053' }}><VisibilitySharpIcon /></IconButton><td><TextField name="pass" variant="outlined" label="Password" type="password" value={values.pass} onChange={handleChange} helperText={errors.pass ? errors.pass : null} /></td></tr>
                                <br></br>
                                <tr><td colSpan="2"><Button type="submit" variant="contained" style={{ backgroundColor: '#5D6D7E' }} >Login</Button></td></tr>
                                <br></br>
                                <tr><td style={{ fontStyle: 'italic' }}>Not Registered ?</td><td><Button type="submit" variant="contained" style={{ backgroundColor: '#5D6D7E' }} onClick={register}>Register Now</Button></td></tr>
                            </tbody>
                        </table>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
