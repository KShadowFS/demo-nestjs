import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationDemo1747559878745 implements MigrationInterface {
    name = 'MigrationDemo1747559878745'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.query(`CREATE TABLE "Users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying(256), "lastName" character varying(256), "dateOfBirth" TIMESTAMP WITH TIME ZONE, "gender" integer, "refreshToken" text, "refreshTokenExpiryTime" TIMESTAMP WITH TIME ZONE, "referralCode" text, "avatar" character varying(500), "status" integer, "isDelete" boolean NOT NULL DEFAULT false, "createdDate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" uuid, "lastModifiedDate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "lastModifiedBy" uuid, "activatedDate" TIMESTAMP WITH TIME ZONE, "lastLoginDate" TIMESTAMP WITH TIME ZONE, "statusReason" text, "location" text, "userName" character varying(256), "normalizedUserName" character varying(256), "email" character varying(256), "normalizedEmail" character varying(256), "emailConfirmed" boolean NOT NULL DEFAULT false, "passwordHash" text, "securityStamp" text, "concurrencyStamp" text, "phoneNumber" text, "phoneNumberConfirmed" boolean NOT NULL DEFAULT false, "twoFactorEnabled" boolean NOT NULL DEFAULT false, "lockoutEnd" TIMESTAMP WITH TIME ZONE, "lockoutEnabled" boolean NOT NULL DEFAULT false, "accessFailedCount" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "UserLogins" ("loginProvider" text NOT NULL, "providerKey" text NOT NULL, "providerDisplayName" text, "userId" uuid NOT NULL, CONSTRAINT "PK_9b9fe63c2b33c3f4cf0902aef01" PRIMARY KEY ("loginProvider", "providerKey"))`);
        await queryRunner.query(`ALTER TABLE "UserLogins" ADD CONSTRAINT "FK_8d3eed87c7360dbdc49fac1c24c" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "UserLogins" DROP CONSTRAINT "FK_8d3eed87c7360dbdc49fac1c24c"`);
        await queryRunner.query(`DROP TABLE "UserLogins"`);
        await queryRunner.query(`DROP TABLE "Users"`);
    }

}
