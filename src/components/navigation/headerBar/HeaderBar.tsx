import { useState } from 'react';
import styled from 'styled-components';
import Logo from 'components/navigation/logo/Logo';
import NavLinks from 'components/navigation/navlinks/NavLinks';
import Burger from 'components/navigation/burger/Burger';

interface Props {
  id: string;
  src: string;
  alt: string;
  navLinks: Array<string>;
  modalIsOpen: boolean;
  open: boolean;
  setOpen: (arg0: boolean) => void;
}
interface StyledProps {
  modalIsOpen: boolean;
}

function HeaderBar({
  id,
  src,
  alt,
  navLinks,
  modalIsOpen,
  open,
  setOpen
}: Props) {
  return (
    <Header modalIsOpen={modalIsOpen} id={id}>
      <Logo src={src} alt={alt} />
      <NavLinks navLinks={navLinks} />
      <Burger open={open} setOpen={setOpen} navLinks={navLinks} />
    </Header>
  );
}

const Header = styled.header<StyledProps>`
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background: rgba(4, 3, 7, 0.5);
  pointer-events: auto;
  filter: blur(0) !important;

  @media (min-width: 1440px) {
    height: 81px;
  }
`;

export default HeaderBar;
