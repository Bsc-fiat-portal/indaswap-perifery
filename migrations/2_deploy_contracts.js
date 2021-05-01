const Router  = artifacts.require("IndaswapRouter01.sol");
const WETH    = artifacts.require('WBNB.sol');

module.exports = async function (deployer, network) {
    let weth
    const FACTORY_ADDRESS = '0x40cbAc284135423c41ACcfc073801d3e4123CBe7';

    // if (network === 'mainnet') {
    weth = await WETH.at('0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c');
    // }
    // else if (network == 'development') {
    //     weth = await WETH.at('0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd')
    // }

    await deployer.deploy(Router, FACTORY_ADDRESS, weth.address)
    
    const router = await Router.deployed()

    console.log('router: ', router.address)
};
