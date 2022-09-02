const dataUrl = 'https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/structures';
export default async function fetchData() {
  let result = [];
  await fetch(dataUrl, {
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json()).then((data) => { result = data.structures; });
  return { data: result };
}
