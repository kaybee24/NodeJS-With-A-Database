import pg from 'pg';
import * as dotenv from "dotenv";

dotenv.config();
// console.log(process.env)

const { PGHOST,
    PGUSER,
    PGDATABASE,
    PGPASSWORD,
    PGPORT,
} = process.env

export default function connectToDB() {
    return new pg.Pool({
        PGHOST,
        PGUSER,
        PGDATABASE,
        PGPASSWORD,
        PGPORT,
    })
}