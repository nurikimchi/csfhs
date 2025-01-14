import { error } from '@sveltejs/kit';
import { opportunities } from '$lib/utils/navdata/opportunities';
import type { PageLoad } from './$types';

const images = import.meta.glob('$lib/images/csfhs/**/*.{png,jpg,jpeg}', { as: 'url', eager: true });

export const load = (async ({ params }) => {
  const opportunity = opportunities.find((p) => p.id === params.id);
  if (!opportunity) throw error(404, 'Page Not Found.');

  const pageImages = Object.keys(images).flatMap((path) => {
    const img = images[path];
    if (path.includes(`/${params.id}/`)) {
      return [img];
    }

    return [];
  });

  return { opportunity, pageImages };
}) satisfies PageLoad;
