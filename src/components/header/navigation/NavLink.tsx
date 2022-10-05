import { Link } from '@chakra-ui/react';

function NavLink({ link }: any) {
  return (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      color="white"
      _hover={{
        textDecoration: 'none',
        bg: 'orange.600'
      }}
      href={link.link}
    >
      {link.label}
    </Link>
  );
}

export default NavLink;
