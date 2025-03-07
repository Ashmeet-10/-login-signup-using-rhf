import { z } from 'zod'

const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
)

const signInSchema = z
  .object({
    email: z.string().email().max(25, 'Email must be less than 25 characters'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(16, 'Password must be less than 16 characters')
      .regex(passwordValidation, {
        message: 'Your password is not strong',
      }),
    usertype: z.string(),
  })

export default signInSchema
