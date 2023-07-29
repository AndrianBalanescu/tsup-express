// src/index.ts
import axios from "axios";
import express from "express";
var options = { method: "GET", url: "https://api.github.com/users/AndrianBalanescu" }, resData = {};
axios.request(options).then(function(response) {
  console.log(response.data), resData = response.data;
}).catch(function(error) {
  console.error(error);
});
var app = express(), port = process?.env?.PORT ?? 8e3;
app.get("/", async (req, res) => res.json(resData));
app.listen(port, () => {
  console.log(`\u26A1\uFE0F[server]: Server is 123 at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map