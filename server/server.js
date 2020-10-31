const path = require('path');
const axios = require('axios');
const cors = require('cors');
const express = require('express');
const fs = require('fs');
const https = require('https');
const app = express();
const IP = process.env.IP;
const PORT = process.env.PORT || 5000
const HTTPS_PORT = 3443;

/*
const httpsOptions = {
  cert: fs.readFileSync(path.join(__dirname, 'ssl', 'server.crt')),
   key: fs.readFileSync(path.join(__dirname, 'ssl', 'key.pem'))
}

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));
app.use(cors());


var httpServer = https.createServer(httpsOptions, app);

app.get('/jobs', async (req, res) => {
  try {

    console.log("Got Job search request");

    let { description = '', full_time, location = '', page = 1 } = req.query;

    description = description ? encodeURIComponent(description) : '';
    location = location ? encodeURIComponent(location) : '';
    full_time = full_time === 'true' ? '&full_time=true' : '';
    if (page) {
      page = parseInt(page);
      page = isNaN(page) ? '' : `&page=${page}`;
    }
    const query = `https://jobs.github.com/positions.json?description=${description}&location=${location}${full_time}${page}`;
    const result = await axios.get(query);
    res.send(result.data);
  } catch (error) {
    res.status(400).send('Error while getting list of jobs.Try again later.');
  }
});

app.listen(PORT, () => {
  console.log(`server started on ${IP}:${PORT}`);
});

httpServer
  .listen(HTTPS_PORT, () => {
    console.log(`HTTPS server started on port ${HTTPS_PORT}`);
  });
  */
express()
  .use(express.static(path.join(__dirname, '..', 'build')))
  .get('/', (req, res) => res.send('Hello From test Webserver'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
