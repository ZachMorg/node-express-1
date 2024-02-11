const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/', async function(req, res, next) {
  try {
    let results = await Promise.all(req.body.developers.map(developer => {
      return axios.get(`https://api.github.com/users/${developer}`);
    }));
    let out = results.map(result => ({ name: result.data.name, bio: result.data.bio }));

    return res.send(out);
  } catch(err) {
    return next(err);
  }
});

app.listen(3000);
