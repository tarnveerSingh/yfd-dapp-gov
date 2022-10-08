import { useState } from 'react';

import { useWallet, useConnectedWallet } from '@terra-money/wallet-provider';
import { Coins, Msg, MsgExecuteContract } from '@terra-money/terra.js';
import { terra } from 'utilities/lcd';

const useMsg = () => {
  const { post } = useWallet();
  const connectedWallet = useConnectedWallet();
  const [txHashFromExecute, setTxHashFromExecute] = useState('');

  // custom executeMsg function
  // Takes 4 parameters
  // connectedWallet - comes from wallet-provider
  // contractAddress - address of the contract you want to execute your message on
  // msgExecute - the message you want to send to the contract to execute
  // amount - the amount you want to send with the message
  const executeMsg = async (
    contractAddress: string,
    msgExecute: object,
    amount: Coins.Input = {}
  ) => {
    try {
      // Creates a new message with our parameters
      if (!connectedWallet) {
        return;
      }
      const msg: Msg = new MsgExecuteContract(
        connectedWallet.walletAddress,
        contractAddress,
        msgExecute,
        amount
      );

      // posts the message to the blockchain
      const tx = await post({ msgs: [msg] })
        .then(async (result) => {
          // TODO: use a for or add a timeout to prevent infinite loops
          //eslint-disable-next-line
          while (true) {
            // query txhash
            // Causes errors in console because it hits the catch statement until the transaction has been broadcast
            // console.log(result.result);
            // setTxHashFromExecute(result.result.txhash);
            const data = await terra.tx
              .txInfo(result.result.txhash)
              .catch((error) => {
                setTxHashFromExecute('Waiting for TX to Broadcast...');
              }); //eslint-disable-line
            // if hash is onchain return data
            if (data) return data;
            // else wait 250ms and then repeat
            await new Promise((resolve) => setTimeout(resolve, 250));
          }
        })
        .then((txresult: any) => {
          // this will be executed when the tx has been included into a block
          console.log(txresult);
          const txHash = txresult.txhash;
          return txHash;
        });

      console.log(tx);
      return tx;
    } catch (error) {
      console.log(error);
    }
  };

  // custom queryMsg function
  // takes 2 parameters
  // contractAddress - the contract address we would like to query
  // msgQuery - our query message we want to send to the API
  const queryMsg = async (contractAddress: string, msgQuery: object) => {
    try {
      if (contractAddress) {
        return await terra.wasm.contractQuery(contractAddress, msgQuery);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    executeMsg,
    queryMsg,
    txHashFromExecute,
    setTxHashFromExecute
  };
};

export default useMsg;