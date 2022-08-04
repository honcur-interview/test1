import 'hardhat-typechain'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'


//0xba81a135Df6D1b02386203F2ebA394c28805B497
export default {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    bsc_test: {
      url: "https://data-seed-prebsc-1-s2.binance.org:8545/",
      accounts: ["", ""],
      timeout: 60000
    },
    dev: {
      url: "http://127.0.0.1:7545//",
      accounts: [""],
      timeout: 60000
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  solidity: {
    compilers: [    //可指定多个sol版本
    {version: "0.8.4"},
    {version: "0.5.16"},
    {version: "0.6.6"}
  ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.7.6/metadata.html
        bytecodeHash: 'none',
      },
    },
  },
}
