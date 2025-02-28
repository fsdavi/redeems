"use client"

import { StoryFn } from "@storybook/react";
import PageCard, { PageCardProps } from "."

const meta = {
  title: "Components/PageCard",
  component: PageCard,
  argTypes: {
    title: { control: "text" },
    status: { options: ['ACTIVE', 'INACTIVE'],
      control: { type: 'radio' },},
    id: { control: "text" },
  },
  parameters: {
    layout: "centered",
  },
}

export default meta;

const Template: StoryFn<PageCardProps> = ({
  title = 'Example Card Title',
  id = 'urlTest',
  status = 'ACTIVE',
}) => <PageCard title={title} id={id} status={status} />

export const Default = Template.bind({});