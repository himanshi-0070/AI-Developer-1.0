import { Router } from 'express';
import * as priMiddleware from '../middleware/auth.middleware.js';
import { body } from 'express-validator';
import * as userController from '../controllers/user.controller.js';

const router = Router();



router.post('/register',
    body('email').isEmail().withMessage('Email must be a valid email address'),
    body('password').isLength({ min: 3 }).withMessage('Password must be at least 3 characters long'),
    userController.createUserController);

router.post('/login',
    body('email').isEmail().withMessage('Email must be a valid email address'),
    body('password').isLength({ min: 3 }).withMessage('Password must be at least 3 characters long'),
    userController.loginController);

router.get('/profile', priMiddleware.authUser, userController.profileController);


router.get('/logout', priMiddleware.authUser, userController.logoutController);


router.get('/all', priMiddleware.authUser, userController.getAllUsersController);


export default router;


