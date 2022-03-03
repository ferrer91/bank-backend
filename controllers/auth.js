const { response } = require('express');
const User = require('../models/user');


const createUser = async (req, res = response) => {

     const {name, email, password} = req.body;
    
     try{
        const user = new User(req.body);
        await user.save();

         res.status(201).json({
            "ok":true,
            msg: 'signin',
            name,
            email, 
            password
    })

    }catch(error){
        res.status(500).json({
            ok: false,
            msg: 'Internal error'
        })
    }  

    res.status(201).json({
        ok: true,
        msg: 'registro',
        name,
        email,
        password
    })
    
}

const loginUser =  (req, res = response) => {

    const {email, password} = req.body;     

    res.json({
        "ok":true,
        msg: 'login',
        email,
        password
    })
}

const tokenValidation =  (req, res = response) => {


    res.json({
        "ok":true,
        msg: 'renew'

    })
}


module.exports = {
    createUser,
    loginUser,
    tokenValidation
}