// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    result = new Object ();

    if (currency >= 10000) {
        result.error = "You are rich, my friend! We don't have so much coins for exchange";
        return result;
    }
    if (currency < 0) {
        return result;
    }

    let H = 50;
    let numH = 0; 
    let Q = 25;
    let numQ = 0;
    let D = 10;
    let numD = 0;
    let N = 5;
    let numN = 0;
    let P = 1;
    let numP = 0;
    
    while (currency != 0) {
        while (currency >= H) {
            numH++;
            currency -= H;
        }
        while (currency >= Q) {
            numQ++;
            currency -= Q;
        }
        while (currency >= D) {
            numD++;
            currency -= D;
        }
        while (currency >= N) {
            numN++;
            currency -= N;
        }
        while (currency >= P) {
            numP++;
            currency -= P;
        }
    }

    if (numH > 0) result.H = numH;
    if (numQ > 0) result.Q = numQ;
    if (numD > 0) result.D = numD;
    if (numN > 0) result.N = numN;
    if (numP > 0) result.P = numP;

    return result;
}
