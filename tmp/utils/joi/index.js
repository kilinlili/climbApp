const joi = require("@hapi/joi");

const validateBody = (schema) => (req, res, next) => {
  return schema.validate(req["body"], (error) => {
    return error
      ? Promise.reject({
          status: 400,
          name: "BadRequest",
          message: { ...error },
        })
      : Promise.resolve(next());
  });
};

module.exports = { ...joi, validateBody };
