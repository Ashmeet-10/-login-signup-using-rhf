import {
  Box,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Select,
  MenuItem,
} from '@mui/material'
import './sign-up-form.css'
import img from '../../../assets/Logo.png'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import signUpSchema from '../../../lib/schema/sign-up-schema.js'

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(signUpSchema),
  })
  console.log(errors)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [userType, setUserType] = useState('user')

  const navigate = useNavigate()

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev)
  }

  const onSubmit = (data) => {
    try {
      if(data.usertype === 'user'){
        const existingUsers = JSON.parse(localStorage.getItem('users')) || []
        existingUsers.push(data)
        localStorage.setItem('users', JSON.stringify(existingUsers))
      }
      else{
        const existingUsers = JSON.parse(localStorage.getItem('vendors')) || []
        existingUsers.push(data)
        localStorage.setItem('vendors', JSON.stringify(existingUsers))
      }
      navigate('/sign-in')
    } catch (error) {
      alert('There was a problem saving your information. Please try again.')
      console.error('Storage error:', error)
    }
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
                <label htmlFor='first-name'>First Name</label>
                <TextField
                  {...register('firstname')}
                  className={`first-name ${errors.firstName ? 'error' : ''}`}
                  id='first-name'
                  variant='outlined'
                  error={errors.firstname}
                  helperText={errors?.firstname?.message}
                />
              </Box>
              <Box className='input-field'>
                <label htmlFor='last-name'>Last Name</label>
                <TextField
                  {...register('lastname')}
                  className={`last-name ${errors.lastName ? 'error' : ''}`}
                  id='last-name'
                  variant='outlined'
                  error={errors.lastname}
                  helperText={errors?.lastname?.message}
                />
              </Box>
            </Box>
            <Box className='fields'>
              <Box className='input-field'>
                <label htmlFor='email'>Email</label>
                <TextField
                  {...register('email')}
                  className={`email ${errors.email ? 'error' : ''}`}
                  id='email'
                  variant='outlined'
                  type='email'
                  error={errors.email}
                  helperText={errors?.email?.message}
                />
              </Box>
              <Box className='input-field'>
                <label htmlFor='dob'>Date of birth</label>
                <TextField
                  {...register('dob')}
                  className={`dob ${errors.dob ? 'error' : ''}`}
                  id='dob'
                  variant='outlined'
                  type='date'
                  error={!!errors.dob}
                  helperText={errors?.dob?.message}
                />
              </Box>
            </Box>

            <Box className='fields'>
              <Box className='input-field'>
                <label htmlFor='password'>Password</label>
                <TextField
                  {...register('password')}
                  className={`password ${errors.password ? 'error' : ''}`}
                  id='password'
                  variant='outlined'
                  type={showPassword ? 'text' : 'password'}
                  error={errors.password}
                  helperText={errors?.password?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={handleTogglePasswordVisibility}
                          edge='end'
                        >
                          {showPassword ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box className='input-field'>
                <label htmlFor='confirmpassword'>Confirm password</label>
                <TextField
                  {...register('confirmPassword')}
                  className={`confirmpassword ${
                    errors.confirmPassword ? 'error' : ''
                  }`}
                  id='confirmpassword'
                  variant='outlined'
                  type={showConfirmPassword ? 'text' : 'password'}
                  error={errors.confirmPassword}
                  helperText={errors?.confirmPassword?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle confirm password visibility'
                          onClick={handleToggleConfirmPasswordVisibility}
                          edge='end'
                        >
                          {showConfirmPassword ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
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
          <Button
            type='submit'
            variant='contained'
            disabled={isSubmitting}
            className='submit-button'
          >
            Create account
          </Button>
        </form>
      </Box>
      <Box></Box>
    </Box>
  )
}

export default SignUpForm
