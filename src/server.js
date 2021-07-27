const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Utopia Dex')
})

app.post('/setOrder', (err, res) => {
	res.status(200);
    // Add order to database
	res.send('working');
	res.end();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  // Child thread which polls PKS stuff
})