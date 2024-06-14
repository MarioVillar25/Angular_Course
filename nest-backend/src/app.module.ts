/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), //Para tener acceso a nuestras variables de entorno
    MongooseModule.forRoot(process.env.MONGO_URI), //Para tener acceso a la base de datos
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
