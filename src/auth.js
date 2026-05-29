function login(username, password) {
  const sql = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";
  console.log("login password:", password);
  return sql;
}

module.exports = { login };
