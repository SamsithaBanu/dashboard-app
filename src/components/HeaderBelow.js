import React from 'react';
import { HeaderBelowStyled } from '../styles/HeaderBelowStyled';
import logo from '../SidebarIcons/HeaderIcons/Logo.png'
import Dropdown from './Dropdown';

const HeaderBelow =()=>{
    return(
        <HeaderBelowStyled>
            <div className='headerBelowWrapper'>
                <div className='leftHeader'>
                    <div className='iconicWrapper'>
                        <img src={logo} alt='icon' style={{width:'30px', height:'30px'}}/>
                    </div>
                    <div className='nameWrapper'>
                        <div className='name'>Hello, Rahul</div>
                        <div className='company'>ORUE PVT. LTD.</div>
                    </div>
                    <div className='customTag'>
                        CUSTOMER
                    </div>
                </div>
                <div className='dropdownWrapper'>
                    <Dropdown />
                </div>
            </div>
        </HeaderBelowStyled>
    )
};

export default HeaderBelow;