import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 36px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 32px;
  }
`;