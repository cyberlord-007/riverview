import React from 'react';
import { FlexRow } from '../../atoms/Containers';
import Card from '../../atoms/Card/Card';
import { CardSubtitle, CardTitle } from '../../atoms/Card/CardStyles';

const Admin = () => {
  return (
    <FlexRow gap='2rem'>
      <Card
        topHeight={'75%'}
        topWidth={'100%'}
        bottomHeight={'25%'}
        bottomWidth={'100%'}
        topBg={'https://xsgames.co/randomusers/assets/avatars/male/27.jpg'}
        childrenBottom={bottomCardInfo({
          name: 'Mr. Deepak Pandey',
          designation: 'Principal',
        })}
      />
      <Card
        topHeight={'75%'}
        topWidth={'100%'}
        bottomHeight={'25%'}
        bottomWidth={'100%'}
        topBg={'https://xsgames.co/randomusers/assets/avatars/male/27.jpg'}
        childrenBottom={bottomCardInfo({
          name: 'Mr. Deepak Pandey',
          designation: 'Principal',
        })}
      />
      <Card
        topHeight={'75%'}
        topWidth={'100%'}
        bottomHeight={'25%'}
        bottomWidth={'100%'}
        topBg={'https://xsgames.co/randomusers/assets/avatars/male/27.jpg'}
        childrenBottom={bottomCardInfo({
          name: 'Mr. Deepak Pandey',
          designation: 'Principal',
        })}
      />
    </FlexRow>
  );
};

const bottomCardInfo = (data) => {
  const { name, designation } = data;
  return (
    <>
      <CardTitle>{name}</CardTitle>
      <CardSubtitle>{designation}</CardSubtitle>
    </>
  );
};

export default Admin;
