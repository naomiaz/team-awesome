import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/Button.jsx');
  require('../stories/InputField.jsx');
  require('../stories/SelectBox.jsx');
  // You can require as many stories as you need.
}

configure(loadStories, module);
