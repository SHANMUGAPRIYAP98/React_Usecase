import React from 'react'
import styled from 'styled-components'
import { SideBarData } from './SideBarData';
import SubMenus from './SubMenus';
export default function SideBar({menus}) {
    const SideBarNav = styled.nav`
    background-color:darkviolet;
    width:270px;
    height:680px;
    margin-top:1px;
    display:flex;
    position:fixed;
    justify-content:center;
    `;
    const SidebarWrap = styled.div`
    width: 100%;
  `;
    return (
        <div>
          <SideBarNav>
            <SidebarWrap>
             {
              
              SideBarData.map((item,ind)=>
              {
                return(
                   <SubMenus item={item} key={ind} />
                )
              })
               
             }
             </SidebarWrap>
          </SideBarNav>
        </div>
    )
}
