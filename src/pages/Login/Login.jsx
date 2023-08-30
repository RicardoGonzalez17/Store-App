import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './login.css'
import { useUserLoginContext } from '../../hooks/useUserLoginContext'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const {sendData} = useUserLoginContext()
    const navigate = useNavigate()

    const sendDataLogin = ((data)=>{
        sendData(data)
        navigate('/')
    })

  return (
    <>
    <div className='container_login'>
    <h1>Inciar sesión</h1>
    <form onSubmit={handleSubmit(sendDataLogin)}>
        <div className='container_email'>
            <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#ffd803" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"/>
            </svg>
            <input 
            type="email" 
            placeholder='Email'
            id='email'
            name='email'
            {...register('email')}/>
        </div>
        <div className='container_password'>
            <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#ffd803" d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"/>
            </svg>
            <input 
            type="password" 
            placeholder='Password'
            id='password'
            name='password'
            {...register('password')}/>
        </div>
        <button type='submit'>Iniciar sesión</button>
    </form>
    </div>
    </>
  )
}

export default Login