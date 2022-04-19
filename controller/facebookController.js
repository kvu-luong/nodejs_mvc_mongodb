class FacebookController {
    static profile = (req, res) => {
        res.send('You are a valid user');
    }

    static fail = (req, res) => {
        res.send('You are a non valid user');
    }

    static login = (req, res) => {
        res.render('facebook');
    }
}

module.exports = FacebookController;