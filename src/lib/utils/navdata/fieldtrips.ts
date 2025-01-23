export interface FieldTrips {
    title: string;
    preview: string;
    description: string;
    imageId: string;
    id: string;
  }
  
  export const fieldtrips: FieldTrips[] = [
    {
      title: 'Stanford',
      preview: 'An exclusive field trip to Stanford University in Palo Alto.',
      description: 'Each spring, 50 pathway students travel by charter bus to visit Stanford University. During the visit, Franklin students enjoy an exclusive opportunity to engage with current Stanford students and attend a live lecture.',
      imageId: 'stanford',
      id: 'stanford-ft'
    },
    {
      title: 'Schilling Robotics',
      preview: 'A behind-the-scenes look into Schilling Robotics.',
      description: 'Pathway students will participate in a tour of Schilling Robotics\'s manufacturing operations, where they will witness the development, manufacturing, and testing of remotely operated underwater vehicles (ROVs).',
      imageId: 'schilling',
      id: 'schilling-ft'
    },
    {
      title: 'Computer History Museum',
      preview: 'An immersive experience in the history of computer science.',
      description: 'As part of the field trip to Stanford University, students will have the opportunity to tour the Computer History Museum. Pathway students can explore historic innovations, including one of the first functional IBM machines and an original Macintosh signed by Steve Wozniak.',
      imageId: 'csmuseum',
      id: 'csmuseum-ft'
    },
  ];
  
  const getFieldTripId = (id: string) => `/fieldtrips/${id}`;
  
  export function fieldtripHref(infoPage: FieldTrips) {
    return getFieldTripId(infoPage.id);
  }
  
  export function fieldtripHrefById(infoPageId: string) {
    return getFieldTripId(infoPageId);
  }
  