import {Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot('mongoodb//localhost/user'),
    UserModule
  ],
})
export class AppModule {}
 