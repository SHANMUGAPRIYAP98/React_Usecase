import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button, Container, MenuItem, Select } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import Recaptcha from 'react-recaptcha'
import swal from 'sweetalert'
import { useHistory } from 'react-router-dom'
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
    onSubmit(data) {
      if(verify)
      {
        console.log("Captcha verified that your are a human")
        console.log(data)
        swal("Form Submitted Successfully","","success")
        history.push('/login')
      }
      else{
        console.log("Please verify you are a human")
      }
    }
  })
  var dburl = "http://localhost:4000/banks";
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
  useEffect(() => {

    axios.get(dburl).then(res => res.data).then((data) => {
      setBank(data)
    })
  }, [])
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
       
          {/* <div>
            <Select>
              <MenuItem value="Select Bank">Select Bank</MenuItem>
              {
                bank.map((x) => {
                  return (
                    <MenuItem key={x.id} value={x.name}>{x.name}</MenuItem>
                  )
                })
              }
            </Select>
          </div> */}
          <tr><td>
            <Recaptcha
              sitekey="6Lex4ZkbAAAAAMSdGMR9kmnutK6TnxceijIMnCRn"
              render="explicit"
              onloadCallback={callback} verifyCallback={verifyCallback}
            /></td></tr>
          <tr><td><Button type="submit" variant="contained" color="primary">Register Now</Button></td></tr>
          </tbody>
          </table>
        </form>
        </CardContent>
        </Card>
    </div>
  )
}
