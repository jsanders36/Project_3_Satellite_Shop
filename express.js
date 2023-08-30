const express = require('express');
const { parse } = require('csv-parse/sync');
const { stringify } = require('csv-stringify/sync');
const fs = require("fs");
const knex = require('knex')
    (require('./knexfile.js')['development'])
const knexfile = require('./knexfile.js')
const app = express();
const port = 8085;
app.use(express.json());

app.get('/users', (req, res) => {
	knex('users')
		.select('*')
		.then((cars) => {
			var users = users.map((user) => user);
			res.json(users);
		});
});

app.get('/users/:id', (req, res) => {
	knex('users')
		.select('*')
		.then((users) => {
			var userInfo = users.map((user) => user);
			res.json(userInfo);
		});
});

app.get('/assets', (req, res) => {
	knex('assets')
		.select('*')
		.then((assets) => {
			var allAssets = assets.map((asset) => asset);
			res.json(allAssets);
		});
});

app.get('/assets/:name', async (req, res) => {
  var assetName = req.params.name;
  await knex('assets')
    .where({name: assetName})
		.select('*')
		.then(data => res.status(200).json(data))
});

// app.get('/assets/mission_type', (req, res) => {
// 	knex('assets')
// 		.select('*')
// 		.then((assets) => {
// 			var assetsByMission = assets.map((asset) => asset.mission_type);
// 			res.json(assetsByMission);
// 		});
// });

// app.get('/manufacturers', (req, res) => {
// 	knex('manufacturer')
// 		.select('*')
// 		.then((manufacturer) => {
// 			var manufacturer = manufacturer.map((manufacturer) => manufacturer);
// 			res.json(manufacturer);
// 		});
// });

// app.get('/manufacturers/name', (req, res) => {
// 	knex('manufacturer')
// 		.select('*')
// 		.then((manufacturer) => {
// 			var manufacturerName = manufacturer.map(
// 				(manufacturer) => manufacturer.name
// 			);
// 			res.json(manufacturerName);
// 		});
// });

// app.get('/manufacturers/country', (req, res) => {
// 	knex('manufacturer')
// 		.select('*')
// 		.then((manufacturer) => {
// 			var manufacturerCountry = manufacturer.map(
// 				(manufacturer) => manufacturer.country
// 			);
// 			res.json(manufacturerCountry);
// 		});
// });
// // Completed
// app.post('/books', (req, res) => {
//     try {
//         let bookArray = parse(fs.readFileSync('./dummy.csv').toString(), { columns: true });
//         let book = req.body;
//         let bookId = bookArray.length + 1;
//         book = {
//             id: bookId.toString(),
//             ...book,
//         }
//         bookArray.push(book);
//         let modifiedBooks = stringify(bookArray, { header: true, eof: false, quoted: true });
//         fs.writeFileSync('./dummy.csv', modifiedBooks);
//         fs.writeFileSync(`./data/${bookId}.csv`, stringify([book], { header: true, eof: false, quoted: true }));
//         res.status(200).send(`Book ${bookId} added!`);
//     } catch (error) {
//         res.status(500).send("Failed to add the book.");
//     }
// });
// // Completed
// app.patch('/books/:id', (req, res) => {
//   try {
//       const bookId = req.params.id;

//       let bookArray = parse(fs.readFileSync('./dummy.csv').toString(), { columns: true });

//       const bookIndex = bookArray.findIndex(book => book.id === bookId);
//       if (bookIndex === -1) {
//           return res.status(404).send('Book not found.');
//       }

//       bookArray[bookIndex] = {
//           ...bookArray[bookIndex],
//           ...req.body
//       };

//       let modifiedBooks = stringify(bookArray, { header: true, eof: false, quoted: true });
//       fs.writeFileSync('./dummy.csv', modifiedBooks);

//       fs.writeFileSync(`./data/${bookId}.csv`, stringify([bookArray[bookIndex]], { header: true, eof: false, quoted: true }));

//       res.status(200).json(bookArray[bookIndex]);

//   } catch (error) {
//       console.error(error);
//       res.status(500).send('Failed to update the book.');
//   }
// });
// // Completed
// app.delete('/books/:id', (req, res) => {
//   try {
//       const bookId = req.params.id;
//       let bookArray = parse(fs.readFileSync('./dummy.csv').toString(), { columns: true });
//       const bookIndex = bookArray.findIndex(book => book.id === bookId);

//       if (bookIndex === -1) {
//           return res.status(404).send('Book not found.');
//       }

//       bookArray.splice(bookIndex, 1);
//       let modifiedBooks = stringify(bookArray, { header: true, eof: false, quoted: true });
//       fs.writeFileSync('./dummy.csv', modifiedBooks);

//       fs.unlinkSync(`./data/${bookId}.csv`);

//       res.status(200).send(`Book with ID ${bookId} was deleted successfully.`);
//   } catch (error) {
//       console.error(error);
//       res.status(500).send('Failed to delete the book.');
//   }
// });

app.listen(port, () => console.log(`The server is running on port ${port}.`));