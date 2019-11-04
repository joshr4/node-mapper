require('dotenv').config();
const axios = require('axios');

const hostname = 'http://api.ipstack.com/';
// http://api.ipstack.com/134.201.250.155,72.229.28.185,110.174.165.78
// ?access_key=process.env.IPSTACK_API_KEY
const addresses = ['74.207.249.55'];
const url = `${hostname}${addresses.join(',')}?access_key=${
  process.env.IPSTACK_API_KEY
}`;
// http://api.ipstack.com/65.79.145.209?access_key=07fc68dab2835eaaa83767af1e2aafbc
console.log({ url });
axios
  .get(url)
  .then(res => {
    // console.log({ response });
    console.log(res.data);
    console.log(res.data.latitude);
    console.log(res.data.longitude);
  })
  .catch(error => {
    console.log({ error });
  });
