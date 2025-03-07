import { z } from 'zod'

const productSchema = z
  .object({
    name: z
      .string()
      .min(3, 'Product name must be atleast 2 characters')
      .max(25, 'Product name must be less than 25 characters'),
    price: z.number().min(0),
    // image: z.string(),
    quantity: z.number().min(1, 'Product quantity must be atleast 1'),
    ratings: z.number().min(0, 'Product ratings must be atleast 0').max(5, 'Product ratings must be less than or equal to 5'),
  })

export default productSchema
