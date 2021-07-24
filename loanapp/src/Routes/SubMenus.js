import React,{useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
export default function SubMenus({item }) {
    const SideLink=styled(Link)`
    display:flex;
    color:white;
    justify-content:space-between;
    align-items:center;
    padding:20px;
    list-style:none;
    height:30px;
    text-decoration:none;
    font-size:18px;
    font-style:italic;
    &:hover
    {
        background:#AF7AC5;
        border-left:4px solid #435467;
        border-right:4px solid #435467;
        cursor:pointer;
    }




    `
    const DropdownLink=styled(Link)`
    display:flex;
    color:white;
    align-items:center;
    height:25px;
    text-decoration:none;
    font-size:14px;
    font-style:italic;
    padding:5px;
    margin-left:20px;
    &:hover
    {
        background:#AF7AC5;
        border-left:4px solid #435467;
        border-right:4px solid #435467;
        cursor:pointer;
    }
    `
    const [subNav,setSubNav]=useState(false);
    const showSubNav=()=>
    {
        setSubNav(!subNav);
    }
    const SideBarLabel=styled.span`
    margin-left:10px;
    `
    return (
        <div>
            <SideLink to={item.path} onClick={item.submenu && showSubNav} >
                <div>
                    {item.icon}
                    <SideBarLabel>{item.title}</SideBarLabel>
                </div>
                <div>
                    {
                        item.submenu && subNav ? item.iconOpened : item.subNav ? item.iconClosed : null
                    }
                </div>
            </SideLink>
            {
                subNav && item.submenu.map((item,index)=>
                {
                    return(
                        <DropdownLink to={item.path} key={index}>
                            {item.icon}
                            <SideBarLabel>{item.title}</SideBarLabel>
                        </DropdownLink>
                    )
                })
            }
        </div>
    )
}
