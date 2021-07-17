import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as HiIcons from 'react-icons/hi'
import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'
import * as IoIcons from 'react-icons/io'
import * as GrIcons from 'react-icons/gr'
import * as VscIcons from 'react-icons/vsc'
import * as FcIcons from 'react-icons/fc'
import SideBar from './SideBar'
export default function SideBarData() {
    const menus = [
        {
            title: 'KYC Verification',
            path: '/kyc',
            icon: <HiIcons.HiDocument />,
            iconClosed: <AiIcons.AiOutlineDown />,
            iconOpened: <IoIcons.IoIosArrowUp />,
            submenu: [{
                title: 'KYC General Guidelines',
                path: '/kyc/guidelines',
                icon: <AiIcons.AiTwotoneFileText />
            },
            {
                title: 'KYC Verification',
                path: '/kyc/verify',
                icon: <GrIcons.GrDocumentVerified />
            },
            {
                title: 'KYC Document Preview',
                path: '/kyc/preview',
                icon: <VscIcons.VscPreview/>
            }
            ]
        },
        {
            title: 'Apply Gold Loan',
            path: '/loan',
            icon: <GiIcons.GiGoldBar />,
            iconClosed: <AiIcons.AiOutlineDown />,
            iconOpened: <IoIcons.IoIosArrowUp />,
            submenu: [{
                title: 'Gold Loan Form',
                path: '/loan/form',
                icon: <HiIcons.HiDocument />
            },
            {
                title: 'Gold Loan Eligibility Calculator',
                path: '/loan/eliCalc',
                icon: <GiIcons.GiScales />
            },
            {
                title: 'Gold Loan EMI Calculator',
                path: '/loan/emiCalc',
                icon: <IoIcons.IoMdCalculator/>
            },
            {
                title: 'Gold Loan Preview',
                path: '/loan/preview',
                icon: <FcIcons.FcSalesPerformance/>
            }
            ]
        }
    ]
    return (
        <div>
            <SideBar menus={menus}></SideBar>
        </div>
    )
}
