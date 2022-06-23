const Web3 = require('web3');

const web3 = new Web3(
	new Web3.providers.WebsocketProvider(
		' wss://mainnet.infura.io/ws/v3/013175aeac5340299398b98da66532a6'
	)
);

// const ABI = require('./Matic.json');

// const contract = new web3.eth.Contract(
// 	ABI,
// 	'0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0'
// );

async function main() {
	// let events = await contract.events.allEvents({
	// 	fromBlock: 'latest',
	// });
	// console.log(events);
	// console.log(await web3.eth.getBlockNumber()); // getting block number
	// let block = await web3.eth.getBlock('latest');
	// console.log(block);
	// console.log(block.hash); // getting block hash
	// console.log(block.number); // getting block number

	// console.log(await web3.eth.getBlockTransactionCount('latest'));

	let gasPrice = await web3.eth.getGasPrice();
	gasPrice = web3.utils.fromWei(gasPrice, 'ether');
	console.log(gasPrice);

	console.log(web3.utils.randomHex(32));
	console.log(web3.utils.randomHex(16));

	console.log(web3.utils.sha3('abc'));
}

main();
