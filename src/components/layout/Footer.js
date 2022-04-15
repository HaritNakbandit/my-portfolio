import React from 'react';
import styled from '@emotion/styled';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';

const FooterWrapper = styled.div`
  height: 60px;
  background-color: #ffffff;
  padding:10px;
`;
const FooterText = styled.div`
  font-size: 14px;
  text-align: center;
`;

const FooterContact = styled.div`
  display:flex;
  justify-content:center;
  gap:1rem;
`;

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <FooterContact>
        <IconButton onClick={() => window.location = 'mailto:haritnak@gmail.com'}>
          <EmailIcon />
        </IconButton>
        <IconButton onClick={() => window.location = "https://www.linkedin.com/in/harit-nakbandit-1a5bb9219/"}>
          <LinkedInIcon />
        </IconButton>
        <IconButton onClick={() => window.location = "https://github.com/HaritNakbandit"}>
          <GitHubIcon />
        </IconButton>
      </FooterContact>
      <FooterText>Copyright ©2022 All rights reserved </FooterText>
    </FooterWrapper>
  );
};

export default Footer;
