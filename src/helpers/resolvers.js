//* se crea el resolver como un objecto, aca tendremos funciones
import User from "../models/User";
import { tasks } from "../sample";

//* los resolvers deben ser proporcional al schema es decir si el el schema es de tipo query aca definimos query y realizamos el resultado que puede recibir despues de pedir la consulta que se definio en el schema como hello
//? Con tasks va a pasar algo curioso porque al ser un array para hacer la consulta debes especificar que quieres recibir por ejemplo { tasks { _id } }
export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello World with Graphql'
        },
        number: () => {
            return 2
        },
        greet(root, args) {
            return `Hello ${args.name}`
        },
        tasks() {
            return tasks;
        },
        async Users() {
            const user = await User.find()
            return user
        }
    },
    Mutation: {
        createTask(_, { input }) {
            input._id = tasks.length
            tasks.push(input);
            return input;
        },
        async createUser(_, { input }) {
            const newUser = new User(input)
            await newUser.save()
            return newUser;
        },
        async deleteUser(_, { _id }) {
            return await User.findByIdAndDelete(_id)
        },
        async updateUser(_, { _id, input }) {
            return await User.findByIdAndUpdate(_id, input, { new: true });
        }
    }
};