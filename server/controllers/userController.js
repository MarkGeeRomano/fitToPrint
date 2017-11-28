const User = require(`../models/userModel`);
// const Archive = require(`../models/archiveModel`);

const userController = {};

userController.getUser = async (req, res, next) => {
    const user = await User.findById(`5a163645f72bda2c50aaadf1`);
    res.locals.user = user;
    next();
}

userController.createUser = async (req, res, next) => {
    const mockUser = {
        firstName: `Mark`,
        password: `password`,
        lastName: `Romano`,
        userName: `kitters`,
        zip: `10092`,
    }
    const user = await User.create(mockUser);

    res.json(user);
};

userController.verifyUser = async (req, res, next) => {
    console.log(`req.body`,req.body);
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
            } else{
                return console.log(`incorrect pw`);
            }
        });
    } catch (error) {
        console.log(`error in userController.getUser:`, error);
        return;
    };

};

module.exports = userController;