const hre = require('hardhat');

const main = async () => {
	const Transactions = await hre.ethers.getContractFactory('Transactions');
	const transactions = await Transactions.deploy();

	await transactions.deployed();

	console.log('Transactions deployed to:', transactions.address);
};

const handleSuccess = () => process.exit(0);

const handleError = err => {
	console.error(err);
	process.exit(1);
};

main()
	.then(handleSuccess)
	.catch(handleError);
