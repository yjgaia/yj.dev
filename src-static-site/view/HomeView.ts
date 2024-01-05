import { el, StaticDomNode } from "@common-module/static-site-generator";

export default class HomeView extends StaticDomNode {
  constructor() {
    super(".home-view");
    this.append(
      el(
        ".profile",
        el("img.profile-image", { src: "/images/profile.jpg" }),
        el(
          ".info",
          el("h1", "yj.gaia"),
          el(
            "ul.links",
            el(
              "li",
              el("a", "https://x.com/yjgaia", {
                href: "https://x.com/yjgaia",
                target: "_blank",
              }),
            ),
            el(
              "li",
              el("a", "https://github.com/yjgaia", {
                href: "https://github.com/yjgaia",
                target: "_blank",
              }),
            ),
          ),
        ),
      ),
      el(
        "section",
        el("h2", "Experience"),
        el(
          "section",
          el(".org", "Gaia Protocol"),
          el(".title", "Director", el("span.date", " (2022.02 ~ )")),
        ),
        el(
          "section",
          el(".org", "Doge Sound Club"),
          el(
            ".title",
            "Developer & Community Manager",
            el("span.date", " (2021.07 ~ 2022.02)"),
          ),
          el(".title", "Technical Support", el("span.date", " (2022.02 ~ )")),
        ),
        el(
          "section",
          el(".org", "ELM Systems"),
          el(".title", "CTO", el("span.date", " (2020.01 ~ 2021.06)")),
        ),
        el(
          "section",
          el(".org", "BTNcafe (Mobile Game Company)"),
          el(".title", "CEO", el("span.date", " (2012.09 ~ 2019.11)")),
        ),
      ),
      el(
        "section",
        el("h2", "And more..."),
        el(
          "section",
          el(".org", "Sigor"),
          el(
            ".title",
            "Chief (a.k.a. Injeolmi Papa)",
            el("span.date", " (2021.11 ~ )"),
          ),
        ),
        el(
          "section",
          el(".org", "MateDAO"),
          el(".title", "Builder", el("span.date", " (2024.01 ~ )")),
        ),
      ),
    );
  }
}
