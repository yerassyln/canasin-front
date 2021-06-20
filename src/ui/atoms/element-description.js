import styled from 'styled-components';

export const ElementDescription = styled.p`
    color: #000;
    font-size: 18px;
    ${({ styles }) => styles};
    font-family: 'Play', sans-serif;
    /* Кастомные стили если надо перезаписать существующие стили */
`;
