import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as HiIcons from 'react-icons/hi'
import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'
import * as IoIcons from 'react-icons/io'
import * as GrIcons from 'react-icons/gr'
import * as VscIcons from 'react-icons/vsc'
import * as FcIcons from 'react-icons/fc'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
export const SideBarData=[
    {
        title: 'KYC Verification',
        path: '/kyc',
        icon: <HiIcons.HiDocument style={{color:'yellow',fontSize:25}}/>,
        iconClosed: <AiIcons.AiOutlineDown style={{color:'yellow',fontSize:25}}/>,
        iconOpened: <IoIcons.IoIosArrowUp style={{color:'yellow',fontSize:25}}/>,
        submenu: [{
            title: 'KYC General Guidelines',
            path: '/kyc/guidelines',
            icon: <AiIcons.AiTwotoneFileText style={{color:'F1C40F ',fontSize:25}}/>
        },
        {
            title: 'KYC Verification',
            path: '/kyc/verify',
            icon: <GrIcons.GrDocumentVerified style={{color:'F1C40F ',fontSize:25}}/>
        },
        {
            title: 'KYC Document Preview',
            path: '/kyc/preview',
            icon: <VscIcons.VscPreview style={{color:'F1C40F',fontSize:25}}/>
        }
        ]
    },
    {
        title: 'Apply Gold Loan',
        path: '/loan',
        icon: <GiIcons.GiGoldBar style={{color:'yellow',fontSize:25}}/>,
        iconClosed: <AiIcons.AiOutlineDown style={{color:'yellow',fontSize:25}}/>,
        iconOpened: <IoIcons.IoIosArrowUp style={{color:'yellow',fontSize:25}}/>,
        submenu: [{
            title: 'Gold Loan Form',
            path: '/loan/form',
            icon: <HiIcons.HiDocument style={{color:'F1C40F',fontSize:25}}/>
        },
        {
            title: 'Gold Loan Eligibility Calculator',
            path: '/loan/eliCalc',
            icon: <GiIcons.GiScales style={{color:'#F1C40F ',fontSize:25}}/>
        },
        {
            title: 'Gold Loan EMI Calculator',
            path: '/loan/emiCalc',
            icon: <IoIcons.IoMdCalculator style={{color:'#F1C40F ',fontSize:25}}/>
        },
        {
            title: 'Gold Loan Preview',
            path: '/loan/preview',
            icon: <FcIcons.FcSalesPerformance style={{color:'#F1C40F ',fontSize:25}}/>
        }
        ]
    },
    {
        path:'/bullionRates',
        title:'Bullion Rates',
        icon:<TrendingUpIcon  style={{color:'yellow',fontSize:25}}/>
    },
    {
        path:'/signout',
        title:'SignOut',
        icon:<FaIcons.FaSignOutAlt style={{color:'yellow',fontSize:25}}/>
    }
]
