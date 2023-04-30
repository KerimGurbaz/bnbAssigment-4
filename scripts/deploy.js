const fs = require('fs');
const ethers = require('ethers');
const dotenv = require('dotenv');

// Read the JSON file
dotenv.config();
const contractJson = JSON.parse(fs.readFileSync('./artifacts/contracts/Counter.sol/Counter.json', 'utf8'));

async function main() {
  const privateKey = process.env.PRIVATE_KEY;
  const apiKey = process.env.API_KEY;

  // Connect to the Binance Smart Chain Testnet using a custom provider
  const provider = new ethers.providers.JsonRpcProvider(`https://data-seed-prebsc-1-s1.binance.org:8545`, {
    chainId: 97,
    name: 'binance-smart-chain-testnet'
  });

  // Create a signer using the provided private key
  const wallet = new ethers.Wallet(privateKey, provider);

  // Create a ContractFactory instance using the compiled contract and signer
  const counterFactory = new ethers.ContractFactory(contractJson.abi, contractJson.bytecode, wallet);

  // Deploy the contract to the network
  console.log('Deploying the contract...');
  const counter = await counterFactory.deploy();
  await counter.deployed();
  console.log('Contract deployed to:', counter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
