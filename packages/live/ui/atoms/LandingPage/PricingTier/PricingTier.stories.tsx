import PricingTier from "./PricingTier";
import React from "react";

const Template = (args) => <PricingTier {...args} />;

export default {
  title: "atoms/LandingPage/PricingTier",
  component: PricingTier
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  topGradient: 'linear-gradient(to right, #b92b27, #1565c0)',
  buttonVariantColor: 'red',
  title: 'Starter',
  price: '4,99',
  currency: '€',
  features: [
    '16 MIDI and Audio Tracks',
    '2 Aux and Bus Tracks',
    'External interface support',
    'Essential collaboration tools',
    '14 audio effects'
  ]
};