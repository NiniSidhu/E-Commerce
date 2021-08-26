const sequelize = require('./config/connection');
const express = require('express');
const routes = require('/routes');

const app = express(); 
const PORT = process.env.PORT || 4001; 

app.use(express.json());
app.use(express.urlencoded( { extended: true}));

app.use(routes);

sequelize.sync().then(app.listen(PORT, () => {
    console.log(`Server is live on ${PORT}`);
})
);