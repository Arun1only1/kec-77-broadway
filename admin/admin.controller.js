import Admin from "./admin.model.js";
import express from "express";
import validateReqBody from "../middlewares/validation.middleware.js";
import { generateHashedPassword } from "../utils/password.js";
import { registerAdminValidationSchema } from "./admin.validation.js";

const router = express.Router();

// register admin
router.post(
  "/admin/register",
  validateReqBody(registerAdminValidationSchema),
  async (req, res) => {
    // extract new admin from req.body
    const newAdmin = req.body;

    // find admin using provided email
    const admin = await Admin.findOne({ email: newAdmin.email });

    // if admin exist, throw error
    if (admin) {
      return res.status(409).send({ message: "Admin already exists." });
    }

    // generate hashed password
    const plainPassword = newAdmin.password;
    const saltRound = 10; // increases randomness
    const hashedPassword = await generateHashedPassword(
      plainPassword,
      saltRound
    );

    newAdmin.password = hashedPassword;

    await Admin.create(newAdmin);

    return res
      .status(201)
      .send({ message: "Admin is registered successfully." });
  }
);

export default router;
