import { getCollection } from 'astro:content';
export async function getStaticPaths() {
  const apps = (await getCollection('apps')).sort((a, b) => a.data.title.localeCompare(b.data.title));
  return Array.from({ length: Math.ceil(apps.length / 9) }, (_, i) => ({
    params: { page: String(i + 1) },
    props: { apps: apps.slice(i * 9, (i + 1) * 9) },
  }));
}
export function GET({ props }: { props: { apps: any[] } }) {
  return new Response(JSON.stringify(props.apps.map(a => ({ id: a.id.replace(/\/index$/, ''), title: a.data.title, description: a.data.description, origin: a.data.origin, tags: a.data.tags, icon: a.data.icon?.src }))), { headers: { 'Content-Type': 'application/json' } });
}
