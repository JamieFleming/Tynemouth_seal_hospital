"use strict";
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
menuButton.addEventListener("click", () => {
	const open = menuButton.getAttribute("aria-expanded") !== "true";
	menuButton.setAttribute("aria-expanded", String(open));
	navigation.classList.toggle("is-open", open);
});
navigation.addEventListener("click", (event) => {
	if (event.target.closest("a")) {
		navigation.classList.remove("is-open");
		menuButton.setAttribute("aria-expanded", "false");
	}
});
document.addEventListener("keydown", (event) => {
	if (event.key === "Escape" && navigation.classList.contains("is-open")) {
		navigation.classList.remove("is-open");
		menuButton.setAttribute("aria-expanded", "false");
		menuButton.focus();
	}
});
const dialog = document.querySelector("#detail-dialog");
function showDetail(title, paragraphs, image, imageAlt = title) {
	dialog.classList.remove("seal-story-dialog", "article-dialog");
	document.querySelector("#dialog-title").textContent = title;
	const content = document.querySelector("#dialog-content");
	content.replaceChildren();
	if (image) {
		const photo = document.createElement("img");
		photo.src = image;
		photo.alt = imageAlt;
		content.append(photo);
	}
	paragraphs.forEach((text) => {
		const paragraph = document.createElement("p");
		paragraph.textContent = text;
		content.append(paragraph);
	});
	dialog.showModal();
}
document
	.querySelectorAll(".dialog-close, .dialog-done")
	.forEach((button) => button.addEventListener("click", () => dialog.close()));
