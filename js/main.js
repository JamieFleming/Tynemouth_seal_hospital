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
function showDetail(title, paragraphs, image) {
  document.querySelector('#dialog-title').textContent = title;
  const content = document.querySelector('#dialog-content');
  content.replaceChildren();
  if (image) {
    const photo = document.createElement('img');
    photo.src = image;
    photo.alt = title;
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
const stories = {
  Mabel: ['Mabel is recovering well and now rebuilding her strength, ready for release.'],
  Brutus: ['On Sunday we released Brutus back into the wild! He showed his speed when he went back into the water.']
};
const helpContent = {
  monthly: ['Become a monthly supporter', 'Regular support helps provide food, medicines and specialist care while our seals recover. A monthly donation link will be added here before the website launches.'],
  supplies: ['Donate supplies', 'Help us get the supplies our seals need. Our wishlist link will be added here soon.'],
  fundraise: ['Fundraise for our seals', 'Schools, businesses, birthdays and sponsored challenges can all make a difference. Fundraising information and contact details will be added here soon.'],
  volunteer: ['Volunteer with us', 'Join our amazing team of volunteers and make an impact. Details of volunteering opportunities and how to apply will be added here soon.'],
  corporate: ['Corporate support', 'Support equipment, rehabilitation or community projects. Partnership contact details will be added here soon.'],
  share: ['Spread the word', 'Help people understand how to safely behave around wild seals. Share our advice: keep your distance, keep people and dogs away, and report concerns to British Divers Marine Life Rescue on 01825 765 546.']
};
document.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.dataset.story) {
    const name = button.dataset.story;
    showDetail(`${name}’s story`, stories[name], `Images/${name === 'Mabel' ? 'Rehab_seal.png' : 'brutus.jpg'}`);
  }
  if (button.dataset.update) {
    const article = button.closest('article');
    showDetail(article.querySelector('h3').textContent, [article.querySelector('time').textContent, article.querySelector('p').textContent]);
  }
  if (button.dataset.help) {
    const [title, text] = helpContent[button.dataset.help];
    showDetail(title, [text]);
  }
  if (button.dataset.collection) {
    const collections = {
      patients: ['Our current patients', 'Mabel is recovering well and rebuilding her strength, ready for release. More patient profiles will be added here soon.'],
      stories: ['Our seal stories', stories.Brutus[0]],
      updates: ['Hospital updates', '8 March 2026 — International Women’s Day: celebrating our volunteers and remembering trustee and volunteer Roxy.', '5 March 2026 — World Book Day: celebrating marine wildlife books, including volunteer Alison’s book about Spud, ‘The Selfie Seal’.']
    };
    const [title, ...paragraphs] = collections[button.dataset.collection];
    showDetail(title, paragraphs);
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
