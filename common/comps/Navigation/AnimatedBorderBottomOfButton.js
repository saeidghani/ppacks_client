import React, {useState} from 'react';
import { useSpring, animated, config } from 'react-spring';
import styled from 'styled-components';

const AnimatedBorderBottomOfButtonContainer = styled(animated.div)`
  width: 5rem;
  cursor: pointer;
`;

const Title = styled.span`
  color: black;  
`;

const Line = styled(animated.div)`
  background-color: black;
  height: 4px;  
`;

function AnimatedBorderBottomOfButton({children, lineWidth}) {
  const [show, setShow] = useState(false);

  const config = { mass: 1, tension: 2000, friction: 200 };

  const props = useSpring( {
    config,
    width: show ? lineWidth : '0rem',
    from: {width: '0rem'}
  });

  return (
    <AnimatedBorderBottomOfButtonContainer
      onMouseEnter={() => setShow(state => !state)}
      onMouseLeave={() => setShow(state => !state)}
    >
      <Title>{children}</Title>
      <Line style={props} />
    </AnimatedBorderBottomOfButtonContainer>
  );
}

export default AnimatedBorderBottomOfButton;