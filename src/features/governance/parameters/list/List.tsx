import {
  Heading,
  Accordion,
  Flex,
  Box,
  useDisclosure,
  Spacer,
  theme
} from '@chakra-ui/react';
import ListItem from './Item';
import ProposalModal from '@features/proposal/proposalCreationModal/ProposalModal';
import CreateGov from './ButtonCreate';

export default function List({ items }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex w="100%">
        <Box>
          <Heading size="md">Governance Parameters</Heading>
        </Box>
        <Spacer />
        <Box>
          <CreateGov onOpen={onOpen} />
          <ProposalModal isOpen={isOpen} onClose={onClose} />
        </Box>
      </Flex>
      <Accordion w="100%">
        {items.map((item: string) => {
          return <ListItem itemName={item}>{item}</ListItem>;
        })}
      </Accordion>
    </>
  );
}
