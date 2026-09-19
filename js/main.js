'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.focus();
  }
});
const dialog = document.querySelector('#detail-dialog');
function showDetail(title, paragraphs, image, imageAlt = title) {
  document.querySelector('#dialog-title').textContent = title;
  const content = document.querySelector('#dialog-content');
  content.replaceChildren();
  if (image) {
    const photo = document.createElement('img');
    photo.src = image;
    photo.alt = imageAlt;
    content.append(photo);
  }
  paragraphs.forEach(text => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    content.append(paragraph);
  });
  dialog.showModal();
}
document.querySelectorAll('.dialog-close, .dialog-done').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
document.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.dataset.cardId) {
    const collection = window.SealHospitalContent[button.dataset.cardCollection];
    const item = collection?.find(entry => entry.id === button.dataset.cardId);
    if (!item) return;
    const title = item.name ? `${item.name}’s story` : (item.detailTitle || item.title);
    const paragraphs = item.details?.length ? item.details : [item.summary];
    showDetail(title, item.dateLabel ? [item.dateLabel, ...paragraphs] : paragraphs, item.image, item.imageAlt);
  }
  if (button.dataset.help === 'monthly') {
    showDetail('Become a monthly supporter', ['Regular support helps provide food, medicines and specialist care while our seals recover. A monthly donation link will be added here before the website launches.']);
  }
  if (button.dataset.collection) {
    const collections = {
      patients: ['Our current patients', 'patients'],
      stories: ['Our seal stories', 'releases'],
      updates: ['Hospital updates', 'updates']
    };
    const [title, key] = collections[button.dataset.collection];
    const paragraphs = window.SealHospitalContent[key].map(item =>
      `${item.name || item.title}${item.dateLabel ? ` — ${item.dateLabel}` : ''}: ${item.summary}`
    );
    showDetail(title, paragraphs.length ? paragraphs : ['More information will be added soon.']);
  }
  if (button.dataset.policy) {
    const policies = {
      privacy: ['Privacy', 'This static preview does not include contact forms, analytics or payment processing. The hospital’s full privacy notice will be added before launch.'],
      cookies: ['Cookies', 'This preview does not set cookies or use third-party tracking. This notice should be reviewed when live services are connected.'],
      accessibility: ['Accessibility', 'This website supports keyboard navigation, visible focus indicators, reduced motion preferences and responsive text layouts. An accessibility contact and full statement will be added before launch.']
    };
    showDetail(policies[button.dataset.policy][0], [policies[button.dataset.policy][1]]);
  }
});
const form = document.querySelector('#donation-form');
const customInput = document.querySelector('#custom-amount');
function updateDonation() {
  const selected = form.elements.amount.value;
  const custom = selected === 'Other';
  document.querySelector('#custom-amount-wrap').hidden = !custom;
  customInput.required = custom;
  customInput.disabled = !custom;
  const amount = custom ? customInput.value : selected;
  document.querySelector('#donate-label').textContent = amount ? `Donate £${amount}` : 'Donate';
  document.querySelector('#donation-impact').textContent = amount && Number(amount) > 0 ? `£${amount} could help towards food and essential supplies.` : 'Choose an amount to help our seals recover.';
}
form.addEventListener('change', updateDonation);
customInput.addEventListener('input', updateDonation);
form.addEventListener('submit', event => {
  event.preventDefault();
  showDetail('Thank you for supporting our seals', ['Donations are not yet connected in this website preview. A secure payment link must be added before launch. No payment has been taken.']);
});
updateDonation();
document.querySelector('#year').textContent = new Date().getFullYear();
