import mongoose from "mongoose";

// set schema/structure/rule
const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    maxlength: 55,
    lowercase: true,
    unique: true, //11000 error: Duplicate Key Error
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 30,
    lowercase: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 30,
    lowercase: true,
  },
});

// create table/model/collection
const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
