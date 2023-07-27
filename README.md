# Preparing to launch the application:

## Make sure you have truffle installed globally. Then:

1. $ cd ./truffle
2. $ truffle compile
3. $ truffle develop
4. In the same running terminal run $ migrate --reset

5. In new terminal $ cd ./web3-client
6. install dependencies via npm/yarm/pnpm
7. $ npm run start:dev

## Testing smart contract

1. $ cd ./truffle
2. $ truffle test

## How it works:

- Self-written simple smart contract is located in /truffle
- Web3 client is triggering function updateData from smart contract. When function triggered - event is emitted.
- Client is listening to events from smart contract and prints result to console

## How to use:

- Use console to interact with application
- Simply insert new value you want to pass to smart contract
- Value type is uint/ number
