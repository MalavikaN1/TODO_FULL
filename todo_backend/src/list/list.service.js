const knexInstance = require("../database/connection");

const getList = async () => {
  const result = await knexInstance("todo_list").select("*");
  return result;
};

module.exports = { getList };
