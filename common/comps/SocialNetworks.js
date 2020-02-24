import React from 'react';
import styled from 'styled-components';
import {IconFacebook, IconInstagram, IconTwitter, IconLinkedin} from './SvgIcons';

const SocialNetworksContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1rem;
  margin-left: auto;
`;


function SocialNetworks() {
    return (
        <SocialNetworksContainer>
            <IconFacebook size={40}/>
            <IconInstagram size={40}/>
            <IconTwitter size={40}/>
            <IconLinkedin size={40}/>
        </SocialNetworksContainer>
    )
}

export default SocialNetworks;