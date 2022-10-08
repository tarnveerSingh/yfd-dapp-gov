import useMsg from './useMsg';
import queryProposalInfo from 'utilities/messagesQuery/queryProposalInfo';
import queryProposalState from 'utilities/messagesQuery/queryProposalState';
import { useEffect, useState } from 'react';
import queryTokenInfo from 'utilities/messagesQuery/queryTokenInfo';
import { useConnectedWallet } from '@terra-money/wallet-provider';

const useContractProposal = ({ proposalContract }: any) => {
  const { queryMsg } = useMsg();
  const [proposalInfo, setProposalInfo] = useState<any>({});
  const [voteContract, setVoteContract] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('Vote');

  const getProposalInfo = async () => {
    const response = await queryMsg(proposalContract, queryProposalInfo());
    return response;
  };

  const setProposalInfoToState = async () => {
    const proposalInfo: any = await getProposalInfo();
    if (proposalInfo === undefined) {
      return;
    }
    setProposalInfo({ ...proposalInfo });
  };

  const getVoteContractAddress = async () => {
    const response = await queryMsg(proposalContract, queryProposalState());
    return response;
  };

  const setVoteContractToState = async () => {
    const voteInfo: any = await getVoteContractAddress();
    if (voteInfo === undefined) {
      return;
    }
    setVoteContract(voteInfo.initial_vote);
  };

  const getTokenInfo = async () => {
    const response = await queryMsg(proposalContract, queryTokenInfo());
    return response;
  };

  const setTokenSymbolToState = async () => {
    const tokenInfo: any = await getTokenInfo();
    if (tokenInfo === undefined) {
      return;
    }
    setTokenSymbol(tokenInfo.symbol);
  };

  useEffect(() => {
    setProposalInfoToState();
    setVoteContractToState();
    setTokenSymbolToState();
  }, []);

  return {
    getProposalInfo,
    getVoteContractAddress,
    getTokenInfo,
    proposalInfo,
    voteContract,
    tokenSymbol
  };
};

export default useContractProposal;