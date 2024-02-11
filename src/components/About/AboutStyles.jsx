import styled from 'styled-components';
import School from '../../assets/images/school.svg';

export const AboutWrapper = styled.div`
  height: 100%;
  padding: 2rem;
  background: #a0bfe0;
`;

export const SchoolImg = styled.div`
  width: 400px;
  height: 400px;
  background: url(${School});
  background-size: cover;
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  text-align: left;
  color: #4a55a2;
`;
