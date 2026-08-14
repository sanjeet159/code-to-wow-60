import project1 from "@/assets/project-1-atlantis.jpg";
import project2 from "@/assets/BRROKLYN.png";
import project3 from "@/assets/notting.jpg";
import project4 from "@/assets/shubh.jpg";

export type Property = {
  id: string;
  title: string;
  location: string;
  type: string;
  price: string;
  image: string;
  description: string;
  amenities: string[];
  area?: string;
  status?: string;
};

export const PROPERTIES: Property[] = [
  {
    id: "pride-world-city-atlantis",
    title: "Pride World City Atlantic",
    location: "Charoli, Pune",
    type: "New Launch",
    price: "₹2.75Cr - ₹2.90Cr",
    image: project1,
    description: "Pride World City Atlantic is a newly constructed, luxury high-rise phase in Charoli featuring smart automation and premium rooftop amenities like a sky lounge and infinity pool.",
    amenities: ["Sky Lounge", "infinity edge swimming pool", "open-air gym", "smart home automation", "Power Backup", "Landscaped Gardens"],
    area: "1970 sq ft",
    status: "Newly Constructed"
  },
  {
    id: "retail-showroom-deal",
    title: "Brooklyn Pride World City",
    location: "Charoli, Pune",
    type: "New Launch",
    price: "₹1.12Cr - ₹1.20Cr",
    image: project2,
    description: "Pride World City Brooklyn, also in Charoli, is a ready-to-move-in, family-centric phase offering functional apartment layouts and massive open green spaces for active community living.",
    amenities: ["state-of-the-art gymnasium", "swimming pool", "clubhouse", "CCTV Surveillance"],
    area: "1100 sq ft",
    status: "Newly Constructed"
  },
  {
    id: "investor-apartment-portfolio",
    title: "Pride Notting Hill",
    location: "Charoli, Pune",
    type: "Resale",
    price: "₹3.10Cr - ₹3.30Cr",
    image: project3,
    description: "Pride World City Notting Hill stands out as Charoli’s elite, low-density enclave of ready-to-move-in European-style row houses and private villas built for maximum privacy. ",
    amenities: ["Swimming pool", "Covered Parking", "aerobics/yoga room", "jogging/strolling tracks"],
    area: "980 sq ft",
    status: "Tenanted"
  },
  {
    id: "office-space-2400-sq-ft",
    title: "Office space, 2400 sq ft",
    location: "Dream Elements, Lohegaon",
    type: "Leasing",
    price: "₹1.2L / month",
    image: project4,
    description: "Expansive office floor in Dream Elements, Lohegaon. Designed for modern corporate teams with flexible layout options and premium building management.",
    amenities: ["High-speed Elevators", "Meeting Rooms", "Cafeteria", "Reception Desk", "Fiber Internet"],
    area: "2400 sq ft",
    status: "Available for Lease"
  }
];

export function getProperty(id: string) {
  return PROPERTIES.find((p) => p.id === id);
}
