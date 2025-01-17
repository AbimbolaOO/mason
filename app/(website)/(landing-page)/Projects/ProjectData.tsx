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
    description: `We teamed up with Darum to redefine last-mile delivery for Nigeria's 41 million MSMEs. By providing strategic consulting, design, and development, we created a robust external and internal platform that streamlines connections between businesses and logistics providers, boosting efficiency and scaling growth in Nigeria's dynamic market.`,

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
    description: `Ethiopian Airlines partnered with us to optimize its logistics and streamline last-mile delivery in Nigeria. Using our expertise in product consulting, design, and development, we launched an integrated platform that enhanced their operations, expanded service offerings, and boosted customer satisfaction, solidifying their position in the last-mile delivery market here in Nigeria.`,

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
    description: `Shleep partnered with our team at Mason to enhance their property management and resident engagement platform. Through a blend of strategic consulting, design innovation, and targeted development, we delivered a solution that simplifies tenant communication, maintenance management, and payment processing. This has improved both operational efficiency and the resident experience using the application.`,

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
