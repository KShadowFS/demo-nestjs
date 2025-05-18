import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
  entities: [join(__dirname, '..', 'database', 'entities/**/*.entity.{ts,js}')],
  migrations: [join(__dirname, '..', 'database', 'migrations/*.{ts,js}')],
  synchronize: false,
  logging: true,
});
