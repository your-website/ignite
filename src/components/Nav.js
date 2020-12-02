import React, { useState } from "react";
// Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { fadeIn } from "../animations";

// Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

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
            <Line />
          </li>
          <li>
            <Link to="/new">New games</Link>

            <Line />
          </li>
          <li>
            <Link to="/popular">Popular</Link>
            <Line />
          </li>
          <li>
            <Link to="/searched">Searched</Link>
            <Line />
          </li>
        </Ul>
      </Container>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;

  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }

  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: lightblue;
    color: #000;
  }

  form {
    display: flex;
    align-items: flex-end;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 2rem;

    input {
      width: 50%;
      padding: 0.5rem 2rem;
    }
  }

  @media (max-width: 400px) {
    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    input {
      width: 80%;
      padding: 0.5rem 2rem;
    }
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
`;

export default Nav;
