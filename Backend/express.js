const express = require('express');
const knex = require('knex')
	(require('./knexfile.js')['development'])
const knexfile = require('./knexfile.js')
const app = express();
const port = 8085;
var cors = require('cors');


app.use(express.json());
app.use(cors());

app.get('/users', (req, res) => {
	knex('users')
		.select('*')
		.then((users) => {
			var users = users.map((user) => user);
			res.json(users);
		});
});

app.get('/users/:id', async (req, res) => {
	const userId = req.params.id;
	try {
		const userData = await knex('users').where({ id: userId });
		res.status(200).json(userData)
	} catch (err) {
		res.status(500).json({ error: `Cannot retrieve user data by the given user ID: ${userId}` })
	}
});

app.get('/assets', async (req, res) => {
	let assetNameSearch = req.query;
	console.log(Boolean(assetNameSearch))
	console.log(assetNameSearch)
	if(assetNameSearch !== false) {
		console.log('running query')
		knex('assets')
			.select('*').where('name', 'ilike', `%${assetNameSearch.name}%`)
			.then((assets) => res.status(200).json(assets));
	} else {
		knex('assets')
			.select('*')
			.then((assets) => res.status(200).json(assets));
	}
});

app.get('/assets/:id', async (req, res) => {
	const assetId = req.params.id;
	try {
		const assetData = await knex('assets').where({ id: assetId });
		res.status(200).json(assetData)
	} catch (err) {
		res.status(500).json({ error: `Cannot retrieve user data by the given user ID: ${assetId}` })
	}
});

app.get('/assets/:name', async (req, res) => {
	const assetName = req.params.name;
	try {
		const assetData = await knex('assets').where({ name: assetName });
		res.status(200).json(assetData)
	} catch (err) {
		res.status(500).json({ error: `Cannot retrieve asset data by the given name: ${assetName}` })
	}
});

app.get('/assets/:mission_type', async (req, res) => {
	const assetMission = req.params.mission_type;
	try {
		const assetData = await knex('assets').where({ mission_type: assetMission });
		res.status(200).json(assetData)
	} catch (err) {
		res.status(500).json({ error: `Cannot retrieve data by the given mission type: ${assetMission}` })
	}
});

app.get('/packages', async (req, res) => {
	var packageData = await knex('packages')
		.select('*')
		.then((packages) => packages)	
	res.status(200).send(packageData);
});

app.get('/packages/:id', async (req, res) => {
	const packageId = req.params.id;
	const packageData = await knex('packages').where({ id: packageId });
	var assets_packagesData = await knex('assets_packages')
		.select('*')
		.where('packages_id', '=', packageId)
		.then((assets_packages) => assets_packages)
	var assetArray = [];
	assets_packagesData.forEach(function (arrayItem) {
		assetArray.push(arrayItem.assets_id)
		console.log(assetArray)
	})
	packageData.forEach(function (arrayItem) {
		arrayItem['asset_ids'] = assetArray;
	})

	res.status(200).send(packageData);
});

app.get('/packages/:id', async (req, res) => {
	const packageId = req.params.id;
	try {
		const packageData = await knex('packages').where({ id: packageId });
		res.status(200).json(packageData)
	} catch (err) {
		res.status(500).json({ error: `Cannot retrieve user data by the given user ID: ${packageId}` })
	}
});

app.get('/packages/:name', async (req, res) => {
	const packageName = req.params.name;
	try {
		const packageData = await knex('packages').where({ name: packageName });
		res.status(200).json(packageData)
	} catch (err) {
		res.status(500).json({ error: `Cannot retrieve asset data by the given name: ${packageName}` })
	}
});

app.post('/users', (req, res) => {
	const newUser = req.body;
	knex('users')
		.insert(newUser)
		.then(() => res.status(201).json(`The new user, ${newUser.username} has been added.`))
		.catch((err) => res.status(500).json(err));
});

app.post('/assets', (req, res) => {
	const newAsset = req.body;
	knex('assets')
		.insert(newAsset)
		.then(() => res.status(201).json(`Your satellite asset, ${newAsset.name}, has been added to the assets list.`))
		.catch((err) => res.status(500).json(err));
});

app.post('/packages', (req, res) => {
	const newPackage = req.body;
	knex('packages')
		.insert(newPackage)
		.then(() => res.status(201).json('Your mission package, ${newPackage.name}, has been created.'))
		.catch((err) => res.status(500).json(err));
});

app.put('/users/:id', (req, res) => {
	const id = req.params.id;
	const updatedUser = req.body;
	knex('users')
		.where('id', id)
		.update(updatedUser)
		.then(() => res.json(`The user with the id of ${id} has updated.`))
		.catch((err) => res.status(500).json(err));
});

app.put('/assets/:id', (req, res) => {
	const id = req.params.id;
	const updatedAsset = req.body;
	knex('assets')
		.where('id', id)
		.update(updatedAsset)
		.then(() => res.json(`The asset with the id of ${id} has updated.`))
		.catch((err) => res.status(500).json(err));
});

app.put('/assets/:name', (req, res) => {
	const assetName = req.params.name;
	const updatedAsset = req.body;
	knex('assets')
		.where('name', assetName)
		.update(updatedAsset)
		.then(() => res.json(`The asset ${assetName} has updated.`))
		.catch((err) => res.status(500).json(err));
});

app.put('/packages/:id', (req, res) => {
	const id = req.params.id;
	const updatedPackage = req.body;
	knex('packages')
		.where('id', id)
		.update(updatedPackage)
		.then(() => res.json(`The package with the id of ${id} has updated.`))
		.catch((err) => res.status(500).json(err));
});

app.put('/packages/:name', (req, res) => {
	const packageName = req.params.name;
	const updatedPackage = req.body;
	knex('packages')
		.where('name', packageName)
		.update(updatedPackage)
		.then(() => res.json(`The package ${packageName} has updated.`))
		.catch((err) => res.status(500).json(err));
});


app.delete('/users/:id', (req, res) => {
	const id = req.params.id;
	knex('users')
		.where('id', id)
		.del()
		.then(() => res.json(`User with id ${id} has been deleted.`))
		.catch((err) => res.status(500).json(err));
});

app.delete('/assets/:id', (req, res) => {
	const id = req.params.id;
	knex('assets')
		.where('id', id)
		.del()
		.then(() => res.json(`The asset with the id ${id} has been deleted.`))
		.catch((err) => res.status(500).json(err));
});

app.delete('/assets/:name', (req, res) => {
	const name = req.params.name;
	knex('assets')
		.where('id', id)
		.del()
		.then(() => res.json(`The asset with the name ${name} has been deleted.`))
		.catch((err) => res.status(500).json(err));
});

app.delete('/packages/:id', (req, res) => {
	const id = req.params.id;
	knex('packages')
		.where('id', id)
		.del()
		.then(() => res.json(`The package with the id ${id} has been deleted.`))
		.catch((err) => res.status(500).json(err));
});

app.delete('/packages/:name', (req, res) => {
	const name = req.params.name;
	knex('packages')
		.where('id', id)
		.del()
		.then(() => res.json(`The package with the name ${name} has been deleted.`))
		.catch((err) => res.status(500).json(err));
});


app.listen(port, () => console.log(`The server is running on port ${port}.`));