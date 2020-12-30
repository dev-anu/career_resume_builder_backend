import express from "express";
import mongoose from "mongoose";
import { url } from "./key";
import routes from "./routes/auth";
import LoginCheck from "./middlewares/requireLogin";
const app = express();
const PORT = 8080;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(LoginCheck);

routes(app);
//connect mongodb
mongoose.connect(url.MongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("connected to mongodb");
});

mongoose.connection.on("error", (err) => {
  console.log("err connecting", err);
});

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
