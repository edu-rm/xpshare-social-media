import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUsers1601021747515 implements MigrationInterface {
    name = 'CreateUsers1601021747515'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `role`");
        await queryRunner.query("ALTER TABLE `users` CHANGE `deleted` `deleted` datetime(6) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` CHANGE `deleted` `deleted` datetime(6) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `users` ADD `role` varchar(255) NOT NULL");
    }

}
