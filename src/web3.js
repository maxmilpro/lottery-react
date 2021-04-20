import Web3 from 'web3';

const ethEnabled = async () => {
  if (window.ethereum) {
    await window.ethereum.send('eth_requestAccounts');
    return true;
  }
  return false;
};

ethEnabled();
const web3 = new Web3(window.ethereum);

export default web3;