import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService)

  const configSwagger = new DocumentBuilder()
    .setTitle('Ecommerce services')
    .setDescription('The ecommerce services API description')
    .setVersion('0.1')
    .addBearerAuth()
    .addTag('Ecommerce')
    .build()

  const documentFactory = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('api', app, documentFactory);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))

  await app.listen(config.get<number>('port'))
}
bootstrap();
