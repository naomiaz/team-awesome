import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/Button.jsx');
  require('../stories/InputField.jsx');
  require('../stories/PageHeader.jsx');
  require('../stories/SelectBox.jsx');
}

configure(loadStories, module);
