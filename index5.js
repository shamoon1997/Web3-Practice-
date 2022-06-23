const Web3 = require('web3');

const web3 = new Web3(
	'https://rinkeby.infura.io/v3/013175aeac5340299398b98da66532a6'
);

const senderPrivateKey =
	'ac6245e8516e5dd8f6edce46ce6938315ae5a115fbba30e30c5bec5c3a2f9a56';
const senderAddress = '0x78d6071Eaa8670d1039B83dEe3838e7B6f46bc0b';

const receiverAddress = '0x95A7c19Ce6EB61E6F520711D234254Ff1E82d1B7';

async function handleTransaction() {
	console.log(`Attempting to make transaction from account ${senderAddress}
       to account ${receiverAddress}
    `);

	let createTransaction = await web3.eth.accounts.signTransaction(
		{
			from: senderAddress,
			to: receiverAddress,
			value: web3.utils.toWei('0.00001', 'ether'),
			gas: '6500000',
			gasPrice: '20000000000',
		},
		senderPrivateKey
	); // Signing the Transaction

	console.log(`createTransaction ${createTransaction.rawTransaction}`);

	const receipt = await web3.eth.sendSignedTransaction(
		createTransaction.rawTransaction
	);
	console.log(`Transaction is successful with ${receipt.transactionHash}`);
}

handleTransaction();
