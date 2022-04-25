const HDWalletPRovider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const {interface, bytecode} = require("./compile");

const provider = new HDWalletPRovider(
'finger digital else chunk hen repair attitude leader story address join spray',
'https://rinkeby.infura.io/v3/2155460f4f6145578d5d950175d4dca4'
);

const web3 = new Web3(provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();
    console.log('Accounts retrieved', accounts);
    console.log('Attempting to deploy from account', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode, arguments:['Hi There!']})
    .send({gas:'1000000', from:accounts[0]});
    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();
};
deploy();