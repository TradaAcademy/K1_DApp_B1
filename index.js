const params = require("./Params");
const Transaction = require("./Transaction");
const Block = require("./Block");
const Blockchain = require("./Blockchain");
const Miner = require("./Miner");
const express = require('express');

const ant = new Miner();
ant.startMine();

const app = express();
app.get('/addTx', (req, res) => {
    let tx = req.query;
    
    let txOjb = new Transaction(tx.from, tx.to, tx.amount, tx.gas);

    ant.addTx(txOjb)

    res.send("Added");
});

app.get('/', (req, res) => {
    res.json(ant);
});

app.listen(4000, () => console.log('Web listening at port 4000!'));
