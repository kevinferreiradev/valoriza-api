import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/Users";

@EntityRepository(User)
class UsersRepositories extends Repository<User> {}

export { UsersRepositories };