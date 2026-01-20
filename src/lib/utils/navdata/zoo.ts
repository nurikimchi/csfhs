export interface ZooProject {
    title: string;
    description: string;
    overview: string;
    bullets: string[];
    id: string;
  }
  
  export const zooprojectItems: ZooProject[] = [
    {
      title: 'Zoo Project',
      description:
        'A collaboration between FSD and the City of Elk Grove to create a virtual reality simulation showcasing the new zoo.',
      overview:
        'In 2024, the City of Elk Grove commissioned Full-Stack Development to create an immersive virtual reality experience for the community\'s new zoo. After six months of prototyping, developing, and communication with city officials, FSD presented its virtual reality simulation at a City Council meeting. Mayor Bobbie Singh-Allen, Vice Mayor Kevin Spease, Councilman Darren Suen, Rod Brewer, and Sergio Robles voted unanimously for the creation of the zoo. The project garnered significant media attention, with local news stations interviewing Mr. Dagler, the club\'s president, and vice president while showcasing their work. This high-impact technical project exemplifies how pathway students can contribute to meaningful community initiatives while gaining real-world development experience.',
      bullets: [
        'Presented to City Council',
        'Featured on local news stations',
        'Six months of development',
        'Unanimous city approval'
      ],
      id: 'zoo-project'
    },
  ];
  
  const getZooProjectId = (id: string) => `/club/${id}`;
  
  export function zooProjectHref(projectPage: ZooProject) {
    return getZooProjectId(projectPage.id);
  }
  
  export function zooprojectHrefById(projectPageId: string) {
    return getZooProjectId(projectPageId);
  }