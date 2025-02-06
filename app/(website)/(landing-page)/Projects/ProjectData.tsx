interface IProjectData {
  title: string;
  description: string;
  servicesOffered: string[];
  projectImageName: string;
  linkToProject: string;
}

export const ProjectData: IProjectData[] = [
  {
    title: 'Darum',
    description: `We partnered with Darum to enhance last-mile delivery for Nigeria’s 41M MSMEs. Through strategic consulting, design, and development, we built a seamless platform that connects businesses with logistics providers, improving efficiency and driving growth.`,

    servicesOffered: [
      'Product Consulting and Management',
      'Product design',
      'Software engineering across web and mobile products',
      'Internal systems development and upgrades',
    ],
    projectImageName: 'darum-turbo',
    linkToProject: 'https://lol-git-main-abimbolaoos-projects.vercel.app/',
  },

  {
    title: 'Ethiopian Cargo',
    description: `Ethiopian Airlines partnered with us to optimize logistics and last-mile delivery in Nigeria. Through product consulting, design, and development, we built an integrated platform that improved operations, expanded services, and enhanced customer satisfaction."`,

    servicesOffered: [
      'Product Consulting and Management',
      'Product design',
      'Software engineering across web and mobile products',
      'Internal systems development and upgrades',
    ],
    projectImageName: 'ccl-prj',
    linkToProject: 'https://lol-git-main-abimbolaoos-projects.vercel.app/',
  },

  {
    title: 'Dwelling',
    description: `Dwelling partnered with us at Mason to enhance their property management and resident engagement platform. Through strategic consulting, design, and development, we created a solution that streamlines tenant communication, maintenance, and payments, boosting efficiency and the resident experience.`,

    servicesOffered: [
      'Product Consulting and Management',
      'Product design',
      'Software engineering across web and mobile products',
      'Internal systems development and upgrades',
    ],
    projectImageName: 'dwelling',
    linkToProject: 'https://lol-git-main-abimbolaoos-projects.vercel.app/',
  },
];
