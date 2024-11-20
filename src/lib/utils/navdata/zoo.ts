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
        'Another opportunity for students to participate in the pathway outside of the classroom is by being a part of the leadership team',
      overview:
        '',
      bullets: [],
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