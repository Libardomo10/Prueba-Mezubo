const rouletteModel = require('../models/roulette');
const rouletteController = require('../controllers/rouletteController');
module.exports = app => {
    app.use((req, res, next) => {
        var origin = req.headers.origin;
        res.header('Access-Control-Allow-Origin', origin);
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        next();
    });
    app.get('/createroulette', (req, res) => {
        rouletteModel.createAndGetIdRoulette((err, data) => {
            res.status(200).json(data);
        });
    });
    app.put('/roulette/:id', (req, res) => {
        const rouletteData = {
            idRoulette: req.params.id,
            opening: true
        };
        rouletteModel.updateRoulette(rouletteData, function (err, data) {
            if (data && data.msg) {
                res.status(200).json(data);
            } else {
                res.status(500).json({
                    success: false,
                    msg: 'Denegado.'
                });
            }
        });
    });
    app.post('/bet', (req, res) => {
        var betData = {
            ROULETTE_ID: req.body.idRoulette,
            BETNUMBER: req.body.betNumber,
            BETCOLOR: req.body.betColor,
            AMOUNTMONEY: req.body.amountMoney
        };
        rouletteModel.insertBet(betData, (err, data) => {
            if (data && data.insertId) {
                res.header('Autenticacion-Id-Usuario', '1');
                res.status(200).json({
                    success: true,
                    mensaje: "Apuesta realizada exitosamente.",
                    data: data
                });
            } else {
                res.status(500).json({
                    success: false,
                    msg: "Apuesta no realizada."
                });
            }
        });
    });
    app.put('/rouletteoff/:id', (req, res) => {
        const dataComplete = [];
        const winnerNumber = rouletteController.between(0, 36);
        const rouletteData = {
            idRoulette: req.params.id,
            opening: false,
            winnernumber: winnerNumber,
            winnercolor: rouletteController.color(winnerNumber)
        };
        rouletteModel.updateRouletteOff(rouletteData, function (err, data) {
            if (data && data.msg) {
                rouletteModel.earnedMoney(rouletteData, (err, data) => {
                    data = rouletteController.amountWin(data);
                    res.status(200).json(data);
                });
            } else {
                res.status(500).json({
                    success: false,
                    msg: 'Cierre de la ruleta no exitoso.'
                });
            }
        });
    });
    app.get('/listroulette', (req, res) => {
        rouletteModel.listRoulettes((err, data) => {
            res.status(200).json(data);
        });
    });
}