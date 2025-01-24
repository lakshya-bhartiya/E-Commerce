const User = require("./userModel");
const UserServices = {};

const bcrypt = require("bcrypt");

UserServices.registerUser = async (fullName, mobile, password) => {
    try {
      const hash = bcrypt.hashSync(password, 10)
      let newUser = await User.create({fullName, mobile, password: hash})
      return { status: "OK", data: newUser }
    } catch (err) {
      return { status: "ERR", data: null, error: err }
    }
  
  }

UserServices.getUserByEmail = async (email) => {
  try {
    const user = await User.find({ email })
    return { status: "OK", data: user, error: null }
  } catch (err) {
    console.log(err)
    return { status: "ERR", data: [], error: err }
  }

}



UserServices.findUserByEmailAndPassword = async (email, password) => {
  try {
    const user = await User.findOne({ email});
    if (user) {
      const isMatched = bcrypt.compareSync(password, user.password);
      if (isMatched) {
        return { status: "OK", data: user };
      } else {
        return { status: "ERR", msg: "Invalid password" };
      }
    } else {
      return { status: "ERR", msg: "User not found" };
    }
  } catch (err) {
    return { status: "ERR", error: err };
  }
};

//find by email
UserServices.findByEmail  = async(matchField) => {
  return User.findOne(...matchField)
}

//find all user
UserServices.findAllUser = async() =>{
  return User.find({})
}

//find deleted user
UserServices.findDeleted = async(id , updateField, )=>{
  return User.findByIdAndUpdate({_id:id}, {...updateField}, {new: true})
}


//update user
UserServices.updateUser = async (id, {name, email}) =>{

  try{
    return User.findByIdAndUpdate({_id:id}, {name, email})
  }catch(err){
    console.log(err)
  }

}

UserServices.findUser = async(id)=>{
  try{
    const user = await User.findById(id)
    console.log(user, "user")
    return user
  }catch(err){
    console.log(err)
  }
}


UserServices.verifyCurrentPasword = async(user, currentPassword) =>{
  try{
    return await bcrypt.compare(currentPassword, user.password);
  }catch(err){
    console.log(err)
  }
}


UserServices.hashPassword = async(password) => {
  try{
    return await bcrypt.hash(password, 10)
  }catch(err){
    console.log(err)
  }
}

module.exports = UserServices;