"use client";

import styled from "styled-components";
import CircleCheckbox, { CircleCheckboxProps } from "../CircleCheckbox";
import Image, { ImageProps } from "next/image";
import { CardContainer, CheckboxWrapper, Title } from "./styles";

interface CardProps {
  children: React.ReactNode;
}

const DEFAULT_CARD_IMAGE_OPTIONS = {
  width: 260,
  height: 260,
}

function CardComponent({ children }: CardProps) {
  return <CardContainer>{children}</CardContainer>;
}

function CardCircleCheckbox(props: CircleCheckboxProps) {
  return (
    <CheckboxWrapper>
      <CircleCheckbox {...props} />
    </CheckboxWrapper>
  );
};

function CardImage(props: ImageProps) {
  return <Image {...DEFAULT_CARD_IMAGE_OPTIONS} {...props} />;
};

function CardTitle({ children }: { children: React.ReactNode }) {
  return <Title>{children}</Title>;
};


const Card = Object.assign(CardComponent, {
  CircleCheckbox: CardCircleCheckbox,
  Image: CardImage,
  Title: CardTitle,
})

export default Card;
