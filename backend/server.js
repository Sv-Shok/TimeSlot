const connectDB = require("./config/db");
const fastify = require("fastify")({ logger: true });
const dotenv = require("dotenv");

dotenv.config();

connectDB();

fastify.register(require('./routes/user'), {prefix: '/user'});
fastify.register(require('fastify-jwt'), {
  secret: process.env.JWT_SECRET
});
fastify.register(require('./middleware/auth_middleware'));
fastify.register(require('./routes/slots'));

const start = async () => {
  try {
    await fastify.listen(5000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
