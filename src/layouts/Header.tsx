import { Image } from '@chakra-ui/react';

import yLogo from '@yfd/logo-horizontal-orange-white.svg';
import WalletConnect from '@features/walletConnect/WalletConnect';
import FYFD from '@components/StakeYFD';

import styles from '@scss/app.module.scss';

export default function Header() {
  return (
    <>
      <div className={styles.logo}>
        <Image h={10} src={yLogo} alt="Y-Foundry Logo" />
      </div>
      <div className={styles['header-menu']}></div>
      <div className={styles['header-profile']}>
        <FYFD />
        <WalletConnect />
      </div>
    </>
  );
}
