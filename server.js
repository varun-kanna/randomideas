const express = require('express');
const port = 5000;
const app = express();

// Body parder middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	// res.send('Hello World');
	// res.send({ message: 'Hello World' });
	res.json({ message: 'Welcome to the RandomIdeas API' });
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));
