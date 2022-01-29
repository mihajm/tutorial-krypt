require('dotenv').config();

require('@nomiclabs/hardhat-waffle');

module.exports = {
	solidity: '0.8.0',
	networks: {
		ropsten: {
			url: process.env.ALCHEMY_URL,
			accounts: [`0x${process.env.ACCOUNT_KEY}`],
		},
	},
};
