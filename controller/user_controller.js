import User from "../model/user_Schima"
const userSignup = async (request, responce) => {
    try {
        const exist = await User.findOne({ user: request.body.user })
        if (exist) {
            return responce.status(401).json({ message: "username already exist" })
        }

        // console.log(request.body);
        const user = request.body
        console.log(user);
        const newUser = new User(user)
        // console.log(newUser);
        await newUser.save()
        return responce.status(200).json({ message: user })
    } catch (error) {
        // console.log(error, "error slove it");
        responce.status(500).json({ message: error.message })
    }
}

export default userSignup