import styled from 'styled-components';

export const FlexCol = styled.div`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: ${({ gap }) => gap || '0'};
  align-items: ${({ centerX }) => (centerX ? 'center' : 'flex-start')};
`;

export const FlexRow = styled.div`
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || 'auto'};
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ gap }) => gap || '0'};
  margin-bottom: ${({ mBottom }) => mBottom || '0'};
`;

export const FlexBox = styled.div`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  display: flex;
  justify-content: center;
  align-items: center;
`;
