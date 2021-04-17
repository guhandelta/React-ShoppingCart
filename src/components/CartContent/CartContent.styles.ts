import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: 1px solid lightblue;
    padding-bottom: 1.125rem;

    div{
        flex: 1;
    }

    .information,
    .buttons{
        display: flex;
        justify-content: space-between;
    }

    img{
        max-width: 5em;
        object-fit: cover;
        margin-left: 2.5em;
    }
`