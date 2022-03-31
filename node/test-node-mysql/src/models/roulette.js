const mysql = require('mysql');
connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'TESTMEZUBO'
});
let rouletteModel = {};
rouletteModel.createAndGetIdRoulette = (callback) => {
    if (connection) {
        connection.query('INSERT INTO ROULETTE (OPENING) VALUES (false);', 'SELECT LAST_INSERT_ID();',
            (err, rows) => {
                if (err) {
                    throw err
                }
                else {
                    callback(null, rows);
                }
            }
        )
    }
};
rouletteModel.updateRoulette = (rouletteData, callback) => {
    if (connection) {
        const sql = `
        UPDATE ROULETTE SET
        OPENING = ${connection.escape(rouletteData.opening)}
        WHERE ROULETTE_ID = ${rouletteData.idRoulette}`;

        connection.query(sql, function (err, result) {
            if (err) {
                throw err;
            } else {
                callback(null, {
                    "msg": "Exitosa."
                })
            }
        });
    }
};
rouletteModel.insertBet = (betData, callback) => {
    if (connection) {
        connection.query('INSERT INTO BET SET ?', betData,
            (err, result) => {
                if (err) {
                    throw err;
                } else {
                    callback(null, { 'insertId': result.insertId })
                }
            }
        )
    }
};
rouletteModel.updateRouletteOff = (rouletteData, callback) => {
    if (connection) {
        const sql = `UPDATE ROULETTE SET
        OPENING = ${connection.escape(rouletteData.opening)},
        WINNERNUMBER = ${connection.escape(rouletteData.winnernumber)},
        WINNERCOLOR = ${connection.escape(rouletteData.winnercolor)}
        WHERE ROULETTE_ID = ${rouletteData.idRoulette}`;
        connection.query(sql, function (err, result) {
            if (err) {
                throw err;
            } else {
                callback(null, {
                    "msg": "Exitosa."
                })
            }
        });
    }
};
rouletteModel.listRoulettes = (callback) => {
    if (connection) {
        connection.query('SELECT * FROM ROULETTE;',
            (err, rows) => {
                if (err) {
                    throw err
                }
                else {
                    callback(null, rows);
                }
            }
        )
    }
};
rouletteModel.earnedMoney = (rouletteData, callback) => {
    if (connection) {
        connection.query(`SELECT B.ROULETTE_ID,
	                        B.BETNUMBER, 
                            B.BETCOLOR,
                            B.AMOUNTMONEY, 
                            R.WINNERNUMBER,
                            R.WINNERCOLOR
                            FROM BET B INNER JOIN ROULETTE R ON B.ROULETTE_ID = R.ROULETTE_ID
                            WHERE B.ROULETTE_ID = ${rouletteData.idRoulette}`,
            (err, rows) => {
                if (err) {
                    throw err
                }
                else {
                    callback(null, rows);
                }
            }
        )
    }
};
module.exports = rouletteModel;