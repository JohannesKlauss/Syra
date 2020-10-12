import Pricing from "./Pricing";
import React from "react";

const Template = (args) => <Pricing {...args} />;

export default {
  title: "organisms/LandingPage/Pricing",
  component: Pricing
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  tiers: [
    {
      topGradient: 'linear-gradient(to right, #b92b27, #1565c0)',
      buttonVariantColor: 'red',
      title: 'Essentials',
      price: '0,00',
      features: [
        '8 MIDI and Audio Tracks',
        '2 Aux and Bus Tracks',
        'External interface support',
        'Essential collaboration tools',
        '14 audio effects',
        '4 private sessions',
      ]
    },
    {
      topGradient: 'linear-gradient(to right, #11998e, #38ef7d)',
      buttonVariantColor: 'teal',
      title: 'Standard',
      price: '4,99',
      features: [
        '64 MIDI and Audio Tracks',
        '16 Aux and Bus Tracks',
        'External interface support',
        'Professional collaboration tools',
        '21 audio effects',
        'Unlimited private sessions',
        'ML and AI music tools',
        'Band creation',
        'Direct to soundcloud publishing',
        'Role management',
        '4 User templates'
      ]
    },
    {
      topGradient: 'linear-gradient(to right, #74ebd5, #acb6e5)',
      buttonVariantColor: 'cyan',
      title: 'Studio',
      price: '9,99',
      features: [
        'Unlimited MIDI and Audio Tracks',
        '128 Aux and Bus Tracks',
        'External interface support',
        'Professional collaboration tools',
        '28 audio effects',
        'Unlimited private sessions',
        'ML and AI music tools',
        'Band creation',
        'Direct to soundcloud publishing',
        'Role management',
        'Unlimited User templates',
        'Unlimited session history access',
        'Enterprise support',
      ]
    }
  ]
};