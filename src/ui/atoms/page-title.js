import styled from 'styled-components';

export const PageTitle = styled.h1`
    color: #fff;
    font-size: 28px;
    ${({ styles }) => styles};
    font-family: 'Play', sans-serif;
    font-family: 'Jura';
    /* Кастомные стили если надо перезаписать существующие стили */
`;
