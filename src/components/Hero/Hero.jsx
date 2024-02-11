import React from 'react';
import {
  Break,
  BtnWrapper,
  HeroHighlight,
  HeroHighlightText,
  HeroImg,
  HeroImgWrapper,
  HeroLeft,
  HeroRight,
  HeroTitle,
  HeroTitleWrapper,
  HeroWrapper,
} from './HeroStyles';
import HeroSvg from '../../assets/images/hero.svg';
import { FcGraduationCap } from 'react-icons/fc';
import Button from '../../atoms/Button/Button';

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroLeft>
        <HeroTitleWrapper>
          <HeroTitle>Riverview</HeroTitle>
          <HeroTitle>International School</HeroTitle>
        </HeroTitleWrapper>
        <HeroHighlight>
          <FcGraduationCap />
          <HeroHighlightText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            mollitia?
          </HeroHighlightText>
        </HeroHighlight>
        <HeroHighlight>
          <FcGraduationCap />
          <HeroHighlightText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            mollitia?
          </HeroHighlightText>
        </HeroHighlight>
        <HeroHighlight>
          <FcGraduationCap />
          <HeroHighlightText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            mollitia?
          </HeroHighlightText>
        </HeroHighlight>
        <HeroHighlight>
          <FcGraduationCap />
          <HeroHighlightText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            mollitia?
          </HeroHighlightText>
        </HeroHighlight>
        <HeroHighlight>
          <FcGraduationCap />
          <HeroHighlightText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            mollitia?
          </HeroHighlightText>
        </HeroHighlight>
        <BtnWrapper>
          <Button hover={true} primary={true} label={'Click Me'} />
          <Button hover={true} primary={false} label={'Click Me'} />
        </BtnWrapper>
      </HeroLeft>
      <HeroRight>
        <HeroImgWrapper>
          <HeroImg src={HeroSvg} />
        </HeroImgWrapper>
      </HeroRight>
    </HeroWrapper>
  );
};

export default Hero;
