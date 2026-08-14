import project1 from "@/assets/project-1-atlantis.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

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
    title: "Pride World City Atlantis",
    location: "Charholi, Pune",
    type: "New Launch",
    price: "₹85L - ₹1.2Cr",
    image: project1.url,
    description: "A landmark high-rise residence in Pride World City, Charholi. Atlantis offers premium apartments with modern architecture, rooftop amenities and excellent connectivity to Pune's IT and industrial corridors.",
    amenities: ["Sky Lounge", "Swimming Pool", "24/7 Security", "Fitness Centre", "Power Backup", "Landscaped Gardens"],
    area: "1450 sq ft",
    status: "Under Construction"
  },
  {
    id: "retail-showroom-deal",
    title: "Retail showroom deal",
    location: "Porwal Road, Lohegaon",
    type: "Commercial",
    price: "₹1.4Cr Onwards",
    image: project2,
    description: "High-visibility retail space on the busy Porwal Road. Perfect for showrooms, retail outlets, or boutique clinics with significant footfall potential.",
    amenities: ["Road Frontage", "Private Parking", "Loading Bay", "CCTV Surveillance"],
    area: "850 sq ft",
    status: "Occupied/Leased"
  },
  {
    id: "investor-apartment-portfolio",
    title: "Investor apartment portfolio",
    location: "Dhanori, Pune",
    type: "Resale",
    price: "₹55L - ₹75L",
    image: project3,
    description: "A strategic investment opportunity in Dhanori's growing corridor. These apartments offer high rental yields and long-term capital appreciation.",
    amenities: ["Elevators", "Covered Parking", "Water Supply", "Landscaped Garden"],
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
