// const dataUrl = 'https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';
export default async function fetchData() {
  let result = [];
  await fetch('api/v1/civilizations', {
    headers: {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  }).then((res) => res.json()).then((data) => {
    result = data.civilizations;
  });
  return { data: result };
}
