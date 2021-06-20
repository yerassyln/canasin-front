import React from 'react'
import styled from 'styled-components'
import {
    Link
  } from "react-router-dom";
export const NavbarLink = ({index,children,url})=>{
    return (
        <LinkContainer key={index}>
            <StyledLink to={url}>{children}</StyledLink>
        </LinkContainer>
    )
}
const StyledLink = styled(Link)`
    font-size: 18px;
    padding:0.5rem 1rem; 
    text-decoration:none;
    display: inline-block;
`
const LinkContainer = styled.li`
    margin: 0; list-style-type: none;
    padding: 0;
    &:hover {
    border-bottom:1px solid green;
  }
`