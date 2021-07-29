import React from 'react'
import  VerifyButton  from '@passbase/button/react'
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import axios from 'axios';
export default function KYCVerification() {
    const referenceUserWithKey = (key) => {
        console.log(key);
      };
      const sendData=(authKey)=>
      {
        const data={authKey:authKey};
        const headers={
          "Content-Type":"application/json"
        };
        axios.post("http://localhost:4000/kyc",data,{headers}).then(res=>res.data).then((data)=>
        {
          console.log(data)
        }).catch((err)=>
        {
          console.log(err)
        }).finally(()=>
        {
          console.log("Finally Block")
        })
      }
      const useStyles1 = makeStyles({
        root: {
          width:400,
          height:400,
          marginLeft:600,
          marginTop:50,
          backgroundColor:'#972BAA'
        }
      })
      const useStyles2 = makeStyles({
        root: {
          marginLeft:80,
          marginTop:150
        }
      })
      const classes1=useStyles1();
      const classes2=useStyles2();
    return (
        <div>
        <Card className={classes1.root}>
        <CardContent className={classes2.root}>
              <VerifyButton
          apiKey={
            "49ab129a42f3bd68094d83d742e92750a0416a57224dcd013288a2e08be5c63c"
          }
          onFinish={(error,authKey,additioalAttributes)=>{
            if(error)
            {
              console.log(error)
            }
            else
            {
              sendData(authKey)
            }
          }}
          onError={(errorCode) => {}}
          onStart={() => {}}
          theme={{
           accentColor:'#66398B'
        }}
           />
        </CardContent>
        </Card>
        </div>
    )
}
