/* Formspree form: native POST remains available without JavaScript. */
(() => {
  const form = document.querySelector('#contact-form');
  if (!form) return;
  const topic = document.querySelector('#contact-topic');
  const selected = new URLSearchParams(window.location.search).get('topic');
  if ([...topic.options].some(option => option.value === selected)) topic.value = selected;
  const status = document.querySelector('#contact-status');
  const button = document.querySelector('#contact-submit');
  let submitting = false;
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (submitting || !form.reportValidity()) return;
    submitting = true;
    button.disabled = true;
    button.textContent = 'Sending…';
    form.setAttribute('aria-busy', 'true');
    status.textContent = 'Sending your enquiry…';
    status.dataset.state = 'pending';
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(form.action, {
        method: 'POST', body: new FormData(form),
        headers: { Accept: 'application/json' }, signal: controller.signal
      });
      if (!response.ok) throw new Error('Submission failed');
      form.reset();
      status.dataset.state = 'success';
      status.textContent = 'Thank you — your enquiry has been sent. Our volunteer team will reply when they can.';
    } catch {
      status.dataset.state = 'error';
      status.textContent = 'We couldn’t confirm that your enquiry was sent. Your message is still here. Please try again, or email tynemouthsh@gmail.com.';
    } finally {
      clearTimeout(timeout);
      submitting = false;
      form.removeAttribute('aria-busy');
      button.disabled = false;
      button.textContent = 'Send enquiry →';
      status.focus();
    }
  });
})();
