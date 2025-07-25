import { prisma } from "../prisma"

export interface UserRepository {
  getUserByEmail(email: string): Promise<User | null>
  createUser(user: User): Promise<User>
  updateUser(user: User): Promise<User>
  deleteUser(user: User): Promise<User>
  getUserById(id: string): Promise<User>
}

// export const userRepository: UserRepository = {
//   getUserByEmail: async (email: string) => {
//     const possibleUser = prisma.user.findUnique({
//       where: {
//         email,
//       },
//     });
//
//     if (!possibleUser) {
//       return null;
//     }
//
//   },
//   createUser: async (user: User) => {
//     return await prisma.user.create({
//       data: user,
//     });
//   },
//   updateUser: async (user: User) => {
//     return await prisma.user.update({
//       where: {
//         id: user.id,
//       },
//       data: user,
//     });
//   },
//   deleteUser: async (user: User) => {
//     return await prisma.user.delete({
//       where: {
//         id: user.id,
//       },
//     });
//   },
//   getUserById: async (id: string) => {
//     return await prisma.user.findUnique({
//       where: {
//         id,
//       },
//     });
//   },
// };
//
