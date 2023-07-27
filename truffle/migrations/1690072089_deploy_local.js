const SimpleStorage = artifacts.require('SimpleStorage.sol')

module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(SimpleStorage)
};
