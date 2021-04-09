const slotsSchema = require("../schemas/slotsSchema");

async function slots(fastify) {
  fastify.post(
    "/",
    {
      ...slotsSchema,
      preValidation: [fastify.jwtauthentication],
    },
    async (req, res) => {
      res.status(200).send({ message: "user slots" });
    }
  );
}

module.exports = slots;
