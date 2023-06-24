# MetaCrafters Event Challenge Solution

This repository contains a solution for the Event Challenge provided by MetaCrafters.

## Challenge Description

The Event Challenge involves creating a smart contract that defines and triggers 3-4 events. The events are indexed to enable easy searching. Additionally, the events are captured in JavaScript code to demonstrate event handling.

## Solution Overview

The solution consists of two main components:

1. **Smart Contract**: The `eventChallenge.sol` file contains the smart contract written in Solidity. It implements a basic bank contract with functionalities for depositing, withdrawing, and transferring funds. It emits three events: `Deposit`, `Withdraw`, and `Transfer`.

2. **JavaScript Code**: The `deploy.js` file demonstrates how to capture and handle the emitted events using ethers.js. It connects to the Ethereum network, attaches the deployed contract, and sets up event listeners for the three events. When an event is triggered, relevant information is logged to the console.

## Prerequisites

Before running the solution, ensure that you have the following software installed:

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Getting Started

Follow these steps to set up and run the solution:

1. Clone the repository to your local machine.

2. Install the project dependencies by running the following command in the terminal:
`npm install`

3. Deploy the smart contract to a local Ethereum network. You can use tools like Hardhat or Ganache for local development and testing. Make sure to update the network provider URL and contract address in the `index.js` file.

4. Feel free to explore and modify the provided code to further understand the solution and meet the requirements of the MetaCrafters Event Challenge.

## License

This solution is released under the MIT License. See the [LICENSE](LICENSE) file for more details.
