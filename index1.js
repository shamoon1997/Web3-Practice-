const Web3 = require('web3');

const walletAddress = '0x78d6071Eaa8670d1039B83dEe3838e7B6f46bc0b';

// const infuraLink =
// 	'https://rinkeby.infura.io/v3/013175aeac5340299398b98da66532a6';

const infuraLink =
	'https://speedy-nodes-nyc.moralis.io/ea0fb32aee130725b7e05dc1/eth/rinkeby';

const web3 = new Web3(infuraLink);
let balance;

async function getBalance(walletAddress) {
	return await web3.eth.getBalance(walletAddress);
}

(async () => {
	let balance = await getBalance(walletAddress);
	console.log(
		'Sender Eth balance ' +
			(await web3.utils.fromWei(balance.toString(), 'ether'))
	);

	// let newAccount = web3.eth.accounts.create();
	// console.log(newAccount);
})();
