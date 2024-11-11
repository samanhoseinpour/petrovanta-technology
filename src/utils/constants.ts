export type Section = {
  positionId: number;
  title: string;
};

export const sections: Section[] = [
  {
    positionId: 0,
    title: 'Ai Pin',
  },
  {
    positionId: 1,
    title: 'New Interactions',
  },
  {
    positionId: 2,
    title: 'Ai Mic',
  },
  {
    positionId: 3,
    title: 'Trusted Contacts',
  },
];

export const navItems = [
  {
    id: '1',
    label: 'Services',
    href: '/services',
  },
  {
    id: '2',
    label: 'Tools',
    href: '/tools',
  },
  {
    id: '3',
    label: 'Projects',
    href: '/projects',
  },
  {
    id: '4',
    label: 'Blogs',
    href: '/blogs',
  },
  {
    id: '5',
    label: 'Contact',
    href: '/contact',
  },
  {
    id: '6',
    label: 'About',
    href: '/about',
  },
];
