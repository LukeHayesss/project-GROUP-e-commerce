import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "./GlobalStyles";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const handleClickScroll = () => {
    window.scrollTo(0,0)
  };

  return (

  <Wrapper>
      <div>
        <CompanyInfoContainer>
          <Logo onClick={handleClickScroll} to="/">
              <span>COOLSTUFF</span>
            </Logo>
          <li>support@coolstuff.ca</li>
          
          <Icons>
            <IconLink href="/" target="_blank">
                <FaFacebook />
              </IconLink>
              <IconLink href="/" target="_blank">
                <FaInstagram />
              </IconLink>
              <IconLink href="/" target="_blank">
                <FaTwitter />
              </IconLink>
              <IconLink href="/" target="_blank">
                <FaYoutube />
              </IconLink>
          </Icons>
        </CompanyInfoContainer>
      </div>
      <div>
        <InfoContainer>
          <Title>CUSTOMER SERVICE</Title>
          <li>FAQ</li>
          <li>Returns</li>
          <li>Contact us</li>
          <li>Reviews</li>
        </InfoContainer>
      </div>
      <div>
        <InfoContainer>
          <Title>#CoolStuff</Title>
          <li>Our Blog</li>
          <li>Contact</li>
          <li>Our Story</li>
          
        </InfoContainer>
      </div>
    </Wrapper> 
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #4E545C
`;

const CompanyInfoContainer = styled.div`
  list-style: none;
  li {
    padding: 7px;
    color: white;
  }
  li:hover {
    cursor: default;
  }
`;

const InfoContainer = styled.div`
  list-style: none;
  li {
    padding: 7px;
    color: white;
  }
  li:hover {
    cursor: pointer;
    color: ${theme.accentColor};
  }
`;

const Title = styled.div`
  list-style: none;
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  :hover {
    cursor: default;
  }
`;


// const Container = styled.div`
//   background-color: #4E545C;
//   color: #fff;
  
// `;

// const FooterWrap = styled.footer`
//     grid-area: footer;
//     padding: 16px 20px;
// `;
// const FooterWrap = styled.div`
//   padding: 48px 24px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   max-width: 1100px;
//   margin: 0 auto;
// `;

// const LinksMain = styled.div`
//   display: flex;
//   justify-content: center;
//   @media screen and (max-width: 820px) {
//     padding-top: 32px;
//   }
// `;

// const Wrapper = styled.div`
//   display: flex;
//   @media screen and (max-width: 820px) {
//     flex-direction: column;
//   }
// `;

// const FooterLinkItems = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   margin: 16px;
//   text-align: left;
//   width: 160px;
//   box-sizing: border-box;
//   font-family: ${theme.headingFont};
//   @media screen and (max-width: 420px) {
//     margin: 0;
//     padding: 10px;
//     width: 100%;
//   }
// `;

// const LinkTitles = styled.h1`
//   font-size: 14px;
//   margin-bottom: 16px;
// `;

// const FooterLink = styled(Link)`
//   text-decoration: none;
//   margin-bottom: 0.5rem;
//   font-size: 14px;
//   color: #fff;
//   transition: 0.3s ease-out;
//   &:hover {
//     color: ${theme.accentColor};
//   }
// `;

// const Media = styled.section`
//   max-width: 1100px;
//   width: 100%;
// `;

// const MediaWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   max-width: 1100px;
//   margin: 40px auto 0 auto;
//   @media screen and (max-width: 820px) {
//     flex-direction: column;
//   }
// `;

const Logo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.9rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  font-family: ${theme.headingFont};
`;

// const CopyRight = styled.small`
//   color: #fff;
//   margin-bottom: 16px;
//   font-family: ${theme.contentFont};
//   line-height: 2;
// `;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 120px;
`;


const IconLink = styled.a`
  color: #fff;
  font-size: 24px;
  transition: 0.8s ease-out;
  &:hover {
    color: ${theme.accentColor};
  }
`;

export default Footer;