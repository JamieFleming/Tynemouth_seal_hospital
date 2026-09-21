/* Public Facebook embeds only. Never put Page access tokens in frontend files.
 * A Page timeline cannot be limited to three posts. To curate three posts,
 * add their public URLs to facebook.posts in content.js, newest first.
 */
(() => {
  "use strict";
  const config = window.SealHospitalContent.facebook;
  const container = document.querySelector("#facebook-feed");
  if (!config || !container) return;

  function publicFacebookUrl(value) {
    try {
      const url = new URL(value);
      return url.protocol === "https:" &&
        ["facebook.com", "www.facebook.com", "m.facebook.com"].includes(
          url.hostname,
        )
        ? url.href
        : null;
    } catch {
      return null;
    }
  }

  const pageUrl = publicFacebookUrl(config.pageUrl);
  if (!pageUrl) return;
  const posts = (config.posts || [])
    .map(publicFacebookUrl)
    .filter(Boolean)
    .slice(0, 3);
  const isCurated = posts.length > 0;
  container.classList.toggle("facebook-post-grid", isCurated);
  document.querySelector("#facebook-description").textContent = isCurated
    ? "Stories and moments from the hospital, shared on Facebook."
    : "Follow the latest news, seal stories and behind-the-scenes moments from the hospital.";

  const placeholder = document.createElement("div");
  placeholder.className = "embed-placeholder";
  const description = document.createElement("p");
  description.textContent =
    "Loading this feed allows Meta to receive your connection information and use cookies for service features, measurement, personalisation and advertising, depending on your settings. You can leave it blocked and use the direct link instead.";
  const loadButton = document.createElement("button");
  loadButton.type = "button";
  loadButton.className = "button button-slate";
  loadButton.textContent = "Load Facebook feed";
  const cookieLink = document.createElement("a");
  cookieLink.href = "cookies.html";
  cookieLink.textContent = "Cookies and your choices";
  placeholder.append(description, cookieLink, loadButton);
  container.append(placeholder);
  loadButton.addEventListener("click", () => {
    placeholder.remove();
    const cleanup = loadFeed();
    const controls = document.createElement("div");
    controls.className = "embed-controls";
    const stop = document.createElement("button");
    stop.type = "button";
    stop.className = "button button-slate";
    stop.textContent = "Turn off Facebook feed";
    controls.append(stop);
    container.after(controls);
    stop.addEventListener(
      "click",
      () => {
        cleanup();
        container.replaceChildren(placeholder);
        controls.remove();
        loadButton.focus();
      },
      { once: true },
    );
    container.querySelector("iframe")?.focus();
  });

  function loadFeed() {
    const frames = (isCurated ? posts : [pageUrl]).map((url, index) => {
      const panel = document.createElement("div");
      panel.className = "facebook-panel";
      const frame = document.createElement("iframe");
      frame.title = isCurated
        ? `Tynemouth Seal Hospital Facebook post ${index + 1}`
        : "Tynemouth Seal Hospital Facebook Page timeline";
      frame.loading = "lazy";
      frame.height = isCurated ? "650" : "700";
      frame.allow = "encrypted-media; picture-in-picture; web-share";
      frame.allowFullscreen = true;
      const link = document.createElement("a");
      link.className = "text-link";
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = isCurated
        ? "View this post on Facebook"
        : "View the Page on Facebook";
      panel.append(frame, link);
      container.append(panel);
      return { panel, frame, url, width: 0 };
    });

    function resizeEmbeds() {
      frames.forEach((item) => {
        const width = Math.max(
          180,
          Math.min(
            500,
            Math.floor(item.panel.getBoundingClientRect().width || 350),
          ),
        );
        if (item.width === width) return;
        item.width = width;
        const params = new URLSearchParams({
          href: item.url,
          width: String(width),
        });
        if (isCurated) {
          params.set("show_text", "true");
        } else {
          params.set("tabs", "timeline");
          params.set("height", "700");
          params.set("small_header", "true");
          params.set("adapt_container_width", "true");
          params.set("hide_cover", "false");
          params.set("show_facepile", "false");
        }
        item.frame.width = String(width);
        item.frame.src = `https://www.facebook.com/plugins/${isCurated ? "post" : "page"}.php?${params}`;
      });
    }
    resizeEmbeds();
    // Reload only after resizing ends, rather than on every animation frame.
    let resizeTimer;
    let observer;
    if ("ResizeObserver" in window) {
      observer = new ResizeObserver(() => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(resizeEmbeds, 250);
      });
      frames.forEach(({ panel }) => observer.observe(panel));
    }
    return () => {
      clearTimeout(resizeTimer);
      observer?.disconnect();
    };
  }
})();
