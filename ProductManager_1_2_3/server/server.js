const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());                           
app.use(express.urlencoded({ extended: true }));   
require('./config/PM_config');    
require('./routes/PM_routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

