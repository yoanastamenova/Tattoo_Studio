import { MigrationInterface, QueryRunner, Table, TableUnique } from "typeorm";

export class Appointments1719932127529 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "appointments",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "user_id",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "service_id",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "date",
                        type: "timestamp",
                        isNullable: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                        onUpdate: "now()"
                    },
                ],
                foreignKeys: [
                    {
                        columnNames: ["user_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    },
                    {
                        columnNames: ["service_id"],
                        referencedTableName: "services",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    },
                ],
                uniques: [
                    new TableUnique({
                        name: "user_service_date_unique",
                        columnNames: ["user_id", "service_id", "date"]
                    }),
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("appointments")
    }
}