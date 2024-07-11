import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Appointment1720103974702 implements MigrationInterface {

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
                        name: "appointment_date",
                        type: "date",
                        isNullable: false
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
                    // {
                    //     name: "artist_id",
                    //     type: "int",
                    //     isNullable: false
                    // }
                ],
                foreignKeys: [
                    {
                        columnNames: ['user_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'users',
                        onDelete: "CASCADE"
                    },
                    {
                        columnNames: ['service_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'services',
                        onDelete: "CASCADE"
                    },
                    
                ]
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('appointments')
    }
}
