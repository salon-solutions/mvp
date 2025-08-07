import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        icon?: string;
        width?: string | number;
        height?: string | number;
        inline?: boolean;
        flip?: string;
        rotate?: string | number;
        mode?: string;
        noobserver?: boolean;
      };
    }
  }
}

export {};