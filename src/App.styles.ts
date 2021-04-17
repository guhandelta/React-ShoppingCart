import styled from 'styled-components';
import { IconButton } from '@material-ui/core'

export const Wrapper = styled.div`
    margin: 2.5em;
`

export const StyledButton = styled(IconButton)`
    position: fixed;
    z-index: 100;
    right: 1.25rem;
    top: 1.25rem;
`;