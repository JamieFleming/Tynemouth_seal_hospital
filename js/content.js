/* Edit card content here. IDs must be unique within each collection.
 * details: optional paragraphs; an empty list uses the summary.
 * actions.href: optional destination URL; blank opens the detail dialog.
 * Collections power both the homepage previews and the full directory pages.
 */
window.SealHospitalContent = {
  fun: [
    {
      id: "life-advice",
      title: "Life advice from our seals",
      summary:
        "Take it easy, find your comfortable spot and make plenty of time for lounging. Our seals have a few thoughts on life.",
      details: [
        "A little light-hearted wisdom from the hospital’s seal personalities. Enjoy their advice in the original photo series below.",
      ],
      sections: [
        {
          title: "The seal guide to a good day",
          items: [
            "Take it easy — Minnie.",
            "Do whatever makes you feel comfortable — Kermit.",
            "Shout loudly at any time. Let it all out — Bart.",
            "Have a good work-life balance: 80% lounging, 20% working — Kermit.",
          ],
        },
      ],
      postersTitle: "Advice, straight from the seals",
      posters: [
        {
          src: "Images/life_advice_1.jpg",
          alt: "Life advice from our seals: series cover.",
          caption: "Life advice from our seals.",
        },
        {
          src: "Images/life_advice_2.jpg",
          alt: "Take it easy — Minnie.",
          caption: "Take it easy — Minnie.",
        },
        {
          src: "Images/life_advice_3.jpg",
          alt: "Do whatever makes you feel comfortable — Kermit.",
          caption: "Do whatever makes you feel comfortable — Kermit.",
        },
        {
          src: "Images/life_advice_4.jpg",
          alt: "Shout loudly at any time. Let it all out — Bart.",
          caption: "Shout loudly at any time. Let it all out — Bart.",
        },
        {
          src: "Images/life_advice_5.jpg",
          alt: "Have a good work-life balance: 80% lounging, 20% working — Kermit.",
          caption:
            "Have a good work-life balance: 80% lounging, 20% working — Kermit.",
        },
      ],
    },
    {
      id: "secret-seal",
      title: "6 signs you’re secretly a seal",
      summary:
        "Always hungry? A champion napper? Protective of your personal space? You might recognise yourself in this playful photo series.",
      details: [
        "Just for fun: how many of these very seal-like habits sound familiar?",
      ],
      sections: [
        {
          title: "Sound like you?",
          items: [
            "You’re really nosy.",
            "You’re always hungry.",
            "You love a nap.",
            "You give a great side eye.",
            "You’re a poser.",
            "You need your personal space.",
          ],
        },
      ],
      postersTitle: "Six signs, in pictures",
      posters: [
        {
          src: "Images/secret_seal_1.jpg",
          alt: "Six signs you’re secretly a seal: series cover.",
          caption: "Six signs you’re secretly a seal.",
        },
        {
          src: "Images/secret_seal_2.jpg",
          alt: "You’re really nosy.",
          caption: "1. You’re really nosy.",
        },
        {
          src: "Images/secret_seal_3.jpg",
          alt: "You’re always hungry.",
          caption: "2. You’re always hungry.",
        },
        {
          src: "Images/secret_seal_4.jpg",
          alt: "You love a nap.",
          caption: "3. You love a nap.",
        },
        {
          src: "Images/secret_seal_5.jpg",
          alt: "You give a great side eye.",
          caption: "4. You give a great side eye.",
        },
        {
          src: "Images/secret_seal_6.jpg",
          alt: "You’re a poser.",
          caption: "5. You’re a poser.",
        },
        {
          src: "Images/secret_seal_7.jpg",
          alt: "You need your personal space.",
          caption: "6. You need your personal space.",
        },
      ],
    },
  ],
  sealStories: [
    {
      id: "xana-shower",
      title: "A shower and a little confidence",
      summary:
        "Xana’s favourite hose shower is a small moment in a much bigger recovery journey. Open her story to find the video.",
      collection: "patients",
      recordId: "patients-1",
    },
    {
      id: "kraken-character",
      title: "Small seal. Big personality.",
      summary:
        "Meet inquisitive Kraken and explore the photographs from his time in care.",
      collection: "patients",
      recordId: "patients-2",
    },
    {
      id: "isla-return",
      title: "A familiar yellow tag",
      summary:
        "Years after release, Isla’s tag helped identify a welcome returning visitor at St Mary’s Island.",
      collection: "releases",
      recordId: "releases-1",
    },
  ],
  about: [
    {
      id: "behind-the-scenes",
      title: "Behind the scenes at the seal hospital",
      details: [
        "Care at Tynemouth Seal Hospital is focused on helping rescued seals recover and return to the wild. The volunteer-led hospital opened at Tynemouth Aquarium in 2017.",
      ],
      sections: [
        {
          title: "A quiet place to heal",
          paragraphs: [
            "Patients need rest as well as treatment. Care takes place away from disturbance, with private spaces for seals that need them. Donated wetsuit material can provide comforting contact for young pups.",
          ],
        },
        {
          title: "Recovery at their own pace",
          paragraphs: [
            "Injuries, infections and entanglement can bring seals into care. Some need weeks or months to recover. Feeding and rehabilitation help prepare them for an independent life again.",
          ],
        },
        {
          title: "Preparing for release",
          paragraphs: [
            "Recovering seals may swim together before release. Human contact is limited so they do not become dependent on people for food.",
          ],
        },
        {
          title: "Keeping track of former patients",
          paragraphs: [
            "Flipper tags help identify released seals and connect them with their medical records if they need treatment again.",
          ],
        },
      ],
    },
  ],
  team: [
    {
      id: "richard_poster",
      title: "Richard",
      role: "Chairperson and volunteer lead",
      poster: "Images/richard_poster.jpg",
      summary: "Seeing a pup recover against the odds and return to the wild.",
      details: [
        "Richard values working with a team who share the same goal: giving seals another chance in the wild.",
      ],
      sections: [
        {
          title: "Away from the hospital",
          paragraphs: ["Working as a paramedic."],
        },
        {
          title: "Something you might not know",
          paragraphs: [
            "He has a tattoo in memory of a humpback whale from his first whale rescue in 2006.",
          ],
        },
        {
          title: "Another wildlife favourite",
          paragraphs: ["Humpback whales"],
        },
      ],
      postersTitle: "Meet Richard",
      posters: [
        {
          src: "Images/richard_poster.jpg",
          alt: "Meet the team poster for Richard. Its profile information is also provided as readable text above.",
          caption: "Richard — chairperson and volunteer lead.",
        },
      ],
    },
    {
      id: "alan",
      title: "Alan",
      role: "Volunteer",
      poster: "Images/alan.jpg",
      summary:
        "Seeing photographs of released seals thriving back in the wild.",
      details: [
        "Alan loves receiving updates and photographs of seals the hospital has released, showing them enjoying life at sea.",
      ],
      sections: [
        {
          title: "Away from the hospital",
          paragraphs: ["Teaching Religious Studies."],
        },
        {
          title: "Something you might not know",
          paragraphs: ["He runs five marathons a year."],
        },
        {
          title: "Another wildlife favourite",
          paragraphs: ["Orcas"],
        },
      ],
      postersTitle: "Meet Alan",
      posters: [
        {
          src: "Images/alan.jpg",
          alt: "Meet the team poster for Alan. Its profile information is also provided as readable text above.",
          caption: "Alan — volunteer.",
        },
      ],
    },
    {
      id: "becky",
      title: "Becky",
      role: "Volunteer",
      poster: "Images/becky.jpg",
      summary: "Watching a seal eat a fish by itself for the first time.",
      details: [
        "For Becky, one of the most rewarding moments is seeing seals learn to feed independently.",
      ],
      sections: [
        {
          title: "Away from the hospital",
          paragraphs: ["Researching gut bacteria."],
        },
        {
          title: "Something you might not know",
          paragraphs: ["She has dual British and South African citizenship."],
        },
        {
          title: "Another wildlife favourite",
          paragraphs: ["Mudskippers"],
        },
      ],
      postersTitle: "Meet Becky",
      posters: [
        {
          src: "Images/becky.jpg",
          alt: "Meet the team poster for Becky. Its profile information is also provided as readable text above.",
          caption: "Becky — volunteer.",
        },
      ],
    },
    {
      id: "cally",
      title: "Cally",
      role: "Volunteer",
      poster: "Images/cally.jpg",
      summary:
        "Helping seals return to the wild and making friendships along the way.",
      details: [
        "Cally loves being part of each seal’s journey back to the wild, as well as the friendships she has made with the team.",
      ],
      sections: [
        {
          title: "Away from the hospital",
          paragraphs: [
            "Looking after dogs and taking part in ocean and wildlife adventures.",
          ],
        },
        {
          title: "Something you might not know",
          paragraphs: ["She lived in Oman for five years."],
        },
        {
          title: "Another wildlife favourite",
          paragraphs: ["Humpback whales"],
        },
      ],
      postersTitle: "Meet Cally",
      posters: [
        {
          src: "Images/cally.jpg",
          alt: "Meet the team poster for Cally. Its profile information is also provided as readable text above.",
          caption: "Cally — volunteer.",
        },
      ],
    },
    {
      id: "dan",
      title: "Dan",
      role: "Volunteer",
      poster: "Images/dan.jpg",
      summary: "Seeing the team’s hard work pay off on release day.",
      details: [
        "Dan enjoys the calm of the hospital after a busy shift at work, and seeing the results of everyone’s care when a seal is released.",
      ],
      sections: [
        {
          title: "Away from the hospital",
          paragraphs: [
            "Working as a relief bus depot operations supervisor, 3D printing or diving.",
          ],
        },
        {
          title: "Something you might not know",
          paragraphs: [
            "He makes thumb guards used for feeding seal pups from recycled plastic bottles.",
          ],
        },
        {
          title: "Another wildlife favourite",
          paragraphs: ["Orcas"],
        },
      ],
      postersTitle: "Meet Dan",
      posters: [
        {
          src: "Images/dan.jpg",
          alt: "Meet the team poster for Dan. Its profile information is also provided as readable text above.",
          caption: "Dan — volunteer.",
        },
      ],
    },
    {
      id: "grace",
      title: "Grace",
      role: "Volunteer",
      poster: "Images/grace.jpg",
      summary:
        "Discovering the seals’ different personalities and funny habits.",
      details: [
        "Grace loves seeing each seal’s personality and what they get up to when they think nobody is watching.",
      ],
      sections: [
        {
          title: "Away from the hospital",
          paragraphs: [
            "Working for environmental causes, spending time on the beach or making music.",
          ],
        },
        {
          title: "Something you might not know",
          paragraphs: ["She has a scuba-diving qualification."],
        },
        {
          title: "Another wildlife favourite",
          paragraphs: ["Green sea turtles"],
        },
      ],
      postersTitle: "Meet Grace",
      posters: [
        {
          src: "Images/grace.jpg",
          alt: "Meet the team poster for Grace. Its profile information is also provided as readable text above.",
          caption: "Grace — volunteer.",
        },
      ],
    },
    {
      id: "karen",
      title: "Karen",
      role: "Volunteer",
      poster: "Images/karen.jpg",
      summary:
        "Working with seals, watching releases and meeting inspiring people.",
      details: [
        "Karen describes working with the seals and watching releases as good for the soul. She also values the interesting people she has met through the hospital.",
      ],
      sections: [
        {
          title: "Away from the hospital",
          paragraphs: [
            "In the studio, at markets or teaching as a glass artist.",
          ],
        },
        {
          title: "Something you might not know",
          paragraphs: [
            "She takes part in English Civil War reenactments as a lieutenant.",
          ],
        },
        {
          title: "Another wildlife favourite",
          paragraphs: ["Octopuses"],
        },
      ],
      postersTitle: "Meet Karen",
      posters: [
        {
          src: "Images/karen.jpg",
          alt: "Meet the team poster for Karen. Its profile information is also provided as readable text above.",
          caption: "Karen — volunteer.",
        },
      ],
    },
    {
      id: "kate",
      title: "Kate",
      role: "Volunteer",
      poster: "Images/kate.jpg",
      summary: "The reward of seeing seals go free after caring for them.",
      details: [
        "Kate finds release days especially rewarding after spending so much time caring for the seals. She also enjoys meeting like-minded people.",
      ],
      sections: [
        {
          title: "Away from the hospital",
          paragraphs: [
            "Working for another charity, swimming or paddleboarding in the sea.",
          ],
        },
        {
          title: "Something you might not know",
          paragraphs: [
            "She holds a black belt in karate and has climbed Kilimanjaro.",
          ],
        },
        {
          title: "Another wildlife favourite",
          paragraphs: ["Hector’s dolphins"],
        },
      ],
      postersTitle: "Meet Kate",
      posters: [
        {
          src: "Images/kate.jpg",
          alt: "Meet the team poster for Kate. Its profile information is also provided as readable text above.",
          caption: "Kate — volunteer.",
        },
      ],
    },
    {
      id: "mark",
      title: "Mark",
      role: "Volunteer",
      poster: "Images/mark.jpg",
      summary: "The moment a rescued seal starts feeding and gaining weight.",
      details: [
        "For Mark, seeing a seal begin to feed properly and gain weight is the sign that it has turned a corner.",
      ],
      sections: [
        {
          title: "Away from the hospital",
          paragraphs: [
            "Wildlife spotting and photography on the North East coast, and scuba diving.",
          ],
        },
        {
          title: "Something you might not know",
          paragraphs: [
            "He named the first seal he rescued in 2013 Robbie, after the German word for seal, Robbe.",
          ],
        },
        {
          title: "Another wildlife favourite",
          paragraphs: ["Bottlenose dolphins"],
        },
      ],
      postersTitle: "Meet Mark",
      posters: [
        {
          src: "Images/mark.jpg",
          alt: "Meet the team poster for Mark. Its profile information is also provided as readable text above.",
          caption: "Mark — volunteer.",
        },
      ],
    },
    {
      id: "wendy",
      title: "Wendy",
      role: "Volunteer",
      poster: "Images/wendy.jpg",
      summary:
        "Feeding the pups and filling their pens, especially for Minnie.",
      details: [
        "Wendy particularly enjoys feeding the pups and filling their pens. Her poster gives a special mention to her favourite seal, Minnie.",
      ],
      sections: [
        {
          title: "Away from the hospital",
          paragraphs: ["Sea swimming or walking her Tibetan Terrier, Dalha."],
        },
        {
          title: "Something you might not know",
          paragraphs: ["She used to be a water-skiing instructor in the USA."],
        },
        {
          title: "Another wildlife favourite",
          paragraphs: ["Puffins"],
        },
      ],
      postersTitle: "Meet Wendy",
      posters: [
        {
          src: "Images/wendy.jpg",
          alt: "Meet the team poster for Wendy. Its profile information is also provided as readable text above.",
          caption: "Wendy — volunteer.",
        },
      ],
    },
  ],
  donations: {
    justGivingUrl: "https://www.justgiving.com/charity/tynemouthsealhospital",
  },
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
    {
      id: "minnie-tweety-2026",
      name: "Minnie Mouse & Tweety-Pie",
      species: "Grey seals",
      image: "Images/tweety_and_minnie_release_6.jpg",
      imageAlt:
        "One of the two grey seals resting on the beach during Minnie Mouse and Tweety-Pie’s release",
      summary:
        "Originally rescued by Blyth Wildlife Rescue, Minnie Mouse and Tweety-Pie came to us for the final stage of their recovery. Both girls are now back in the wild.",
      readLabel: "Read their release story",
      dateLabel: "Released the weekend before 19 March",
      details: [
        "Minnie Mouse and Tweety-Pie were originally rescued by Blyth Wildlife Rescue. The two female grey seals then came to Tynemouth Seal Hospital for the final part of their rehabilitation.",
        "The hospital’s Facebook post on 19 March announced that both girls had been released together over the previous weekend. The photographs capture their journey from the transport crates on the shore to their return to the sea.",
        "The Aquarium’s release report records Tweety-Pie arriving at the hospital at 28kg and leaving at 38.5kg. Minnie Mouse increased from 30kg to 42.36kg.",
        "Minnie headed for the waves first, with Tweety-Pie following back into the sea. Tynemouth Aquarium published a further account on 25 March 2026; this is the article date, not their release date.",
      ],
      source: {
        label: "Additional release details: Tynemouth Aquarium, 25 March 2026",
        url: "https://www.tynemouthaquarium.co.uk/blog/animal-stories/double-seal-release/",
      },
      gallery: [
        {
          src: "Images/tweety_and_minnie_release_3.jpg",
          alt: "The team carrying a seal transport crate down to the shore",
        },
        {
          src: "Images/tweety_and_minnie_release_1.jpg",
          alt: "A volunteer preparing a seal transport crate on the shore",
        },
        {
          src: "Images/tweety_and_minnie_release_2.jpg",
          alt: "A seal transport crate set beside the sea before release",
        },
        {
          src: "Images/tweety_and_minnie_release_4.jpg",
          alt: "A grey seal waiting in a transport crate at the release site",
        },
        {
          src: "Images/tweety_and_minnie_release_5.jpg",
          alt: "A grey seal looking out of its open transport crate",
        },
        {
          src: "Images/tweety_and_minnie_release_9.jpg",
          alt: "A grey seal resting beside the open transport crates",
        },
        {
          src: "Images/tweety_and_minnie_release_7.jpg",
          alt: "One of the released grey seals entering the shallow sea",
        },
        {
          src: "Images/tweety_and_minnie_release_8.jpg",
          alt: "One of the released grey seals swimming in the sea",
        },
        {
          src: "Images/tweety_and_minnie_release_10.jpg",
          alt: "Waves washing over the rocky shoreline during the release",
        },
      ],
      sex: "Female",
    },
    {
      id: "sylvester-release",
      name: "Sylvester",
      species: "Seal",
      sex: "Male",
      image: "Images/sylvester_3.jpg",
      imageAlt:
        "Sylvester looking out beside his transport crate on release day",
      summary:
        "Rescued and cared for by Blyth Wildlife Rescue, Sylvester finished his rehabilitation with us before returning to the wild on 21 February, weighing over 44kg.",
      dateLabel: "Released 21 February",
      details: [
        "Sylvester was rescued by Blyth Wildlife Rescue and looked after by their team before coming to Tynemouth Seal Hospital for the final stage of his rehabilitation.",
        "The team released him back into the wild on 21 February. At a release weight of over 44kg, he had certainly made the most of the fish supplied by Tynemouth Aquarium.",
        "His release photographs follow the journey from the transport crate on the beach to his return to the waves.",
      ],
      gallery: [
        {
          src: "Images/sylvester_1.jpg",
          alt: "The team carrying Sylvester’s transport crate down the beach",
        },
        {
          src: "Images/sylvester_2.jpg",
          alt: "Sylvester leaving his transport crate on the sand",
        },
        {
          src: "Images/sylvester_4.jpg",
          alt: "Sylvester entering the water at the edge of the beach",
        },
        {
          src: "Images/sylvester_5.jpg",
          alt: "Sylvester moving into the surf",
        },
        {
          src: "Images/sylvester_6.jpg",
          alt: "Sylvester’s tagged flipper visible as he heads into the waves",
        },
        {
          src: "Images/sylvester_7.jpg",
          alt: "Sylvester swimming in the sea after his release",
        },
      ],
    },
  ],
  updates: [
    {
      id: "nurdling-2026-08-28",
      title: "Get nurdling: small pellets, a big difference",
      date: "2026-08-28",
      dateLabel: "28th August 2026",
      summary:
        "Tiny plastic pellets can harm marine wildlife. Help protect our seals by collecting nurdles, joining local clean-ups and reporting sightings.",
      details: [
        "Nurdles are small plastic pellets that can wash up on our beaches. Our awareness posters highlight a spill reported to have brought more than one billion pellets to the North East coastline.",
        "Fish can mistake these pellets for food. Seals may then swallow plastic when they eat affected fish. The posters also explain that nurdles can absorb harmful chemicals and pollutants, which can be consumed by wildlife.",
        "“Nurdling” means looking for and collecting these pellets. Removing them from the beach helps reduce the plastic left in the coastal environment and available for wildlife to swallow.",
      ],
      sections: [
        {
          title: "How you can get involved",
          items: [
            "Bring gloves, bags, sieves and buckets to collect nurdles from the beach. Follow the latest local clean-up guidance.",
            "Take your collected pellets to a designated nurdle drop-off point. Check the current locations with local clean-up organisers before setting out.",
            "Join the local nurdling WhatsApp community for guidance, equipment information and group clean-ups. Ask local organisers for the joining details.",
            "Report nurdle sightings to the local council so affected areas can be identified.",
          ],
        },
        {
          title: "Share the message",
          paragraphs: [
            "Help others understand how plastic pellets affect marine wildlife by sharing these posters. Every collection is a way to help care for the coastline our seals call home.",
          ],
        },
      ],
      posters: [
        {
          src: "Images/nurdles_1.jpg",
          alt: "Nurdles awareness poster explaining the reported North East pellet spill, ingestion by fish and seals, and pollutants carried by plastic. The key information is provided in the article above.",
          caption: "Nurdles: what plastic pellets mean for our seals.",
        },
        {
          src: "Images/nurdles_2.jpg",
          alt: "Get nurdling poster: bring gloves, bags, sieves and buckets; use nurdle drop-off points; join the WhatsApp clean-up community; and report sightings to the council.",
          caption: "Get nurdling: how you can help.",
        },
      ],
    },
    {
      id: "family-fun-day-2026-08-27",
      title: "Family fun day: help our seal pup patients",
      date: "2026-08-27",
      dateLabel: "27th August 2026",
      summary:
        "Join Dolphin Spotting NE on Saturday 12 September, 10am–2pm, at Roker Watch House, Pier View. Enjoy family activities, refreshments and a seal rehabilitation talk, with all proceeds supporting Tynemouth Seal Hospital.",
      details: [
        "Dolphin Spotting NE is holding a family fun day fundraiser for Tynemouth Seal Hospital on Saturday 12 September 2026. Come along to help raise money for our seal pup patients and enjoy a day of activities for the whole family.",
      ],
      sections: [
        {
          title: "When and where",
          items: [
            "Saturday 12 September 2026, 10am–2pm.",
            "Roker Watch House, Pier View.",
          ],
        },
        {
          title: "The Three F’s of Seal Rehabilitation",
          paragraphs: [
            "At 10.30am, Richard Ilderton, Lead Volunteer at Tynemouth Seal Hospital, will give a talk titled “The Three F’s of Seal Rehabilitation”.",
          ],
        },
        {
          title: "Fun for the whole family",
          items: [
            "Face painting and a photo station.",
            "Tombola and kids’ lucky dip.",
            "Kids’ book sale and colour-a-sea-creature activities.",
            "Refreshments and more.",
          ],
        },
        {
          title: "Supporting our seal pups",
          paragraphs: [
            "All proceeds go to Tynemouth Seal Hospital to support its work caring for seal pup patients. Cash is preferred for activities and refreshments.",
          ],
        },
      ],
      postersTitle: "Family fun day poster",
      posters: [
        {
          src: "Images/september_12_fun_day.jpg",
          alt: "Family Fun Day fundraiser poster: Saturday 12 September, 10am–2pm, Roker Watch House, Pier View. Talk at 10.30am by Richard Ilderton, family activities and refreshments. Cash preferred; all proceeds to Tynemouth Seal Hospital. Full details are also provided in the article.",
          caption:
            "Dolphin Spotting NE’s family fun day for Tynemouth Seal Hospital.",
        },
      ],
    },
    {
      id: "women",
      title: "International Women’s Day",
      date: "2026-03-08",
      dateLabel: "8th March 2026",
      summary:
        "On International Women’s Day 2026 we want to celebrate our volunteers who give their time and effort to look after the rescued pups!\nAlso remembering trustee and volunteer Roxy.",
      details: [
        "On International Women’s Day 2026, we celebrate the volunteers who give their time and effort to care for our rescued seal pups.",
        "We are also remembering Roxy, our trustee and volunteer.",
      ],
      mediaLabel: "photo",
      postersTitle: "Celebrating our volunteers",
      posters: [
        {
          src: "Images/IWD_5.jpg",
          alt: "Three volunteers together on the beach.",
          caption: "Three volunteers together on the beach.",
          width: 1591,
          height: 1535,
        },
        {
          src: "Images/IWD_1.jpg",
          alt: "Volunteers gathered beside a seal transport carrier at the coast.",
          caption:
            "Volunteers gathered beside a seal transport carrier at the coast.",
          width: 1600,
          height: 1066,
        },
        {
          src: "Images/IWD_.jpg",
          alt: "A volunteer cleaning a hospital pen.",
          caption: "A volunteer cleaning a hospital pen.",
          width: 1200,
          height: 1600,
        },
        {
          src: "Images/IWD_3.jpg",
          alt: "A volunteer wearing a protective glove at the hospital.",
          caption: "A volunteer wearing a protective glove at the hospital.",
          width: 1536,
          height: 2048,
        },
        {
          src: "Images/IWD_4.jpg",
          alt: "Two volunteers at work inside the hospital.",
          caption: "Two volunteers at work inside the hospital.",
          width: 2048,
          height: 1690,
        },
        {
          src: "Images/IWD_6.jpg",
          alt: "A volunteer beside a seal at the water’s edge.",
          caption: "A volunteer beside a seal at the water’s edge.",
          width: 1200,
          height: 1600,
        },
        {
          src: "Images/IWD_7.jpg",
          alt: "A seal emerging from a transport carrier on the beach.",
          caption: "A seal emerging from a transport carrier on the beach.",
          width: 1200,
          height: 1600,
        },
        {
          src: "Images/IWD_8.jpg",
          alt: "Volunteers carrying transport crates towards the sea.",
          caption: "Volunteers carrying transport crates towards the sea.",
          width: 2048,
          height: 1152,
        },
        {
          src: "Images/IWD_9.jpg",
          alt: "A photographer taking pictures on the beach.",
          caption: "A photographer taking pictures on the beach.",
          width: 1600,
          height: 1066,
        },
        {
          src: "Images/IWD_10.jpg",
          alt: "Three volunteers wearing face masks at the hospital.",
          caption: "Three volunteers wearing face masks at the hospital.",
          width: 1600,
          height: 1202,
        },
      ],
    },
    {
      id: "books",
      title: "World Book Day: The Selfie Seal",
      date: "2026-03-05",
      dateLabel: "5th March 2026",
      summary:
        "Meet Spud, a cheeky seal pup with a love of posing! For World Book Day, discover volunteer Alison Pake’s The Selfie Seal — an adventure for ages 3–8 about friendship and protecting our oceans.",
      details: [
        "Meet Spud – The Selfie Seal! Spud is a cheeky seal pup with a big heart and a love for people and posing. His seaside adventure takes young readers through fun and friendship, while sharing an important message about protecting our oceans.",
        "Written by hospital volunteer Alison Pake and inspired by real seal rescue stories, The Selfie Seal is an illustrated children’s book ideal for ages 3–8, with plenty for older readers to enjoy together. Spud shows how small actions, such as picking up plastic, can make a big difference.",
        "For World Book Day 2026, we’re celebrating the stories that help children discover marine wildlife and care about the sea.",
      ],
      sections: [
        {
          title: "What’s inside?",
          items: [
            "A heartwarming, fun-filled story inspired by real-life seal rescue work.",
            "Bright illustrations to accompany Spud’s seaside adventure.",
            "Bonus pages with seal fun facts and information about plastic pollution.",
            "Ideas for how children can become ocean heroes through small, positive actions.",
          ],
        },
        {
          title: "A story to share",
          paragraphs: [
            "Enjoy Spud’s adventure at bedtime, in the classroom or during an ocean-themed story time. It’s a joyful way to start conversations about wildlife and looking after our coast.",
          ],
        },
        {
          title: "Supporting wildlife rescue",
          paragraphs: [
            "The book description states that proceeds help fund local wildlife and seal rescue centres, with potential support for a future seal hospital in the North East of England.",
          ],
        },
      ],
      source: {
        url: "https://www.amazon.co.uk/Selfie-Seal-Alison-Pake/dp/B0FCBFM9RQ",
        label: "View The Selfie Seal on Amazon",
        prominent: true,
      },
      postersTitle: "The Selfie Seal",
      posters: [
        {
          src: "Images/selfie_seal.jpg",
          alt: "The Selfie Seal book cover, showing an illustrated seal holding a phone underwater. Written by Alison Pake; illustrated by ChatGPT.",
          caption: "The Selfie Seal, written by volunteer Alison Pake.",
          width: 1080,
          height: 1100,
        },
      ],
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
      href: "https://tynemouthsealhospital.teemill.com/",
    },
    {
      id: "fundraise",
      title: "Fundraise",
      icon: "heart",
      summary: "Schools, businesses, birthdays and sponsored challenges.",
      label: "Start fundraising",
      href: "support.html#fundraising",
    },
    {
      id: "volunteer",
      title: "Volunteer",
      icon: "person",
      summary: "Join our amazing team of volunteers and make an impact.",
      label: "Learn more",
      href: "support.html#volunteering",
    },
    {
      id: "corporate",
      title: "Corporate support",
      icon: "building",
      summary: "Sponsor equipment, rehabilitation or community projects.",
      label: "Partner with us",
      href: "support.html#corporate",
    },
    {
      id: "share",
      title: "Spread the word",
      icon: "chat",
      summary: "Help people understand how to safely behave around wild seals.",
      label: "Share our mission",
      href: "support.html#spread-the-word",
    },
  ],
};
