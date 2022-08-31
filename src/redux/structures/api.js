// const dataUrl = 'https://age-of-empires-2-api.herokuapp.com/';
export default async function fetchData() {
  let result = [];
  await fetch('api/v1/structures', {
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json()).then((data) => { result = data.structures; });
  return { data: result };
}
