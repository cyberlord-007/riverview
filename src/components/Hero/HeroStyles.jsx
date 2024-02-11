import styled from 'styled-components';

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #c5dff8;
`;

export const HeroLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding: 20px 20px 20px 40px;
`;

export const HeroRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeroImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const HeroImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const HeroTitleWrapper = styled.div`
  margin-bottom: 1.5rem;
  padding-top: 6rem;
`;

export const HeroTitle = styled.h1`
  margin: 0;
  padding: 0;
  color: #4a55a2;
  font-size: 4rem;
  font-weight: 700;
  font-style: normal;
`;

export const HeroHighlight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  color: #6f8fc9;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
`;

export const HeroHighlightText = styled.p`
  margin: 0;
  padding: 0;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
`;
