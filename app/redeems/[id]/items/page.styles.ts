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
  display: flex;
  flex-wrap: wrap;
  
  gap: 20px;
`