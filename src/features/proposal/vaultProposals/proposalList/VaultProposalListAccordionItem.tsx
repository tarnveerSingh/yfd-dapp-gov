import { useState } from 'react';
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Spacer,
  Text
} from '@chakra-ui/react';
import FinderContractLink from '@components/finder/FinderContractLink';
import useContractVaultProposal from '@hooks/useContractVaultProposal';
import useContractVote from '@hooks/useContractVote';
import ProposalFinalizeButton from '@features/proposal/vaultProposals/proposalInfo/status/ProposalFinalizeButton';
import ProposalStatus from '@features/proposal/vaultProposals/proposalInfo/status/ProposalStatus';
import InputVoteAmount from '@features/proposal/vaultProposals/proposalInfo/voting/InputVoteAmount';
import VoteButtons from '@features/proposal/vaultProposals/proposalInfo/voting/VoteButtons';
import VoteTokenBalance from '@features/proposal/vaultProposals/proposalInfo/voting/VoteTokenBalance';
import FundingInfo from '@features/proposal/vaultProposals/proposalInfo/funding/FundingInfo';
import VaultProposalInfo from '@features/proposal/vaultProposals/proposalInfo/VaultProposalInfo';
import CurrentVotes from '@features/proposal/vaultProposals/proposalInfo/voting/CurrentVotes';
import CurrentVotesBar from '@features/proposal/vaultProposals/proposalInfo/voting/CurrentVotesBar';
import NFTInfo from '../proposalInfo/nfts/NFTInfo';

import styleList from '@scss/app.module.scss';

function VaultProposalListAccordionItem({
  proposalContract,
  proposalIndex
}: any) {
  const { vaultProposalInfo, voteContract, nftContractInfo } =
    useContractVaultProposal({
      proposalContract,
      proposalIndex
    });
  const { voteTokenBalance } = useContractVote({
    proposalContract
  });
  const [inputVoteTokenAmount, setInputVoteTokenAmount] = useState(0);
  return (
    <AccordionItem
      layerStyle="accordionProposalItem"
      className={styleList['content-section']}
    >
      <AccordionButton layerStyle="accordionHeader">
        <Flex width="100%">
          <Box textAlign="left">
            <Text>{vaultProposalInfo.name}</Text> (
            <FinderContractLink contract={proposalContract} /> )
          </Box>
          <Spacer />
          <Box textAlign="right">
            <CurrentVotesBar
              proposalContract={proposalContract}
              proposalIndex={proposalIndex}
            />
            <ProposalStatus
              proposalContract={proposalContract}
              proposalIndex={proposalIndex}
            />
          </Box>
          <Box p="4">
            <AccordionIcon />
          </Box>
        </Flex>
      </AccordionButton>
      <AccordionPanel layerStyle="accordionProposalPanel" pb="5">
        <Flex
          backgroundColor={'gray.7044'}
          borderRadius="md"
          align="center"
          justify="space-around"
          py="4"
        >
          <VaultProposalInfo
            proposalContract={proposalContract}
            proposalIndex={proposalIndex}
          />
          <FundingInfo
            proposalContract={proposalContract}
            proposalIndex={proposalIndex}
          />
          <ProposalFinalizeButton
            proposalContract={proposalContract}
            proposalIndex={proposalIndex}
          />
        </Flex>
        <Flex
          align="center"
          direction="column"
          borderRadius="md"
          backgroundColor={'gray.700'}
          py="4"
        >
          <VoteTokenBalance
            proposalContract={proposalContract}
            voteTokenBalance={voteTokenBalance}
          />
          <InputVoteAmount
            voteTokenBalance={voteTokenBalance}
            inputVoteTokenAmount={inputVoteTokenAmount}
            setInputVoteTokenAmount={setInputVoteTokenAmount}
          />
          <Flex
            align="center"
            justify="space-around"
            borderRadius="md"
            w="100%"
            py="4"
          >
            <VoteButtons
              contract={voteContract}
              voteTokenBalance={voteTokenBalance}
              inputVoteTokenAmount={inputVoteTokenAmount}
            />
            <CurrentVotes
              proposalContract={proposalContract}
              proposalIndex={proposalIndex}
            />
          </Flex>
        </Flex>

        {Object.keys(nftContractInfo).length > 0 ? (
          <Flex
            align="center"
            direction="column"
            borderRadius="md"
            border="1px solid black"
            py="4"
          >
            <NFTInfo nftContractInfo={nftContractInfo} />
          </Flex>
        ) : null}
      </AccordionPanel>
    </AccordionItem>
  );
}

export default VaultProposalListAccordionItem;
