import { Router } from 'express';
import { registerUser , loginUser } from '../controllers/userController.js'; 
import validateRegisterInput from '../middleware/validateInput.js';

const router = Router();

// Register Route
router.post('/register', validateRegisterInput, registerUser);

// Login Route
router.post('/login', loginUser);

export default router;




