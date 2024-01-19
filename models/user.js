import { Schema, model, models } from 'mongoose';
// models itu menyimpan semua model yang sudah diregisterasikan

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
  },
  image: {
    type: String,
  }
});

// cek apakah models User sudah tersedia, jika belum maka buat ulang
const User = models.User || model("User", UserSchema);

export default User;