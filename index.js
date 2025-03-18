const express = require("express");
const { PrismaClient } = require("./generated/prisma-client");

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

app.get("/", async (req, res) => {
  const testCount = await prisma.wolfpack.count();
  res.json(
    testCount == 0
      ? "No tests have been added yet."
      : "Sonme tests have been added to the database."
  );
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});