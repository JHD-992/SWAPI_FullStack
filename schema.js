const { GraphQLObjectType, GraphQLList, GraphQLSchema, GraphQLInt, GraphQLString } = require('graphql');
const axios = require('axios');

//result type
const ResultType = new GraphQLObjectType({
    name: 'Result',
    fields: () => ({
        count: { type: GraphQLInt },
        next: { type: GraphQLString },
        previous: { type: GraphQLString },
        results: {type: GraphQLList(PersonType)}
    })
});

//Person type
const PersonType = new GraphQLObjectType({
    name: 'Person',
    fields: () => ({
        name: { type: GraphQLString },
        height: { type: GraphQLString },
        mass: { type: GraphQLString },
        gender: { type: GraphQLString },
        homeworld: { type: GraphQLString }
    })
});

//root query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        people : {
            type: ResultType,
            args: {
                page: { type: GraphQLInt}
            },
            resolve(parent, args) {
                return axios.get(`https://swapi.dev/api/people/?page=${args.page}`)
                .then(res => res.data);
            }
        },
        person : {
            type: ResultType,
            args: {
                name: { type: GraphQLString}
            },
            resolve(parent, args) {
                return axios.get(`https://swapi.dev/api/people/?search=${args.name}`)
                .then(res => res.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});