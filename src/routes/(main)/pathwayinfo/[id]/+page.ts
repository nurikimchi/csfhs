import { error } from '@sveltejs/kit';
import { moreInformation1Items } from '$lib/utils/navdata/pathway';
import type { PageLoad } from './$types';

const images = import.meta.glob('$lib/images/csfhs/**/*.{png,jpg,jpeg}', { as: 'url', eager: true });

export const load = (async ({ params }) => {
  const moreInfo1 = moreInformation1Items.find((p) => p.id === params.id);
  if (!moreInfo1) throw error(404, 'Page Not Found.');

  const pageImages = Object.keys(images).flatMap((path) => {
    const img = images[path];
    if (path.includes(`/${params.id}/`)) {
      return [img];
    }

    return [];
  });

  return { moreInfo1, pageImages };
}) satisfies PageLoad;