import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, Response, NextFunction } from "express";

function globalMiddlewareOne(res: Response, req: Request, next: NextFunction){
  console.log("This is my first Global Middleware")
  next();
}
function globalMiddlewareTwo(res: Response, req: Request, next: NextFunction){
  console.log("This is my second Global Middleware")
  next();
}


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddlewareOne)
  app.use(globalMiddlewareTwo)
  await app.listen(3000);
}
bootstrap();
