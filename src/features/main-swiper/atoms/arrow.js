import React from 'react';
import styled, { css } from 'styled-components'
export const Arrow = ({direction}) => (
    
    <StyledArrow direction={direction}/>
    
)
const StyledArrow = styled.button`
    width: 30px;
    height: 0;
    padding-bottom: 30px;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background: #333;
    position: relative;
    border: none;
    cursor:pointer;
    
    &:before {
        content: '';
        display: block;
        margin: -10px 0 0 -5px;
        border-right: solid 10px #FFF;
        ${props => props.direction === 'right' && css`
            border-left: solid 10px #FFF;
            border-right: none;
            margin-left:-3px;
        `}
        border-top: solid 10px transparent;
        border-bottom: solid 10px transparent;
        position: absolute;
        top: 50%;
        left: 50%;
    }
`