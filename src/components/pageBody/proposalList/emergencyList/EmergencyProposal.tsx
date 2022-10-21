import { Box, Button, Text } from '@chakra-ui/react';
import FinderContractLink from 'components/basic/finder/FinderContractLink';
import useContractEmergency from 'hooks/useContractEmergency';
import useHandleClicks from 'hooks/useHandleClicks';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { currentBlockHeightAtom } from 'recoil/chainInfo/atoms';
import InputVoteAmount from '../proposalInfo/voting/InputVoteAmount';
import VoteButtons from '../proposalInfo/voting/VoteButtons';
import EmergencyVoteBalance from './voting/EmergencyVoteBalance';

function EmergencyProposal({ emergency }: any) {
  const { emergencyInfo, emergencyVoteBalance, votes } = useContractEmergency({
    emergency
  });
  const currentBlockHeight = useRecoilValue(currentBlockHeightAtom);
  const { handleClickFinalizeEmergency } = useHandleClicks();
  const [inputVoteTokenAmount, setInputVoteTokenAmount] = useState(0);
  return emergencyInfo !== undefined ? (
    <>
      <FinderContractLink contract={emergencyInfo.addr} />
      <Text>{emergencyInfo.name}</Text>
      <Text>Closing block: {emergencyInfo.closing_block}</Text>
      <Text>State of Proposal: {Object.keys(emergencyInfo.state)[0]}</Text>
      <EmergencyVoteBalance
        symbol={emergencyInfo.name}
        voteTokenBalance={emergencyVoteBalance}
      />
      <InputVoteAmount
        voteTokenBalance={emergencyVoteBalance}
        inputVoteTokenAmount={inputVoteTokenAmount}
        setInputVoteTokenAmount={setInputVoteTokenAmount}
      />
      <VoteButtons
        contract={emergencyInfo.addr}
        voteTokenBalance={emergencyVoteBalance}
        inputVoteTokenAmount={inputVoteTokenAmount}
      />
      <Box layerStyle="emergencyVote">
        <Text>State of Proposal: {Object.keys(emergencyInfo.state)[0]}</Text>
        {currentBlockHeight > emergencyInfo.closing_block ? (
          <>
            {emergencyInfo.state.NotFinalized && (
              <Button
                onClick={async () => {
                  await handleClickFinalizeEmergency(emergency.index);
                }}
              >
                Finalize Proposal
              </Button>
            )}
          </>
        ) : null}
      </Box>
    </>
  ) : (
    <>Loading...</>
  );
}

export default EmergencyProposal;
