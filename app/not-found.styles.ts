
import styled from "styled-components";
import { body, subtitle } from "./utils/typographies";
import Image from "next/image";

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;

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

  > img {
    position: relative !important;
  }
`;

export const TextsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 0px 16px;
`

export const Title = styled.h1`
  ${subtitle}
`

export const Text = styled.p`
  ${body}
`