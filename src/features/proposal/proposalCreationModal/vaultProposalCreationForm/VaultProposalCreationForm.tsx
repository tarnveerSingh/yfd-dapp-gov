import {
  ButtonGroup,
  FormLayout,
  FormStep,
  FormStepper,
  Loader,
  NextButton,
  PrevButton,
  Property,
  PropertyList,
  StepForm,
  StepperCompleted
} from '@saas-ui/react';
import { Divider, Text } from '@chakra-ui/react';
import InputProposalName from './inputs/InputProposalName';
import InputDevelopmentCost from './inputs/InputDevelopmentCost';
import InputExpiration from './inputs/InputExpiration';
import InputGithub from './inputs/InputGithub';
import InputInitialFunding from './inputs/InputInitialFunding';
import InputPaymentFrequency from './inputs/InputPaymentFrequency';
import InputPaymentSchedule from './inputs/InputPaymentSchedule';
import InputProposalUrl from './inputs/InputProposalUrl';
import InputQuorumPercentage from './inputs/InputQuorumPercentage';
import InputSelfVouchedInformation from './inputs/InputSelfVouchedInformation';
import InputStatementOfWork from './inputs/InputStatementOfWork';
import InputTvlLimit from './inputs/InputTvlLimit';
import useHandleClicks from 'hooks/useHandleClicks';
import { useRecoilValue } from 'recoil';
import {
  inputDeveloperWallet,
  inputDevelopmentCost,
  inputExpiration,
  inputGithub,
  inputInitialFunding,
  inputNameProposal,
  inputNFTAmount,
  inputPaymentFrequency,
  inputPaymentSchedule,
  inputQuorumPercent,
  inputSelfVoucedInformation,
  inputStatementOfWork,
  inputTvlLimit,
  inputUrlProposal
} from 'recoil/input/atoms';
import txHashAtom from 'recoil/txHash/atom';
import ProposalSubmittedText from '../ProposalSubmittedText';
import InputNFTAmount from './inputs/InputNFTAmount';
import InputDeveloper from './inputs/InputDeveloper';

function ProposalCreationForm({ onClose }: any) {
  const { handleClickCreateVaultProposal } = useHandleClicks();
  const onSubmit = () => {
    handleClickCreateVaultProposal();
  };

  const nameProposal = useRecoilValue(inputNameProposal);

  const urlProposal = useRecoilValue(inputUrlProposal);
  const tvlLimit = useRecoilValue(inputTvlLimit);
  const developmentCost = useRecoilValue(inputDevelopmentCost);
  const statementOfWork = useRecoilValue(inputStatementOfWork);
  const paymentSchedule = useRecoilValue(inputPaymentSchedule);
  const github = useRecoilValue(inputGithub);
  const quorumPercent = useRecoilValue(inputQuorumPercent);
  const selfVouchedInformation = useRecoilValue(inputSelfVoucedInformation);
  const expiration = useRecoilValue(inputExpiration);
  const paymentFrequency = useRecoilValue(inputPaymentFrequency);
  const initialFunding = useRecoilValue(inputInitialFunding);
  const nftAmount = useRecoilValue(inputNFTAmount);
  const developer = useRecoilValue(inputDeveloperWallet);

  const txHash = useRecoilValue(txHashAtom);

  return (
    <StepForm w="95%" onSubmit={onSubmit}>
      <FormLayout>
        <FormStepper orientation="vertical">
          <FormStep name="proposal" title="Proposal Details">
            <FormLayout>
              <InputProposalName />
              <InputProposalUrl />
              <InputStatementOfWork />
              <NextButton />
            </FormLayout>
          </FormStep>
          <FormStep name="proposer" title="Proposer Info">
            <FormLayout>
              <InputGithub />
              <InputSelfVouchedInformation />
              <ButtonGroup>
                <NextButton />
                <PrevButton variant="ghost" />
              </ButtonGroup>
            </FormLayout>
          </FormStep>
          <FormStep name="funding" title="Funding Info">
            <FormLayout>
              <InputTvlLimit />
              <InputDevelopmentCost />
              <InputNFTAmount />
              <InputInitialFunding />
              <ButtonGroup>
                <NextButton />
                <PrevButton variant="ghost" />
              </ButtonGroup>
            </FormLayout>
          </FormStep>
          <FormStep name="finalizing" title="Finalizing Parameters">
            <FormLayout>
              <InputDeveloper />
              <InputPaymentSchedule />
              <InputPaymentFrequency />
              <ButtonGroup>
                <NextButton />
                <PrevButton variant="ghost" />
              </ButtonGroup>
            </FormLayout>
          </FormStep>
          <FormStep name="confirm" title="Confirm">
            <FormLayout>
              <Text>Please confirm that your information is correct.</Text>
              <PropertyList>
                <Text mt="5" size="sm">
                  Proposal Info
                </Text>
                <Divider />
                <Property label="Name" value={nameProposal} />
                <Property label="Proposal URL" value={urlProposal} />
                <Property
                  label="Statement of Work URL"
                  value={statementOfWork}
                />
                <Text mt="5" size="sm">
                  Proposer Info
                </Text>
                <Divider />
                <Property label="Github URL" value={github} />
                <Property
                  label="Self Vouched Info"
                  value={selfVouchedInformation}
                />
                <Text mt="5" size="sm">
                  Funding Info
                </Text>
                <Divider />
                <Property label="Maximum TVL" value={tvlLimit} />
                <Property label="Development Cost" value={developmentCost} />
                <Property label="Initial Funding" value={initialFunding} />
                <Text mt="5" size="sm">
                  Finalize Parameters
                </Text>
                <Divider />
                <Property label="Developer" value={developer} />
                <Property label="Payment Schedule" value={paymentSchedule} />
                <Property label="Payment Frequency" value={paymentFrequency} />
                <Property label="NFT Amount" value={nftAmount} />
                <Divider />
              </PropertyList>
              <ButtonGroup>
                <NextButton />
                <PrevButton variant="ghost" />
              </ButtonGroup>
            </FormLayout>
          </FormStep>

          <StepperCompleted>
            {txHash !== '' ? (
              <ProposalSubmittedText onClose={onClose} />
            ) : (
              <Loader>Submitting proposal, just a moment...</Loader>
            )}
          </StepperCompleted>
        </FormStepper>
      </FormLayout>
    </StepForm>
  );
}

export default ProposalCreationForm;
