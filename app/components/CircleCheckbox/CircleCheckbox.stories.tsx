import type { Meta, StoryObj } from "@storybook/react";

import CircleCheckbox from ".";

const meta = {
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

type Story = StoryObj<typeof meta>;


export const Default: Story = {
  render: (args) => {
    let isChecked = args.checked;

    return (
      <CircleCheckbox
        {...args}
        checked={isChecked}
        onChange={(e) => {
          isChecked = e.target.checked;
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
