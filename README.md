# Electify: Decentralized Online Voting Application

Electify is a Web3-based voting application that explores decentralized voting using blockchain technology. The application connects voters to their electoral ward's poll and uses blockchain transactions to provide a tamper-resistant voting workflow.

## Problem Statement

Traditional voting systems can be expensive to operate and may expose voters to risks such as coercion. Electify explores how blockchain can be used to support a more secure and transparent digital voting experience.

## Solution

Electify uses a React-based web interface with Web3 integration to interact with blockchain networks. Votes are associated with the relevant electoral ward, with the goal of reducing unnecessary blockchain activity and transaction costs.

## Key Features

- Decentralized voting workflow using blockchain.
- Web3 integration for blockchain interaction.
- Ward-based poll organization.
- React-based user interface for voter interaction.
- Support for Ethereum and Polygon development environments.

## Architecture

```text
Voter
  |
  v
React Frontend
  |
  v
Web3 / MetaMask
  |
  v
Ethereum / Polygon Network
  |
  v
Voting Transactions
```

## Technologies Used

- **Frontend:** React.js, JavaScript
- **Blockchain:** Ethereum, Polygon
- **Web3:** Web3.js, MetaMask
- **Development Tools:** Ganache, Truffle
- **HTTP/API:** Axios

## Technical Challenges

### Blockchain Network Selection

The project evaluated Ethereum and Polygon-based development environments while considering transaction costs and the practicalities of local/test-network development.

### Decentralization vs. Efficiency

A key design consideration was balancing decentralized voting with transaction efficiency by organizing the voting workflow around electoral wards.

## Tracks Applied

### Ethereum Track

Uses Ethereum blockchain technology for voting transactions.

### Ethereum + Polygon Track

Explores Polygon as an additional network option to improve transaction efficiency and reduce costs during development.

## Project Structure

The repository contains a React application with Web3 dependencies and routing configured through React Router. The project can be run using the standard Create React App workflow.

## Getting Started

### Prerequisites

- Node.js and npm
- MetaMask or a compatible Web3 wallet
- Access to the Ethereum/Polygon network used by the application

### Installation

```bash
git clone https://github.com/ssrj25/electify.git
cd electify
npm install
```

### Run the application

```bash
npm start
```

The development server runs using the React Scripts configuration in `package.json`.

## Screenshots

The original project screenshots are retained below.

![Electify1](https://github.com/user-attachments/assets/8266d005-419b-4d0e-8048-dcb10c0f7420)
![Electify2](https://github.com/user-attachments/assets/3efb4ab3-930a-4747-83b5-da675a064616)
![Electify3](https://github.com/user-attachments/assets/8e931ed6-ec05-439c-b11c-aebd2877f8aa)
![Electify4](https://github.com/user-attachments/assets/53ba10a2-0558-4482-833c-ab30fe930c01)
![Electify5](https://github.com/user-attachments/assets/ca9aee1a-7836-4851-a1d6-bd9c34e5eb55)

## Future Improvements

- Add automated tests for critical voting flows.
- Introduce stronger wallet and network validation.
- Add clearer transaction/error handling for failed blockchain operations.
- Improve privacy and voter-verification mechanisms before production use.
- Add deployment documentation for a reproducible test-network setup.

## Project Context

Built as a blockchain/Web3 project exploring the use of decentralized technologies for online voting.