dialog.addEventListener("click", (event) => {
	const rect = dialog.getBoundingClientRect();
	if (
		event.target === dialog &&
		(event.clientX < rect.left ||
			event.clientX > rect.right ||
			event.clientY < rect.top ||
			event.clientY > rect.bottom)
	)
		dialog.close();
});
document.addEventListener("click", (event) => {
	const button = event.target.closest("button");
	if (!button) return;
	if (button.dataset.cardId) {
		const collection =
			window.SealHospitalContent[button.dataset.cardCollection];
		const item = collection?.find(
			(entry) => entry.id === button.dataset.cardId,
		);
		if (!item) return;
		const title = item.name
			? `${item.name}’s story`
			: item.detailTitle || item.title;
		const paragraphs = item.details?.length ? item.details : [item.summary];
		showDetail(
			title,
			item.dateLabel ? [item.dateLabel, ...paragraphs] : paragraphs,
			item.image,
			item.imageAlt,
		);
        if (item.source) {
            const source = document.createElement('a');
            source.className = 'profile-source';
            source.href = item.source.url;
            source.target = '_blank';
            source.rel = 'noopener noreferrer';
            source.textContent = item.source.label;
            document.querySelector('#dialog-content').append(source);
        }
		if (item.sections?.length || item.posters?.length) {
			dialog.classList.add("article-dialog");
			const content = document.querySelector("#dialog-content");
			(item.sections || []).forEach((section) => {
				const block = document.createElement("section");
				block.className = "article-section";
				const heading = document.createElement("h3");
				heading.textContent = section.title;
				block.append(heading);
				(section.paragraphs || []).forEach((text) => {
					const paragraph = document.createElement("p");
					paragraph.textContent = text;
					block.append(paragraph);
				});
				if (section.items?.length) {
					const list = document.createElement("ul");
					section.items.forEach((text) => {
						const item = document.createElement("li");
						item.textContent = text;
						list.append(item);
					});
					block.append(list);
				}
				content.append(block);
			});
			if (item.posters?.length) {
				const heading = document.createElement("h3");
				heading.className = "article-posters-title";
				heading.textContent = item.postersTitle || "Our awareness posters";
				content.append(heading);
				item.posters.forEach((poster) => {
					const figure = document.createElement("figure");
					figure.className = "article-poster";
					const link = document.createElement("a");
					link.href = poster.src;
					link.target = "_blank";
					link.rel = "noopener noreferrer";
					link.setAttribute(
						"aria-label",
						`Open full-size ${item.mediaLabel || "poster"}: ${poster.caption} (opens in a new tab)`,
					);
					const image = document.createElement("img");
					image.src = poster.src;
					image.alt = poster.alt;
					image.loading = "lazy";
					image.width = poster.width || 1080;
					image.height = poster.height || 1350;
					link.append(image);
					const caption = document.createElement("figcaption");
					caption.textContent = `${poster.caption} Select the ${item.mediaLabel || "poster"} to view it full size.`;
					figure.append(link, caption);
					content.append(figure);
				});
			}
		}

		if (item.name) {
			dialog.classList.add("seal-story-dialog");
			const tags = document.createElement("p");
			tags.className = "tags";
			[item.species, item.sex].filter(Boolean).forEach((label) => {
				const tag = document.createElement("span");
				tag.textContent = label;
				tags.append(tag);
			});
			const content = document.querySelector("#dialog-content");
			const photo = content.querySelector("img");
			if (photo) photo.after(tags);
			else content.prepend(tags);
			if (photo && item.gallery?.length) {
				const gallery = document.createElement("div");
				gallery.className = "story-gallery";
				gallery.setAttribute("role", "group");
				gallery.setAttribute("aria-label", `${item.name}’s photographs`);
				const pictures = [
					{ src: item.image, alt: item.imageAlt },
					...item.gallery,
				];
				pictures.forEach((picture, index) => {
					const thumbnail = document.createElement("button");
					thumbnail.type = "button";
					thumbnail.className = "story-thumbnail";
					thumbnail.setAttribute(
						"aria-label",
						`Show photo ${index + 1} of ${pictures.length}: ${picture.alt}`,
					);
					thumbnail.setAttribute("aria-pressed", String(index === 0));
					const image = document.createElement("img");
					image.src = picture.src;
					image.alt = "";
					image.loading = "lazy";
					thumbnail.append(image);
					thumbnail.addEventListener("click", () => {
						photo.src = picture.src;
						photo.alt = picture.alt;
						gallery.querySelectorAll("button").forEach((control) => {
							control.setAttribute(
								"aria-pressed",
								String(control === thumbnail),
							);
						});
					});
					gallery.append(thumbnail);
				});
				photo.after(gallery);
			}
			(item.videos || []).forEach((video) => {
				let url;
				try {
					url = new URL(video.url);
				} catch {
					return;
				}
				if (url.protocol !== "https:") return;
				const card = document.createElement("article");
				card.className = "story-video-card";
				const heading = document.createElement("h3");
				heading.textContent = video.title;
				const description = document.createElement("p");
				description.textContent = video.description;
				const link = document.createElement("a");
				link.className = "button button-slate";
				link.href = url.href;
				link.target = "_blank";
				link.rel = "noopener noreferrer";
				link.textContent = "▶ Watch on Facebook ↗";
				link.setAttribute(
					"aria-label",
					`${video.title} on Facebook (opens in a new tab)`,
				);
				card.append(heading, description, link);
				content.append(card);
			});
		}
	}
	if (button.dataset.help === "monthly") {
        showDonationOptions(null, true);
    }

	if (button.dataset.collection) {
		const collections = {
			patients: ["Our current patients", "patients"],
			stories: ["Our seal stories", "releases"],
			updates: ["Hospital updates", "updates"],
		};
		const [title, key] = collections[button.dataset.collection];
		const paragraphs = window.SealHospitalContent[key].map(
			(item) =>
				`${item.name || item.title}${item.dateLabel ? ` — ${item.dateLabel}` : ""}: ${item.summary}`,
		);
		showDetail(
			title,
			paragraphs.length ? paragraphs : ["More information will be added soon."],
		);
	}
	if (button.dataset.policy) {
		const policies = {
			privacy: [
				"Privacy",
				"This preview loads fonts from Google Fonts and embeds content from Facebook. These services receive connection information when their content loads. No contact forms or payment processing are connected. The hospital’s full privacy notice will be added before launch.",
			],
			cookies: [
				"Cookies",
				"The website does not set its own cookies. Embedded Facebook content may use cookies or other storage under Meta’s policies. The final cookie notice and consent arrangements should be reviewed before launch.",
			],
			accessibility: [
				"Accessibility",
				"This website supports keyboard navigation, visible focus indicators, reduced motion preferences and responsive text layouts. An accessibility contact and full statement will be added before launch.",
			],
		};
		showDetail(policies[button.dataset.policy][0], [
			policies[button.dataset.policy][1],
		]);
	}
});
// Future checkout integration belongs here; no payment is taken on this site.
function showDonationOptions(amount, monthly = false) {
    const message = monthly
        ? "Regular support helps our seal patients recover. Visit our JustGiving page to see the donation options available, including regular giving where offered."
        : `Thank you for choosing to give${amount ? ` £${Number(amount).toLocaleString('en-GB', { maximumFractionDigits: 2 })}` : ''}. You can support Tynemouth Seal Hospital through JustGiving.`;
    showDetail(monthly ? "Become a monthly supporter" : "Donate through JustGiving", [
        message,
        "You’ll choose your amount and payment details on JustGiving. Your selection here is not transferred, and no payment has been taken on this website."
    ]);
    const link = document.createElement('a');
    link.className = 'button button-coral';
    link.href = window.SealHospitalContent.donations.justGivingUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Continue to JustGiving ↗';
    link.setAttribute('aria-label', 'Continue to JustGiving (opens in a new tab)');
    document.querySelector('#dialog-content').append(link);
}
const form = document.querySelector("#donation-form");
const customInput = document.querySelector("#custom-amount");
function updateDonation() {
	const selected = form.elements.amount.value;
	const custom = selected === "Other";
	document.querySelector("#custom-amount-wrap").hidden = !custom;
	customInput.required = custom;
	customInput.disabled = !custom;
	const amount = custom ? customInput.value : selected;
	document.querySelector("#donate-label").textContent = amount
		? `Donate £${amount}`
		: "Donate";
	document.querySelector("#donation-impact").textContent =
		amount && Number(amount) > 0
			? `£${amount} could help towards food and essential supplies.`
			: "Choose an amount to help our seals recover.";
}
if (form) {
form.addEventListener("change", updateDonation);
customInput.addEventListener("input", updateDonation);
form.addEventListener("submit", (event) => {
	event.preventDefault();
    const amount = form.elements.amount.value === "Other" ? customInput.value : form.elements.amount.value;
    showDonationOptions(amount);

});
updateDonation();
}
document.querySelector("#year").textContent = new Date().getFullYear();

// Keep extra support options compact on phones and expanded on larger screens.
const supportDetails = document.querySelector(".support-details");
const mobileLayout = window.matchMedia("(max-width: 640px)");
function syncSupportLayout() {
	if (supportDetails) supportDetails.open = !mobileLayout.matches;
}
syncSupportLayout();
mobileLayout.addEventListener("change", syncSupportLayout);
document
	.querySelectorAll('a[href="#support"], a[href="#help"]')
	.forEach((link) => {
		link.addEventListener("click", () => {
			if (supportDetails) supportDetails.open = true;
		});
	});
