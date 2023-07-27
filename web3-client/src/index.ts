import { simpleStorage } from './modules/conrtacts/SimpleStorage.contract'
import { ConsoleManager } from './modules/consoleManager/ConsoleManager'

const bootstrap = async () => {
  try {
    await simpleStorage.init()
    simpleStorage.subscribeToEvent('MyEvent')

    const consoleManager = new ConsoleManager()
    consoleManager.interact()
  } catch (error) {
    console.log('>>> Global unexpected error occured. Error: ', error)
  }
}
bootstrap()


// /// //// // / // / / // / / /
// import Web3 from 'web3'

// const MyContract = require('./../../truffle/build/contracts/SimpleStorage.json')

// const bootstrap = async () => {
//   try {
//     // // // Initialization // // //
//     // const ETHEREUM_NETWORK = 'http://127.0.0.1:9545'
//     const WS_ETHEREUM_NETWORK_URI = 'ws://127.0.0.1:9545'
//     const web3 = new Web3(WS_ETHEREUM_NETWORK_URI)
    
//     const ethNetId = await web3.eth.net.getId();
//     const contractABI = MyContract.abi;
//     const contractAddress = MyContract.networks[ethNetId.toString()].address // later get from envs by truffle networks
    
//     const contract = new web3.eth.Contract(contractABI, contractAddress);
//     const addresses = await web3.eth.getAccounts()

//     // // // Working with contract // // //
//     // @ts-ignore
//     const receipt = await contract.methods.updateData(228).send({ from: addresses[0] })
//     console.log('>>> receipt: ', receipt)

//     // Subscribe only to new events, emitted from this block and later
//     await contract.events.MyEvent({ fromBlock: receipt.blockNumber })
//     .on('data', (event) => {
//       console.log('>>> on data eventt:', event)
//     })

//     const block = await web3.eth.getBlockNumber()
//     console.log('>>> latest block: ', block)

//     // // @ts-ignore
//     // const receipt2 = await contract.methods.updateData(228).send({ from: addresses[0] })
//     // // @ts-ignore
//     // const receipt3 = await contract.methods.updateData(228).send({ from: addresses[0] })

//   } catch (error) {
//     console.log('>>> err:', error)
//   }
// }
// bootstrap()