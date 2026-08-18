import dhanori from "@/assets/dhanori.png";
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
  /** Focus keyword the page is written to rank for */
  keyword: string;
  /** <title> tag copy, kept under ~60 characters */
  metaTitle: string;
  /** meta description, kept under ~160 characters */
  metaDescription: string;
  excerpt: string;
  author: string;
  avatar: string;
  sections: PostSection[];
};

export const POSTS: Post[] = [
  {
    slug: "Dhanori-road-lohegaon-property-guide",
    img: dhanori,
    cat: "Area guide",
    date: "Lohegaon, Pune",
    readTime: "8 min read",
    title: "Living on Dhanori Road, Lohegaon: a complete guide for homebuyers",
    keyword: "Dhanori Road Lohegaon property",
    metaTitle: "Dhanori Road Lohegaon Property Guide (2026)",
    metaDescription:
      "Dhanori Road, Lohegaon property guide: connectivity to the airport and IT parks, schools, hospitals, price trends and what to check before you buy.",
    excerpt:
      "Dhanori Road has gone from a link road to one of north-east Pune's busiest residential corridors. Here is how connectivity, schools, hospitals and price trends actually stack up before you buy.",
    author: "Home Craft desk",
    avatar: "/favicon.png",
    sections: [
      {
        heading: "Where Dhanori Road sits, and why that matters",
        body: [
          "Dhanori Road connects Lohegaon and Dhanori towards Charholi Budruk and the Alandi side. That single stretch is the reason the corridor developed the way it did: it puts you within a short drive of Pune airport, within reach of Viman Nagar and Kharadi for work, and still on the cheaper side of the price map compared with those two.",
          "For most buyers we advise here, the decision comes down to one trade-off — you accept a road that gets congested at peak hours in exchange for a per-square-foot rate that is meaningfully below Viman Nagar and Kharadi for a comparable, newer building.",
        ],
      },
      {
        heading: "Connectivity: the honest version",
        body: [
          "Drive times below are typical off-peak runs. Add 15 to 25 minutes in the morning and evening peaks, especially at the Lohegaon and Dhanori junctions.",
          "The airport being close is a genuine advantage for frequent flyers, but check the flight path and noise on a site visit rather than assuming — it varies wing to wing.",
        ],
        list: [
          "Pune International Airport: roughly 15-20 minutes",
          "Viman Nagar (Phoenix, offices, schools): roughly 20-25 minutes",
          "Kharadi / EON IT Park: roughly 30-40 minutes depending on the route",
          "Alandi and the Charholi belt: 10-15 minutes north",
          "PMPML bus routes run the corridor; the metro network does not reach it yet, so plan for private transport",
        ],
      },
      {
        heading: "Schools and hospitals within reach",
        body: [
          "Families are the dominant buyer profile here, so day-to-day infrastructure decides resale as much as the building does. Established schools in Lohegaon, Dhanori and Viman Nagar cover the CBSE, ICSE and state boards, and Viman Nagar adds the international-board options.",
          "For healthcare, the corridor leans on multi-speciality hospitals in Viman Nagar, Vishrantwadi and Kharadi, with clinics and diagnostic centres on Dhanori Road itself. If someone in the household needs regular specialist care, time that drive yourself before committing.",
        ],
      },
      {
        heading: "Price trends and what your budget buys",
        body: [
          "Rates on Dhanori Road have moved up steadily since the post-2021 cycle, driven by supply of mid-segment towers rather than luxury projects. Expect a clear premium for anything with a completion certificate in hand over an early-launch unit.",
          "Treat any per-square-foot number you read online as an asking price, not a transacted one. We price every deal against registered agreements in the same society — that is usually a few percent below the portal figure, and occasionally far below it.",
        ],
        list: [
          "1BHK: entry-level, strongest rental liquidity, smallest resale buyer pool",
          "2BHK: the volume segment here and the easiest to resell",
          "3BHK: better value per square foot than Viman Nagar for the same specification",
          "Add 8-12% over the quoted price for stamp duty, registration, GST on under-construction units, parking and society charges",
        ],
      },
      {
        heading: "What to verify before you pay a token",
        body: [
          "The corridor grew fast, which means paperwork quality varies more than in an established suburb. Run the same checks regardless of how good the show flat looks.",
        ],
        list: [
          "RERA registration number and the committed possession date",
          "Commencement certificate and sanctioned plan for your exact wing",
          "Water source — borewell, tanker dependency or municipal supply",
          "Approach road width and whether the internal road is handed over",
          "Society dues and NOC on a resale unit",
        ],
      },
      {
        heading: "Who Dhanori Road suits",
        body: [
          "It works well for families who want a newer 2BHK or 3BHK near the airport side without Viman Nagar pricing, and for investors who want rental demand from airline crew, airport staff and Kharadi commuters.",
          "It works less well if you need a daily commute to Hinjawadi or the Baner side — that drive across the city will define your week.",
        ],
      },
    ],
  },
  {
    slug: "charholi-budruk-vs-lohegaon",
    img: blog3,
    cat: "Comparison",
    date: "North-east Pune",
    readTime: "7 min read",
    title: "Charholi Budruk vs Lohegaon: which Pune suburb fits your budget?",
    keyword: "Charholi Budruk vs Lohegaon",
    metaTitle: "Charholi Budruk vs Lohegaon: Which Fits You?",
    metaDescription:
      "Charholi Budruk vs Lohegaon compared on price, connectivity, infrastructure, rental demand and resale — a practical guide for Pune homebuyers.",
    excerpt:
      "Two neighbouring pockets, two very different buying cases. A side-by-side look at pricing, connectivity and who each suburb actually suits.",
    author: "Home Craft desk",
    avatar: "/favicon.png",
    sections: [
      {
        heading: "The short answer",
        body: [
          "Lohegaon is the more developed of the two: closer to the airport, more established retail and schooling, and priced accordingly. Charholi Budruk is the value play — larger, newer township-style projects, bigger carpet areas for the same budget, and infrastructure that is still catching up.",
          "If you need to move in and live comfortably from day one, Lohegaon. If you are buying for a five to ten year horizon and want more home for the money, Charholi Budruk.",
        ],
      },
      {
        heading: "Price and what the same budget buys",
        body: [
          "The per-square-foot gap between the two is real but not dramatic — Charholi typically prices below Lohegaon, and the practical effect is one extra room or a significantly larger carpet area at the same total ticket size.",
          "Compare on carpet area, never on saleable area. The loading between the two corridors is not identical, and a headline rate that looks cheaper can end up costing more per usable square foot.",
        ],
        list: [
          "Lohegaon: higher rate, smaller units, faster resale",
          "Charholi Budruk: lower rate, larger units, township amenities",
          "Both: budget 8-12% above the agreement value for taxes and charges",
        ],
      },
      {
        heading: "Connectivity head to head",
        body: [
          "Lohegaon wins on airport access and on reaching Viman Nagar or Kalyani Nagar. Charholi is better placed for Alandi, Moshi and the northern PCMC side, and connects to Lohegaon through Dhanori Road.",
          "For a Kharadi or EON IT Park commute, Lohegaon has the edge by roughly 10-15 minutes. For anything toward Hinjawadi, neither is convenient and you should factor that in seriously.",
        ],
      },
      {
        heading: "Infrastructure and daily life",
        body: [
          "Lohegaon has the more settled everyday layer — markets, clinics, schools and eating out are simply nearer. Charholi's large projects compensate internally with clubhouses, sports facilities and open space that Lohegaon's tighter plots cannot match.",
          "Water supply and internal road handover are the two things to check hardest in Charholi. In Lohegaon, check parking pressure and building age instead.",
        ],
      },
      {
        heading: "Rental demand and resale",
        body: [
          "Lohegaon rents faster and to a wider tenant pool because of airport and Viman Nagar proximity. Charholi's rental market is thinner but improving as townships fill up and the resident base grows.",
          "On resale, Lohegaon's larger buyer pool means shorter time on market. Charholi's upside is tied to how the northern corridor's infrastructure progresses.",
        ],
        list: [
          "Choose Lohegaon for: airport access, faster rentals, quicker exit",
          "Choose Charholi Budruk for: bigger home, amenities, longer-horizon appreciation",
        ],
      },
      {
        heading: "How we would decide",
        body: [
          "First home, single income, needs to rent out if plans change: Lohegaon. Growing family that wants space and can live with a developing neighbourhood for a few years: Charholi Budruk.",
          "Either way, shortlist in both and visit on the same day — the difference becomes obvious once you have driven the roads back to back.",
        ],
      },
    ],
  },
  {
    slug: "dhanori-real-estate-guide-2026",
    img: blog2,
    cat: "Area guide",
    date: "Dhanori, Pune",
    readTime: "7 min read",
    title: "Dhanori real estate guide: why it's popular with Pune families in 2026",
    keyword: "Dhanori property Pune",
    metaTitle: "Dhanori Property Guide Pune 2026 | Home Craft",
    metaDescription:
      "Dhanori property guide 2026: connectivity to Viman Nagar and the airport, schools, hospitals, current price bands and what buyers should check.",
    excerpt:
      "Dhanori has quietly become the default answer for families priced out of Viman Nagar. Here is what makes it work — connectivity, schooling, price bands and the catches.",
    author: "Home Craft desk",
    avatar: "/favicon.png",
    sections: [
      {
        heading: "Why families keep landing on Dhanori",
        body: [
          "Dhanori sits between Vishrantwadi, Lohegaon and the Viman Nagar side, which gives it something most affordable Pune pockets do not have: a genuinely short drive to a mature commercial and schooling hub.",
          "The buyer profile here is overwhelmingly end-user — families upgrading from a 1BHK elsewhere, or moving from central Pune for space. That end-user depth is why the market has held up rather than behaving like a speculative belt.",
        ],
      },
      {
        heading: "Connectivity to Viman Nagar, the airport and IT corridors",
        body: [
          "Dhanori's road links run through Vishrantwadi towards Yerawada and the city, and through Lohegaon towards the airport. Peak-hour congestion at Vishrantwadi chowk is the main friction point — plan a test drive at 9:30am before you decide.",
        ],
        list: [
          "Viman Nagar: roughly 15-20 minutes",
          "Pune airport: roughly 15-20 minutes",
          "Kharadi / EON IT Park: roughly 30 minutes off-peak",
          "Koregaon Park and the city centre: roughly 25-30 minutes",
          "Well served by PMPML routes; auto and cab availability is reliable",
        ],
      },
      {
        heading: "Schools, hospitals and daily infrastructure",
        body: [
          "CBSE, ICSE and state-board schools operate in and around Dhanori, with the international-board options a short drive away in Viman Nagar. Multi-speciality hospitals in Viman Nagar and Vishrantwadi cover serious care, and local clinics, pharmacies and diagnostic labs handle the everyday.",
          "Retail is functional rather than glamorous — daily needs are covered locally, and Phoenix Mall of the Millennium in Viman Nagar is the weekend option.",
        ],
      },
      {
        heading: "Current price bands and value",
        body: [
          "Dhanori prices below Viman Nagar and roughly in line with, or slightly above, Lohegaon depending on the micro-pocket and project age. The premium sits with ready-possession societies that have a completion certificate and a functioning management committee.",
          "The 2BHK is the volume product and the easiest to resell. 3BHK stock is growing and offers noticeably better value per square foot than the equivalent in Viman Nagar.",
        ],
        list: [
          "Ready possession commands a clear premium over under-construction",
          "Compare on carpet area — loading here runs roughly 25-35%",
          "Rental yields typically sit in the low-to-mid single digits, in line with East Pune",
        ],
      },
      {
        heading: "The catches to check",
        body: [
          "Two things trip buyers up in Dhanori: water arrangements, which vary between municipal supply and tanker dependence society to society, and older internal roads that flood in a heavy monsoon.",
          "Also confirm parking allocation in writing. Several of the older societies here were built with fewer slots than today's households actually need.",
        ],
        list: [
          "Water source and monsoon drainage on the approach road",
          "Allotted parking slots per flat, documented in the agreement",
          "RERA number, completion certificate and society dues",
        ],
      },
      {
        heading: "Who should buy here",
        body: [
          "Families who work in Viman Nagar, Kharadi or the airport belt and want a bigger home than those areas allow at the same budget. Investors get steady, if not spectacular, rental demand from the same professional pool.",
        ],
      },
    ],
  },
  {
    slug: "tingre-nagar-flats-guide",
    img: project1,
    cat: "Area guide",
    date: "Tingre Nagar, Pune",
    readTime: "6 min read",
    title: "Tingre Nagar: a hidden-gem locality for Pune homebuyers",
    keyword: "Tingre Nagar flats",
    metaTitle: "Tingre Nagar Flats: Pune Locality Guide",
    metaDescription:
      "Tingre Nagar flats guide: how affordability compares with Dhanori and Viman Nagar, connectivity, upcoming development and what to check before buying.",
    excerpt:
      "Wedged between Dhanori, Vishrantwadi and Viman Nagar, Tingre Nagar gives you most of the location without most of the price. Here is the case for and against it.",
    author: "Home Craft desk",
    avatar: "/favicon.png",
    sections: [
      {
        heading: "The affordability argument",
        body: [
          "Tingre Nagar's pitch is simple: you are minutes from Viman Nagar's offices, schools and retail, but buying at a rate closer to Dhanori than to Viman Nagar. For a lot of buyers that gap funds an extra bedroom.",
          "It is a compact, largely built-up locality rather than a township belt, so stock is a mix of newer mid-rise projects and older resale buildings. The resale segment is where the sharpest value usually sits, provided the paperwork is clean.",
        ],
        list: [
          "Priced below Viman Nagar for a comparable-specification flat",
          "Broadly comparable with Dhanori, pocket depending",
          "Older resale buildings offer the best rate per square foot",
        ],
      },
      {
        heading: "Connectivity",
        body: [
          "The locality connects to Vishrantwadi, Dhanori and the Viman Nagar road, which puts the airport and the Nagar Road commercial spine within an easy drive. Public transport is decent for a locality of this size and cab availability is not an issue.",
        ],
        list: [
          "Viman Nagar: roughly 10-15 minutes",
          "Pune airport: roughly 15 minutes",
          "Kharadi: roughly 25-30 minutes off-peak",
          "Vishrantwadi junction: 5-10 minutes, and the main peak bottleneck",
        ],
      },
      {
        heading: "Upcoming development to watch",
        body: [
          "Redevelopment of older buildings and infill projects on small plots are the main supply story here — there is limited land for large townships. That keeps new supply tight, which supports prices but also means fewer amenity-heavy options.",
          "Road widening and drainage work in the Vishrantwadi-Dhanori stretch is the infrastructure item worth tracking, because peak congestion is the locality's biggest practical weakness.",
        ],
      },
      {
        heading: "What to check before buying",
        body: [
          "Because a lot of the inventory is smaller projects and resale, due diligence matters more than in a large branded township.",
        ],
        list: [
          "Full title chain and encumbrance certificate on resale units",
          "Society conveyance status and pending maintenance dues",
          "Parking allocation and lift maintenance in older buildings",
          "Water supply source and pressure — test on a site visit",
          "RERA registration for any under-construction unit",
        ],
      },
      {
        heading: "Who it suits",
        body: [
          "First-time buyers who want a Viman Nagar-adjacent address on a mid-segment budget, and small families who value the short commute over clubhouse amenities.",
          "If large open space, a swimming pool and township facilities are non-negotiable, look at Charholi Budruk or the bigger Dhanori projects instead.",
        ],
      },
    ],
  },
  {
    slug: "viman-nagar-property-guide-professionals",
    img: project2,
    cat: "Area guide",
    date: "Viman Nagar, Pune",
    readTime: "7 min read",
    title: "Living near Viman Nagar: property guide for working professionals",
    keyword: "Viman Nagar rent property",
    metaTitle: "Viman Nagar Property & Rent Guide, Pune",
    metaDescription:
      "Viman Nagar property and rent guide for working professionals: airport access, IT-corridor commute, rental demand, price bands and cheaper nearby options.",
    excerpt:
      "Airport on one side, the Nagar Road IT spine on the other. Why Viman Nagar keeps its premium — and when the smarter move is to live just outside it.",
    author: "Home Craft desk",
    avatar: "/favicon.png",
    sections: [
      {
        heading: "Why professionals pay the premium",
        body: [
          "Viman Nagar packs an airport, a major mall, international and mainstream schools, hospitals and a dense restaurant scene into one walkable-ish pocket, with Kharadi and Kalyani Nagar a short drive away. Very few Pune localities offer that combination.",
          "The premium is the price of not commuting. If your job is on Nagar Road, at the airport, or in Kharadi, the time you buy back is real — and it is why rental demand here stays consistently strong.",
        ],
      },
      {
        heading: "Commute reality check",
        body: [
          "Off-peak drives are short; peak-hour Nagar Road is the constraint. Anyone commuting west toward Hinjawadi or Baner should think carefully — that is a different city on a weekday morning.",
        ],
        list: [
          "Pune airport: 5-10 minutes",
          "Kharadi / EON IT Park: 15-25 minutes depending on the hour",
          "Kalyani Nagar and Koregaon Park: 10-20 minutes",
          "Hinjawadi: 60-90 minutes in peak traffic — plan around it",
        ],
      },
      {
        heading: "Renting here: what to expect",
        body: [
          "Viman Nagar is a landlord's market for well-maintained, furnished units close to the mall and the office belt. Tenant demand comes from airline crew, IT professionals, consultants and expat families, and turnover is faster than in family-dominated suburbs.",
          "For tenants, the practical advice is to widen the search by two kilometres. Rents drop noticeably in Tingre Nagar, Dhanori and the Lohegaon side for a commute that is often only ten minutes longer.",
        ],
        list: [
          "Standard eleven-month registered agreement, escalation clause defined",
          "Deposit norms vary — negotiate against a longer lock-in",
          "Furnished units rent faster and command a clear premium",
          "Document an inventory with photographs at handover",
        ],
      },
      {
        heading: "Buying in Viman Nagar",
        body: [
          "Expect the highest per-square-foot rates in this cluster, limited new supply and a resale-driven market. Buildings vary a lot in age and management quality, so the society matters as much as the flat.",
          "For investors, the attraction is occupancy reliability rather than yield — gross rental yields sit in the same low-to-mid single-digit range as the rest of East Pune, but vacancy periods are shorter.",
        ],
      },
      {
        heading: "The smarter-adjacent play",
        body: [
          "Buy in Tingre Nagar, Dhanori or Lohegaon; use Viman Nagar. That is the advice we give most professionals who want space and are not willing to shrink their home to hold the postcode.",
          "If you travel weekly or work on Nagar Road itself, stay in Viman Nagar and accept the smaller flat — the time saved compounds.",
        ],
      },
    ],
  },
  {
    slug: "dhanori-vs-tingre-nagar-vs-viman-nagar-rental",
    img: project4,
    cat: "Renting",
    date: "East Pune",
    readTime: "8 min read",
    title: "Dhanori vs Tingre Nagar vs Viman Nagar: comparing East Pune's rental hotspots",
    keyword: "best area to rent East Pune",
    metaTitle: "Best Area to Rent in East Pune: 3 Compared",
    metaDescription:
      "Dhanori vs Tingre Nagar vs Viman Nagar compared on rent levels, commute, amenities and tenant profile — how to pick the best area to rent in East Pune.",
    excerpt:
      "Three neighbouring localities, three different rental cases. A straight comparison of rent levels, commute times, amenities and who each one is right for.",
    author: "Home Craft desk",
    avatar: "/favicon.png",
    sections: [
      {
        heading: "The one-line verdict",
        body: [
          "Viman Nagar for convenience and lifestyle at the highest rent. Dhanori for space and family living at the lowest. Tingre Nagar as the middle path — close to Viman Nagar, priced closer to Dhanori.",
          "The rest of this post is how to choose between them without visiting twenty flats first.",
        ],
      },
      {
        heading: "Rent levels, relative",
        body: [
          "Exact rents move with furnishing, floor and society, so compare relatively rather than chasing a single number. As a rule of thumb, for the same 2BHK specification: Viman Nagar sits at the top, Tingre Nagar a step below, and Dhanori below that.",
          "Ask for the registered agreement rate in the same society rather than the asking rent. That single question changes most negotiations.",
        ],
        list: [
          "Viman Nagar: highest rent, smallest units, fastest to let",
          "Tingre Nagar: mid rent, mixed newer and older stock",
          "Dhanori: lowest rent, largest carpet area for the money",
        ],
      },
      {
        heading: "Commute and connectivity",
        body: [
          "All three sit on the airport side of Pune and connect to Nagar Road and Kharadi. The differences are in minutes, not in hours — which is exactly why the rent gap is worth exploiting if you are flexible.",
        ],
        list: [
          "To the airport: Viman Nagar 5-10 min, Tingre Nagar ~15 min, Dhanori 15-20 min",
          "To Kharadi/EON: Viman Nagar 15-25 min, Tingre Nagar 25-30 min, Dhanori ~30 min",
          "To the city centre: Viman Nagar 20-25 min, Tingre Nagar and Dhanori 25-30 min",
          "None of the three is convenient for a Hinjawadi commute",
        ],
      },
      {
        heading: "Amenities and daily life",
        body: [
          "Viman Nagar has the retail, restaurants, gyms and international schooling. Dhanori has the larger societies with clubhouses and open space, and functional local retail. Tingre Nagar is in between: compact, well connected, fewer amenity-heavy projects.",
          "If you have young children, weigh school access and open space more heavily than restaurants — that usually pushes the decision toward Dhanori.",
        ],
      },
      {
        heading: "Tenant profile and availability",
        body: [
          "Viman Nagar attracts airline crew, consultants, expats and IT professionals, and good units go quickly — be ready to decide on the day. Dhanori's market is family-led with longer tenancies and slower churn. Tingre Nagar draws young professionals and small families who want the Viman Nagar commute at a lower rent.",
          "For owners, the same pattern inverts: Viman Nagar means shorter vacancies but more turnover, Dhanori means stable multi-year tenants.",
        ],
      },
      {
        heading: "How to pick in one afternoon",
        body: [
          "Fix your commute anchor first, then your must-have carpet area, then let the rent decide. Shortlist two options in each locality and see all six the same day — comparing back to back is the only way the differences become obvious.",
        ],
        list: [
          "Single or couple, work on Nagar Road: Viman Nagar",
          "Professional wanting space and a short commute: Tingre Nagar",
          "Family needing 2-3 bedrooms and open space: Dhanori",
          "Always: eleven-month registered agreement, documented inventory, clear maintenance responsibility",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
