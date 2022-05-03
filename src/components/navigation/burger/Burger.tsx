import { useRef } from 'react';

import BurgerIcon from 'components/navigation/burgerIcon/BurgerIcon';
import BurgerMenu from 'components/navigation/burgerMenu/BurgerMenu';

import useOnClickOutside from 'utilities/hooks/useOnClickOutside';

interface ComponentProps {
  burgerIsOpen: boolean;
  setBurgerIsOpen: (open: boolean) => void;
  navLinks: Array<string>;
}

function Burger({ burgerIsOpen, setBurgerIsOpen, navLinks }: ComponentProps) {
  const burgerRef = useRef<HTMLDivElement>(null);

  // closes menu when clicking anywhere outside of it
  useOnClickOutside(burgerRef, () => setBurgerIsOpen(false));

  return (
    <div ref={burgerRef}>
      <BurgerIcon open={burgerIsOpen} setOpen={setBurgerIsOpen} />
      <BurgerMenu
        open={burgerIsOpen}
        setOpen={setBurgerIsOpen}
        navLinks={navLinks}
      />
    </div>
  );
}

export default Burger;
