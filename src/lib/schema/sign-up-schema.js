import { z } from 'zod'

const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
)

const signUpSchema = z
  .object({
    firstname: z
      .string()
      .min(2, 'First name must be atleast 2 characters')
      .max(25, 'First name must be less than 25 characters'),
    lastname: z
      .string()
      .min(2, 'Last name must be atleast 2 characters')
      .max(25, 'Last name must be less than 25 characters'),
    email: z.string().email().max(25, 'Email must be less than 25 characters'),
    dob: z.string(),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(16, 'Password must be less than 16 characters')
      .regex(passwordValidation, {
        message: 'Your password is not strong',
      }),
    confirmPassword: z.string(),
    usertype: z.string()
  })
  .refine((data) => {console.log("-----",data); return data.password === data.confirmPassword}, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  })

export default signUpSchema
