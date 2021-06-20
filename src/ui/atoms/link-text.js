import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const LinkText = styled(Link)`
    color: #333;
    font-size: 18px;
    padding: 0.5rem 1rem;
    text-decoration: none;
    display: inline-block;
    font-family: 'Play', sans-serif;
    ${({ styles }) => styles};
    /* Кастомные стили если надо перезаписать существующие стили */
`;
