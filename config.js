const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "put session id",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/3cef367ebfc7a45c10595.jpg"
};
