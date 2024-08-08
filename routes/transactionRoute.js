const express = require('express');
const router = express.Router();
const Transaction = require("../models/transaction");

const pathRoute = "/transaction";

router.post(pathRoute+"/add",function(req, res){
    console.log(req.body)
    const newTransaction = Transaction(req.body)
    Transaction.addTransaction(newTransaction, function(err, result){
        if(err){
            res.status(400).json({
                err: true,
                message: err
            })
        }else{
            res.status(200).json({
                err: false,
                message: result
            })
        }
    })
});

router.get(pathRoute + "/get-fraudulent", async function(req, res) {
    try {
        const transactions = await Transaction.find({isFraud:"1"});

        res.status(200).json({
            err: false,
            transactions: transactions
        });
    } catch (err) {
        res.status(400).json({
            err: true,
            message: err.message
        });
    }
});

router.get(pathRoute + "/get", async function(req, res) {
    try {
        const transactions = await Transaction.find().limit(100);

        res.status(200).json({
            err: false,
            transactions: transactions
        });
    } catch (err) {
        res.status(400).json({
            err: true,
            message: err.message
        });
    }
});

module.exports = router;