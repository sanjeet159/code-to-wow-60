import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project4 from "@/assets/project-4.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

export type PostSection = { heading: string; body: string[]; list?: string[] };

export type Post = {
  slug: string;
  img: string;
  cat: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  author: string;
  avatar: string;
  sections: PostSection[];
};

export const POSTS: Post[] = [
  {
    slug: "checklist-before-buying-a-flat-in-charholi-budruk",
    img: blog1,
    cat: "Buying guide",
    date: "Pune market",
    readTime: "6 min read",
    title: "What to check before buying a flat in Charholi Budruk",
    excerpt:
      "Charholi Budruk and the Brooklyn Pride World City belt have become one of Pune's fastest moving pockets. Here is the checklist we run for every buyer before they pay a token.",
    author: "Home Craft desk",
    avatar: team1,
    sections: [
      {
        heading: "Start with the title, not the tiles",
        body: [
          "A show flat sells a lifestyle; the paperwork decides whether you actually own it. Before anything else we pull the 7/12 extract, the sale deed chain for the last thirty years and the society's non-agricultural order.",
          "If a seller hesitates on sharing documents at this stage, treat it as information — it usually means something is unresolved behind the scenes.",
        ],
        list: [
          "RERA registration number and the promised possession date",
          "Commencement certificate and sanctioned plan for the exact wing",
          "Encumbrance certificate to confirm no running mortgage",
          "Society NOC and pending maintenance dues on resale flats",
        ],
      },
      {
        heading: "Understand the real carpet area",
        body: [
          "Builders quote saleable area, banks value carpet area. The gap between the two in this corridor runs anywhere from 25% to 35%, which changes your per-square-foot maths completely.",
          "We always re-price a deal on carpet area so two buildings can be compared honestly.",
        ],
      },
      {
        heading: "Walk the neighbourhood twice",
        body: [
          "Once on a weekday morning for traffic to the airport and Lohegaon side, once on a weekend evening for water pressure, parking pressure and how the society actually lives.",
          "Infrastructure promises are worth checking against sanctioned work, not brochures.",
        ],
      },
      {
        heading: "Negotiate on the full cost",
        body: [
          "Stamp duty, registration, GST on under-construction units, floor-rise, parking and society formation charges routinely add 8-12% on top of the quoted price. Getting the seller to absorb part of this is often easier than pushing the headline rate down.",
        ],
      },
    ],
  },
  {
    slug: "how-we-screen-tenants-for-owners",
    img: blog2,
    cat: "Renting",
    date: "For owners",
    readTime: "5 min read",
    title: "How we screen tenants so your property stays trouble-free",
    excerpt:
      "Most rental problems are decided before the agreement is signed. This is the screening process we follow for every owner we represent in Pune.",
    author: "Home Craft desk",
    avatar: team3,
    sections: [
      {
        heading: "Qualify before the site visit",
        body: [
          "We ask for employment details, family size, expected duration of stay and budget before a viewing is scheduled. It saves owners from a stream of visits that were never going to convert.",
        ],
        list: [
          "Employer verification and salary slips or company ID",
          "Previous landlord reference wherever a rental history exists",
          "Government ID and permanent address proof",
          "Police verification filed after the agreement",
        ],
      },
      {
        heading: "Price the property honestly",
        body: [
          "An overpriced listing sits empty for two months and then rents at the market rate anyway — that is a full month of rent lost. We benchmark against actual registered agreements in the same society, not asking prices on portals.",
        ],
      },
      {
        heading: "Get the agreement right",
        body: [
          "Eleven-month registered agreement, clear escalation clause, defined maintenance responsibility and a documented inventory with photographs at handover. Disputes almost always trace back to one of these four being vague.",
        ],
      },
      {
        heading: "Stay involved after handover",
        body: [
          "We keep the owner-tenant channel open for renewals, exits and deposit settlement so you are not chasing anyone yourself.",
        ],
      },
    ],
  },
  {
    slug: "plot-or-flat-pcmc-belt",
    img: blog3,
    cat: "Investment",
    date: "Market notes",
    readTime: "7 min read",
    title: "Plot or flat: which holds value better around Pune's PCMC belt",
    excerpt:
      "Land appreciates, buildings depreciate — true, but incomplete. Here is how the two actually compare once you factor in rental yield, liquidity and holding cost.",
    author: "Home Craft desk",
    avatar: team2,
    sections: [
      {
        heading: "What each asset is really for",
        body: [
          "A flat is a cash-flow asset: it rents from day one and funds part of its own EMI. A plot is a capital-growth asset: no yield, low holding cost, and the upside sits with infrastructure moving toward it.",
        ],
      },
      {
        heading: "Liquidity cuts both ways",
        body: [
          "Flats in an established society sell faster because the buyer pool is larger and home loans are simpler. Plots take longer to exit but rarely see the price compression that an ageing building does.",
        ],
        list: [
          "Flats: 2.5-3.5% gross rental yield in most PCMC pockets",
          "Plots: zero yield, minimal maintenance, higher entry ticket",
          "Flats: loan-friendly; plots: lower LTV and shorter tenure",
        ],
      },
      {
        heading: "Check the zoning before the price",
        body: [
          "Agricultural land sold as a plot, unapproved layouts and pending NA orders are the three traps we see most often. A cheap plot with a clouded title is not an investment.",
        ],
      },
      {
        heading: "Our default advice",
        body: [
          "First property and you need it to pay for itself: buy the flat. Second property with a seven-to-ten year horizon and clean paperwork available: the plot usually wins.",
        ],
      },
    ],
  },
  {
    slug: "commercial-shop-vs-office-pune",
    img: project2,
    cat: "Commercial",
    date: "Advisory",
    readTime: "5 min read",
    title: "Shop or office: picking the right commercial unit in Pune",
    excerpt:
      "Commercial returns look attractive on paper. The difference between a 9% asset and a vacant one is almost always footfall, frontage and the tenant you can realistically attract.",
    author: "Home Craft desk",
    avatar: team1,
    sections: [
      {
        heading: "Footfall beats floor plate",
        body: [
          "A ground-floor shop with genuine road frontage rents to a wider set of businesses than a larger unit tucked inside a complex. Frontage width, visibility from the main road and parking in front do more for your yield than carpet area.",
        ],
      },
      {
        heading: "Match the unit to a tenant profile",
        body: [
          "Before buying, name the three businesses you expect to rent it. If you cannot, the unit is speculative.",
        ],
        list: [
          "Retail: frontage, signage rights, water and drainage for F&B",
          "Office: power backup, lift capacity, washrooms per floor",
          "Clinic or salon: plumbing, parking, ground or first floor",
        ],
      },
      {
        heading: "Read the lease structure",
        body: [
          "Commercial leases run longer with built-in escalation, usually 5% a year or 15% every three years. A slightly lower starting rent with a strong tenant and a lock-in beats a high rent that turns over annually.",
        ],
      },
    ],
  },
  {
    slug: "home-loan-documents-pune-buyers",
    img: project1,
    cat: "Finance",
    date: "Buyer help",
    readTime: "4 min read",
    title: "The home loan paperwork Pune buyers underestimate",
    excerpt:
      "Sanction is the easy part. Disbursement is where deals slip — usually because one document was arranged a week too late.",
    author: "Home Craft desk",
    avatar: team3,
    sections: [
      {
        heading: "Get pre-approved before you shortlist",
        body: [
          "Knowing your exact sanction amount changes which societies you should even be visiting, and it makes your offer credible to a seller weighing two buyers.",
        ],
      },
      {
        heading: "Keep this set ready",
        body: ["Nothing here is unusual — the delay comes from collecting it in sequence instead of together."],
        list: [
          "Three years of ITR and six months of salary slips",
          "Six-month bank statements for the salary account",
          "Existing loan sanction letters and repayment track",
          "Complete property document set for the legal and technical check",
        ],
      },
      {
        heading: "Budget for the gap",
        body: [
          "Banks fund up to 80-90% of the agreement value but not stamp duty, registration or GST. That gap has to come from your own funds on registration day.",
        ],
      },
    ],
  },
  {
    slug: "selling-your-pune-property-faster",
    img: project4,
    cat: "Selling",
    date: "For sellers",
    readTime: "5 min read",
    title: "Five things that sell a Pune property faster",
    excerpt:
      "The market decides the price band. Everything inside that band — presentation, timing, paperwork readiness — is yours to control.",
    author: "Home Craft desk",
    avatar: team2,
    sections: [
      {
        heading: "Price against registered deals",
        body: [
          "The single biggest reason a property sits unsold is an asking price set from a neighbour's ambition rather than a registered transaction. We start every mandate with actual recent deal data from the same society.",
        ],
      },
      {
        heading: "Fix the small things",
        body: [
          "Seepage patches, a dead tube light, a stiff sliding door — each one plants doubt about maintenance and invites a lower offer. A modest cleanup usually returns several times its cost.",
        ],
        list: [
          "Deep clean, declutter, repaint where needed",
          "Shoot the photographs in daylight",
          "Keep society NOC and dues cleared in advance",
          "Be flexible with visit timings in the first three weeks",
        ],
      },
      {
        heading: "Qualify buyers early",
        body: [
          "We confirm loan eligibility before scheduling repeat visits, so negotiation happens with buyers who can actually close.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
