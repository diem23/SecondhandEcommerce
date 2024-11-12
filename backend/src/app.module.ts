import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './users';
import { AuthModule } from './auth/auth.module';
import { envConfig } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [envConfig]
    }),
    MongooseModule.forRootAsync({
      useFactory: async (config: ConfigService) => {
        return {
          uri: config.get<string>('database'),
        }
      },
      inject: [ConfigService],
    }),

    UserModule,
    AuthModule
  ],
  providers: [AppService],
})
export class AppModule {}
