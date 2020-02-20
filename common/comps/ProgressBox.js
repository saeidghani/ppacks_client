import React from 'react';
import {
  ProgressBox,
} from '../../styles/ItemStyles/UserFeedbackSectionStyles';
import { IconStarFilled } from '../../common/comps/SvgIcons';
import Progress from '../../common/styled/Progress';

function ProgressBox() {
  return (
    <ProgressBox right='1rem'>
      <span>5</span>
      <IconStarFilled size='20'/>
      <Progress percent={50}/>
    </ProgressBox>
  );
}

export default ProgressBox;



