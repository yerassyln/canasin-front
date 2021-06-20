import React from 'react'
import styled from 'styled-components'
import { Arrow } from '../../main-swiper/atoms/arrow'
import { HamburgerMenuIcon } from '../atoms/hamburger-icon'
import { Logo } from '../atoms/Logo'
import { MenuList } from '../constant-data/menu-list'
import { LinkWithTitle } from '../molecules/link-with-title'

export const Navbar = ()=>{
   
    return(
        <NavbarItems>
            <Logo/>
            <HamburgerMenuIcon/>
            <NavMenu>
            {MenuList.map((item,index)=>{
                return(
                    <LinkWithTitle url={item.url} index={index}>{item.title}</LinkWithTitle>
                )}
            )}
            </NavMenu>
        </NavbarItems>
    )
}

const NavMenu = styled.div`

    display: grid;
    grid-template-columns: repeat(10,auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 100%;
    justify-content: end;
    margin-right: 1rem;
    @media (max-width: 768px) {
        display: none;
    }
`
const NavbarItems = styled.div`
    background-color: #ffffff;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
`