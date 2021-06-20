import React, { useState }  from 'react';
import styled from 'styled-components';

export const HamburgerMenuIcon = () => {
    const [opened, setOpened] = useState(false);

    return (
        <StyledContainer  onClick={() => setOpened(!opened)}>
            <StyledLine />
            <StyledLine />
            <StyledLine />
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
        display: none;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        margin-top: 15px;
`;

const StyledLine = styled.div`
    height: 3.64px;
    background-color: #333;
    width: 30px;
    margin-top: 4.55px;
    
`;
