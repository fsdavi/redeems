
import styled from "styled-components";
import { body, subtitle } from "./utils/typographies";

export const Wrapper = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;
  background-color: var(--white);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const TextsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

export const Title = styled.h1`
  ${subtitle}
`

export const Text = styled.p`
  ${body}
`