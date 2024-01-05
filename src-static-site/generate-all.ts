import {
  generate,
  StaticSiteTemplate,
} from "@common-module/static-site-generator";
import HomeView from "./view/HomeView.js";

export default async function generateAll() {
  await generate(
    "public/index.html",
    new StaticSiteTemplate("yj.gaia", new HomeView()),
  );
}
