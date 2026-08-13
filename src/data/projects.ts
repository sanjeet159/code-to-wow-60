import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export type ProjectSection = {
  title: string;
  content: string;
  list?: string[];
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  place: string;
  year: string;
  category: string;
  img: string;
  description: string;
  tags: string[];
  highlights: { label: string; value: string }[];
  details: ProjectSection[];
  gallery?: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    slug: "3bhk-residence-charholi",
    title: "3BHK residence, Charholi",
    place: "Brooklyn, Pride World City, Pune",
    year: "Resale",
    category: "Residential",
    img: project1,
    description: "A successful resale transaction for a premium 3BHK apartment in the highly sought-after Brooklyn cluster of Pride World City. Our team managed everything from valuation to document verification.",
    tags: ["Resale", "Gated Community", "Premium"],
    highlights: [
      { label: "Carpet Area", value: "1150 sq.ft." },
      { label: "Floor", value: "Middle Floor" },
      { label: "Transaction", value: "Closed in 45 days" },
      { label: "Locality", value: "Charholi Budruk" }
    ],
    details: [
      {
        title: "Client Requirement",
        content: "The seller needed a quick, hassle-free exit for their investment property, while the buyer was looking for a move-in ready home with clear titles in a premium gated community with full amenities."
      },
      {
        title: "Our Advisory Role",
        content: "Home Craft desk managed the end-to-end process, ensuring the buyer's loan was processed smoothly and all society NOCs were obtained. We performed a rigorous 7/12 extract check and title chain verification.",
        list: [
          "Market-based valuation for fair pricing",
          "Verification of last 30 years title chain",
          "Management of Society NOC and Transfer process",
          "Coordination for Registered Sale Deed"
        ]
      },
      {
        title: "Success Outcome",
        content: "The deal was closed within the target timeline of 45 days, with both parties satisfied by the transparent pricing and seamless paperwork management."
      }
    ]
  },
  {
    id: "2",
    slug: "retail-showroom-deal-lohegaon",
    title: "Retail showroom deal",
    place: "Porwal Road, Lohegaon",
    year: "Commercial",
    category: "Commercial",
    img: project2,
    description: "Strategic commercial consulting and sale for a high-visibility retail showroom on the bustling Porwal Road. This deal involved complex zoning verification and rental yield analysis.",
    tags: ["Retail", "High ROI", "Main Road Frontage"],
    highlights: [
      { label: "Type", value: "Showroom" },
      { label: "Frontage", value: "25 Feet" },
      { label: "Yield", value: "7.5% Expected" },
      { label: "Locality", value: "Lohegaon" }
    ],
    details: [
      {
        title: "The Mandate",
        content: "An investor was looking for a commercial asset with strong capital appreciation and immediate rental potential. We identified this unit on Porwal Road due to its exceptional frontage and growing footfall."
      },
      {
        title: "Technical Diligence",
        content: "Commercial deals in Pune require strict adherence to PMC/PMRDA norms. We verified the sanctioned floor plan, frontage rights, and signage permissions to ensure no future legal hurdles for the owner.",
        list: [
          "Frontage and signage rights verification",
          "Parking allotment check for commercial units",
          "Rental benchmarking for Porwal Road corridor",
          "Zoning and NA order verification"
        ]
      }
    ]
  },
  {
    id: "3",
    slug: "investor-apartment-portfolio-pimpri",
    title: "Investor apartment portfolio",
    place: "Pimpri-Chinchwad",
    year: "Resale",
    category: "Investment",
    img: project3,
    description: "Portfolio advisory for an NRI investor looking to liquidate multiple residential units in the PCMC belt. We managed the entire cycle from refurbishment advice to final sale.",
    tags: ["Portfolio", "Investment", "PCMC"],
    highlights: [
      { label: "Units", value: "3 Apartments" },
      { label: "Asset Class", value: "Residential" },
      { label: "Status", value: "Fully Liquidated" },
      { label: "Region", value: "PCMC Belt" }
    ],
    details: [
      {
        title: "The Challenge",
        content: "Managing multiple units across different societies requires high coordination. The owner needed a single point of contact to handle multiple buyers, loan clearances, and society formalities."
      },
      {
        title: "Strategy and Execution",
        content: "We implemented a staggered exit strategy to ensure market prices were maintained. Each unit was deep-cleaned and photographed professionally to attract serious buyers.",
        list: [
          "Strategic pricing to avoid market fatigue",
          "Coordinated site visits for multiple units",
          "Handling multiple buyer loan disbursements",
          "End-to-end documentation for all three sales"
        ]
      }
    ]
  },
  {
    id: "4",
    slug: "office-space-leasing-lohegaon",
    title: "Office space, 2400 sq ft",
    place: "Dream Elements, Lohegaon",
    year: "Leasing",
    category: "Leasing",
    img: project4,
    description: "Successfully facilitated a long-term lease for a premium 2400 sq.ft. office space in Dream Elements, Lohegaon, matching a corporate tenant with a local property owner.",
    tags: ["Leasing", "Corporate Tenant", "IT Hub"],
    highlights: [
      { label: "Area", value: "2400 sq.ft." },
      { label: "Tenant Type", value: "Corporate Office" },
      { label: "Lease Term", value: "5 Years" },
      { label: "Amenities", value: "Power Backup & Lift" }
    ],
    details: [
      {
        title: "Leasing Strategy",
        content: "Lohegaon is emerging as a preferred office hub due to its proximity to the airport and Viman Nagar. We targeted corporate tenants looking for efficient floor plates and modern infrastructure."
      },
      {
        title: "Agreement Structure",
        content: "Commercial leasing requires balanced agreements. We drafted a comprehensive 5-year lease with clear escalation clauses, maintenance responsibilities, and lock-in periods.",
        list: [
          "Tenant background and financial screening",
          "Lease drafting with escalation clauses",
          "Registration and police verification",
          "Handover inventory documentation"
        ]
      }
    ]
  }
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
