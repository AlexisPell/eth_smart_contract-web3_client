import Web3, { Contract } from 'web3'

const MyContract = require('./../../../../truffle/build/contracts/SimpleStorage.json')

const WS_ETHEREUM_NETWORK_URI = 'ws://127.0.0.1:9545'

class SimpleStorage {
  public web3?: Web3 = undefined;
  public contract?: Contract<any> = undefined; // <MyContract.abi>

  public async init() {
    try {
      this.web3 = new Web3(WS_ETHEREUM_NETWORK_URI);
  
      const ethereumNetworkId = await this.web3.eth.net.getId();
      const contractABI = MyContract.abi;
      const contractAddress = MyContract.networks[ethereumNetworkId.toString()].address
      
      const contract = new this.web3.eth.Contract(contractABI, contractAddress);
      this.contract = contract;
    } catch (error) {
      console.error('>>> Failed to initialize SimpleStorageContract. Error: ', error)
    }
  }

  public async subscribeToEvent(eventName: string) {
    const latestBlock = await this.web3.eth.getBlockNumber()

    const subscription = this.contract!.events[eventName]({ fromBlock: latestBlock })

    subscription.on('data', (event) => {
      console.log('>>> Subscription message. Current storage value:', event.returnValues[0])
    })

    return subscription;
  }

  public async updateData(data: number): Promise<void> {
    try {
      const addresses = await this.web3!.eth.getAccounts()
  
      // @ts-ignore
      await this.contract.methods.updateData(data).send({ from: addresses[0] })
    } catch (error) {
      console.error('>>> Failed to update data in blockchain. Error: ', error.message ?? error)
    }
  }

  public async readData(): Promise<number | null> {
    try {
      const value = await this.contract?.methods.readData().call() as number
      return value
    } catch (error) {
      console.error('>>> Failed to read data in blockchain. Error: ', error)
      return null
    }
  }
}

export const simpleStorage = new SimpleStorage()