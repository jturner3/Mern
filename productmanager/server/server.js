const cors = require('cors');
const express = require('express');
const app = express();
require('./config/mongoose.config');
app.use(cors())
app.use(express.json());                           /* This is new */
app.use(express.urlencoded({ extended: true }));
require('./routes/product.routes')(app);   
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})