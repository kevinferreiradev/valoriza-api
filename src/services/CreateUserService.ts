interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {
   async ({name, email, admin} : IUserRequest) {
       
   }
}

export { CreateUserService }