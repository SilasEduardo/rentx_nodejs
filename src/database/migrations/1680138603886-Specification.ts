import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Specification1680138603886 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Specification",
                columns: [
                    {
                        name:"id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",

                    },
                    {
                        name: "description",
                        type: "varchar",
                        
                    },
                    {
                        name: "create_at",
                        type: "timestamp",
                        default: "now()",
                        
                    }
                ],
            })
        )
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
