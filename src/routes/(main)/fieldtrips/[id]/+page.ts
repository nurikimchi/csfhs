import { error } from '@sveltejs/kit';
import { fieldtrips } from '$lib/utils/navdata/fieldtrips';
import type { PageLoad } from './$types';

const images = import.meta.glob('$lib/images/csfhs/**/*.{png,jpg,jpeg}', { as: 'url', eager: true });

export const load = (async ({ params }) => {
  const fieldtrip = fieldtrips.find((p) => p.id === params.id);
  if (!fieldtrip) throw error(404, 'Page Not Found.');

  const pageImages = Object.keys(images).flatMap((path) => {
    const img = images[path];
    if (path.includes(`/${params.id}/`)) {
      return [img];
    }

    return [];
  });

  return { fieldtrip, pageImages };
}) satisfies PageLoad;
