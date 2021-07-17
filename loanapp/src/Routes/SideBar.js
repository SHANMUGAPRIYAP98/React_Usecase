import React from 'react'
import styled from 'styled-components'
import SubMenus from './SubMenus';
export default function SideBar(props) {
    const SideBarNav = styled.nav`
    background-color:darkviolet;
    width:250px;
    height:500px;
    margin-top:1px;
    display:flex;
    position:fixed;
    justify-content:center;
    `;
    console.log(props.menus)
    return (
        <div>
          <SideBarNav>
             {
                //  menus.map((item,ind)=>
                //  {
                //      return(
                //          <SubMenus item={item} key={ind} ></SubMenus>
                //      )
                //  })
               
             }
          </SideBarNav>
        </div>
    )
}
