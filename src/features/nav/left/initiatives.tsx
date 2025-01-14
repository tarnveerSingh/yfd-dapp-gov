import { Link } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';

import styles from '@scss/side.module.scss';
import { Icons } from '@var/icons';

import ProposalModal from '@features/proposal/proposalCreationModal/ProposalModal';
import ProposalModalButton from '@features/proposal/proposalCreationModal/ProposalModalButton';

export default function MenuLeftInitiatives() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className={styles['side-wrapper-menu']}>
        <div className={styles['side-title']}>Initatives</div>
        <div className={styles['side-menu']}>
          <ProposalModalButton onOpen={onOpen} />
          <ProposalModal isOpen={isOpen} onClose={onClose} />
          <Link to="/proposals-vaults">
            <i className="material-symbols-outlined">{Icons.vault}</i>
            Vaults
          </Link>
          <Link to="/proposals-initiatives">
            <i className="material-symbols-outlined">{Icons.initiative}</i>
            Funding
          </Link>
        </div>
      </div>
    </>
  );
}
