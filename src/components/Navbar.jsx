import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Container } from './Wrappers';

const Nav = styled.nav`
  width: 100%;
  height: 12vh;
  background-color: transparent;
  font-family: 'Roboto', sans-serif;

  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 768px) {
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
      /* background-color: #393127; */
      background-color: #191511;
      opacity: 0.2;
    }
  }

  .active {
    transform: translateX(0%);
    opacity: 1;
  }
`;

const NavContainer = styled(Container)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
  color: #fff;
  letter-spacing: 0.1rem;
  cursor: pointer;
  margin-left: 1rem;

  @media only screen and (max-width: 568px) {
    font-size: 1.1rem;
  }
`;

const Links = styled.ul`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 88vh;
    top: 12vh;

    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 0;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
      /* background-color: #393127; */
      background-color: #191511;
      opacity: 0.9;
    }
    /* background-color: #393127; */
    /* background-color: #191511; */

    transform: translateX(-120%);
    opacity: 0;
    transition: all 0.5s ease;
  }
`;

const LinkItem = styled.li`
  font-weight: 300;
  display: inline-block;
  /* color: #a29e99; */
  color: #e2dcd5;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    color: #fff;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
    font-weight: 400;
  }
`;

const LinkButton = styled(LinkItem)`
  @media only screen and (min-width: 768px) {
    /* border: 2px solid #a29e99; */
    border: 2px solid #e2dcd5;
    padding: 0.7rem 1.9rem;
  }
`;

const Icon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  margin-right: 1rem;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const linkItems = [
  { name: 'Home', url: '/', button: false },
  { name: 'About', url: '/about', button: false },
  // { name: 'Blog', url: '/blog', button: false },
  { name: 'Contact', url: '/contact', button: false },
  { name: 'Book', url: '/book', button: true },
];

const Navbar = () => {
  const router = useRouter();
  const [active, setActive] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <Fade>
          <Link href='/'>
            <Brand onClick={() => setActive(false)}>PLEASANT VIEW</Brand>
          </Link>
        </Fade>

        <Icon className='mobile-nav' onClick={() => setActive(!active)}>
          {active ? <FaTimes color='#a29e99' /> : <FaBars color='#a29e99' />}
        </Icon>

        <Links className={active && 'active'}>
          {linkItems.map((link, index) =>
            link.button ? (
              <Link href={link.url} key={index}>
                <LinkButton onClick={() => setActive(false)}>
                  {link.name}
                </LinkButton>
              </Link>
            ) : (
              <Link href={link.url} key={index}>
                <LinkItem
                  className={router.pathname === link.url && 'active-link'}
                  onClick={() => setActive(false)}
                >
                  {link.name}
                </LinkItem>
              </Link>
            )
          )}
        </Links>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
