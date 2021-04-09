const userSchema = {
  schema: {
    body: {
      type: "object",
      required: ["username", "password"],
      properties: {
        username: {
          type: "string",
          minLength: 4,
          maxLength: 32,
        },
        password: {
          type: "string",
          minLength: 4,
          maxLength: 32,
        },
      },
    },
      response: {
          500: {
              type: 'object',
              properties: {
                  message: { type: 'string' }
              }
          }
      }
  },
};

module.exports = userSchema;
