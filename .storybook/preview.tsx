import React from "react";
import type { Preview } from "@storybook/react";
import { Inter } from "next/font/google";
import "../src/styles/global.scss";

const inter = Inter({ subsets: ["latin"] });


const preview: Preview = {
  parameters: {

      backgrounds: {
        default: 'dark',
        values: [
          { name: 'dark', value: '#11081a' },
          { name: 'light', value: '#ffffff' },
        ],
    },
  
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
        <main className={inter.className}>
            <Story />
        </main>
    )
]

};

export default preview;
