import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const value = process.env.TEST_ENV_PARAMS ?? null;

  return new Response(
    JSON.stringify({
      TEST_ENV_PARAMS: value,
      present: value !== null
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
};
