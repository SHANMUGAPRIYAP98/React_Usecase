import React,{useState} from 'react'
import { withStyles } from '@material-ui/styles'
import Slider from '@material-ui/core/Slider'
import  Typography  from '@material-ui/core/Typography'
import { Table,TableRow,TableCell } from '@material-ui/core'
import EMIDetails from './EMIDetails'
import {Pie} from 'react-chartjs-2'
import styles from '../CSS/Styling.css'
import marker from './SliderMarks'
const PrettoSlider = withStyles({
    root: {
      color: '#5B2C6F ',
      height: 10,
    },
    thumb: {
      height: 25,
      width: 25,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -9,
      marginLeft: -9,
    },
    track: {
      height: 10,
      borderRadius: 4,
    },
    rail: {
      height: 10,
      borderRadius: 4,
    },
  })(Slider);
export default function LoanEMI() {
 
    const [principal,setPrincipal]=useState(2000000);
    const [inte,setInte]=useState(5);
    const [duration,setDuration]=useState(60)
    const maxVal=6000000;
    const inteMax=20;
    const durMax=120;
    const int=inte/1200;
    const emi= duration ?Math.round(principal*int/(1-(Math.pow(1/(1+int),duration)))):0;
    const total=duration*emi;
    const amtCredited=Math.round((emi/int) * (1- Math.pow((1+int),(-duration))));
    const totAmtOfInt=Math.round(total-amtCredited);
    const values = {
      labels:['Total Interest','Total Amount'],
      datasets:[{
        data:[totAmtOfInt,principal],
        backgroundColor:['#2BAA6E ','#972BAA'],
        color:['#CE4D20','#CE4D20']
      }]
     }
    return (
        <div >
            <div id="emibox">
                <h2 style={{marginLeft:550,width:550,color:'#5F1950'}}>EMI CALCULATOR</h2>
                <div className="em">
                    <Typography gutterBottom><strong style={{color:'#CE4D20'}}>Loan Amount</strong></Typography>
                    <PrettoSlider marks={marker.principle} value={principal} onChange={(event,amt)=>{setPrincipal(amt)}} defaultValue={principal} max={maxVal} />
                </div>
                <div className="em">
                    <Typography gutterBottom><strong style={{color:'#CE4D20'}}>Interest</strong></Typography>
                    <PrettoSlider marks={marker.interest} value={inte} onChange={(event,ints)=>{setInte(ints)}} defaultValue={inte} max={inteMax} />
                </div>
                <div className="em">
                    <Typography gutterBottom><strong style={{color:'#CE4D20'}}>Duration</strong></Typography>
                    <PrettoSlider marks={marker.tenure} value={duration} onChange={(event,dur)=>{setDuration(dur)}} defaultValue={duration} max={durMax} />
                </div>
                <div>
                  <Table id="emi">
                    <TableRow>
                      <TableCell>
                        <EMIDetails pamt={principal} intr={inte} period={duration} emi={emi} intamt={totAmtOfInt} tamt={total}/>
                      </TableCell>
                      <TableCell>
                      <Pie data={values} width={10} height={50}/>
                      </TableCell>
                    </TableRow>
                  </Table>
                </div>
            </div>
        </div>
    )
}
