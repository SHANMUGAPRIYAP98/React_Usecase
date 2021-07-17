import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
export default function SubMenus({item}) {
    const SideLink=styled(Link)`
    display:flex,
    color:white
    `
    const SideBarLabel=styled.span`
    display:flex,
    color:white
    `
    return (
        <div>
            <SideLink to={item.path} >
                <div>
                    {item.icon}
                    <SideBarLabel>{item.title}</SideBarLabel>
                </div>
            </SideLink>
        </div>
    )
}
