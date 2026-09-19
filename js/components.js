/* Reusable semantic cards. Content is inserted as text, never interpreted as HTML.
 * Keep existing class names so every instance shares the same responsive CSS.
 */
(() => {
  'use strict';
  const content = window.SealHospitalContent;

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function icon(name) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('icon');
    svg.setAttribute('aria-hidden', 'true');
    const use = document.createElementNS(svg.namespaceURI, 'use');
    use.setAttribute('href', `#icon-${name}`);
    svg.append(use);
    return svg;
  }

  // Allow web, email and telephone links, including relative site URLs.
  function safeHref(href) {
    if (!href) return null;
    try {
      const url = new URL(href, document.baseURI);
      return ['http:', 'https:', 'mailto:', 'tel:'].includes(url.protocol) ||
        (url.protocol === 'file:' && !/^[a-z][a-z\d+.-]*:/i.test(href)) ? href : null;
    } catch {
      return null;
    }
  }

  function action(item, collection, label) {
    const href = safeHref(item.href);
    const control = element(href ? 'a' : 'button', 'text-link', `${label} `);
    if (href) {
      control.href = href;
    } else {
      control.type = 'button';
      control.dataset.cardId = item.id;
      control.dataset.cardCollection = collection;
    }
    control.append(icon('arrow'));
    return control;
  }

  function sealCard(item, collection) {
    const card = element('article', `seal-card${collection === 'releases' ? ' release-card' : ''}`);
    const photo = element('img');
    photo.src = item.image;
    photo.alt = item.imageAlt;
    photo.loading = 'lazy';
    photo.width = 320;
    photo.height = 280;
    const body = element('div');
    const tags = element('p', 'tags');
    const sexClass = { Female: 'female', Male: 'male' }[item.sex] || '';
    tags.append(element('span', '', item.species), element('span', sexClass, item.sex));
    body.append(element('h3', '', item.name), tags, element('p', '', item.summary),
      action(item, collection, `Read ${item.name}’s story`));
    card.append(photo, body);
    return card;
  }

  function updateCard(item) {
    const card = element('article', 'update-card');
    const date = element('time', '', item.dateLabel);
    date.dateTime = item.date;
    const summary = element('p');
    item.summary.split('\n').forEach((line, index) => {
      if (index) summary.append(document.createElement('br'));
      summary.append(document.createTextNode(line));
    });
    const control = action(item, 'updates', 'Read more');
    control.setAttribute('aria-label', `Read more: ${item.title}`);
    card.append(element('h3', '', item.title), date, summary, control);
    return card;
  }

  function helpCard(item) {
    const card = element('article');
    card.append(icon(item.icon), element('h3', '', item.title),
      element('p', '', item.summary), action(item, 'actions', item.label));
    return card;
  }

  const renderers = { patients: sealCard, releases: sealCard, updates: updateCard, actions: helpCard };
  document.querySelectorAll('[data-cards]').forEach(container => {
    const collection = container.dataset.cards;
    if (collection === 'patients' || collection === 'releases') {
      container.tabIndex = 0;
      container.setAttribute('role', 'region');
      container.setAttribute('aria-label', `${collection === 'patients' ? 'Current patients' : 'Released seals'} — scroll for more seals`);
    }
    const limit = Number.parseInt(container.dataset.limit, 10);
    const items = Number.isInteger(limit) && limit > 0
      ? content[collection].slice(0, limit)
      : content[collection];
    container.style.setProperty('--card-count', String(Math.max(1, Math.min(items.length, 3))));
    container.replaceChildren(...items.map(item => renderers[collection](item, collection)));
  });
})();
