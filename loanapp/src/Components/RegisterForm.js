import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import Recaptcha from 'react-recaptcha'
import swal from 'sweetalert'
import { useHistory,Link } from 'react-router-dom'
export default function RegisterForm() {
  const [bank, setBank] = useState()
  const history=useHistory()
  const validationSchema = Yup.object({
    cname: Yup.string().required("Name is Required").min(3, "Atleast three Characters Required"),
    phone: Yup.string().required("Phone Number is Required").min(10, "only 10 digits are required").max(10, "only 10 digits are required"),
    mail: Yup.string().required("Email-Id is Required").email("Enter Valid Email"),
    zip: Yup.string().required("Zipcode is Required").min(6, "Only 6 Digits are Allowed").max(6, "Only 6 Digits are Allowed"),
    bank: Yup.string().required("Select Bank Name"),
    pass:Yup.string().required("Password is Required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Ex(Abc@1234)")
  })
  const url=axios.create({
    saveURL:"http://locahost:8080/register/save"
  })
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      cname: '',
      phone: '',
      mail: '',
      zip: '',
      bank: 'Select Bank',
      pass:'',
      cpass:''
    },
    validationSchema,
    onSubmit() {
      if(verify)
      {
        alert("Captcha verified that your are a human")
        axios.post("http://localhost:8080/register/saveData",values).then((res=>res.data)).then((data)=>
        {
          console.log(data)
        }).catch((e)=>
        {
          console.log(e)
        }).finally(()=>
        {
          console.log("Finally Block")
        })
        history.push('/login')
      }
      else{
        alert("Please verify you are a human")
      }
    }
  })
  const callback=()=>
  {
    console.log("recaptcha loaded!!")
  }
  const [verify,setVerify]=useState(false);
  const verifyCallback=(res)=>
  {
    if(res)
    {
      setVerify(true);
    }
  }
  var pwd=values.pass;
  var cpwd=values.cpass;
  var txt;
  if(pwd===cpwd)
  {
    txt=''
  }
  else if(pwd===cpwd)
  {
    txt="Password Matched"
  }
  else
  {
    txt="Password Doesn't Match"
  }
  const useStyles = makeStyles({
    root: {
      width:400,
      marginLeft:600,
      marginTop:10,
      backgroundColor:'#AF7AC5'
    }
  })
  const classes = useStyles();
  return (
    
    <div>
       <Card className={classes.root}>
       <CardContent>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
         <table>
           <tbody>
           <tr><td> <TextField label="Customer Name" helperText={errors.cname ? errors.cname : null} value={values.cname} variant="outlined" name="cname" onChange={handleChange} /></td></tr>
           <tr><td> <TextField label="Phone Number" helperText={errors.phone ? errors.phone : null} value={values.phone} variant="outlined" name="phone" onChange={handleChange} /></td></tr>
           <tr><td> <TextField label="Email-Id" name="mail" onChange={handleChange} helperText={errors.mail ? errors.mail : null} variant="outlined" value={values.mail} /></td></tr>

           <tr><td><TextField label="Zip Code" onChange={handleChange} value={values.zip} name="zip" helperText={errors.zip ? errors.zip : null} variant="outlined" /></td></tr>
           <tr><td><TextField label="Password" variant="outlined" name="pass" onChange={handleChange} type="password" helperText={errors.pass?errors.pass:null}/></td></tr>
           <tr><td><TextField label="Confirm Password" variant="outlined" name="cpass" onChange={handleChange} type="password" helperText={txt}/></td></tr>
          <tr><td>
            <Recaptcha
              sitekey="6Lex4ZkbAAAAAMSdGMR9kmnutK6TnxceijIMnCRn"
              render="explicit"
              onloadCallback={callback} verifyCallback={verifyCallback}
            /></td></tr>
          <tr><td><Button type="submit" variant="contained" color="primary">Register Now</Button></td></tr>
          <br></br>
          <tr><td style={{fontStyle:'italic'}}>Already Registered?&nbsp;&nbsp;<Link to="/login">Login</Link></td></tr>
          </tbody>
          </table>
        </form>
        </CardContent>
        </Card>
    </div>
  )
}
