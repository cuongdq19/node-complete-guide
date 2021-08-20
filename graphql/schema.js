const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type User {
        _id: ID!
        name: String!
        email: String!
        password: String
        status: String!
        posts: [Post]!
    }

    type Post {
        _id: ID!
        title: String!
        content: String!
        imageUrl: String!
        creator: User!
        createdAt: String!
        updatedAt: String!
    }

    
    input UserInputData {
        email: String!
        name: String!
        password: String!
    }

    type Mutation {
        createUser(userInput: UserInputData): User!
    }
    
    type Query {
        hello: String
    }

    schema {
        query: Query
        mutation: Mutation
    }
`);
