const SimpleStorage = artifacts.require('SimpleStorage.sol')

contract('SimpleStorage', () => {
  it("should update data and read it", async () => {
    const simpleStorage = await SimpleStorage.new()
    await simpleStorage.updateData(10)
    const data = await simpleStorage.readData()
    assert(data.toString() === '10')
  })
})