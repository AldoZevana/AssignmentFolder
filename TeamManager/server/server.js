const express = require('express');
const cors = require('cors');
const app = express();
const PORT=8000;
app.use(cors());
app.use(express.json());                           /* This is new and allows JSON Objects to be posted */
app.use(express.urlencoded({ extended: true }));   /* This is new and allows JSON Objects with strings and arrays*/
require('./config/mongoose.config');    /* This is new */
require('./routes/player.routes')(app);
app.listen(PORT, () => {
    console.log(`Listening at Port ${PORT}`)
})

