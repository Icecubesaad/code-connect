const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

// user registeration implementation

const register = async (req, res) => {
  try {
    const {email,password,username} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(password, salt);
    const profilePicture = req.file.path;
    const user = new User({
      email,
      password: hashed_password,
      username,
      // profilePicture,
    });

    // generate a refreshToken

    const refreshToken = jwt.sign(
      { user: { id: user.id } },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "7d" }
    );
    // updating the user objecet with the refresh token
    user.refreshToken = refreshToken;
    await user.save();  // save the user to the database
    res.status(201).json({ msg: "User registered successfully",success:true });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({msg:"Server error",success:false});
  }
};


// user login implementation


const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials',success:false });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials',success:false });
    }
    // access token generator 
    const accessToken = jwt.sign(
      { user: { id: user.id } },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );
    // refresh token generator
    const refreshToken = jwt.sign(
      { user: { id: user.id } },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: '7d' }
    );
    // updating the previous user with new refresh token after logging in
    user.refreshToken = refreshToken;
    await user.save();
    // setup the cookies with the accessToken(short-lived token)
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 15 * 60 * 1000 // 15 minutes
    });
    // setup the cookies with the refreshToken(long-loved token)
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 15 * 60 * 1000 // 15 minutes
    });

    res.json({ token:accessToken,success:true });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({msg:'Server error',success:false});
  }
};

// token refresh implementation

const refreshToken = async(req,res)=>{
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

    const user = await User.findById(decoded.user.id);
    if (!user) {
      return res.status(401).json({ msg: 'User not found' });
    }

    if (user.refreshToken !== refreshToken) {
      return res.status(403).json({ msg: 'Invalid refresh token' });
    }
    // if refresh token is valid, generate a new accessToken(short-lived Token)
    const newAccessToken = jwt.sign(
      { user: { id: user.id } },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );
    // setup the cookies with new accessToken
    res.cookie('accessToken', newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 15 * 60 * 1000 // 15 minutes
    });

    res.json({ accessToken: newAccessToken });
  } catch (err) {
    console.error(err.message);
    res.status(403).json({ msg: 'Token is not valid' });
  }
}

// authorizing user implementation

const authorize = async (req, res) => {
  try {
    // using accessToken to authorize user
    
  } catch (error) {
    
  }
};

module.exports = {
  register,
  authorize,
  login
};
