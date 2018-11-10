const crypto = require('crypto');
const params = require("./Params");

module.exports = class Block {
    constructor (txs, prevHash, difficulty) {
        this.txs = txs || [];
        this.difficulty = difficulty;
        this.prevHash = prevHash || "0";
        this.nounce = 0;
        this.timestamp = Date.now();
        this.hash = this.makeHash();
    }

    isValid () {
        return this.hash.startsWith("0".repeat(params.DIFFICULTY));
    }

    increaseNounce() {
        this.timestamp = Date.now();
        this.nounce++;

        this.hash = this.makeHash();
    }

    makeHash() {
        let content = [this.difficulty, this.nounce, this.timestamp, this.prevHash, this.txs.join(";")].join(";");
        let hash = crypto.createHash('sha256').update(content).digest("base64");
        
        console.log(hash);

        return hash;
    }
}