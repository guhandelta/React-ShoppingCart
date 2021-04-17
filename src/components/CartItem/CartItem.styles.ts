import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 0.0625em solid lightblue;
    border-radius: 1.25em;
    height: 100%;

    button {
        border-radius: 0 0 1.25rem 1.25rem
    }

    img{
        max-height: 250px;
        object-fit: cover;
        border-radius: 1.25rem 1.25rem 0 0;
    }

    div{
        font-family: Arial, Helvetica, sans-serif;
        padding: 1rem;
        height: 100%;
    }
`