async function Api() {
  const url = 'http://10.0.2.2:3000/data';
  const response = await fetch(url);
  const data = await response.json();
//   console.warn(data);
  return data;
}

export default Api;
