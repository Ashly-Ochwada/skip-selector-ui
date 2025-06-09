export async function fetchSkipsByLocation(postcode, area) {
  const res = await fetch(
    `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`
  );
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}
