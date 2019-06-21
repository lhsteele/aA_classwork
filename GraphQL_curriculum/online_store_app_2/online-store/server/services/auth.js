const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const keys = require("../../config/keys");
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login')

// here we'll be taking in the `data` from our mutation
const register = async data => {
  debugger
  try {
    const { message, isValid } = validateRegisterInput(data);

    if (!isValid) {
      throw new Error(message);
    }

    const { name, email, password } = data;
    const existingUser = await User.findOne({email})

    if (existingUser) {
      throw new Error("This user already exists")
    } 
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User(
      {
        name,
        email,
        password: hashedPassword
      },
      err => {
        if (err) throw err
      }
    )
    user.save()
   
    const token = jwt.sign({id: user._id}, keys.secretOrKey)
    return { token, loggedIn: true, ...user._doc, password: null, id: user._id };

  } catch (err) {
    throw err;
  }
};

const logout = async id => {
  try {
    const user = await User.findById(id)

    if (!user) {
      throw new Error("This user doesn't exist")
    }

    return {
      token: "",
      loggedIn: false,
      ...user._doc
    }
  } catch(err) {
    throw err;
  }
}

const login = async data => {
  try {
    // use our other validator we wrote to validate this data
    const { message, isValid } = validateLoginInput(data);
    if (!isValid) {
      throw new Error(message);
    }
    const { name, email, password } = data;
    const user = await User.findOne({ email })
   
    if (!user) {
      throw new Error("This user doesn't exist")
    } 
    const isPassword = await bcrypt.compareSync(data.password, user.password) 
    if (isPassword) {
      const token = jwt.sign({ id: user._id }, keys.secretOrKey)
      return { token, loggedIn: true, ...user._doc, password: null };
    } else {
      throw new Error("Invalid password")
    }
  } catch (err) {
    throw err;
  }
};

const verifyUser = async token => {
  try {
    // we take in the token from our mutation
    // we decode the token using our secret password to get the
    // user's id
    const decoded = jwt.verify(token, keys.secretOrKey);
    const { id } = decoded;

    // then we try to use the User with the id we just decoded
    // making sure we await the response
    const loggedIn = await User.findById(id).then(user => {
      return user ? true : false;
    });

    return { loggedIn };
  } catch (err) {
    return { loggedIn: false };
  }
};

module.exports = { register, logout, login, verifyUser };