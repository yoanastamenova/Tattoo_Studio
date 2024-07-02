import "reflect-metadata";
import 'dotenv/config';
import { DataSource } from "typeorm";

import { Roles1719932122416 } from "./migrations/1719932122416-roles";
import { User1719932087723 } from "./migrations/1719932087723-user";
import { Services1719932131775 } from "./migrations/1719932131775-services";
import { Appointments1719932127529 } from "./migrations/1719932127529-appointments";


export const AppDataSource = new DataSource({
type: "mysql",
host: process.env.DB_HOST,
port: Number(process.env.DB_PORT),
username: process.env.DB_USERNAME,
password: process.env.DB_PASSWORD,
database: process.env.DB_DATABASE,
entities: [],
migrations: [Services1719932131775, Roles1719932122416, User1719932087723, Appointments1719932127529],
synchronize: false,
logging: false,
})