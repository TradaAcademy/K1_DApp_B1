module.exports = class Blockchain {
    constructor (blocks) {
        this.blocks = blocks || [];
    }

    addBlock (block) {
        this.blocks.push(block);
    }

    lastestBlockHash () {
        if (this.blocks.length === 0) return "0";

        return this.blocks[this.blocks.length - 1].hash;
    }
}