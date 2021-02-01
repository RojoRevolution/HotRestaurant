const path = require('path')
const tableData = require('../data/tableData');
const waitListData = require('../data/waitinglistData');


module.exports = (app) => {
    app.get('/api/tables', (req, res) => res.json(tableData));

    app.get('/api/waitlist', (req, res) => res.json(waitListData));

    pp.post('/api/tables', (req, res) => {
        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        } else {
            waitListData.push(req.body);
            res.json(false);
        }
    });
    app.post('/api/clear', (req, res) => {
        tableData.length = 0;
        waitListData.length = 0;

        res.json({ ok: true });
    });

    app.get('/tables', (req, res) => {
        res.sendFile(path.join(__dirname, '../tables.html'));
    });

    app.get('/reserve', (req, res) => {
        res.sendFile(path.join(__dirname, '../reserve.html'));
    });

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../home.html'));
    });
};


