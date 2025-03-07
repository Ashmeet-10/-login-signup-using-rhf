import { Box } from '@mui/material'
import './sign-up.css'
import img from '../../assets/Imgs.png'
import SignUpForm from '../form/sign-up/sign-up-form'

const SignUp = () => {
  return (
    <Box className='parent-container'>
      <Box className='container'>
        <Box className='left'>
          <Box className='heading-container'>
            <p className='heading'>Social media shared today, tomorrow or</p>
            <p className='heading'>by location</p>
          </Box>
          <Box className='img-box'>
            <img src={img} className='img' alt='' />
          </Box>
          <Box className='dots'>
            <Box className='dot'>.</Box>
            <Box className='dot'>.</Box>
            <Box className='dot'>.</Box>
          </Box>
        </Box>
        <Box className='right'>
          <SignUpForm />
        </Box>
      </Box>
    </Box>
  )
}

export default SignUp
