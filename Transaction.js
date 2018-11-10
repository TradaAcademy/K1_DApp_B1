module.exports = class Transaction {
    constructor (from, to, amount, gas) {
        this.from = from;
        this.to = to;
        this.amount = amount;
        this.gas = gas;
    }

    toString() {
        return [this.from, this.to, this.amount, this.gas].join(";");
    }
}