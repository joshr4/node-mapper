require('dotenv').config();
const axios = require('axios');

const hostname = 'http://api.ipstack.com/';
const addresses = ['74.207.249.55'];
const url = `${hostname}${addresses.join(',')}?access_key=${
  process.env.IPSTACK_API_KEY
}`;
axios
  .get(url)
  .then(res => {
    console.log(res.data.latitude);
    console.log(res.data.longitude);
  })
  .catch(error => {
    console.log({ error });
  });
