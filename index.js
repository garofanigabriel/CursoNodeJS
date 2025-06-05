import fetch from 'node-fetch';

const [, , method, rawResource, ...rest] = process.argv;
let resource = rawResource;
let params = rest;

if (rawResource.includes('/')) {
  const split = rawResource.split('/');
  resource = split[0];
  params = [split[1], ...rest];
}

const baseURL = 'https://fakestoreapi.com';

const handleGET = async () => {
  if (params.length === 0) {
    const res = await fetch(`${baseURL}/${resource}`);
    const data = await res.json();
    console.log(data);
  } else {
    const id = params[0];
    const res = await fetch(`${baseURL}/${resource}/${id}`);
    const data = await res.json();
    console.log(data);
  }
};

const handlePOST = async () => {
  const [title, price, category] = params;
  const res = await fetch(`${baseURL}/${resource}`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      price: parseFloat(price),
      category,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nostrum. Modi corrupti quisquam nobis at.',
      image: 'https://picsum.photos/300'
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await res.json();
  console.log(data);
};

const handleDELETE = async () => {
  const id = params[0];
  const res = await fetch(`${baseURL}/${resource}/${id}`, {
    method: 'DELETE'
  });
  const data = await res.json();
  console.log(data, "Fue eliminado correctamente");
};

switch (method) {
  case 'GET':
    await handleGET();
    break;
  case 'POST':
    await handlePOST();
    break;
  case 'DELETE':
    await handleDELETE();
    break;
  default:
    console.log('Comando no soportado. Usa GET, POST o DELETE.');
}
