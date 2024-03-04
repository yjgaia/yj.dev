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
          el(
            ".org",
            el("a", "Gaia Protocol", {
              href: "https://gaiaprotocol.com",
              target: "_blank",
            }),
          ),
          el("p", "Web3 Social Protocol"),
          el(
            "ul.titles",
            el("li", "Director", el("span.date", " (2022.02 ~ )")),
          ),
        ),
        el(
          "section",
          el(
            ".org",
            el("a", "Doge Sound Club", {
              href: "https://dogesound.club",
              target: "_blank",
            }),
          ),
          el("p", "The First PFP Project in Korea"),
          el(
            "ul.titles",
            el(
              "li",
              "Developer & Community Manager",
              el("span.date", " (2021.07 ~ 2022.02)"),
            ),
            el("li", "Technical Advisor", el("span.date", " (2022.02 ~ 2023.11)")),
          ),
        ),
        el(
          "section",
          el(".org", "ELM Systems"),
          el(
            "ul.titles",
            el(
              "li",
              "CTO",
              el("span.date", " (2020.01 ~ 2021.06)"),
            ),
          ),
        ),
        el(
          "section",
          el(".org", "BTNcafe"),
          el("p", "Mobile Game Company"),
          el(
            "ul.titles",
            el(
              "li",
              "CEO",
              el("span.date", " (2012.09 ~ 2019.11)"),
            ),
          ),
        ),
      ),
      el(
        "section",
        el("h2", "And more..."),
        el(
          "section",
          el(
            ".org",
            el("a", "Sigor", {
              href: "https://sigor.com",
              target: "_blank",
            }),
          ),
          el("p", "Rural 2D Metaverse"),
          el(
            "ul.titles",
            el(
              "li",
              "Chief (a.k.a. Injeolmi Papa)",
              el("span.date", " (2021.11 ~ )"),
            ),
          ),
        ),
        el(
          "section",
          el(
            ".org",
            el("a", "MateDAO", {
              href: "https://matedao.org",
              target: "_blank",
            }),
          ),
          el("p", "DAO for Mate Holders"),
          el(
            "ul.titles",
            el(
              "li",
              "Builder",
              el("span.date", " (2024.01 ~ )"),
            ),
          ),
        ),
      ),
    );
  }
}
