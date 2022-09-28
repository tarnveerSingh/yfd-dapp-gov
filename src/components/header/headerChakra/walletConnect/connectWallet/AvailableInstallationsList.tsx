import { useWallet } from '@terra-money/wallet-provider';
import { MenuItem, Image, Link, MenuGroup } from '@chakra-ui/react';

function AvailableInstallationsList() {
  const { availableInstallations } = useWallet();
  return (
    <MenuGroup title="Ready to Install">
      {availableInstallations.map(
        ({ type, name, icon, identifier = '', url }: any) => (
          <MenuItem as={Link} key={`${type}:${identifier}`} href={url}>
            <Image mr={4} height={5} src={icon} alt={name} />
            {name}
          </MenuItem>
        )
      )}
    </MenuGroup>
  );
}

export default AvailableInstallationsList;
