<<<<<<< HEAD
//require gql from apollo-server-express
const { gql } = require('apollo-server-express');

//typeDefs declarations from User/Book models and me Query and mutations
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  input InputBook {
    bookId: String
    authors: [String]
    title: String
    description: String
    image: String
    link: String
  }
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(newBook: InputBook!): User
    removeBook(bookId: ID!): User
  }
`;

//export typeDefs
=======
const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Book {
    _id: ID!
    bookId: String
    authors: [String]
    # authors: String
    description: String
    title: String
    image: String
    link: String
  }
type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
input savedBook {
    description: String
    title: String
    bookId: String
    image: String
    link: String
    authors: [String]
}
type Query {
    me: User  
  }
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: savedBook!): User
    removeBook(bookId: ID!): User
}
type Auth {
    token: ID!
    user: User
  }
`;



// export the typeDefs
>>>>>>> 633628d7eb6cf4d5317c3cc5cf6749d67476fc30
module.exports = typeDefs;