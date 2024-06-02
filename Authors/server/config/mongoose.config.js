const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/authorDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to author database')
})
.catch((err) => {
    console.log('Could not connect to author database', err)
})