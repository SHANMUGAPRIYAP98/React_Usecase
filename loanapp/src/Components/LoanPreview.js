import React from 'react'
import { Table, TableRow, TableCell, TableHead } from '@material-ui/core'
export default function LoanPreview(props) {
    return (
        <div>
                <label id="gen">General Details</label>
                <label id="lab1">Loan Details</label>
            <Table arial-label="simple table" id="tab">
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Name</strong></TableCell>
                        <TableCell>{props.val.cname}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>City</strong></TableCell>
                        <TableCell><strong></strong>{props.val.city}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>State </strong></TableCell>
                        <TableCell><strong></strong>{props.val.state}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>Zipcode</strong></TableCell>
                        <TableCell>{props.val.zipcode}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>Community</strong></TableCell>
                        <TableCell>{props.val.community}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>Date of Birth</strong> </TableCell>
                        <TableCell>{props.val.dob}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell><strong>Email</strong> </TableCell>
                        <TableCell>{props.val.mail}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>Occupation</strong> </TableCell>
                        <TableCell>{props.val.occupation}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>Gender</strong> </TableCell>
                        <TableCell>{props.val.gender}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>Education</strong> </TableCell>
                        <TableCell>{props.val.education}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>Nationality</strong> </TableCell>
                        <TableCell>{props.val.nationality}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>Phone</strong> </TableCell>
                        <TableCell>{props.val.phone}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>Landline</strong> </TableCell>
                        <TableCell>{props.val.landline}</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
          
            <Table arial-label="simple table" id="tab1">

                <TableHead>
                <TableRow>
                        <TableCell><strong>Card Holder Name</strong></TableCell>
                        <TableCell>{props.val.holdername}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>Account No</strong></TableCell>
                        <TableCell>{props.val.accountno}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>Disbursement</strong></TableCell>
                        <TableCell>{props.val.disburse}</TableCell>
                    </TableRow>
                   
                    <TableRow>
                        <TableCell><strong>IFSC Code</strong></TableCell>
                        <TableCell>{props.val.ifsc}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>Income</strong></TableCell>
                        <TableCell>{props.val.income}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>Loan Type</strong></TableCell>
                        <TableCell>{props.val.loantype}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>Payment</strong></TableCell>
                        <TableCell>{props.val.payment}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>Purpose</strong></TableCell>
                        <TableCell>{props.val.purpose}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>Tenure</strong></TableCell>
                        <TableCell>{props.val.tenure}</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </div>
    )
}

