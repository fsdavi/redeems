"use client";

import { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import Card from ".";

export default {
  title: "Components/Card",
  component: Card,
  args: {
    src: "/example-image.svg",
    alt: "Example Card Image",
    title: "Example Card Title",
    initialChecked: false,
  },
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    title: { control: "text" },
    initialChecked: { control: "boolean" },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

type CardStoryProps = {
  src: string;
  alt: string;
  title: string;
  initialChecked: boolean;
};

const Template: StoryFn<CardStoryProps> = (args) => {
  const [checked, setChecked] = useState(args.initialChecked);

  return (
    <Card>
      <Card.CircleCheckbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <Card.Image src={args.src ?? '/product-fallback-image'} alt={args.alt} />
      <Card.Title>{args.title}</Card.Title>
    </Card>
  );
};

export const Default = Template.bind({});
