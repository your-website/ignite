import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <FooterStyle>
      <p>Roman Kolpachev</p>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.div`
  display: flex;
  align-items: center;
  min-height: 20vh;
  background: #333;
  margin-top: 2rem;

  p {
    color: #fff;
    font-size: 1rem;
    padding: 2rem;
  }
`;
