/* Reusable semantic cards. Content is inserted as text, never interpreted as HTML.
 * Keep existing class names so every instance shares the same responsive CSS.
 */
(() => {
  "use strict";
  const content = window.SealHospitalContent;

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function icon(name) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add("icon");
    svg.setAttribute("aria-hidden", "true");
    const use = document.createElementNS(svg.namespaceURI, "use");
    use.setAttribute("href", `#icon-${name}`);
    svg.append(use);
    return svg;
  }

  // Allow web, email and telephone links, including relative site URLs.
  function safeHref(href) {
    if (!href) return null;
    try {
      const url = new URL(href, document.baseURI);
      return ["http:", "https:", "mailto:", "tel:"].includes(url.protocol) ||
        (url.protocol === "file:" && !/^[a-z][a-z\d+.-]*:/i.test(href))
        ? href
        : null;
    } catch {
      return null;
    }
  }

  function action(item, collection, label) {
    const href = safeHref(item.href);
    const control = element(href ? "a" : "button", "text-link", `${label} `);
    if (href) {
      control.href = href;
    } else {
      control.type = "button";
      control.dataset.cardId = item.id;
      control.dataset.cardCollection = collection;
    }
    control.append(icon("arrow"));
    return control;
  }

  function sealCard(item, collection, variant) {
    const card = element(
      "article",
      `seal-card${collection === "releases" ? " release-card" : ""}`,
    );
    const photo = element("img");
    photo.src = item.image;
    photo.alt = item.imageAlt;
    photo.loading = "lazy";
    photo.width = 320;
    photo.height = 280;
    const body = element("div");
    const tags = element("p", "tags");
    const sexClass = { Female: "female", Male: "male" }[item.sex] || "";
    tags.append(element("span", "", item.species));
    if (item.sex) tags.append(element("span", sexClass, item.sex));
    body.append(
      element("h3", "", item.name),
      tags,
      element("p", "", item.summary),
      action(item, collection, item.readLabel || `Read ${item.name}’s story`),
    );
    if (variant === "expanded") {
      card.classList.add("seal-profile");
      body.classList.add("seal-profile-body");
      body.prepend(
        element(
          "p",
          "eyebrow",
          collection === "patients"
            ? "In rehabilitation"
            : "Released into the wild",
        ),
      );
      const control = body.querySelector("button, a");
      control.className = "button button-coral";
      if (item.dateLabel)
        body.insertBefore(
          element("p", "profile-date", item.dateLabel),
          control,
        );
      const preview = element("div", "profile-preview");
      (item.details || [])
        .slice(0, 2)
        .forEach((text) => preview.append(element("p", "", text)));
      body.insertBefore(preview, control);
      if (item.source) {
        const source = element("a", "profile-source", item.source.label);
        source.href = item.source.url;
        source.target = "_blank";
        source.rel = "noopener noreferrer";
        body.append(source);
      }
    }
    card.append(photo, body);
    return card;
  }

  function updateCard(item, collection, variant) {
    const card = element("article", "update-card");
    const date = element("time", "", item.dateLabel);
    date.dateTime = item.date;
    const summary = element("p");
    item.summary.split("\n").forEach((line, index) => {
      if (index) summary.append(document.createElement("br"));
      summary.append(document.createTextNode(line));
    });
    const control = action(item, "updates", "Read more");
    control.setAttribute("aria-label", `Read more: ${item.title}`);
    card.append(element("h3", "", item.title), date, summary, control);
    if (variant === "editorial") {
      card.classList.add("news-card");
      const body = element("div", "news-card-body");
      body.append(...Array.from(card.childNodes));
      const poster = item.posters?.[0];
      const visual = element("div", "news-card-visual");
      if (poster) {
        const image = element("img");
        image.src = poster.src;
        image.alt = poster.alt;
        image.loading = "lazy";
        image.width = poster.width || 1080;
        image.height = poster.height || 1350;
        visual.append(image);
      } else {
        visual.classList.add("news-card-illustration");
        visual.append(
          icon("heart"),
          element("span", "", "Our volunteer community"),
        );
      }
      card.append(visual, body);
    }
    return card;
  }

  function helpCard(item) {
    const card = element("article");
    card.append(
      icon(item.icon),
      element("h3", "", item.title),
      element("p", "", item.summary),
      action(item, "actions", item.label),
    );
    return card;
  }

  function teamCard(item) {
    const card = element("article", "team-card");
    const image = element("img");
    image.src = item.poster;
    image.alt = `Meet ${item.title} — team poster`;
    image.loading = "lazy";
    image.width = 1080;
    image.height = 1350;
    const body = element("div", "team-card-body");
    body.append(
      element("h3", "", item.title),
      element("p", "team-role", item.role),
      element("p", "team-summary", item.summary),
      action(item, "team", `Meet ${item.title}`),
    );
    card.append(image, body);
    return card;
  }

  function sealStoryCard(item) {
    const record = content[item.collection]?.find(
      (entry) => entry.id === item.recordId,
    );
    if (!record) return document.createDocumentFragment();
    const card = element("article", "seal-moment");
    const photo = element("img");
    photo.src = record.image;
    photo.alt = record.imageAlt;
    photo.loading = "lazy";
    photo.width = 600;
    photo.height = 450;
    const body = element("div");
    body.append(
      element("h3", "", item.title),
      element("p", "", item.summary),
      action(record, item.collection, `Explore ${record.name}’s story`),
    );
    card.append(photo, body);
    return card;
  }

  function funCard(item) {
    const card = element("article", "fun-card");
    const image = element("img");
    image.src = item.posters[0].src;
    image.alt = item.posters[0].alt;
    image.loading = "lazy";
    image.width = 1080;
    image.height = 1350;
    const body = element("div");
    body.append(element("h3", "", item.title), element("p", "", item.summary));
    const control = action(
      item,
      "fun",
      item.id === "life-advice" ? "Read the seal advice" : "See all six signs",
    );
    control.className = "button button-slate";
    body.append(control);
    card.append(image, body);
    return card;
  }

  const renderers = {
    patients: sealCard,
    releases: sealCard,
    updates: updateCard,
    actions: helpCard,
    team: teamCard,
    sealStories: sealStoryCard,
    fun: funCard,
  };
  document.querySelectorAll("[data-cards]").forEach((container) => {
    const collection = container.dataset.cards;
    if (collection === "patients" || collection === "releases") {
      container.tabIndex = 0;
      container.setAttribute("role", "region");
      container.setAttribute(
        "aria-label",
        `${collection === "patients" ? "Current patients" : "Released seals"} — scroll for more seals`,
      );
    }
    let records = content[collection];
    if (container.dataset.records) {
      records = container.dataset.records
        .split(",")
        .map((id) => records.find((item) => item.id === id.trim()))
        .filter(Boolean);
    }
    if (container.dataset.sort === "newest") {
      records = [...records].sort((a, b) =>
        (b.date || "").localeCompare(a.date || ""),
      );
    }
    const limit = Number.parseInt(container.dataset.limit, 10);
    const items =
      Number.isInteger(limit) && limit > 0 ? records.slice(0, limit) : records;
    container.style.setProperty(
      "--card-count",
      String(Math.max(1, Math.min(items.length, 3))),
    );
    container.replaceChildren(
      ...items.map((item) =>
        renderers[collection](item, collection, container.dataset.variant),
      ),
    );
  });
})();
