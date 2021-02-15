export interface IConfigDatabase {
  host: string;
  username: string;
  password: string;
  name: string;
}

export interface IConfig {
  port: number;
  database: IConfigDatabase;
  appName: string;
}

export default (): IConfig => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  appName: process.env.APP_NAME || 'NO-NAME',
  database: {
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    name: process.env.DB_NAME || '',
  },
});
