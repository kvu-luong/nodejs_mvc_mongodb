const { google } = require('googleapis');
require('dotenv').config();
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_SECRET_ID;
const REDIRECT_URL = process.env.GOOGLE_REDIRECT_URL;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

module.exports = oAuth2Client;

