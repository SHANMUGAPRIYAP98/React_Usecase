import { Button, CardContent,TextField,Card, Tab } from '@material-ui/core'
import axios from 'axios'
import React,{useState} from 'react'
import { Table,TableRow,TableCell,  TableHead} from '@material-ui/core'

export default function GoldLoanPreview() {
    const [id,setId]=useState({
        loanid:''
         });
    const dbUrl="http://localhost:8080/loan/fetchData";
    const onUpdateData=(event)=>
    {
        const {name,value}=event.target;
        setId((prev)=>
        {
            return{
                ...prev,
                [name]:value
            }
        })
    }
    var email;
    const [data,setData]=useState();
    const display=''
    const onSubmit=()=>
    {
        axios.get(`${dbUrl}/${id.loanid}`).then(res=>res.data).then((response)=>
        {
           display=<table><tr><td>{response.cname}</td></tr></table>
        })
        setData(display)
     
    }
    return (
        <div>
            <Card>    
            <CardContent>
            <label>Enter Id : </label><TextField variant="outlined"  name="loanid" value={id.loanid} onChange={onUpdateData} />&nbsp;&nbsp;<Button name="but" variant="contained" color="secondary" onClick={onSubmit}>Get Loan Details</Button>
            </CardContent>
            </Card>
            {
                data
            }
        </div>
    )
}
