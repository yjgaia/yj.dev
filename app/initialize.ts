import { msg } from "common-app-module";
import messages_en from "../locales/en.yml";
import messages_ko from "../locales/ko.yml";
import Config from "./Config.js";

msg.setMessages({
  en: messages_en,
  ko: messages_ko,
});

export default async function initialize(config: Config) {
}
