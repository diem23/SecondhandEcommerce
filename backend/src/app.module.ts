import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { envConfig } from './config';
import { UserModule } from './users';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';

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
    AuthModule,
    CloudinaryModule,
    ProductModule,
    ReviewModule
  ],
  providers: [AppService],
})
export class AppModule {}
