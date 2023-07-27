import readline from 'readline'
import { simpleStorage } from '../conrtacts/SimpleStorage.contract';

export class ConsoleManager {
  private readonly rl: readline.Interface
  private readonly simpleStorage: typeof simpleStorage

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    this.simpleStorage = simpleStorage
  }

  async interact() {
    const interactor: () => void = () => this.rl.question(`>>> Insert new value to update it. \n`, async (newValue) => {
      if (Number.isNaN(Number(newValue))) {
        console.log('>>> Input value must be a number')
        return interactor()
      }
      await this.simpleStorage.updateData(Number(newValue))
      return interactor()
    });
    interactor()
  }
}