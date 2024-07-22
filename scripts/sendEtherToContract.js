// scripts/sendEtherToContract.js
require('dotenv').config();
const { Web3 } = require('web3');
const web3 = new Web3('http://127.0.0.1:7545');

const accountA = '0x79061B41e640413eD90e38466EF9892f566AB6Ad'; // Replace with your Account A address
const privateKeyA = '0x33743f92c573ab480aa267ac530ab687460ce9f3fae3c5c7ea6a0967fcf40c16'; // Replace with your private key
const contractAddress = '0x11b692aDBA6c0aaB0984f23985e51617b3CE5337'; // Replace with your contract address
const accountB = '0x9958128D47b72A2F291fB0bF64D658C1497b0ffD'; // Replace with your Account B address

async function sendEtherToContract() {
    // Log accountB for reference
    console.log('Sending Ether to contract from Account A:', accountA);
    console.log('Account B (for reference):', accountB);

    const tx = {
        from: accountA,
        to: contractAddress,
        value: web3.utils.toWei('1', 'ether'),
        gas: 21000, // Updated gas limit
        gasPrice: web3.utils.toWei('10', 'gwei')
    };

    try {
        const signedTx = await web3.eth.accounts.signTransaction(tx, privateKeyA);
        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        console.log('Transaction successful with hash:', receipt.transactionHash);
    } catch (error) {
        console.error('Transaction failed:', error);
    }
}

sendEtherToContract();
