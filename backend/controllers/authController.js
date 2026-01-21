const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
    try{
          const { name, email, password } = req.body;
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' })
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })
        // await user.save();
        res.status(201).json({message: "user created successfully"})
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Something went wrong"})}
    }
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({email});
        if(!existingUser){
            return res.status(404).json({message: "User not found"});
        }
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordCorrect){
            return res.status(400).json({message: "Invalid credentials"});
        }
        const token = jwt.sign(
            { id: existingUser._id },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        )
        res.status(200).json({token, message: "Login successful"}); 
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
}