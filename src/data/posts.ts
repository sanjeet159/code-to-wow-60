import dhanori from "@/assets/dhanori.png";
import flatSocietyView from "@/assets/flat-society-view.jpg";
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
    slug: "flats-in-pune-price-guide",
    img: flatSocietyView,
    cat: "Price guide",
    date: "East Pune",
    readTime: "10 min read",
    title: "Flats in Pune: what ₹40L to ₹1.5Cr actually buys you in 2026",
    keyword: "flats in pune, pune flat price, buy flat in pune, flat rates in pune, flats for sale in pune, 2BHK flat Pune price",
    metaTitle: "Flats in Pune 2026 — Real Prices by Area & Budget",
    metaDescription:
      "Honest flat prices across Pune's east corridor — Charholi Budruk, Lohegaon, Dhanori, Tingre Nagar and Viman Nagar. Real rates, real sizes, no inflated listings.",
    excerpt:
      "Real price bands for flats in Pune's eastern corridor, what each budget actually gets you in carpet area, and the five checks to run before you pay a token.",
    author: "Home Craft desk",
    avatar: "/favicon.png",
    sections: [
      {
        heading: "What flats in Pune actually cost right now",
        body: [
          "If you have been scrolling listing portals looking for flats in Pune, you have seen the problem already. The same flat appears at three different prices, photos look nothing like the site, and the moment you enquire four brokers call you about properties you never asked about. This guide is the opposite of that.",
          "Pune is not one market. A 2BHK in Viman Nagar and a 2BHK in Charholi Budruk can differ by ₹40 lakh for roughly the same carpet area. Location does most of the pricing work here, followed by possession status and builder reputation.",
          "The bands below are working ranges from deals we handle across the east Pune corridor, not asking prices from listing sites. Ready-to-move units sit at the higher end; under-construction and resale stock sit lower.",
        ],
        list: [
          "Charholi Budruk — 1BHK ₹28L-₹40L · 2BHK ₹42L-₹65L · 3BHK ₹70L-₹1.1Cr",
          "Lohegaon — 1BHK ₹32L-₹45L · 2BHK ₹48L-₹72L · 3BHK ₹80L-₹1.2Cr",
          "Dhanori — 1BHK ₹35L-₹48L · 2BHK ₹52L-₹78L · 3BHK ₹85L-₹1.3Cr",
          "Tingre Nagar — 1BHK ₹38L-₹52L · 2BHK ₹58L-₹85L · 3BHK ₹95L-₹1.4Cr",
          "Viman Nagar — 1BHK ₹50L-₹70L · 2BHK ₹80L-₹1.3Cr · 3BHK ₹1.4Cr-₹2.5Cr",
        ],
      },
      {
        heading: "What each budget realistically gets you",
        body: [
          "Under ₹50 lakh: 1BHK units almost anywhere in the corridor, or a compact 2BHK in Charholi Budruk and parts of Lohegaon, with 400 to 650 sq ft carpet. Good for first-time buyers, young couples and rental-yield investors; the trade-off is distance from the airport and IT hubs.",
          "₹50 lakh to ₹80 lakh: where most Pune families land. A comfortable 2BHK of 650 to 900 sq ft carpet in a gated society with security, parking and a basic clubhouse. Charholi Budruk and Lohegaon give the most space for the money; Dhanori and Tingre Nagar give better connectivity for slightly less space.",
          "₹80 lakh to ₹1.3 crore: 3BHK territory, or a premium 2BHK in a better-located project, 900 to 1,400 sq ft carpet with proper clubhouses, landscaped gardens and better build quality. This is also where Viman Nagar becomes viable for 2BHK buyers who prioritise location over size.",
          "Above ₹1.3 crore: premium and luxury inventory — larger 3BHKs, 4BHKs, sky lounges and smart-home projects, mostly in Viman Nagar and select premium townships across the corridor.",
        ],
      },
      {
        heading: "Which area suits which buyer",
        body: [
          "All five localities below are places we transact in every week, so the notes are based on what buyers actually report back after moving in, not on brochure copy.",
        ],
        list: [
          "Charholi Budruk — best value per square foot; strong for investors and first-time buyers. Large townships dominate; connectivity is improving but still developing.",
          "Lohegaon — the practical middle ground. Close to the airport, reasonable pricing, decent social infrastructure, heavy new development along Porwal Road.",
          "Dhanori — family favourite, with better schools and hospitals nearby than Charholi. Prices have climbed steadily for several years.",
          "Tingre Nagar — quieter and more established, slightly premium; suits buyers who want a built-out area rather than a developing one.",
          "Viman Nagar — the premium play. Airport proximity, retail, restaurants and strong rental demand from working professionals, at a clear price premium.",
        ],
      },
      {
        heading: "Five things to check before you pay a token",
        body: [
          "Most of the disputes we are asked to untangle trace back to one of these five checks being skipped. None of them take long.",
        ],
        list: [
          "Carpet area, not super built-up — ask for the RERA carpet area, that is the number that matters.",
          "RERA registration — verify the number on the Maharashtra RERA site, not just the brochure.",
          "Title and encumbrance — check the sale deed chain, the 7/12 extract where applicable, and any existing loan on the property.",
          "Society NOC and dues — outstanding maintenance dues often transfer to you, so get a no-dues certificate before registration.",
          "Possession timeline — ask for the RERA-committed date and check the builder's delivery record on past projects.",
        ],
      },
      {
        heading: "Buying a flat in Pune: the realistic timeline",
        body: [
          "Most purchases take six to ten weeks from first site visit to registration, assuming financing is in order: one to two weeks shortlisting and visiting, a week negotiating and paying token, two to three weeks on loan sanction and disbursal, and two to three weeks for agreement, stamp duty and registration.",
          "Stamp duty in Pune currently runs around 6 to 7 percent of agreement value including metro cess, plus 1 percent registration charges. Budget for this separately — it is not included in the quoted flat price.",
        ],
      },
      {
        heading: "How we work",
        body: [
          "We do not send fifty listings and wait. We start with your budget, your commute and what the home needs to do for your family, then shortlist only what genuinely fits.",
          "Every listing we show has been verified — title checked, builder record checked, site visited. If something has a problem we tell you before you visit, not after you have paid a token. We work across Charholi Budruk, Lohegaon, Dhanori, Tingre Nagar and Viman Nagar, and handle the process through to registration.",
        ],
      },
    ],
  },
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
  {
    slug: "2bhk-rent-dhanori-guide",
    img: project2,
    cat: "Rental guide",
    date: "Dhanori",
    readTime: "7 min read",
    title: "2BHK for rent in Dhanori: real rents, best societies and what to check",
    keyword: "2bhk rent dhanori, flats for rent in dhanori pune, dhanori rent, 2bhk for rent in dhanori, rent flat dhanori pune",
    metaTitle: "2BHK for Rent in Dhanori, Pune — Rents & Societies 2026",
    metaDescription:
      "Real 2BHK rents in Dhanori, Pune — society-wise ranges, deposit norms, commute times to Viman Nagar and the airport, and what to check before signing.",
    excerpt:
      "What a 2BHK in Dhanori actually rents for, which societies tenants ask for by name, and the checks that save you from a bad agreement.",
    author: "Home Craft desk",
    avatar: "/favicon.png",
    sections: [
      {
        heading: "What a 2BHK in Dhanori rents for right now",
        body: [
          "Dhanori is one of east Pune's most active rental markets because it sits between the airport, Viman Nagar and the Nagar Road IT corridor. Most demand is for 2BHKs from working couples and small families.",
          "Asking rents on portals run 10-15% above closing rents. The ranges below are what agreements actually close at in the societies we work in.",
        ],
        list: [
          "Unfurnished 2BHK — ₹16,000 to ₹22,000 per month",
          "Semi-furnished 2BHK — ₹20,000 to ₹26,000 per month",
          "Fully furnished 2BHK — ₹25,000 to ₹32,000 per month",
          "Typical deposit — 3 to 5 months' rent; negotiate toward 3",
        ],
      },
      {
        heading: "Societies tenants ask for by name",
        body: [
          "Larger gated societies with clubhouses and security dominate demand. Families prioritise societies with play areas and internal shops; professionals prioritise ones with faster access to Porwal Road and the airport road.",
        ],
        list: [
          "Pride World City and its phases — biggest inventory, widest rent range",
          "Goodwill Breeza — popular with airport and Viman Nagar commuters",
          "Nyati Era — family-heavy, stable tenant profile",
          "Smaller standalone buildings — cheaper, but check water supply and parking carefully",
        ],
      },
      {
        heading: "Commute reality check",
        body: [
          "Dhanori to Viman Nagar is 15-25 minutes off-peak, 30-40 in rush hour. The airport is 15-20 minutes. Kalyani Nagar and Yerwada are reachable in 25-35 minutes via Nagar Road.",
          "If your office is in Hinjewadi or Baner, Dhanori is the wrong side of the city — look at west Pune instead, no matter how good the rent looks.",
        ],
      },
      {
        heading: "Before you sign the agreement",
        body: [
          "Most rental disputes we see come from the same four gaps. Close them before you pay the deposit.",
        ],
        list: [
          "Insist on a registered eleven-month leave-and-license agreement, not a notarised one",
          "Photograph the flat and inventory on move-in day and attach it to the agreement",
          "Confirm in writing who pays society maintenance and what the monthly amount is",
          "Check water timing, parking allotment and mobile network inside the actual flat, not the lobby",
        ],
      },
      {
        heading: "How we help tenants",
        body: [
          "We keep a live list of verified Dhanori rentals — owner-direct where possible — and handle the agreement, police verification and handover. Tell us your budget and commute anchor and we will send you options the same day.",
        ],
      },
    ],
  },
  {
    slug: "flats-near-pune-airport",
    img: project1,
    cat: "Locality guide",
    date: "Lohegaon",
    readTime: "8 min read",
    title: "Flats near Pune airport: which localities actually work and what they cost",
    keyword: "flats near pune airport, property near pune airport, 2bhk near pune airport, flats in lohegaon, apartments near pune airport",
    metaTitle: "Flats Near Pune Airport — Best Localities & Prices 2026",
    metaDescription:
      "Buying near Pune airport? Compare Lohegaon, Dhanori, Tingre Nagar and Viman Nagar — real prices, drive times, noise zones and which areas to avoid.",
    excerpt:
      "Every locality within 20 minutes of Pune airport ranked by price, commute and liveability — including the noise-and-traffic trade-offs brochures skip.",
    author: "Home Craft desk",
    avatar: "/favicon.png",
    sections: [
      {
        heading: "Why buyers look near the airport",
        body: [
          "Airline and hospitality staff, frequent flyers, and IT professionals working along Nagar Road all anchor their search to the airport. The east Pune corridor around it has also seen the steadiest infrastructure spend in the city over the last five years.",
          "But 'near the airport' covers very different markets. Fifteen minutes of drive time can mean a ₹40 lakh difference in price for the same carpet area.",
        ],
      },
      {
        heading: "The four localities that actually work",
        body: [
          "These are the areas our airport-anchored buyers shortlist most, ordered from closest and cheapest to most premium.",
        ],
        list: [
          "Lohegaon — 10-15 min to the terminal; 2BHK ₹48L-₹72L; best value, still developing retail",
          "Dhanori — 15-20 min; 2BHK ₹52L-₹78L; large gated societies, family-friendly",
          "Tingre Nagar — 15-20 min; 2BHK ₹58L-₹85L; compact, well connected to Nagar Road",
          "Viman Nagar — 10-15 min; 2BHK ₹80L-₹1.3Cr; premium, full social infrastructure",
        ],
      },
      {
        heading: "The trade-offs brochures skip",
        body: [
          "Aircraft noise is real in Lohegaon and parts of Dhanori directly under flight paths. Visit the exact building at different times of day before deciding — noise tolerance is personal and varies block by block.",
          "Airport Road and Nagar Road both choke in peak hours. A flat that is 12 minutes away at noon can be 35 minutes away at 9 AM. Do the drive at your actual commute time, not on a Sunday afternoon.",
        ],
      },
      {
        heading: "Rental demand near the airport",
        body: [
          "If you are buying to rent out, airport-adjacent localities have some of the shortest vacancy periods in Pune. Airline crew, consultants on rotation and IT transfers keep demand constant.",
        ],
        list: [
          "Viman Nagar — highest rents, shortest vacancies, highest entry cost",
          "Dhanori and Tingre Nagar — best rent-to-price ratios in the corridor",
          "Lohegaon — lowest entry cost, growing demand as social infrastructure fills in",
        ],
      },
      {
        heading: "Our advice in one line",
        body: [
          "Buy in the best society you can afford within 20 minutes of the terminal, and let drive time at rush hour — not the map distance — make the final call. Share your budget and we will shortlist verified options across all four localities.",
        ],
      },
    ],
  },
  {
    slug: "charholi-budruk-investment-guide",
    img: blog2,
    cat: "Investment",
    date: "Charholi Budruk",
    readTime: "8 min read",
    title: "Is Charholi Budruk a good investment in 2026? An honest assessment",
    keyword: "charholi budruk property, charholi budruk investment, flats in charholi budruk, charholi real estate, property investment pune",
    metaTitle: "Charholi Budruk Property Investment — Honest 2026 Review",
    metaDescription:
      "Is Charholi Budruk worth investing in? Real price trends, rental yields, infrastructure pipeline and the risks — from a desk that transacts there weekly.",
    excerpt:
      "The case for and against Charholi Budruk as an investment — price trends, rental yields, what's actually getting built, and who should buy versus wait.",
    author: "Home Craft desk",
    avatar: "/favicon.png",
    sections: [
      {
        heading: "Why Charholi Budruk is on investor radar",
        body: [
          "Charholi Budruk offers the lowest entry price in the east Pune corridor — a 2BHK at ₹42L-₹65L against ₹80L+ in Viman Nagar for similar carpet area. Large township development, improving road connectivity to the airport and Nagar Road, and steady end-user demand have made it the corridor's default value pick.",
        ],
      },
      {
        heading: "What the numbers look like",
        body: [
          "Working ranges from deals we handle, not portal asking prices.",
        ],
        list: [
          "Entry price — 1BHK from ₹28L, 2BHK from ₹42L, 3BHK from ₹70L",
          "Rental yield — 3% to 3.8% gross, among the better ratios in east Pune",
          "2BHK rents — ₹12,000 to ₹18,000 depending on furnishing and township phase",
          "Appreciation — steady mid-single-digit annual growth, driven by end users rather than speculation",
        ],
      },
      {
        heading: "What is actually getting built",
        body: [
          "The investment case rests on infrastructure, so separate confirmed work from brochure promises. Road widening toward the airport corridor and new internal township roads are underway. Social infrastructure — schools, clinics, daily retail — is filling in inside the large townships first.",
          "Anything promised as 'proposed' — metro extensions, new flyovers — should be treated as a bonus, not a reason to buy. Buy on what exists today.",
        ],
      },
      {
        heading: "The honest risks",
        body: [
          "No locality is a sure thing, and Charholi's risks are specific.",
        ],
        list: [
          "Supply is heavy — many phases launching means resale competition when you exit",
          "Connectivity is improving but still the weakest in the corridor; peak-hour drives are long",
          "Liquidity is slower than Viman Nagar or Tingre Nagar — expect months, not weeks, to resell",
          "Choose the township and phase carefully; quality varies more here than anywhere else in the corridor",
        ],
      },
      {
        heading: "Who should buy, and who should wait",
        body: [
          "Buy if you are a first-time buyer wanting maximum space per rupee, or an investor with a 5-plus-year horizon who prioritises rental yield over quick resale. Wait — or look at Dhanori and Tingre Nagar instead — if you need strong daily connectivity today or a fast exit.",
          "We transact in Charholi every week and will tell you plainly which phases we would put our own money into. Ask us before you commit to a token.",
        ],
      },
    ],
  },
  {
    slug: "plot-vs-flat-pune",
    img: blog3,
    cat: "Buying guide",
    date: "Pune",
    readTime: "7 min read",
    title: "Plot vs flat in Pune: which makes sense for you in 2026",
    keyword: "plots in pune, plot vs flat pune, buy plot in pune, na plots pune, land investment pune",
    metaTitle: "Plot vs Flat in Pune 2026 — Costs, Returns & Risks",
    metaDescription:
      "Plot or flat in Pune? Compare real costs, appreciation, legal checks (NA status, RERA, title) and maintenance to decide which fits your goal and budget.",
    excerpt:
      "The real cost, return and risk comparison between buying a plot and buying a flat around Pune — including the legal checks most buyers skip.",
    author: "Home Craft desk",
    avatar: "/favicon.png",
    sections: [
      {
        heading: "The core difference",
        body: [
          "A flat gives you a usable home or rent from day one. A plot gives you land appreciation and the freedom to build later, but no income and no utility until you construct. Which is 'better' depends entirely on whether you need the asset to work for you now or later.",
        ],
      },
      {
        heading: "Cost comparison around Pune",
        body: [
          "Using the east Pune corridor we work in as the reference.",
        ],
        list: [
          "2BHK flat — ₹42L-₹85L in Charholi Budruk to Tingre Nagar; ₹80L+ in Viman Nagar",
          "NA plot in developing corridors — ₹1,200 to ₹2,800 per sq ft depending on location and layout approval",
          "Hidden flat costs — stamp duty ~6-7%, registration 1%, maintenance deposits, floor-rise and parking premiums",
          "Hidden plot costs — fencing, land tax, society/layout charges, and the full cost of construction when you build",
        ],
      },
      {
        heading: "Returns: what actually happens",
        body: [
          "Well-located land has historically appreciated faster than apartments in Pune because land is finite and buildings depreciate. But that average hides wide variation: plots in layouts that never develop can sit flat for a decade, while a good flat pays rent the whole time.",
          "A flat's return is rent plus moderate appreciation. A plot's return is pure appreciation — higher potential, higher variance, zero cash flow.",
        ],
      },
      {
        heading: "The legal checks that matter more for plots",
        body: [
          "Plot fraud is far more common than flat fraud in Maharashtra. Run every one of these before paying anything.",
        ],
        list: [
          "NA (non-agricultural) order — without it, you cannot legally build a residence",
          "Clear 7/12 extract and title chain for at least 30 years",
          "Layout approval from the competent authority (PMRDA/PCMC/PMC as applicable)",
          "RERA registration for plotted developments above the threshold",
          "Physical demarcation — visit the site, match survey numbers, check for encroachments and access roads",
        ],
      },
      {
        heading: "So which should you buy",
        body: [
          "Buy a flat if you need a home within two years, want rental income, or are taking a home loan you want working for you immediately. Buy a plot if you have a 7-10 year horizon, want to build a custom home eventually, and can verify every document on the list above.",
          "We handle both flats and verified plots across east Pune. Tell us your goal and timeline and we will show you honest options in both categories — including the ones we would avoid.",
        ],
      },
    ],
  },
  {
    slug: "home-loan-rera-checklist-pune",
    img: team1,
    cat: "Buying guide",
    date: "Pune",
    readTime: "9 min read",
    title: "Home loan and RERA checklist for Pune buyers: the complete 2026 version",
    keyword: "rera registered projects pune, home loan pune, rera check pune, home loan eligibility pune, maharera project search",
    metaTitle: "Home Loan & RERA Checklist for Pune Buyers 2026",
    metaDescription:
      "Complete checklist for Pune homebuyers — MahaRERA project verification, home loan eligibility, down payment math, stamp duty and the documents to demand.",
    excerpt:
      "Every check to run before you book a flat in Pune — MahaRERA verification, loan eligibility, real down-payment math and the documents to demand from the builder.",
    author: "Home Craft desk",
    avatar: "/favicon.png",
    sections: [
      {
        heading: "Step one: verify the project on MahaRERA",
        body: [
          "Every new project in Maharashtra must be registered on maharera.maharashtra.gov.in before the builder can legally advertise or sell. Search the project name and check the registration number, approved plans, promised possession date and any complaints filed.",
          "The possession date on the RERA certificate is the legally binding one — not the date the salesperson tells you. If a project is not registered, walk away, whatever the discount.",
        ],
      },
      {
        heading: "Step two: know your real loan eligibility",
        body: [
          "Banks typically lend up to 75-90% of the agreement value, and cap EMIs at roughly 40-50% of your net monthly income across all loans. A ₹60 lakh flat usually means ₹8-12 lakh from your own funds plus registration costs.",
        ],
        list: [
          "Salaried buyers — salary slips, 3 years of ITR, 6 months of bank statements",
          "Self-employed buyers — 3 years of ITR with P&L, GST returns, 12 months of bank statements",
          "Check your CIBIL score first — 750+ gets you the best rates; below 700, fix it before applying",
          "Get a pre-approved loan before shortlisting — it fixes your budget and speeds up closing",
        ],
      },
      {
        heading: "Step three: the full cost of buying",
        body: [
          "The agreement value is not the cost of the flat. Budget for all of this.",
        ],
        list: [
          "Stamp duty — about 6-7% in Maharashtra (1% concession for women buyers on residential)",
          "Registration — 1% of agreement value",
          "GST — 5% on under-construction flats (1% affordable housing); none on ready-to-move with OC",
          "Maintenance deposit, club charges, parking and floor-rise premiums — often ₹2-5 lakh combined",
          "Home loan processing fee, legal and valuation charges — typically 0.5-1%",
        ],
      },
      {
        heading: "Step four: documents to demand before the token",
        body: [
          "Do not pay a booking amount until you have seen these.",
        ],
        list: [
          "RERA certificate and approved floor plan for your exact unit",
          "Title clearance certificate and commencement certificate",
          "Draft agreement for sale — read the possession clause, penalty clause and carpet area definition",
          "For resale: society NOC, share certificate, no-dues certificate and the chain of prior agreements",
          "Occupancy certificate for ready-to-move buildings",
        ],
      },
      {
        heading: "Where buyers go wrong",
        body: [
          "The pattern we see most: buyers fix a budget from the agreement value, then discover stamp duty, GST and premiums push the real cost 10-12% higher — and either stretch dangerously or lose the token. Do the full math first, then shortlist.",
          "We run this checklist with every client before any money moves. If you are shortlisting flats in east Pune, bring us the project name and we will verify the RERA status and paperwork with you — no charge, no obligation.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
