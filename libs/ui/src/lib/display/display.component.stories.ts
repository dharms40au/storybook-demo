import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { DisplayComponent } from './display.component';

export default {
  title: 'DisplayComponent',
  component: DisplayComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<DisplayComponent>;

const Template: Story<DisplayComponent> = (args: DisplayComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    content:  'default',
}