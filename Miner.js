const params = require("./Params");
const Block = require("./Block");
const Blockchain = require("./Blockchain");

module.exports = class Miner {
    constructor (blocks, txPool) {
        this.chain = new Blockchain(blocks || []);
        this.txPool = txPool || [];
    }

    addTx(tx) {
        this.txPool.push(tx);
    }

    startMine () {

        setInterval ( () => { 

            // Choose txs from txPool
            if (this.txPool.length === 0) return;
            let txs = this.txPool.slice(0, params.BLOCK_SIZE)

            // Create new block
            let block = new Block(txs, this.chain.lastestBlockHash(), params.DIFFICULTY);

            // Change nounce until block valid
            while (!block.isValid()) {
                block.increaseNounce();
            }

            // Insert new valid block to blockchain
            this.chain.addBlock(block);

            // remove mined txs from pool
            this.txPool.splice(0, block.txs.length);

            console.log("MINED~~ YEAH", block);

            // Broadcast to neighbor nodes
            // TODO: later

        }, 1000);
    }
    
}