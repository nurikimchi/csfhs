import type { PageLoad } from './$types';

const images = import.meta.glob('$lib/images/legacy/**/*.{jpeg,png,jpg}', {
  as: 'url',
  eager: true
});

export const load = (() => {
  return { images: Object.values(images) };
}) satisfies PageLoad;
