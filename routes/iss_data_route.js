const axios = require('axios');
const keys = require('../config/keys');

module.exports = app => {
  app.get('/api/iss_data', async (req, res) => {
    try {
      const request = await axios.get(keys.issApiUrl);
      const { data } = request;
      res.status(200).send(data);
    } catch (e) {
      res.status(400).send(e);
    }
  });
};
