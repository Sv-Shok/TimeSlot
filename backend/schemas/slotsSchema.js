const slotsSchema = {
  schema: {
    body: {
      type: "object",
      required: ["user_id", "value"],
      properties: {
        user_id: {
          type: "string",
        },
        value: {
          type: "string",
        },
      },
    },
  },
};

module.exports =  slotsSchema;
