import { useConnectedWallet } from '@terra-money/wallet-provider';
import useMsg from './useMsg';
import queryBalance from 'utilities/messagesQuery/balance';
import useContractProposal from './useContractProposal';
import { useEffect, useState } from 'react';

const useContractVote = ({ proposalContract }: any) => {
  const { queryMsg } = useMsg();
  const connectedWallet = useConnectedWallet();
  const { voteContract } = useContractProposal({ proposalContract });
  const [voteTokenBalance, setVoteTokenBalance] = useState(0);

  const getVoteTokenBalance = async () => {
    if (!connectedWallet) {
      return;
    }
    const voteTokenBalance: any = await queryMsg(
      voteContract,
      queryBalance(connectedWallet?.walletAddress)
    );
    return voteTokenBalance;
  };

  const setVoteTokenBalanceToState = async () => {
    const tokenBalance = await getVoteTokenBalance();
    if (tokenBalance === undefined) {
      return;
    }
    setVoteTokenBalance(tokenBalance.balance);
  };

  useEffect(() => {
    setVoteTokenBalanceToState();
  }, [connectedWallet]);

  return {
    getVoteTokenBalance,
    voteTokenBalance
  };
};

export default useContractVote;