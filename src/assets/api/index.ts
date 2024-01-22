const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWFkZTBiNDEyZWUyNmM0MGQxYWQ2OWIiLCJpYXQiOjE3MDU4OTQwNjgsImV4cCI6MTcwNjQ5ODg2OH0.xd6cjLIv3r0iPoCEM5ULx7hhqoVRYTnp_Pj-IQrm7BU';

export async function getUserData() {
  const res = await fetch(`${baseUrl}/api/v1/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
