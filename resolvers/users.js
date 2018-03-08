export default {
    Query:{
        holaMundo: (parent, args, context, info) => "Mi Primer query!!",
        allUsers: (parent, args, {models}) => models.User.find(),
        getUser: (parent, args, {models})=> models.User.findOne(args)
    },

    Mutation: {
        createUser:(parent, args, {models})=>models.User.create(args)
    }
}       