const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    step: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    nameOrig: {
        type: String,
        required: true
    },
    oldBalanceOrig: {
        type: String,
        required: true
    },
    newBalanceOrig: {
        type: String,
        required: true
    },
    nameDest: {
        type: String,
        required: true
    },
    oldBalanceDest: {
        type: String,
        required: true
    },
    newBalanceDest: {
        type: String,
        required: true
    },
    isFraud: {
        type: String,
        required: true
    },
    isFlaggedFraud: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;

module.exports.addTransaction = function (newTransaction, callback) {
    newTransaction.save();
    return newTransaction;
};

module.exports.getTransactions = function(){
    Transaction.find().limit(100).sort({ _id: 1 });
}
