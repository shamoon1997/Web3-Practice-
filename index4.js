const Web3 = require('web3');
const myContractABI = require('./MyContract.json');
const web3 = new Web3(
	new Web3.providers.WebsocketProvider(
		'wss://rinkeby.infura.io/ws/v3/013175aeac5340299398b98da66532a6'
	)
);

const ETH_CONTRACT = new web3.eth.Contract(
	myContractABI,
	'0x5aE9d66eD5b50537EBCe7Ef8F5eF0a973f358803'
);

async function handling() {
	console.log(await ETH_CONTRACT.methods.getCount().call());

	await ETH_CONTRACT.events.allEvents((err, ev) => {
		if (err) {
			console.log(err);
		}

		if (ev.event == 'increment') {
			console.log(ev.returnValues);
		}
	});
	// console.log(
	// 	await ETH_CONTRACT.methods.getCount().call({
	// 		from: '0x78d6071Eaa8670d1039B83dEe3838e7B6f46bc0b',
	// 	})
	// );
}
handling();
