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
