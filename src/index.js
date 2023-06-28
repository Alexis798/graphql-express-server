import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './helpers/schema';
import { connect } from './database/database';

const app = express();
connect()

app.get('/', (req, res) => {
    res.json({
        "message": "Hello world!"
    })
})

//?context es un dato que le puedes pasar a todas las consultas del schema
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
        messageId: 'test'
    }
}));

app.listen(3000, () => console.log('Server on port 3000'));