let googleSheet = require('../spreadsheets');

async function getLogs(req, res) {
    const logs = await googleSheet.getIntoSheet();
    res.render('index', { logs });
}

module.exports = {
    getLogs,
};
