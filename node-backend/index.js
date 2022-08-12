const express = require('express');
const app = express();

app.use(require('./routes'));

app.use((err, req, res, next) => {
	res.status(500);
});

const server = app.listen(process.env.PORT || 3000, () => {
	console.log(`Listening on port ${server.address().port}`);
});