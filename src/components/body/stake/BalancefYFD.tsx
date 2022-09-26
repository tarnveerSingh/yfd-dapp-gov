import { useConnectedWallet } from '@terra-money/wallet-provider';
import useContract from 'hooks/useContract';
import { useEffect, useState } from 'react';
import queryBalance from 'utilities/messagesQuery/balance';
import { FORGE_TEST } from 'utilities/variables';

function BalancefYFD() {
  const { queryMsg } = useContract();
  const [balance, setBalance] = useState('0');
  const connectedWallet = useConnectedWallet();
  const getBalance = async () => {
    const response = await queryMsg(
      FORGE_TEST,
      queryBalance(connectedWallet?.walletAddress)
    );
    return response;
  };
  useEffect(() => {
    getBalance().then((res: any) => {
      console.log(res);
      if (res !== undefined) {
        setBalance(res.balance);
      }
    });
  }, [connectedWallet]);
  return (
    <div>BalancefYFD: {(Number(balance) * Math.pow(10, -6)).toFixed(5)}</div>
  );
}

export default BalancefYFD;
