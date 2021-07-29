import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { TextField } from '@material-ui/core';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
// import FormControlLabel from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core'
import axios from 'axios';
export default function GoldLoanForm() {
    const [datas,setData]=useState({
       branch:'',
       city:'',
       cname:'',
       community:'',
       dob:'',
       education:'',
       mail:'',
       gender:'',
       landline:'',
       nationality:'',
       occupation:'',
       phone:'',
       religion:'',
       state:'',
       zipcode:'',
       accountno:'',
       disburse:'',
       holdername:'',
       ifsc:'',
       income:'',
       loantype:'',
       payment:'',
       purpose:'',
       tenure:''
      })
      console.log(datas.mail)
      const onUpdateData=(event)=>
      {
          const {name,value}=event.target;
          setData((prev)=>{
              return{
              ...prev,
              [name]:value
           }
          })
      }
    const useStyles = makeStyles((theme) => ({
        root: {
            width: 1100,
            marginTop: 10,
            marginLeft:300,
            border: '1 solid black',
            backgroundColor:'#A9F2D9'
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 150,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        }
    }));
    const dbUrl="";
    const onSubmit=()=>
    {
        console.log(datas)
        axios.post("http://localhost:8080/loan/postData",datas).then(res=>res.data).then((data)=>
        {
            console.log(data);
        })
    }
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root} >
                <CardContent>
                    <h2>Gold Loan Application Form</h2>
                    <form noValidate autoComplete="off">
                        <table>
                            <tr><td><label className="lab">Branch Name</label></td><td><TextField id="standard-basic" name="branch" value={datas.branch}  onChange={onUpdateData}/></td></tr>
                            <tr><td><TextField id="standard-basic" label="Applicant Name" name="cname" value={datas.cname} onChange={onUpdateData}/></td></tr>
                            <tr><td><TextField id="standard-basic" label="Landmark" /></td><td><TextField id="standard-basic" value={datas.city} label="City" name="city" onChange={onUpdateData}/></td><td><TextField id="standard-basic" label="State" name="state" onChange={onUpdateData}/></td><td><TextField id="standard-basic" label="Pincode" name="zipcode" onChange={onUpdateData}/></td></tr>
                            <tr><td><TextField
                                id="date"
                                label="Date of Birth"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                style={{ marginLeft: -25, marginTop: 10 }}
                            name="dob" onChange={onUpdateData}/></td></tr><br/>
                            <tr><td><label className="lab">Gender</label></td><td><input type="radio" name="gender" value="Female" onChange={onUpdateData}/>Female
                                <input type="radio" name="gender" value="Male" onChange={onUpdateData}/>Male
                                <input type="radio" name="gender" value="Others" onChange={onUpdateData}/>Others</td></tr><br></br>
                            <tr><td><TextField id="standard-basic" label="Phone Number" name="phone" value={datas.phone} onChange={onUpdateData}/></td></tr>
                            <tr><td><TextField id="standard-basic" label="LandLine Number" name="landline" value={datas.landline} onChange={onUpdateData}/></td></tr>
                            <tr><td>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Religion</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select" style={{ marginLeft: -25 }} name="religion" value={datas.religion} onChange={onUpdateData}>
                                        <MenuItem value="Hindu">Hindu</MenuItem>
                                        <MenuItem value="Christian">Christian</MenuItem>
                                        <MenuItem value="Muslim">Muslim</MenuItem>
                                        <MenuItem value="Jain">Jain</MenuItem>
                                        <MenuItem value="Budhism">Budhism</MenuItem>
                                    </Select>
                                </FormControl>
                            </td></tr>

                            <tr><td><label className="lab">Community</label></td><td><input type="radio" name="community" value="OBC" onChange={onUpdateData}/>OBC
                                <input type="radio" name="community" value="BC" onChange={onUpdateData}/>BC
                                <input type="radio" name="community" value="OC" onChange={onUpdateData}/>OC
                                <input type="radio" name="community" value="SC" onChange={onUpdateData}/>SC
                                <input type="radio" name="community" value="ST" onChange={onUpdateData}/>ST
                            </td></tr><br/>
                            <tr><td><label className="lab">Nationality</label></td>
                                <td><input type="radio" name="nationality" value="Indian" onChange={onUpdateData}/>Indian
                                    <input type="radio" name="nationality" value="NRI" onChange={onUpdateData}/>NRI</td>
                            </tr><br/>
                            <tr><td><TextField id="standard-basic" label="Education" name="education" onChange={onUpdateData}/></td></tr>
                           <br/> <tr><td><label className="lab">Occupation</label></td><td><input type="radio" name="occupation" value="Salaried" onChange={onUpdateData}/>Salaried 
                            <input type="radio" name="occupation" value="Self-Employed" onChange={onUpdateData}/>Self-Employed 
                            <input type="radio" name="occupation" value="Agriculturalist" onChange={onUpdateData}/>Agriculturalist
                            <input type="radio" name="occupation" value="Others" onChange={onUpdateData}/>Others  </td></tr>
                            <tr><td><TextField id="standard-basic" label="Email-Id" type="email" name="mail" value={datas.mail} onChange={onUpdateData}></TextField></td></tr>
                                    <h2>Loan Payment Details</h2>
                                        <tr><td><label className="lab1">Interest Payment Mode</label></td>
                                        <td><input type="radio" name="payment" value="Monthly" onChange={onUpdateData}/>Monthly
                                        <input type="radio" name="payment" value="Quaterly" onChange={onUpdateData}/>Quaterly
                                        <input type="radio" name="payment" value="Half-Yearly" onChange={onUpdateData}/>Half-Yearly
                                        </td></tr><br></br>
                                        <tr><td><TextField id="standard-basic" label="Tenure" value={datas.tenure} name="tenure" onChange={onUpdateData} value={datas.tenure}></TextField></td></tr><br></br>
                                        <tr><td><label className="lab">Required Loan</label></td>
                                        <td><input type="radio" name="loantype" value="Gold Loan" onChange={onUpdateData}/>Gold Loan
                                        <input type="radio" name="loantype" value="Housing Loan" onChange={onUpdateData}/>Housing Loan
                                        <input type="radio" name="loantype" value="Automobile Loan" onChange={onUpdateData}/>Automobile Loan
                                        </td></tr><br></br>
                                        <tr><td><label className="lab1">Mode of Disbursement</label></td>
                                        <td><input type="radio" name="disburse" value="Funds-Transfer" onChange={onUpdateData}/>Funds-Transfer
                                        <input type="radio" name="disburse" value="Account" onChange={onUpdateData}/>Account
                                        <input type="radio" name="disburse" value="NEFT" onChange={onUpdateData}/>NEFT
                                        <input type="radio" name="disburse" value="DD" onChange={onUpdateData}/>DD
                                        <input type="radio" name="disburse" value="Cash" onChange={onUpdateData}/>Cash
                                        </td></tr>
                                        <tr><td><TextField id="standard-basic" label="Holder Name" name="holdername" value={datas.holdername} onChange={onUpdateData}></TextField></td></tr>
                                        <tr><td><TextField id="standard-basic" label="Account No" name="accountno" value={datas.accountno} onChange={onUpdateData}></TextField></td></tr>
                                        <tr><td><TextField id="standard-basic" label="Branch" name="branch" value={datas.branch}  onChange={onUpdateData}></TextField></td></tr>
                                        <tr><td><TextField id="standard-basic" label="IFSC Code" name="ifsc" value={datas.ifsc} onChange={onUpdateData}></TextField></td></tr>
                                        <tr><td><TextField id="standard-basic" label="Net Annual Income" value={datas.income} name="income" onChange={onUpdateData}></TextField></td></tr>
                                        <tr><td><TextField id="standard-basic" label="Purpose of the Loan" value={datas.purpose} name="purpose" onChange={onUpdateData}></TextField></td></tr>
                                    </table>
                         <tr><td></td></tr><br/>
                         <tr><td><Button va color="secondary"riant="contained" style={{marginLeft:300}} onClick={onSubmit}>Submit Loan</Button></td>
                         <td><Button variant="contained" color="secondary" style={{marginLeft:50}}>Clear Data</Button></td></tr>
                    </form>
                </CardContent>
            </Card>
        </div>

    )
}
