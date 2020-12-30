import { addNewUser, userExist } from "../controllers/auth";
import { addPersonal } from "../controllers/personal";
import { postEducation } from "../controllers/education";
import { postExperience } from "../controllers/experience";

const routes = (app) => {
  app.route("/register").post(addNewUser);
  app.route("/login").post(userExist);
  app.route("/personal").post(addPersonal);
  app.route("/educational").post(postEducation);
  app.route("/experience").post(postExperience);
};

export default routes;
