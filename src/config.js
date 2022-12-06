import {config} from 'dotenv';

config();

export const PORT = process.env.PORT || 3000;
export const DB_HOST= process.env.DB_HOST || 'emotemysql.com';
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_USER =  process.env.DB_USER || 'CrSBo2r9ht';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'dJdtAOFSG';
export const DB_DATABASE = process.env.DB_DATABASE || 'rSBo2r9ht';