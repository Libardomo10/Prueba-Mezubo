let rouletteController = {};
rouletteController.between = (min, max) => {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}
rouletteController.color = (number) => {
    return (number % 2) == 0 ? 1 : 0;
}
rouletteController.amountWin = (data) => {
    data.forEach(element => {
        if (element.BETNUMBER != element.WINNERNUMBER) {
            element[`AMOUNTMONEYNUMBER`] = element.AMOUNTMONEY * 0;
        }
        if (element.BETNUMBER == element.WINNERNUMBER) {
            element[`AMOUNTMONEYNUMBER`] = element.AMOUNTMONEY * 5;
        }
        if (element.BETCOLOR != element.WINNERCOLOR) {
            element[`AMOUNTMONEYCOLOR`] = element.AMOUNTMONEY * 0;
        }
        if (element.BETCOLOR == element.WINNERCOLOR) {
            element[`AMOUNTMONEYCOLOR`] = element.AMOUNTMONEY * 1.8;
        }
    });
    console.log(`Observar data editada`, data);
    return data;
}
module.exports = rouletteController;