const crypto = require('crypto');
const params = require("./Params");

module.exports = class Block {
    constructor (txs, prevHash, difficulty) {
        this.txs = txs || [];
        this.difficulty = difficulty;
        this.prevHash = prevHash || "0";
        this.nonce = 0;
        this.timestamp = Date.now();
        this.hash = this.makeHash();
    }

    isValid () {
        return this.hash.startsWith("0".repeat(params.DIFFICULTY));
    }

    increaseNonce() {
        this.timestamp = Date.now();
        this.nonce++;

        this.hash = this.makeHash();
    }

    makeHash() {
        let content = [this.difficulty, this.nonce, this.timestamp, this.prevHash, this.txs.join(";")].join(";");
        let hash = crypto.createHash('sha256').update(content).digest("hex");
        
        console.log(hash);

        return hash;
    }
}