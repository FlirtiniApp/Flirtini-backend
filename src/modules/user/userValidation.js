const { body } = require('express-validator');

const registerValidation = [
    body('firstName')
        .trim()
        .notEmpty().withMessage('First name is required')
        .isLength({ min: 1, max: 30 }).withMessage('First name must be 1-30 characters'),

    body('lastName')
        .trim()
        .notEmpty().withMessage('Last name is required')
        .isLength({ min: 1, max: 30 }).withMessage('Last name must be 1-30 characters'),

    body('login')
        .trim()
        .notEmpty().withMessage('Login is required')
        .isLength({ min: 4, max: 30 }).withMessage('Login must be 4-20 characters'),

    body('password')
        .trim()
        .notEmpty().withMessage('Password is required')
        .custom((value) => {
            if (value.length < 8) {
                throw new Error('Password must be at least 8 characters long');
            }
            return true;
        })
        .custom((value) => {
            if (!/[A-Z]/.test(value)) {
                throw new Error('Password must contain at least one uppercase letter');
            }
            return true;
        })
        .custom((value) => {
            if (!/[a-z]/.test(value)) {
                throw new Error('Password must contain at least one lowercase letter');
            }
            return true;
        })
        .custom((value) => {
            if (!/[0-9]/.test(value)) {
                throw new Error('Password must contain at least one number');
            }
            return true;
        })
        .custom((value) => {
            if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
                throw new Error('Password must contain at least one special character');
            }
            return true;
        }),

    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Must be a valid email'),

    body('birthDate')
        .trim()
        .notEmpty().withMessage('birthDate is required')
        .custom(value => {
            const birthDate = new Date(value);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
            if (age < 18) throw new Error('You must be at least 18 years old');
            return true;
        }),

    body('phone')
        .optional()
        .matches(/^\+?[0-9\s\-]{9,12}$/).withMessage('Invalid phone number')
];

const loginValidation = [
    body('login')
        .trim()
        .notEmpty().withMessage('Login is required'),

    body('password')
        .trim()
        .notEmpty().withMessage('Password is required')
]

module.exports = { registerValidation, loginValidation };