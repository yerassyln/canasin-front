import styled from 'styled-components';

export const ElementTitle = styled.h4`
    color: #000;
    font-size: 24px;
    font-family: 'Play', sans-serif;
    ${({ styles }) => styles};
    /* Кастомные стили если надо перезаписать существующие стили */
`;
