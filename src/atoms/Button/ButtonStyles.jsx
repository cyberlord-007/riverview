import styled from 'styled-components';

export const StyledBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  color: ${({ primary }) => (primary ? '#fff' : '#4a55a2')};
  background: ${({ primary }) => (primary ? '#4a55a2' : '#fff')};
  cursor: pointer;
  border: ${({ primary }) => (primary ? 'none' : '2px solid #4a55a2')};
  font-size: 1rem;
  padding: 1rem 2rem;

  ${({ shouldHover }) =>
    shouldHover
      ? `&:hover {
    background: ${({ primary }) => (primary ? '#fff' : '#4a55a2')};
    border: ${({ primary }) => (primary ? '2px solid #4a55a2' : 'none')};
    color: ${({ primary }) => (primary ? '#4a55a2' : '#fff')};
  }`
      : ''}

  /* &:hover {
    background: ${({ primary }) => (primary ? '#fff' : '#4a55a2')};
    border: ${({ primary }) => (primary ? '2px solid #4a55a2' : 'none')};
    color: ${({ primary }) => (primary ? '#4a55a2' : '#fff')};
  } */
`;
