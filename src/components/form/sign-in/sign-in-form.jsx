import { Box, Button, MenuItem, Select, TextField } from '@mui/material'
import './sign-in-form.css'
import img from '../../../assets/Logo.png'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import signInSchema from '../../../lib/schema/sign-in-schema'

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(signInSchema),
  })
  const navigate = useNavigate()
  const [userType, setUserType] = useState('user')

  const onSubmit = (data) => {
    // const userDetails = JSON.parse(localStorage.getItem(email))
    // console.log(userDetails)
    // if (userDetails) {
    //   if (userDetails.password === password) {
    //     localStorage.setItem('user', JSON.stringify(email))
    //     navigate('/')
    //   } else alert('wrong password')
    // }
    // localStorage.setItem('user', JSON.stringify(data.email))
    let users = []
    if (data.usertype === 'user') users = JSON.parse(localStorage.getItem('users'))
    else users = JSON.parse(localStorage.getItem('vendors'))
    if(!users){
      console.log('User does not exist')
      return;
    }
    const user = users?.filter((user) => user.email === data.email)
    if(!user){
      console.log('User does not exist')
      return;
    }
    if(user[0].password !== data.password){
      console.log('Wrong password')
      return
    }
    localStorage.setItem('user', JSON.stringify(data.email))
    reset()
    navigate('/')
  }

  return (
    <Box className='form'>
      <Box>
        <img src={img} alt='' />
      </Box>
      <Box>
        <Box className='form-heading'>
          <h2>Create account</h2>
          <p>For business, band or celebrity</p>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box className='inputs-container'>
            <Box className='fields'>
              <Box className='input-field'>
                <label htmlFor='email'>Email</label>
                <TextField
                  {...register('email')}
                  className='email'
                  id='email'
                  variant='outlined'
                  type='email'
                  error={errors.email}
                  helperText={errors?.email?.message}
                />
              </Box>
            </Box>

            <Box className='fields'>
              <Box className='input-field'>
                <label htmlFor='password'>Password</label>
                <TextField
                  {...register('password')}
                  className='password'
                  id='password'
                  variant='outlined'
                  type='password'
                  error={errors.password}
                  helperText={errors?.password?.message}
                />
              </Box>
            </Box>

            <Box className='fields'>
              <Box className='input-field'>
                <label htmlFor='usertype'>User type</label>
                <Select
                  {...register('usertype')}
                  id='usertype'
                  value={userType}
                  label='Usertype'
                  variant='outlined'
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <MenuItem value='user'>User</MenuItem>
                  <MenuItem value='vendor'>Vendor</MenuItem>
                </Select>
              </Box>
            </Box>
          </Box>
          <Button type='submit' variant='contained'>
            Login
          </Button>
        </form>
      </Box>
      <Box></Box>
    </Box>
  )
}

export default SignInForm
