let users = require("./users");

function filterd(job) {
  console.log(typeof users);
  return users.filter((user) => {
    return user.job === job;
  });
}

return (module.exports = filterd);
