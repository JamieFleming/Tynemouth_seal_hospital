/* Share the published website even when previewing this page on localhost. */
(() => {
  const field = document.querySelector("#share-url");
  if (!field) return;
  const status = document.querySelector("#share-status");
  async function copyLink() {
    try {
      await navigator.clipboard.writeText(field.value);
      status.textContent =
        "Website link copied. Paste it into a message or social post.";
    } catch {
      field.focus();
      field.select();
      status.textContent =
        "Select and copy the website link above to share it.";
    }
  }
  document.querySelector("#copy-website").addEventListener("click", copyLink);
  document
    .querySelector("#share-website")
    .addEventListener("click", async () => {
      if (!navigator.share) return copyLink();
      try {
        await navigator.share({
          title: "Tynemouth Seal Hospital",
          text: "Meet the seals and help support their journey back to the wild.",
          url: field.value,
        });
        status.textContent = "Thank you for sharing our work.";
      } catch (error) {
        if (error.name !== "AbortError") await copyLink();
      }
    });
})();
