import React from 'react';
import {
  CardBottom,
  CardSubtitle,
  CardTitle,
  CardTop,
  StyledCard,
} from './CardStyles';

const Card = ({
  topHeight,
  topWidth,
  topBg,
  bottomHeight,
  bottomWidth,
  bottomBg,
  childrenTop,
  childrenBottom
}) => {
  return (
    <StyledCard>
      <CardTop dimensions={{ h: topHeight, w: topWidth }} bg={topBg}>
        {childrenTop && childrenTop}
      </CardTop>
      <CardBottom
        dimensions={{ h: bottomHeight, w: bottomWidth }}
        bg={bottomBg}
      >
        {childrenBottom && childrenBottom}
      </CardBottom>
    </StyledCard>
  );
};

export default Card;
