const { ethers } = require("ethers");

// Connect to the Ethereum network and get the contract instance
const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545"); // Replace with your network provider URL
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace with your contract address

// Contract ABI
const contractABI = [
  "event Deposit(address indexed owner, uint256 amount)",
  "event Withdraw(address indexed owner, uint256 amount)",
  "event Transfer(address indexed from, address indexed to, uint256 amount)",
  "function deposit(address _account, uint256 _number) public payable",
  "function withdraw(address _account, uint256 _number) public payable",
  "function transfer(address _from, address _to, uint256 _number) public payable",
  "function getBalance(address _address) public view returns(uint256)"
];

const contract = new ethers.Contract(contractAddress, contractABI, provider);

// Event listener for Deposit event
contract.on("Deposit", (owner, amount, event) => {
    console.log("Deposit event triggered:");
    console.log("Owner:", owner);
    console.log("Amount:", amount);
    console.log("Event:", event);
});

// Event listener for Withdraw event
contract.on("Withdraw", (owner, amount, event) => {
    console.log("Withdraw event triggered:");
    console.log("Owner:", owner);
    console.log("Amount:", amount);
    console.log("Event:", event);
});

// Event listener for Transfer event
contract.on("Transfer", (from, to, amount, event) => {
    console.log("Transfer event triggered:");
    console.log("From:", from);
    console.log("To:", to);
    console.log("Amount:", amount);
    console.log("Event:", event);
});
