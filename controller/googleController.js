const oAuth2Client = require("../services/googleLogin");
const { google } = require('googleapis');

class GoogleController {
    static authed = false;

    static login = async (req, res) => {
        if(!this.authed){
            const SCOPE = [
                'https://www.googleapis.com/auth/userinfo.profile', // get user info
                'https://www.googleapis.com/auth/userinfo.email',   // get user email ID and if its verified or not
            ];
            const url = oAuth2Client.generateAuthUrl({
                access_type: 'offline',
                scope: SCOPE
            });
            console.log(url, 'login');
            res.redirect(url);
        } else {

            const user = google.oauth2({ version:'v2', auth: oAuth2Client });
            let { data } = await user.userinfo.get();
            console.log(data, 'user infos');
            res.send('Logged in');
        }
    }

    static callback = (req, res) => {
        const code = req.query.code;
        if(code){
            oAuth2Client.getToken(code, (err, tokens) => {
                if(err){
                    console.log('Error authenticating');
                    console.log(err);
                } else {
                    console.log('Successfully authenticated');
                    oAuth2Client.setCredentials(tokens);
                    this.authed = true;
                    res.redirect('/login')
                }
            })
        }
    }

    static logout = (req, res) => {
        
    }
}

module.exports = GoogleController;