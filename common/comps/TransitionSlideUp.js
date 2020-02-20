import React, { Fragment, useState } from 'react';
import { Spring } from 'react-spring/renderprops.cjs';
import { useTransition, animated } from 'react-spring';
import VisibilitySensor from './VisibilitySensor';


function TransitionSlideUp({ children }) {
  const [show, setShow] = useState(false);

  const transitions = useTransition(null, null, {
    config: { mass: 5, tension: 300, friction: 100 },
    from: { opacity: 0, transform: 'translate3d(0, 4rem, 0)' },
    to: { opacity: show ? 1 : 0, transform: show ? 'translate3d(0, 0, 0)' : 'translate3d(0, 4rem, 0)' }
  });

  return (
    <Fragment>
      <VisibilitySensor partialVisibility once>
        {({ isVisible }) => (
          <Spring
            // delay={300}
            // from={{ opacity: 0, transform:'translate3d(0, 9rem, 0)' }}
            to={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translate3d(0, 0rem, 0)' : 'translate3d(0, 9rem, 0)'
            }}
          >
            {props => <div style={props}>{children}</div>}
          </Spring>
        )}
      </VisibilitySensor>
    </Fragment>
  );
}

export default TransitionSlideUp;
