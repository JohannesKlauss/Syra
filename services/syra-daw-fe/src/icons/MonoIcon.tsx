import { Icon, IconProps } from '@chakra-ui/react';
import React from 'react';

export const MonoIcon = (props: IconProps) => (
  <Icon viewBox="0 0 32 24" {...props}>
    <path
      fill="currentColor"
      transform="translate(4)"
      d="M12,2C6.486,2,2,6.486,2,12c0.001,5.515,4.487,10.001,10,10.001c5.514,0,10-4.486,10.001-10.001 C22.001,6.486,17.515,2,12,2z M12,20.001c-4.41,0-7.999-3.589-8-8.001c0-4.411,3.589-8,8-8c4.412,0,8.001,3.589,8.001,8 C20,16.412,16.411,20.001,12,20.001z"
    />
  </Icon>
);
