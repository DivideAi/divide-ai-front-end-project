import styled from 'styled-components'

export const StyledLoginPage = styled.main`
    dislplay: flex;
    h1{
        text-align-last: center;
        padding-bottom: 12px;
    }

    p{
        display:block;
        width: 268px;
        text-align-last: center;
        margin: 0 auto;
    }

    @media(min-width: 640px){
        border: 2px solid #3295AD;
        border-radius: 10px;
        width: 60%;
        margin: 1rem auto;
    }
`