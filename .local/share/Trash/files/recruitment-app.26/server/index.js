const express = require('express');
const cors = require('cors');

const app = express();

const dbService = require('./dbService');

app.use(express.json({ limit: '10000mb' }));
var corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200 // For legacy browser support
  }
  app.use(cors(corsOptions));


app.post('/insert', async (req, res) => {
	var data = req.body;
	const db = dbService.getDbServiceInstance();
	let users = false;
	try {
		users = await db.insertDetails(data);
		if (users) {
			res.status(200).json({
				message: 'Insertion successful',
				status: 'SUCCESS',
			});
		} else {
			return res.status(404).json({
				status: 'FAILURE',
				message: 'Insertion failed',
			});
		}
	} catch (error) {
		res.status(500).json({
			error: error,
		});
	}
});




app.listen(5000, () => {
	console.log('Running on port 5000');
});
