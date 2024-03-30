import type { Meta, StoryObj } from "@storybook/react";

import Link from ".";

const meta: Meta<typeof Link> = {
  component: Link,
  args: { size: "medium", underline: false },
  argTypes: {
    size: {
      options: ["small", "medium", "large", "x-large"],
      control: { type: "radio" },
    },
    underline: { control: { type: "boolean" } },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

/* VARIANTS */

export const Primary: Story = {
  render: (props) => (
    <Link {...props} variant="primary" href="/#">
      Link {">"}
    </Link>
  ),
};

export const Secondary: Story = {
  render: (props) => (
    <Link {...props} variant="secondary" href="/#">
      Link {">"}
    </Link>
  ),
};

