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
  category: 'buy' | 'rent';
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
    status: "Newly Constructed",
    category: 'buy'
  },
  {
    id: "brooklyn-pride-world-city",
    title: "Brooklyn Pride World City",
    location: "Charoli, Pune",
    type: "Ready to Move",
    price: "₹1.12Cr - ₹1.20Cr",
    image: project2,
    description: "Pride World City Brooklyn, also in Charoli, is a ready-to-move-in, family-centric phase offering functional apartment layouts and massive open green spaces for active community living.",
    amenities: ["state-of-the-art gymnasium", "swimming pool", "clubhouse", "CCTV Surveillance"],
    area: "1100 sq ft",
    status: "Ready to Move",
    category: 'buy'
  },
  {
    id: "pride-notting-hill",
    title: "Pride Notting Hill",
    location: "Charoli, Pune",
    type: "Premium Residencies",
    price: "₹3.10Cr - ₹3.30Cr",
    image: project3,
    description: "Pride World City Notting Hill stands out as Charoli’s elite, low-density enclave of European-style row houses and private villas built for maximum privacy.",
    amenities: ["Swimming pool", "Covered Parking", "aerobics/yoga room", "jogging/strolling tracks"],
    area: "2365 sq ft",
    status: "Premium",
    category: 'buy'
  },
  {
    id: "shubh-gateways-viman",
    title: "Shubh Gateways",
    location: "Viman Nagar",
    type: "Under Construction",
    price: "₹3.5Cr - ₹4.2Cr",
    image: project4,
    description: "Shubh Gateways offers a highly secure standalone development in Viman Nagar tailored for premium proximity to Pune Airport and major commercial hubs.",
    amenities: ["Multipurpose Court", "Swimming Pool", "Amphitheatre", "Party Lawn", "3-Tier Security"],
    area: "1345 sq ft",
    status: "Under Construction",
    category: 'buy'
  },
  {
    id: "rent-luxury-apt-dhanori",
    title: "Premium 3BHK Residency",
    location: "Dhanori, Pune",
    type: "Rental",
    price: "₹45,000 / month",
    image: "/src/assets/flat-society-view.jpg",
    description: "Spacious 3BHK apartment in a prime Dhanori society with full modular kitchen, wardrobes, and all club amenities included.",
    amenities: ["Full Modular Kitchen", "Wardrobes", "Power Backup", "Security", "Clubhouse"],
    area: "1550 sq ft",
    status: "Available",
    category: 'rent'
  },
  {
    id: "rent-viman-nagar-studio",
    title: "Studio Apartment",
    location: "Viman Nagar, Pune",
    type: "Rental",
    price: "₹28,000 / month",
    image: "/src/assets/luxury-apartment.jpg",
    description: "Modern studio apartment perfect for professionals, located walking distance from Phoenix Mall and major IT hubs.",
    amenities: ["Fully Furnished", "AC", "WiFi Ready", "Housekeeping", "24/7 Security"],
    area: "550 sq ft",
    status: "Ready to Move",
    category: 'rent'
  },
  {
    id: "rent-charoli-township",
    title: "Spacious 2BHK Township",
    location: "Charoli, Pune",
    type: "Rental",
    price: "₹22,000 / month",
    image: "/src/assets/project-2.jpg",
    description: "Beautiful 2BHK in a premium township with massive open spaces, gardens, and community living facilities.",
    amenities: ["Garden View", "Swimming Pool", "Kids Play Area", "Gym", "Parking"],
    area: "1150 sq ft",
    status: "Available",
    category: 'rent'
  },
  {
    id: "rent-lohegaon-flat",
    title: "Modern 2BHK Flat",
    location: "Lohegaon, Pune",
    type: "Rental",
    price: "₹18,000 / month",
    image: "/src/assets/project-3.jpg",
    description: "Newly painted 2BHK flat near Dhanori Road, offering easy connectivity to the airport and market areas.",
    amenities: ["Reserved Parking", "Lift", "CCTV", "Intercom", "Borewell Water"],
    area: "980 sq ft",
    status: "Immediate",
    category: 'rent'
  }
];

export function getProperty(id: string) {
  return PROPERTIES.find((p) => p.id === id);
}
