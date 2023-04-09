import { error } from '@sveltejs/kit';
import { moreInformationItems } from '$lib/utils/navdata/moreinfo';
import type { PageLoad } from './$types';

const images = import.meta.glob('$lib/images/**/*.{png,jpg,jpeg}', { as: 'url', eager: true });

export const load = (async ({ params }) => {
  const moreInfo = moreInformationItems.find((p) => p.id === params.id);
  if (!moreInfo) throw error(404, 'Page Not Found.');

  const pageImages = Object.keys(images).flatMap((path) => {
    const img = images[path];
    if (path.includes(`/${params.id}/`)) {
      return [img];
    }

    return [];
  });

  return { moreInfo, pageImages };
}) satisfies PageLoad;
