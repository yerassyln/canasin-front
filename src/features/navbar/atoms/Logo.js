import React from 'react'
import styled from 'styled-components'
import LogoIcon from '../../../assets/images/logo/logo.png'

export const Logo = () => {
    return(
    <NavbarLogo>
        <img src={LogoIcon} alt="Logo" />
    </NavbarLogo>
    );
}

const NavbarLogo = styled.div`
    justify-self: start; 
    cursor: pointer;
    margin-left: 20px;
`