import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trimg: true,
    },
    avatar: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
      default: "male",
    },
    dateOfBirth: {
      type: Date,
    },
    age: {
      type: Number,
      get: function () {
        const today = new Date();
        const birthDate = new Date(this.dateOfBirth);
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (
          monthDiff < 0 ||
          (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ) {
          age--;
        }

        return age;
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

export default User;
