import React, { useEffect, useState } from 'react';
import styled, {css} from 'styled-components';

import {IconRightArrow} from '../comps/SvgIcons';

const StyledCollapse = styled.div`
  border-bottom: 1px solid #e6e6e6;
  ${({lastOne}) => lastOne && css`
    border: none;
`}  

  .title {
    display: flex;
    align-items: center;
  }
  
  .arrow {
    cursor: pointer;
    height: 24px;   
    
    &--down {
        transform: rotate(+90deg);    
    }
  }
  
  padding: 1.5rem 0;
`;

function Collapse({title, lastOne, children, show}) {
    const [contentIsShown, setContentIsShown] = useState(false);

    useEffect(() => {
      if(show) setContentIsShown(true);
    }, [show]);

    const showContent = () => {
        setContentIsShown(!contentIsShown);
    };

    const iconType = contentIsShown ? 'down' : 'right';

    return (
        <StyledCollapse lastOne={lastOne}>
            <div className='title' onClick={showContent}>
                <span className={`arrow arrow--${iconType}`}>
                    <IconRightArrow size='24'/>
                </span>
                {title}
            </div>
            {contentIsShown && children}
        </StyledCollapse>
    )
}

export default Collapse;