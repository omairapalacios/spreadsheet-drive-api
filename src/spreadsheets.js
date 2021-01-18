const { GoogleSpreadsheet } = require('google-spreadsheet');
const credentials = require('./json/credentials-google-api.json');

let googleId = '15p_1qaujLpgO20pYQ7aJKg6Ks85A2E5hjNzn_mo7tEM';

async function getIntoSheet() {
    const document = new GoogleSpreadsheet(googleId);
    await document.useServiceAccountAuth(credentials);
    await document.loadInfo();

    const sheet = document.sheetsByIndex[0];
    const logs = await sheet.getRows();
    return logs;
}

module.exports = {
    getIntoSheet,
};
