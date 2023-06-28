import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

//? Aca se define que es lo que se puede consultar
//* no se le pone coma al query porque es sintaxis de graphql pero hello y greet son diferentes consultas
//? Lo que hicimos en task es que como es un array con diferente tipos de datos entonces definimos el task aparte con sus tipos de datos en el obejeto y lo pasamos al query
//! El type Query define que podemos consultar, El Type Mutation que se puede hacer update, delete y el tasks esta definiendo un array que nosotros creamos para poder hacerlo consultable
//! En la mutation definimos que createTask sera igual a un input que contendra los datos como definimos en TaskInput y devolvera el Task o si lo ponemos [Task] devolvera todo lo que Task tenga almacenado

const typeDefs = `
        type Query {
            hello: String
            number: Int
            greet(name: String!): String
            tasks: [Task]
            Users: [User] 
        }

        type Task {
            _id: ID
            title: String!
            description: String!,
            number: Int
        }

        type User {
            _id: ID
            firstname: String!
            lastname: String
            age: Int
        }

        type Mutation {
            createTask(input: TaskInput): Task
            createUser(input: UserInput): User
            deleteUser(_id: ID): User
            updateUser(_id: ID, input: UserInput): User
        }

        input TaskInput {
            title: String!,
            description: String!,
            number: Int
        }

        input UserInput {
            firstname: String!,
            lastname: String,
            age: Int
        }
`;

//? Aca definimos que es lo que va a hacer cuando llegue la consulta
export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers,
})