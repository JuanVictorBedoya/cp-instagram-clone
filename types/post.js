//! no puede ser nulo
export default ` 

type Post{
    _id: ID!
    desc: String
    photo: String
    by: UserShort
    likedBy: [UserShort]
    comments: [UserShort]
    createdAt: String
}

input iBy {
    username: String!
    thumbnail: String
}
input iPost{
    desc: String
    photo: String
}

type Query{
    getPost(_id: ID!): Post!
}

type Mutation{
    createPost(post:iPost): Post!
}
`;