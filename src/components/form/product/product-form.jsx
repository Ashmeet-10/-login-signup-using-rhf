import {
  Box,
  Button,
  TextField
} from '@mui/material'
// import './sign-up-form.css'
import img from '../../../assets/Logo.png'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import productSchema from '../../../lib/schema/product-schema.js'

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(productSchema),
  })

  const onSubmit = (data) => {

  }

  return (
    <Box className='form'>
      <Box>
        <img src={img} alt='' />
      </Box>
      <Box>
        <Box className='form-heading'>
          <h2>Add  product</h2>
          <p>For business, band or celebrity</p>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box className='inputs-container'>
            <Box className='fields'>
              <Box className='input-field'>
                <label htmlFor='name'>Product name</label>
                <TextField
                  {...register('name')}
                  className={`name ${errors.firstName ? 'error' : ''}`}
                  id='name'
                  variant='outlined'
                  error={errors.name}
                  helperText={errors?.name?.message}
                />
              </Box>
              <Box className='input-field'>
                <label htmlFor='price'>Price</label>
                <TextField
                  {...register('price')}
                  className={`last-name ${errors.lastName ? 'error' : ''}`}
                  id='price'
                  variant='outlined'
                  error={errors.price}
                  helperText={errors?.price?.message}
                />
              </Box>
            </Box>
            <Box className='fields'>
              <Box className='input-field'>
                <label htmlFor='quantity'>Quantity</label>
                <TextField
                  {...register('quantity')}
                  className={`quantity ${errors.quantity ? 'error' : ''}`}
                  id='quantity'
                  variant='outlined'
                  error={errors.quantity}
                  helperText={errors?.quantity?.message}
                />
              </Box>
              <Box className='input-field'>
                <label htmlFor='ratings'>Ratings</label>
                <TextField
                  {...register('ratings')}
                  className={`ratings ${errors.ratings ? 'error' : ''}`}
                  id='ratings'
                  variant='outlined'
                  error={!!errors.ratings}
                  helperText={errors?.ratings?.message}
                />
              </Box>
            </Box>

            <Box className='fields'>
              <Box className='input-field'>
                <label htmlFor='quantity'>Image </label>
                <TextField
                  {...register('quantity')}
                  className={`quantity ${errors.quantity ? 'error' : ''}`}
                  id='quantity'
                  variant='outlined'
                  error={errors.quantity}
                  helperText={errors?.quantity?.message}
                />
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

export default ProductForm
