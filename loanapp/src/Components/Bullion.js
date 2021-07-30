import { CardContent } from '@material-ui/core'
import { Card } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import gold from '../Images/goldimg.jpg'
import silver from '../Images/silverimg.jpg'
import platinum from '../Images/platinumimg.jpg'
import axios from 'axios'
export default function Bullion() {
    const [golds, setGold] = useState()
    const [silvers, setSilver] = useState()
    const [plat, setPlat] = useState()
    var g = 0;
    var rate = 0;
    const [rates, setRates] = useState()
    useEffect(() => {
        axios.get("https://metals-api.com/api/latest?access_key=plxo8yf952v2s566f787gq4puq80ycbr731tf74wvn4z4rjo0xe7m75o29sr").then(res => res.data).then((data) => {
            // rate=data.rates.INR;
            console.log(data.rates);

        })
        setGold(g)
        setRates(rate)
    }, [])
    console.log(rate)
    console.log(rates)
    var goldp = 1828 * 2.478;
    var silverp = 25.57 * 21.02;
    var platinump = 1055.880 * 2.412;

    var today = new Date();
    return (
        <div>
            <div>
                <p class="marquee">
                    <span id="dtText">{today.toString()}</span>
                </p>
                <Card id="c1">
                    <label>GOLD</label>
                    <CardContent>
                        <img src={gold} className="image" />
                    </CardContent>
                    <label class="l">₹ {goldp} (8-grams) </label>
                </Card>
                <Card id="c2">
                    <label>SILVER</label>
                    <CardContent>
                        <img src={silver} className="image" />

                    </CardContent>
                    <label class="l">₹ {silverp} (1-gram)</label>
                </Card>
                <Card id="c3">
                    <label>PLATINUM</label>
                    <CardContent>
                        <img src={platinum} className="image" />

                    </CardContent>
                    <label class="l">₹ {platinump} (8- grams)</label>
                </Card>
            </div>
        </div>
    )
}
