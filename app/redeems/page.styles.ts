import { body } from "@/utils/typographies";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 40px;
`

export const Title = styled.h1`
  ${body}
  font-weight: 600;
  color: var(--black);
`

export const ItemsWrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    flex-direction: row;
  }
`

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  width: 100%;
`