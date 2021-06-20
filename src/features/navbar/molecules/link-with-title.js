import styled from 'styled-components';
import { LinkText } from '../../../ui/atoms/link-text';
// import { LinkText } from '@ui/atoms/link-text';
export const LinkWithTitle = ({index,children,url}) =>(
    <StyledLi key={(index)}>
        <LinkText to={url}>{children}</LinkText>
        
    </StyledLi>
)
const StyledLi = styled.li`
    margin: 0; list-style-type: none;
    padding: 0;
    &:hover {
    border-bottom: 1px solid rgb(197,0,90);
    transition: all 0.2s ease-out;
    }
    ${({ styles }) => styles};
    /* Кастомные стили если надо перезаписать существующие стили */
`;
