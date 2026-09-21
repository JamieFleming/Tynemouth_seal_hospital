/* Formspree form: native POST remains available without JavaScript. */
(() => {
  const mapButton = document.querySelector("#load-map");
  mapButton?.addEventListener("click", () => {
    const map = document.querySelector("#hospital-map");
    const placeholder = document.querySelector("#map-placeholder");
    map.src = map.dataset.src;
    map.hidden = false;
    placeholder.hidden = true;
    const stop = document.createElement("button");
    stop.type = "button";
    stop.className = "button button-slate embed-controls";
    stop.textContent = "Turn off Google map";
    map.after(stop);
    stop.addEventListener(
      "click",
      () => {
        map.removeAttribute("src");
        map.hidden = true;
        placeholder.hidden = false;
        stop.remove();
        mapButton.focus();
      },
      { once: true },
    );
    map.focus();
  });

  const form = document.querySelector("#contact-form");
  if (!form) return;
  const topic = document.querySelector("#contact-topic");
  const selected = new URLSearchParams(window.location.search).get("topic");
  if ([...topic.options].some((option) => option.value === selected))
    topic.value = selected;
  const status = document.querySelector("#contact-status");
  const button = document.querySelector("#contact-submit");
  // Keep native constraint validation and add persistent, associated error text.
  const fields = [
    ...form.querySelectorAll("input:not([type=hidden]), select, textarea"),
  ].filter((field) => field.name !== "_gotcha");
  function clearError(field) {
    field.removeAttribute("aria-invalid");
    const error = document.getElementById(`${field.id}-error`);
    if (error) error.textContent = "";
  }
  function describeError(field) {
    let error = document.getElementById(`${field.id}-error`);
    if (!error) {
      error = document.createElement("p");
      error.id = `${field.id}-error`;
      error.className = "field-error";
      field.after(error);
      field.setAttribute(
        "aria-describedby",
        [field.getAttribute("aria-describedby"), error.id]
          .filter(Boolean)
          .join(" "),
      );
    }
    const label = form
      .querySelector(`label[for="${field.id}"]`)
      .textContent.replace("*", "")
      .trim()
      .toLowerCase();
    error.textContent = field.validity.valueMissing
      ? field.tagName === "SELECT"
        ? "Please choose an enquiry type."
        : `Please enter ${label}.`
      : field.validity.typeMismatch
        ? "Please enter a valid email address, such as name@example.com."
        : field.validity.tooShort
          ? "Please give us a little more detail (at least 10 characters)."
          : field.validationMessage;
    field.setAttribute("aria-invalid", "true");
  }
  fields.forEach((field) => {
    field.addEventListener("invalid", () => describeError(field));
    field.addEventListener("input", () => {
      if (field.validity.valid) clearError(field);
    });
    field.addEventListener("change", () => {
      if (field.validity.valid) clearError(field);
    });
  });
  let submitting = false;
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (submitting || !form.reportValidity()) return;
    submitting = true;
    button.disabled = true;
    button.textContent = "Sending…";
    form.setAttribute("aria-busy", "true");
    status.textContent = "Sending your enquiry…";
    status.dataset.state = "pending";
    // Snapshot the submitted values so later edits are never erased by a response.
    const submittedData = new FormData(form);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: submittedData,
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });
      if (!response.ok) {
        const result = await response.json().catch(() => null);
        const details = Array.isArray(result?.errors)
          ? result.errors
              .map((error) => error.message)
              .filter((message) => typeof message === "string")
              .join(" ")
          : "";
        status.dataset.state = "error";
        status.textContent = details
          ? `Your enquiry could not be sent: ${details} Your message is still here. Please correct it and try again, or email tynemouthsh@gmail.com.`
          : "Your enquiry could not be sent. Your message is still here. Please try again, or email tynemouthsh@gmail.com.";
        return;
      }
      const editedWhileSending = fields.some(
        (field) => field.value !== submittedData.get(field.name),
      );
      if (!editedWhileSending) form.reset();
      fields.forEach(clearError);
      status.dataset.state = "success";
      status.textContent =
        "Thank you — your enquiry has been sent. Our volunteer team will reply when they can." +
        (editedWhileSending
          ? " Changes you made while sending have been kept below; those changes were not included in the sent enquiry."
          : "");
    } catch {
      status.dataset.state = "error";
      status.textContent =
        "We couldn’t confirm that your enquiry was sent. Your message is still here. Please try again, or email tynemouthsh@gmail.com.";
    } finally {
      clearTimeout(timeout);
      submitting = false;
      form.removeAttribute("aria-busy");
      button.disabled = false;
      button.textContent = "Send enquiry";
      status.focus();
    }
  });
})();
