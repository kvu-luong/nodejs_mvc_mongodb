const User = require('../model/user');

class AuthController {
    static registration = async (req, res) => {
        const user = new User(req.body);
        // console.log(user);return;
        try{
            await user.save();
            res.status(200).json({
                status: 200,
                message: 'Successfully Registered',
                userData: user
            })
        } catch (error) {
            res.status(400).json({
                status: 400,
                message: error.message
            })
        }
    }

    static signIn = async (req, res) => {
        try{
            const { email, password } = req.body;
            const user = await User.findByCredentials(email, password);

            const token = await user.generateAuthToken();
                res.status(200).json({
                    status: 200,
                    message: 'Successfully Signin',
                    data: {
                        userData: user,
                        token
                    }
                })
        } catch (error) {
            res.status(400).json({
                status: 400,
                message: error.message
            })
        }
    }
}

module.exports = AuthController;