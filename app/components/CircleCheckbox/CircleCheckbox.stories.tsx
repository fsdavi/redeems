import type { Meta, StoryObj } from "@storybook/react";

import CircleCheckbox from ".";
import { useState } from "react";

const meta = {
  component: CircleCheckbox,
  argTypes: {
    checked: {
      control: "boolean",
      description: "Whether the checkbox is checked",
    },
    onChange: { action: "changed" },
  },
} satisfies Meta<typeof CircleCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [isChecked, setIsChecked] = useState(args.checked);
    return (
      <CircleCheckbox
        {...args}
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked);
          args.onChange?.(e);
        }}
      />
    );
  },
  args: {
    checked: true,
    onChange: () => {},
  },
};
