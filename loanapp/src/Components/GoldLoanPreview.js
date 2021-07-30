import { Button, CardContent, TextField, Card, Tab } from '@material-ui/core'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Table, TableRow, TableCell, TableHead } from '@material-ui/core'
import LoanPreview from './LoanPreview';

export default function GoldLoanPreview() {
    const [id, setId] = useState({
        loanid: ''
    });
    const dbUrl = "http://localhost:8080/loan/fetchData";
    const onUpdateData = (event) => {
        const { name, value } = event.target;
        setId((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const [datas, setData] = useState();
    const [flag, setFlag] = useState(false);

    const onSubmit = () => {

        axios.get(`${dbUrl}/${id.loanid}`).then(res => res.data).then((response) => {
            setData(response);
            console.log(datas)
        })
        setFlag(true);
    }
    return (


        <div>
            <Card>
                <CardContent>
                    <label>Enter Id : </label><TextField id="standard-basic" name="loanid" value={id.loanid} onChange={onUpdateData} />&nbsp;&nbsp;<Button name="but" variant="contained" color="secondary" onClick={onSubmit}>Get Loan Details</Button>

                    {
                    flag && <LoanPreview val={datas} />
                }
                </CardContent>
            </Card>
          


        </div>
    )
}
