import express from "express";
import { print } from "./utils/color.console.js";
import connectDB from "./database-connection/connect.db.js";
import adminRoutes from "./admin/admin.controller.js";

const app = express();

// to make app understand json
app.use(express.json());

// database connection
await connectDB();

// register routes
app.use(adminRoutes);

// network port and server
const PORT = 8000;

app.listen(PORT, () => {
  print(`App is listening on port ${PORT}`);
});
