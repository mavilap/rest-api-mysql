import {createPool} from 'mysql2/promise';

export const pool = createPool({
    host: 'remotemysql.com',
    user: 'CrSBo2r9ht',
    password: 'BdJdtAOFSG',
    port: '3306',
    database: 'CrSBo2r9ht' 

});