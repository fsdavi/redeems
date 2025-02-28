import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import CircleCheckbox from ".";
import { useState } from "react";

const meta = {
  title: "Components/CircleCheckbox",
  component: CircleCheckbox,
  argTypes: {
    checked: {
      control: "boolean",
      description: "Whether the checkbox is checked",
    },
    onChange: { action: "changed" },
  },
  parameters: {
    layout: "centered",
  }
} satisfies Meta<typeof CircleCheckbox>;

export default meta;

const Template: StoryFn = (args) => {
  const [checked, setChecked] = useState(args.checked);

  return (
    <CircleCheckbox
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
} 

export const Default = Template.bind({});
