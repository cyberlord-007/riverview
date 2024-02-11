import React, { Suspense, useState } from 'react';
import { AboutWrapper, SchoolImg, TextWrapper } from './AboutStyles';
import { FlexCol, FlexRow } from '../../atoms/Containers';
import Button from '../../atoms/Button/Button';

const TabComponents = {
  about: React.lazy(() => import('./School')),
  admin: React.lazy(() => import('./Admin')),
  principal: React.lazy(() => import('./PrincipalDesk')),
};

const tabs = [
  {
    key: 'about',
    label: 'About the school',
  },
  {
    key: 'admin',
    label: 'Administration',
  },
  {
    key: 'principal',
    label: "Principal's Desk",
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  const switchTabs = (tab) => {
    console.log(tab);
    setActiveTab(tab);
  };

  return (
    <>
      <AboutWrapper>
        <FlexCol centerX={true} width={'100%'} height={'100%'}>
          <FlexRow mBottom='2rem' gap='2rem'>
            {tabs.map((tab) => (
              <Button
                key={tab.key}
                hover={false}
                primary={activeTab === tab.key}
                label={tab.label}
                clickFn={() => switchTabs(tab.key)}
              />
            ))}
          </FlexRow>
          <Suspense fallback={<div>Loading...</div>}>
            {renderTab(activeTab)}
          </Suspense>
        </FlexCol>
      </AboutWrapper>
    </>
  );
};

const renderTab = (activeTab) => {
  switch (activeTab) {
    case 'about':
      return <TabComponents.about />;
    case 'admin':
      return <TabComponents.admin />;
    case 'principal':
      return <TabComponents.principal />;
    default:
      return <></>;
  }
};

export default About;
