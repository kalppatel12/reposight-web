import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button, 
  Image
} from "@nextui-org/react";

import { navLinks } from "@/constants/nav-constants";
const AppBar = () => {
  return (
    <Navbar
      isBordered
      shouldHideOnScroll
      className="bg-transparent text-white "
      maxWidth="full"
    >
      <NavbarContent justify="end">
        <NavbarBrand className="mr-4">
          <Image
            src="reposight.svg"
            alt="Logo"
            width={200}
            height={40}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
  {navLinks.map((nav, index) => (
    <NavbarItem key={nav.id}>
      <Link href={nav.href} className="text-white bg-black p-3 rounded-lg text-1.5xl">{nav.title}</Link>
    </NavbarItem>
  ))}
</NavbarContent>




    </Navbar>
  );
};

export default AppBar;
