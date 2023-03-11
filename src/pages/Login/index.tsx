import { useEffect } from 'react'
import { Header } from '../../components/Header'
import { LoginForm } from '../../components/Forms/LoginForm'
import { useNavigate } from 'react-router-dom'
import { isLogged } from '../../scripts/localStorage'
import { StyledLoginPage } from './styles'

export const Login = () =>{
    const navigation = useNavigate()

    useEffect(() => {
        if (isLogged()) {
         navigation(-1);
        }
    }, [])

    return(
        <StyledLoginPage>
            <Header/>
            <h1>Login</h1>
            <p>
                Agora é só preencher os dados e dividir sua conta!
            </p>
            <LoginForm/>
        </StyledLoginPage>
    )
}