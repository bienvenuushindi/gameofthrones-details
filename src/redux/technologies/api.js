// const dataUrl = 'https://age-of-empires-2-api.herokuapp.com/';
export default async function fetchData() {
  let result = [];
  await fetch('api/v1/technologies', {
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json()).then((data) => { result = data.technologies; });
  return { data: result };
}
