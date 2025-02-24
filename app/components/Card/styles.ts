import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  position: relative;

  border: 1px solid var(--gray-3);
  border-radius: 8px;
  padding: 16px;
  background-color: var(--white);
  text-align: center;
`;

export const Title = styled.h3`
  color: var(--black);
  font-size: 16px;
  font-weight: 600;
`;

export const CheckboxWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;