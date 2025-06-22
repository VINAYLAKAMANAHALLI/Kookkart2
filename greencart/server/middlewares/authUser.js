// import jwt from 'jsonwebtoken';

// const authUser = async (req, res, next)=>{
//     const {token} = req.cookies;

//     if(!token){
//         return res.json({ success: false, message: 'Not Authorized' });
//     }

//     try {
//         const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)
//         if(tokenDecode.id){
//             req.body.userId = tokenDecode.id;
//         }else{
//             return res.json({ success: false, message: 'Not Authorized' });
//         }
//         next();

//     } catch (error) {
//         res.json({ success: false, message: error.message });
//     }
// }

// export default authUser;



import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not Authorized' });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecode.id) {
      // ✅ Add user info to req object
      req.user = { _id: tokenDecode.id };
      next();
    } else {
      return res.status(401).json({ success: false, message: 'Not Authorized' });
    }

  } catch (error) {
    return res.status(401).json({ success: false, message: error.message });
  }
};

export default authUser;
