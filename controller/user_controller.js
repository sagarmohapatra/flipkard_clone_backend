
import User from "../model/user_Schima"
export const userSignup = async (request, responce) => {
    try {
        const exist = await User.findOne({ username: request.body.username })
        if (exist) {
            return responce.status(401).json({ message: "username already exist" })
        }

        // console.log(request.body);
        const user = request.body
        console.log(user);
        const newUser = new User(user)
        await newUser.save()
        return responce.status(200).json({ message: user })
    } catch (error) {
        // console.log(error, "error slove it");
        responce.status(500).json({ message: error.message })
    }
}

export const userlogin = async (request, responce) => {
    try {
        const username = request.body.username;
        const password = request.body.password;
        const user = await User.findOne({ username: username, password: password });
        if (user) {
            return responce.status(200).json({ data: user })
        } else {
            return responce.status(401).json("invalid login")
        }

    } catch (error) {
        responce.status(500).json({ message: error.message })
        // console.log(error);
    }
}
