/* Edit card content here. IDs must be unique within each collection.
 * details: optional paragraphs; an empty list uses the summary.
 * actions.href: optional destination URL; blank opens the detail dialog.
 * The repeated seal profiles are editable placeholders from the design.
 */
window.SealHospitalContent = {
	donations: { justGivingUrl: "https://www.justgiving.com/charity/tynemouthsealhospital" },
	// Leave posts empty for the live Page timeline. For three selected embeds,
	// paste up to three public post URLs here, newest first. They do not auto-update.
	facebook: {
		pageUrl: "https://www.facebook.com/TynemouthSeal/",
		posts: [],
	},
	patients: [
		{
			id: "patients-1",
			name: "Xana",
			species: "Common seal",
			sex: "Female",
			image: "Images/xana.jpg",
			imageAlt: "Xana, a female common seal",
			videos: [
				{
					title: "Watch Xana’s shower",
					description:
						"See Xana enjoying a shower from the hose while the team fills her tub.",
					url: "https://www.facebook.com/share/r/18zm5X2xk3/",
				},
			],
			summary:
				"Rescued in Redcar, Xana is gaining weight in pen 2 and enjoying short tub sessions as she gets ready to swim.",
			details: [
				"Xana is staying in pen 2. BDMLR rescued her from Redcar in early August, when she weighed just 9.5kg.",
				"She first received intensive care from the team at North East Seal Triage in Northumberland. Once stable enough to travel, she moved to Tynemouth Seal Hospital on 23 August, weighing 9.73kg.",
				"Since arriving, Xana has been making the most of the fish supplied by Tynemouth Aquarium and gaining weight daily. She particularly loves a shower from the hose while the team fills her tub!",
				"As she puts on weight, the team is giving her short tub sessions while making sure she does not get too cold in the water. This is an important step towards swimming: dipping her head underwater helps strengthen her nostril muscles too.",
			],
		},
		{
			id: "patients-2",
			name: "Kraken",
			species: "Common seal",
			sex: "Male",
			image: "Images/kraken_1.jpg",
			imageAlt:
				"Kraken looking up at the camera from his pen at the seal hospital",
			summary:
				"Rescued in Northumberland, Kraken arrived underweight at 13.73kg. This feisty male is being cared for as he builds towards a return to the wild.",
			details: [
				"BDMLR rescued Kraken in Northumberland after he was being harassed by people and dogs. His mouth also appeared to be infected.",
				"He spent the night at North East Seal Triage before coming to Tynemouth Seal Hospital. At 13.73kg, he was underweight, but certainly not short of spirit.",
				"Kraken is feisty and will try to bite at volunteers’ ankles while they care for him. His behaviour is a reminder that seals are wild animals with incredibly sharp teeth. If you see a seal in the wild, stay well away and keep people and dogs at a safe distance.",
				"With plenty of fish supplied by Tynemouth Aquarium, the team hopes to help Kraken gain weight and get ready for release back into the wild.",
			],
			gallery: [
				{
					src: "Images/kraken_2.jpg",
					alt: "Kraken looking up from his pen, photographed from above",
				},
				{
					src: "Images/kraken_3.jpg",
					alt: "A wider view of Kraken resting in his pen at the seal hospital",
				},
			],
		},
	],
	releases: [
		{
			id: "releases-1",
			name: "Isla",
			species: "Grey seal",
			sex: "Female",
			image: "Images/isla_1.jpg",
			imageAlt:
				"Isla, a grey seal with a yellow flipper tag, resting on the rocky shore",
			summary:
				"Rescued at 20kg with lungworm, Isla was released fit and healthy at 34.3kg in May 2019. She has since been spotted back in the wild.",
			details: [
				"Born in 2018, Isla was rescued from St Mary’s Island in March 2019. She was suffering from lungworm and was underweight at just 20kg.",
				"After care at Tynemouth Seal Hospital, Isla was released fully fit in May 2019, weighing 34.3kg.",
				"Her yellow tag has helped people recognise her since release. She was spotted in Yorkshire in January 2021 and back at St Mary’s Island in November 2021.",
				"In a further sighting shared by the hospital, Linda, a volunteer with St. Mary’s Island Wildlife Conservation Society, noticed a yellow tag on a seal resting on the island. Checks confirmed that it was Isla — a returning visitor from Tynemouth Seal Hospital.",
				"Seeing Isla back in the wild is a success story for the hospital’s volunteers and a reminder of the difference made by support from Tynemouth Aquarium.",
			],
			gallery: [
				{
					src: "Images/isla_2.jpg",
					alt: "Isla resting on the shore alongside other grey seals at St Mary’s Island",
				},
			],
		},
		{
			id: "releases-2",
			name: "Brutus",
			species: "Grey seal",
			sex: "Male",
			image: "Images/brutus_2.jpg",
			imageAlt:
				"Brutus resting on the seaweed-covered shore on his release day",
			summary:
				"Rescued by Blyth Wildlife Rescue, inquisitive Brutus won the team’s hearts before making a speedy return to the sea.",
			details: [
				"Brutus was first rescued by Blyth Wildlife Rescue and brought to Tynemouth Seal Hospital, where he soon won the hearts of the team.",
				"An incredibly inquisitive boy, Brutus showed off his speed in the larger rehabilitation pen as he prepared for life back in the wild.",
				"With fish supplied by Tynemouth Aquarium supporting his recovery, Brutus was ready for release. When the team returned him to the wild, he showed off that same speed as he headed back into the water.",
			],
			gallery: [
				{
					src: "Images/brutus_release_1.jpg",
					alt: "The team carrying Brutus’s transport crate to the shore for release",
				},
				{
					src: "Images/brutus_release_2.jpg",
					alt: "Brutus looking out from his open transport crate on the beach",
				},
				{
					src: "Images/brutus_1.jpg",
					alt: "Brutus moving across the seaweed-covered shore towards the water",
				},
				{
					src: "Images/brutus_3.jpg",
					alt: "Brutus in the shallow seawater after his release",
				},
			],
		},
	],
	updates: [
{
    "id": "nurdling-2026-08-28",
    "title": "Get nurdling: small pellets, a big difference",
    "date": "2026-08-28",
    "dateLabel": "28th August 2026",
    "summary": "Tiny plastic pellets can harm marine wildlife. Help protect our seals by collecting nurdles, joining local clean-ups and reporting sightings.",
    "details": [
        "Nurdles are small plastic pellets that can wash up on our beaches. Our awareness posters highlight a spill reported to have brought more than one billion pellets to the North East coastline.",
        "Fish can mistake these pellets for food. Seals may then swallow plastic when they eat affected fish. The posters also explain that nurdles can absorb harmful chemicals and pollutants, which can be consumed by wildlife.",
        "“Nurdling” means looking for and collecting these pellets. Removing them from the beach helps reduce the plastic left in the coastal environment and available for wildlife to swallow."
    ],
    "sections": [
        {
            "title": "How you can get involved",
            "items": [
                "Bring gloves, bags, sieves and buckets to collect nurdles from the beach. Follow the latest local clean-up guidance.",
                "Take your collected pellets to a designated nurdle drop-off point. Check the current locations with local clean-up organisers before setting out.",
                "Join the local nurdling WhatsApp community for guidance, equipment information and group clean-ups. Ask local organisers for the joining details.",
                "Report nurdle sightings to the local council so affected areas can be identified."
            ]
        },
        {
            "title": "Share the message",
            "paragraphs": [
                "Help others understand how plastic pellets affect marine wildlife by sharing these posters. Every collection is a way to help care for the coastline our seals call home."
            ]
        }
    ],
    "posters": [
        {
            "src": "Images/nurdles_1.jpg",
            "alt": "Nurdles awareness poster explaining the reported North East pellet spill, ingestion by fish and seals, and pollutants carried by plastic. The key information is provided in the article above.",
            "caption": "Nurdles: what plastic pellets mean for our seals."
        },
        {
            "src": "Images/nurdles_2.jpg",
            "alt": "Get nurdling poster: bring gloves, bags, sieves and buckets; use nurdle drop-off points; join the WhatsApp clean-up community; and report sightings to the council.",
            "caption": "Get nurdling: how you can help."
        }
    ]
},
{
    "id": "family-fun-day-2026-08-27",
    "title": "Family fun day: help our seal pup patients",
    "date": "2026-08-27",
    "dateLabel": "27th August 2026",
    "summary": "Join Dolphin Spotting NE on Saturday 12 September, 10am–2pm, at Roker Watch House, Pier View. Enjoy family activities, refreshments and a seal rehabilitation talk, with all proceeds supporting Tynemouth Seal Hospital.",
    "details": [
        "Dolphin Spotting NE is holding a family fun day fundraiser for Tynemouth Seal Hospital on Saturday 12 September 2026. Come along to help raise money for our seal pup patients and enjoy a day of activities for the whole family."
    ],
    "sections": [
        {
            "title": "When and where",
            "items": [
                "Saturday 12 September 2026, 10am–2pm.",
                "Roker Watch House, Pier View."
            ]
        },
        {
            "title": "The Three F’s of Seal Rehabilitation",
            "paragraphs": [
                "At 10.30am, Richard Ilderton, Lead Volunteer at Tynemouth Seal Hospital, will give a talk titled “The Three F’s of Seal Rehabilitation”."
            ]
        },
        {
            "title": "Fun for the whole family",
            "items": [
                "Face painting and a photo station.",
                "Tombola and kids’ lucky dip.",
                "Kids’ book sale and colour-a-sea-creature activities.",
                "Refreshments and more."
            ]
        },
        {
            "title": "Supporting our seal pups",
            "paragraphs": [
                "All proceeds go to Tynemouth Seal Hospital to support its work caring for seal pup patients. Cash is preferred for activities and refreshments."
            ]
        }
    ],
    "postersTitle": "Family fun day poster",
    "posters": [
        {
            "src": "Images/september_12_fun_day.jpg",
            "alt": "Family Fun Day fundraiser poster: Saturday 12 September, 10am–2pm, Roker Watch House, Pier View. Talk at 10.30am by Richard Ilderton, family activities and refreshments. Cash preferred; all proceeds to Tynemouth Seal Hospital. Full details are also provided in the article.",
            "caption": "Dolphin Spotting NE’s family fun day for Tynemouth Seal Hospital."
        }
    ]
},
		{
			id: "women",
			title: "International Women’s Day",
			date: "2026-03-08",
			dateLabel: "8th March 2026",
			summary:
				"On International Women’s Day 2026 we want to celebrate our volunteers who give their time and effort to look after the rescued pups!\nAlso remembering trustee and volunteer Roxy.",
			details: [],
		},
		{
			id: "books",
			title: "World Book Day",
			date: "2026-03-05",
			dateLabel: "5th March 2026",
			summary:
				"On World Book Day 2026 we celebrate the fiction and non-fiction books out there, especially the ones about marine wildlife (but mostly seals).\nOne of our own volunteers, Alison, has recently written a book about Spud the seal pup called ‘The Selfie Seal’.",
			details: [],
		},
	],
	actions: [
		{
			id: "supplies",
			title: "Donate supplies",
			icon: "box",
			summary: "See our wishlist and help us get the supplies we need.",
			label: "View wishlist",
			detailTitle: "Donate supplies",
			details: [
				"Help us get the supplies our seals need. Choose items from our Amazon wishlist.",
			],
			href: "https://www.amazon.co.uk/hz/wishlist/ls/N7QC7FGDB0TE?ref_=wl_share",
		},
        {
            id: "merchandise",
            title: "Shop merchandise",
            icon: "shirt",
            summary: "Browse Tynemouth Seal Hospital merchandise in our online shop.",
            label: "Visit our shop",
            href: "https://tynemouthsealhospital.teemill.com/"
        },
		{
			id: "fundraise",
			title: "Fundraise",
			icon: "heart",
			summary: "Schools, businesses, birthdays and sponsored challenges.",
			label: "Start fundraising",
			detailTitle: "Fundraise for our seals",
			details: [
				"Schools, businesses, birthdays and sponsored challenges can all make a difference. Fundraising information and contact details will be added here soon.",
			],
			href: "",
		},
		{
			id: "volunteer",
			title: "Volunteer",
			icon: "person",
			summary: "Join our amazing team of volunteers and make an impact.",
			label: "Learn more",
			detailTitle: "Volunteer with us",
			details: [
				"Join our amazing team of volunteers and make an impact. Details of volunteering opportunities and how to apply will be added here soon.",
			],
			href: "",
		},
		{
			id: "corporate",
			title: "Corporate support",
			icon: "building",
			summary: "Sponsor equipment, rehabilitation or community projects.",
			label: "Partner with us",
			detailTitle: "Corporate support",
			details: [
				"Support equipment, rehabilitation or community projects. Partnership contact details will be added here soon.",
			],
			href: "",
		},
		{
			id: "share",
			title: "Spread the word",
			icon: "chat",
			summary: "Help people understand how to safely behave around wild seals.",
			label: "Share our mission",
			detailTitle: "Spread the word",
			details: [
				"Help people understand how to safely behave around wild seals. Share our advice: keep your distance, keep people and dogs away, and report concerns to British Divers Marine Life Rescue on 01825 765 546.",
			],
			href: "",
		},
	],
};
