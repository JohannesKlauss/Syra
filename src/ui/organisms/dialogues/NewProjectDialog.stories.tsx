import { ThemeKnob } from '../../../stories/ThemeKnob';
import React from 'react';
import NewProjectDialog from './NewProjectDialog';
import { action } from '@storybook/addon-actions';

export default {
  component: NewProjectDialog,
  title: 'NewProjectDialog',
};

export const Default = () => {
  return (
    <ThemeKnob>
      <NewProjectDialog open={true} onCancel={action('clicked cancel')} onCreate={action('clicked create')}/>
    </ThemeKnob>
  );
};