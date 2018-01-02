const User = require(`../models/userModel`);
// const Archive = require(`../models/archiveModel`);

const userController = {};

userController.getUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ userName: req.body.user }).populate(`savedArticles`);
        console.log(`user found:`, user._id)
        res.locals.user = user;
        next();
    }catch(e){
        console.log(`error finding user:`,e)
    }
};

userController.createUser = async (req, res, next) => {
    // const mockUser = {
    //     firstName: `Mark`,
    //     password: `password`,
    //     lastName: `Romano`,
    //     userName: `kitters`,
    //     zip: `10092`,
    // }

    try {
        console.log(`USER`, req.body)
        const user = await User.create(req.body);
        res.locals.data = { user };
        next();
    } catch (e) {
        res.json(e)
    }
};

userController.verifyUser = async (req, res, next) => {
    
    const { userName, password } = req.body;    
    console.log(`userName:${userName}`)
    console.log(`password:${password}`)
    try {
        const user = await User.findOne({ userName }).populate(`savedArticles`);
        user.comparePassword(password, (err, isMatch) => {
            if (isMatch) {
                res.cookie(`loggedStatus`, `logged`);
                res.locals.data = { user };
                next();
            } else {
                return console.log(`incorrect pw`);
            }
        });
    } catch (error) {
        console.log(`error in userController.getUser:`, error);
        return;
    };

};

module.exports = userController;