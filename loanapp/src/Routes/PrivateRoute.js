import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default function PrivateRoute({children,...rest}) {
    const auth={
        isAuthenticated:false,
        authenticated()
        {
            this.isAuthenticated=true;
        }
    }
    return (
        <div>
            {
                console.log("hellllo"+auth.isAuthenticated)
            }
            <Route {...rest} render={({location})=>{return auth.isAuthenticated === true ? children : <Redirect to={{
                pathname:'/login',
                state:{from:location}
            }}></Redirect>}}></Route>
        </div>
    )
}
