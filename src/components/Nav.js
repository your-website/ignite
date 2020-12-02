import React from "react";
// Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { fadeIn, animSlideFromLeft } from "../animations";

// Redux and Routes
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Container>
        <Link to="/">
          <Logo>
            <img src={logo} alt="logo" />
            <h1>Ignite</h1>
          </Logo>
        </Link>
        <Ul>
          <li>
            <Link to="/upcoming">Upcoming</Link>
            {pathname === "/upcoming" ? (
              <Line variants={animSlideFromLeft} />
            ) : (
              ""
            )}
          </li>
          <li>
            <Link to="/new">New games</Link>
            {pathname === "/new" ? <Line variants={animSlideFromLeft} /> : ""}
          </li>
          <li>
            <Link to="/popular">Popular</Link>
            {pathname === "/popular" ? (
              <Line variants={animSlideFromLeft} />
            ) : (
              ""
            )}
          </li>
          <li>
            <Link to="/searched">Searched</Link>
            {pathname === "/searched" ? (
              <Line variants={animSlideFromLeft} />
            ) : (
              ""
            )}
          </li>
        </Ul>
      </Container>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;

  @media (max-width: 620px) {
    padding: 3rem 0.6rem;
  }

  @media (max-width: 430px) {
    padding-bottom: 0rem;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

const Ul = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  li {
    position: relative;
    list-style: none;
    margin-left: 5rem;
  }

  @media (max-width: 768px) {
    li {
      margin-left: 2rem;
    }
  }

  @media (max-width: 430px) {
    flex-wrap: wrap;
    justify-content: space-between;

    li {
      margin: 2rem;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: lightblue;
  width: 100%;
  position: absolute;
  bottom: -80%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 620px) {
    flex-direction: column;
    justify-content: space-between;
    min-height: 10vh;
  }
`;

export default Nav;
