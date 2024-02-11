import React from 'react';
import { FacilitiesWrapper } from './FacilitiesStyles';
import { FlexCol, FlexRow } from '../../atoms/Containers';
import { AwsmHeader } from '../../atoms/Typography';
import Card from '../../atoms/Card/Card';
import { FaBusAlt, FaChalkboardTeacher, FaWifi } from 'react-icons/fa';
import { GiCctvCamera } from 'react-icons/gi';

const Facilities = () => {
  return (
    <FacilitiesWrapper>
      <FlexCol centerX={true} gap='2rem'>
        <FlexRow>
          <AwsmHeader>Facilities</AwsmHeader>
        </FlexRow>
        <FlexRow gap='2rem'>
          <Card
            topHeight={'10%'}
            topWidth={'100%'}
            bottomHeight={'90%'}
            bottomWidth={'100%'}
            childrenTop={<FaBusAlt size='10rem' color='#7895CB' />}
          />
          <Card
            topHeight={'10%'}
            topWidth={'100%'}
            bottomHeight={'90%'}
            bottomWidth={'100%'}
            childrenTop={<GiCctvCamera size='10rem' color='#7895CB' />}
          />
          <Card
            topHeight={'10%'}
            topWidth={'100%'}
            bottomHeight={'90%'}
            bottomWidth={'100%'}
            childrenTop={<FaChalkboardTeacher size='10rem' color='#7895CB' />}
          />
          <Card
            topHeight={'10%'}
            topWidth={'100%'}
            bottomHeight={'90%'}
            bottomWidth={'100%'}
            childrenTop={<FaWifi size='10rem' color='#7895CB' />}
          />
        </FlexRow>
      </FlexCol>
    </FacilitiesWrapper>
  );
};

export default Facilities;
