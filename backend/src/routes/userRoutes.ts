import Router from 'express'
import { checkUserDetails, initiate_password_reset, loginUser, registerUser, resetPassword } from '../controllers/userControllers'
import { verifyToken } from '../middleware/tokenVerify'


const user_router = Router()

user_router.post('/register', registerUser)
user_router.post('/login', loginUser)
user_router.get('/check_user_details', verifyToken, checkUserDetails)
user_router.post('/requestPassword', initiate_password_reset)
user_router.post('/resetPassword', resetPassword)


export default user_router