// import { MigrationInterface, QueryRunner, Table } from "typeorm";

// export class Artists1720706255966 implements MigrationInterface {

//     public async up(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.createTable(
//             new Table({
//                 name: "artists",
//                 columns: [
//                     {
//                         name: "id",
//                         type: "int",
//                         isPrimary: true,
//                         isGenerated: true,
//                         generationStrategy: "increment"
//                     },
//                     {
//                         name: "email",
//                         type: "varchar",
//                         length: "255",
//                         isUnique: true,
//                         isNullable: false
//                     },
//                     {
//                         name: "password_hash",
//                         type: "varchar",
//                         length: "255",
//                         isNullable: false
//                     },
//                     {
//                         name: "role_id",
//                         type: "int",
//                         default: 2
//                     },
//                     {
//                         name: "created_at",
//                         type: "datetime",
//                         default: "now()"
//                     },
//                     {
//                         name: "updated_at",
//                         type: "datetime",
//                         default: "now()",
//                         onUpdate: "now()"
//                     },
//                     {
//                         name: 'specialization',
//                         type: 'varchar',
//                         isNullable: true
//                     },
//                     {
//                         name: 'bio',
//                         type: 'text',
//                         isNullable: true
//                     },
//                     {
//                         name: 'style',
//                         type: 'varchar',
//                         isNullable: true
//                     },
//                 ],
//                 foreignKeys: [
//                     {
//                         columnNames: ["role_id"],
//                         referencedTableName: "roles",
//                         referencedColumnNames: ["id"],
//                         onDelete: "CASCADE"
//                     },
//                     {
//                         columnNames: ["email"],
//                         referencedTableName: "users",
//                         referencedColumnNames: ["email"]
//                     },
//                     {
//                         columnNames: ["password_hash"],
//                         referencedTableName: "users",
//                         referencedColumnNames: ["password_hash"]
//                     }
//                 ],
//             }),
//             true
//         );
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.dropTable('artists')
//     }
// }
