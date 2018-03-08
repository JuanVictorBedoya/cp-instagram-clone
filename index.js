import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

//import typeDefs from './schemas'
//import resolvers from './resolvers'
import models from './models/index.js'

//mezclar todos los archivors de carpetas de types y resolvers
import path from 'path';
import {fileLoader, mergeTypes, mergeResolvers} from 'merge-graphql-schemas';
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './types')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));
//export default mergeTypes(typesArray);
//

const myGraphQLSchema = makeExecutableSchema({
       typeDefs,
       resolvers,
});
const PORT = 3000;

const app = express();

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ 
    schema: myGraphQLSchema,
    context:{
        models,
        user:{
            _id:1, username: 'Usuario Autenticado'
        }
    }
 }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled


//mongoose.connect('mongodb://localhost/instagram-clone',{useMongoClient: true}).then(
    mongoose.connect('mongodb://admin:root@ds235768.mlab.com:35768/instagram-clone').then(    
    ()=>{
        console.log('Conectado a Mongo')
        app.listen(PORT, ()=>{
            console.log('Running GRAPHQL server....');
        });
    }
)

