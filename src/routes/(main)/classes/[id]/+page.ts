import { error } from '@sveltejs/kit';
import { courses } from '$lib/utils/navdata/courses';
import type { PageLoad } from './$types';

const images = import.meta.glob('$lib/images/**/*.{png,jpg,jpeg}', { as: 'url', eager: true });

export const load = (async ({ params }) => {
  const course = courses.find((c) => c.id === params.id);
  if (!course) throw error(404, 'Page Not Found.');

  const pageImages = Object.keys(images).flatMap((path) => {
    const img = images[path];
    if (path.includes(params.id)) {
      return [img];
    }

    return [];
  })

  return { course, pageImages };
}) satisfies PageLoad;
