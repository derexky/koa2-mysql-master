export default {
  projectName: 'Koa2 Server',
  port: 3000,
  db: {
    dialect: 'sqlite',
    storage: ':memory:',
    // database: 'test',
    // replication: {
    //   read: [
    //     {
    //       host: 'localhost',
    //       username: 'root',
    //       password: 'passwd',
    //       port: 3306,
    //     },
    //   ],
    //   write: {
    //     host: 'localhost',
    //     username: 'root',
    //     password: 'passwd',
    //     port: 3306,
    //   },
    // },
    // pool: {
    //   max: 50,
    //   min: 0,
    //   acquire: 30000,
    //   idle: 10000,
    // },
    // dialect: 'mariadb',
    // define: {
    //   freezeTableName: true,
    //   underscored: true,
    // },
    // dialectOptions: {
    //   collate: 'utf8mb4_unicode_ci',
    //   useUTC: true,
    //   timezone: 'Etc/GMT0',
    // },
    // logging: false,
  },
  secret: 'my_koa_secret_string',
  commitId: '',
}
