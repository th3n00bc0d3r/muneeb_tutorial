const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');


//Server Inits
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json({limit: '100mb', extended: true}));
app.use(bodyParser.urlencoded({limit: "100mb", extended: true, parameterLimit:50000}));

// Route to ping the server
app.get('/ping', (req, res) => {
    res.json({ success: true, message: 'Server is up and running!' });
});

app.post('/login', (req, res) => {
    const { email, pass } = req.body;

    console.log("Data", req.body);

    res.json({
        success: true,
        data: req.body
    });
});



app.listen(port, () => { 
    console.log(`Server running on port ${port}`);
});
