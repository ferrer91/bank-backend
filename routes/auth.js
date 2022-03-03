/**?
 * User routes / Auth
 * host + /api/auth
 */

const {fieldValidator} = require('../middlewares/field-validator');
const { check } = require('express-validator');
//const express = require('express');
const { Router } = require('express');
const router = Router();
const {createUser, loginUser, tokenValidation} = require('../controllers/auth');

router.post(
    '/new',
    [
        check('name', 'The name is require').not().isEmpty(),
        check('email', 'The email is require').isEmail(),
        check('password', 'The password is require').isLength({min:6}),
        fieldValidator
    ],
     createUser
);

router.post(
    '/',
    [
        check('email', 'The email is require').isEmail(),
        check('password', 'The password is require').isLength({min:6}),
        fieldValidator

    ],
     loginUser
); 

router.get('/renew', tokenValidation);


module.exports = router;