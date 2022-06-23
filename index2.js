const Web3 = require('web3');
const infuraLink =
	'https://mainnet.infura.io/v3/013175aeac5340299398b98da66532a6';
const web3 = new Web3(infuraLink);

const pablosABI = require('./pablos.json');

const contract = new web3.eth.Contract(
	pablosABI,
	'0xd3605059c3cE9fACf625Fa72D727508B7b7F280F'
);
// console.log(contract.methods);

(async () => {
	console.log(await contract.methods.name().call());
	console.log(await contract.methods.symbol().call());
	console.log(
		await contract.methods
			.balanceOf('0xd3605059c3cE9fACf625Fa72D727508B7b7F280F')
			.call()
	);
})();

// console.log(contract.methods.name.call());
