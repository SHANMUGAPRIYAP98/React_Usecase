import React from 'react'
import { Table,TableRow,TableCell,  TableHead} from '@material-ui/core'
export default function EMIDetails(props) {
    return (
        <div>
            <Table arial-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell><strong>Loan Amount</strong></TableCell>
                    <TableCell><strong>₹</strong>{props.pamt}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><strong>Interest %</strong></TableCell>
                    <TableCell><strong></strong>{props.intr}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><strong>Tenure (in Months) </strong></TableCell>
                    <TableCell><strong></strong>{props.period}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><strong>EMI (Monthly) </strong></TableCell>
                    <TableCell><strong>₹</strong>{props.emi}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><strong>Total Interest</strong></TableCell>
                    <TableCell><strong>₹</strong>{props.intamt}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><strong>Total Payment</strong><br/>( Loan Amount + Interest) </TableCell>
                    <TableCell><strong>₹</strong>{props.tamt? props.tamt:0}</TableCell>
                </TableRow>
            </TableHead>


            </Table>
        </div>
    )
}
