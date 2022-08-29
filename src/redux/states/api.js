const dataUrl = ' https://api.covidtracking.com/v2/states.json';
export default async function fetchStates() {
  let result = [];
  await fetch(dataUrl).then((res) => res.json()).then((data) => { result = data.data; });
  return { data: result };
}
