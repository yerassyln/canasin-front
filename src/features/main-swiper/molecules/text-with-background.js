import React from 'react';
import styled from 'styled-components';
import { PageTitle } from '../../../ui';
export const TextWithBackground = (children) => (
    <StyledContainer>
        <SwiperTitle>
            <SwiperText>{children}</SwiperText>
        </SwiperTitle>
    </StyledContainer>
)

const SwiperTitle = styled.div`
    text-align: center;
    margin: auto;
    max-width: 60vw;
`
const StyledContainer = styled.div`
    display: block;
`
const SwiperText = styled(PageTitle)`
    background:none repeat scroll 0 0 rgba(0,0,0,0.5);
    line-height: 3.5rem;
    padding: 0.5rem;
    user-select: none;
    `