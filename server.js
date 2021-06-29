const express = require ('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require ('./schema');
const path = require('path');

const app = express();

//Allow cross-origin
app.use(cors());

//establish the main endpoint for use with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

//set port to be based on environment or 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`))