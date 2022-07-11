import React from 'react';

import { Header } from './AppHeader';

export default {
  title: 'Mamani Campos Juanita/app',
  component: Header,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
    backgrounds: {
        default: 'twitter',
        values: [
          { name: 'twitter', value: '#00aced' },
          { name: 'facebook', value: '#3b5998' },
        ],
      },
  },
};

const Template = (args) => <Header {...args} />;

export const App = Template.bind({});
App.args = {
  user: {
    name: 'Jane Doe',
  },
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};