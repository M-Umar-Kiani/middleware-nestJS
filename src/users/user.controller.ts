import { Controller, Get, Post } from "@nestjs/common"

@Controller("users")
export class UserController{

    @Get()
    findAllUserss(): string{
        return "This api will return all users"
    }

    @Post()
    addBooks(): string{
        return "This api will add a user"
    }
}