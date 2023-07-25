import { Controller, Get, Post } from "@nestjs/common"

@Controller('book')
export class BookController{

    @Get()
    findAllBooks(): string{
        return "This api will return all books"
    }

    @Post()
    addBooks(): string{
        return "This api will add a book"
    }
}