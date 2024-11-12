export default () => ({
    port: parseInt(process.env.PORT),
    database: process.env.DATABASE_URI,
    secret: process.env.SECRET,
    expired: process.env.EXPIRED,
    // client_host: process.env.CLIENT_HOST,
    client_host_local: process.env.CLIENT_HOST_LOCAL,
  })
  