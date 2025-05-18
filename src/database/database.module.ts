import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get<string>('DATABASE_HOST'),
                port: configService.get<number>('DATABASE_PORT'),
                username: configService.get<string>('DATABASE_USER'),
                password: configService.get<string>('DATABASE_PASS'),
                database: configService.get<string>('DATABASE_NAME'),
                entities: [join(__dirname, '..', 'database', 'entities/**/*.entity.{ts,js}')],
                migrations: [join(__dirname, '..', 'database', 'migrations/*.{ts,js}')],
                synchronize: false,
                autoLoadEntities: true,
            }),
        }),
    ],
})
export class DatabaseModule {}
