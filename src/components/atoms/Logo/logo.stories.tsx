import type { Meta, StoryObj } from "@storybook/react";

import Logo from ".";

const meta: Meta<typeof Logo> = {
  component: Logo,
  args: { size: "medium" },
  argTypes: {
    size: { options: ["small", "medium", "large"], control: { type: "radio" } },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

/* VARIANTS */

export const Primary: Story = {
  render: ({ size }) => <Logo size={size} />,
};

