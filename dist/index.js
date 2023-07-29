// src/index.ts
import axios from "axios";
import express from "express";
var GITHUB_API_URL = "https://api.github.com/users/AndrianBalanescu", app = express(), port = parseInt(process.env.PORT || "8000", 10), fetchGithubUserData = async () => {
  try {
    return (await axios.get(GITHUB_API_URL)).data;
  } catch (error) {
    return console.error("Failed to fetch Github user data:", error), null;
  }
}, cachedUserData = null;
fetchGithubUserData().then((data) => {
  data && (cachedUserData = data);
});
app.get("/", (req, res) => cachedUserData ? res.json(cachedUserData) : res.status(500).json({ error: "Failed to fetch Github user data." }));
app.listen(port, () => {
  console.log(`\u26A1\uFE0F[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map