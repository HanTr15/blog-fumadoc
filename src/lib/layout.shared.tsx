import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookIcon } from 'lucide-react';
// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: 'fuma-nama',
  repo: 'fumadocs',
  branch: 'main',
};
export function baseOptions(): BaseLayoutProps {
  return {
    links: [
      {
        icon: <BookIcon />,
        text: 'Home',
        url: '/',
        // secondary items will be displayed differently on navbar
        secondary: false,
      },
      {
        icon: <BookIcon />,
        text: 'Writeup',
        url: '/docs',
        // secondary items will be displayed differently on navbar
        secondary: false,
      },
      {
        icon: <BookIcon />,
        text: 'Blog',
        url: '/blog',
        // secondary items will be displayed differently on navbar
        secondary: false,
      },
      {
        icon: <BookIcon />,
        text: 'About',
        url: '/#about',
        // secondary items will be displayed differently on navbar
        secondary: false,
      },
    ],
    nav: {
      title: 'ryosta',

    }
  };

}
