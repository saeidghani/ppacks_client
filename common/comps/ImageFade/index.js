import React, { useState, useEffect } from 'react';
import { useTransition, config } from 'react-spring';

import {ImageFadeContainer, ImgWrapper} from './ImageFadeStyles';

const ImageFade = ({ children, slides }) => {
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });

  useEffect(() => {
    setInterval(() => set(state => (state + 1) % 6), 3000);
  }, []);

  // const transitions = useTransition(null, null, {
  //   config: { mass: 5, tension: 300, friction: 100 },
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 }
  // });

  return (
    <ImageFadeContainer>
     {transitions.map(({ item, props, key }) => (
      <ImgWrapper
        key={key}
        style={{ ...props }}
      >
        <img src={item.url} alt=""/>
      </ImgWrapper>
      ))}
    </ImageFadeContainer>
  )
};

export default ImageFade;

