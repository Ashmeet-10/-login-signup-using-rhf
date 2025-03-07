import { Box } from '@mui/material'
import { Link } from 'react-router'
import ProductForm from '../form/product/product-form'

const Home = () => {
  // const currentUserEmail = JSON.parse(localStorage.getItem('user'))
  // const currentUser = JSON.parse(localStorage.getItem(currentUserEmail))

  const loggedInEmail = JSON.parse(localStorage.getItem('user'))
  const users = JSON.parse(localStorage.getItem('users'))
  const vendors = JSON.parse(localStorage.getItem('vendors'))
  let user, currentUser, userType
  user = users?.filter((u) => u.email === loggedInEmail)
  if (user) userType = 'user'
  else userType = 'vendor'

  if (!user) {
    user = vendors?.filter((v) => v.email === loggedInEmail)
  }
  currentUser = user[0]
  console.log(userType)

  return (
    <Box>
      <h1>
        Welcome {currentUser.firstname} {currentUser.lastname}
      </h1>
      <Box>
        <Link to='/sign-in'>Sign-in</Link>
      </Box>
      <Box>
        <Link to='/sign-up'>Sign-up</Link>
      </Box>
      <Box>
        {userType === 'vendor' && <ProductForm />}
      </Box>
    </Box>
  )
}

export default Home
