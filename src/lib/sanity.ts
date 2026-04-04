import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 'w0tz788x',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-03-01',
});

const builder = imageUrlBuilder(sanityClient);

// Helper function to easily generate image URLs from Sanity image objects
export const urlFor = (source: any) => {
  return builder.image(source);
};
