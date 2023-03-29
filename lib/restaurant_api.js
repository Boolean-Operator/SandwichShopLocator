import { readdir } from 'fs/promises';
import path from 'path';

const getSearchUrl = (latLong, query, limit) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
};

export const fetchRestaurantData = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.FOURSQUARE_API_KEY,
    },
  };

  const dirPath = path.join(
    process.cwd(),
    'public',
    'static',
    'images',
    'shops'
  );

  let photos = [];

  try {
    const files = await readdir(dirPath);
    for (const file of files) photos.push(file);
  } catch (err) {
    console.error(`Error: ${err}`);
  }

  const response = await fetch(
    getSearchUrl(
      '39.12512348709871%2C-75.52636606837017',
      `sandwich shop`,
      '9'
    ),
    options
  );
  const data = await response.json();

  return data.results.map((result, idx) => {
    return {
      id: result.fsq_id,
      name: result.name,
      address: result.location.address,
      neighborhood: result.location.locality,
      imgUrl: photos[idx],
    };
  });

  // .catch((err) => console.error(err));
};
