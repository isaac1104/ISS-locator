const axios = require('axios');

module.exports = app => {
  app.get('/api/iss_data', async (req, res) => {
    try {
      const request = await axios.get('https://api.wheretheiss.at/v1/satellites/25544');
      const { data } = request;
      res.status(200).send(data);
    } catch (e) {
      res.status(400).send(e);
    }
  });
};
