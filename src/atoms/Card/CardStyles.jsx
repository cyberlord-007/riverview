import styled from 'styled-components';

export const StyledCard = styled.div`
  width: 280px;
  height: 400px;
  background: #c5dff8;
  border-radius: 20px;
  box-shadow: 0 0 10px #c1d5f3;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardTop = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 20px;
  background-size: cover;
  background-image: url(${({ bg }) => bg || ''});
  background: ${({ bg }) => !bg && 'transparent'};
  border-bottom: ${({ bg }) => !bg && '1px solid #4a55a2'};
  /* padding: 1.2rem; */
`;

export const CardBottom = styled.div`
  width: 100%;
  height: ${({ dimensions }) => dimensions?.h || 'auto'};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

export const CardTitle = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1.2rem;
  color: #4a55a2;
  font-weight: 700;
`;

export const CardSubtitle = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1rem;
  color: #4a55a2;
`;
