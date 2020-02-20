import React from 'react';

import { AboutContainer, Title, Paragraph, Photos, Voice, WeAre, ImgWrapper } from '../../styles/AboutStyles';

function About() {

  return (
    <AboutContainer>
      <Title>Global Village</Title>
      <Paragraph>
        Just as we have built a sparkling constellation of brands,
        those brands have helped us build a brilliant universe of customers.
        Our community supports passionate wanderlovers from all walks of life,
        a global village of members who trust each other and share their opinions.
        Our customers know what they want—from their lives and
        their gear—and we count on them to provide feedback that helps guide fellow travelers
        as they shop for their next perfect purchase
      </Paragraph>
      <Photos>
        <ImgWrapper>
          <img src="/img/posters/aboutUs/aboutUs2.jpg" alt=""/>
        </ImgWrapper>
        <Voice>
          <Title>Our Voice</Title>
          <Title>Uncomplicated</Title>
          <Title>Helpful</Title>
          <Title>Open-minded</Title>
          <Title>Quirky</Title>
          <Title>Optimistic</Title>
        </Voice>
      </Photos>
      <Title>
        We Are
      </Title>
      <WeAre>
        <div>
          <Title>
            BOLD
          </Title>
          <Paragraph>
            We move fast. We innovate and blaze trails, always asking what's next?
          </Paragraph>
        </div>
        <div>
          <Title>
            DRIVEN
          </Title>
          <Paragraph>
            We're always on. In a rentless pursuit of a better journey for our customers.
          </Paragraph>
        </div>
        <div>
          <Title>
            OWNERS
          </Title>
          <Paragraph>
            We have the hearts of entrepreneurs and the mindset of owners.
          </Paragraph>
        </div>
        <div>
          <Title>
            TOGETHER
          </Title>
          <Paragraph>
            We are partners with each other, with our business associates, for our customers. Collectively, we create
            the
            world's most beloved destination for all things travel.
          </Paragraph>
        </div>
      </WeAre>
      <ImgWrapper>
        <img src="/img/posters/aboutUs/aboutUs1.jpg" alt=""/>
      </ImgWrapper>
    </AboutContainer>
  );
}

export default About;