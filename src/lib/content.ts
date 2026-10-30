export const site = {
  name: "Earthed High Voltage",
  legalName: "Earthed High Voltage Pty Ltd",
  url: "https://www.earthedhv.au",
  email: "calebvears@earthedhv.au",
  phoneDisplay: "0433 839 284",
  phoneTel: "+61433839284",
  licence: "PGE 336477",
  abn: "99 679 180 879",
  acn: "679 180 879",
  locality: "Strathalbyn",
  region: "SA",
  regionName: "South Australia",
  founder: "Caleb Vears",
  founded: "2024",
  accreditation: "National HV Switching Accreditation",
  linkedin: "https://www.linkedin.com/company/earthed-high-voltage-pty-ltd",
  sister: {
    name: "Earthed Energy",
    href: "https://earthedenergy.au",
    label: "Solar and battery",
  },
} as const;

export const aboutCopy = {
  headline: "The future of renewable energy at Earthed.",
  paragraphs: [
    "Earthed started in the Adelaide Hills, founded by Caleb Vears in 2024 off the back of ten years working in distribution power systems with a strong focus on renewable energy. Since then Earthed has worked alongside some of the world's leading renewable energy companies, right here in South Australia. We hold a real focus on maintaining a healthy working environment, using our craft to implement strict safe operating procedures inside our in-house safety system. Our clients get the confidence of knowing Earthed was there.",
    "Find out about our project success below, and let us know if we can assist you in the world of green energy.",
  ],
  contactLine:
    "Earthed has worked alongside large international companies, local and non-local investors and local network connection expertise. We welcome any enquiry for collaboration.",
} as const;

export type ScopeItem = { title: string; detail: string };

export type Service = {
  id: string;
  index: string;
  title: string;
  summary: string;
  image: string;
  alt: string;
  objectPosition?: string;
};

export const services: Service[] = [
  {
    id: "distribution",
    index: "01",
    title: "Distribution power systems",
    summary: "Small scale EPC for network connections and distribution power systems.",
    image: "/images/distribution.jpg",
    alt: "Overhead connection and pole hardware above a solar array",
    objectPosition: "center 40%",
  },
  {
    id: "terminations",
    index: "02",
    title: "Cable terminations",
    summary:
      "Wide experience across multiple disciplines — primarily XLPE joints and terminations up to 66 kV. Indoor and outdoor terminations suited to network standards.",
    image: "/images/terminations.jpg",
    alt: "Prepared high voltage cable end with the conductor exposed",
    objectPosition: "center",
  },
  {
    id: "earthing",
    index: "03",
    title: "Earthing",
    summary: "Grid earth works, transmission earthing, testing and remediation.",
    image: "/images/earthing.jpg",
    alt: "Earth conductor in a trench beside a concrete foundation, with an excavator on site",
    objectPosition: "center 60%",
  },
  {
    id: "maintenance",
    index: "04",
    title: "Operation and maintenance",
    summary: "Scheduled maintenance programs, inspections and asset reporting.",
    image: "/images/maintenance.jpg",
    alt: "High voltage test set connected at a containerised switchboard",
    objectPosition: "center",
  },
  {
    id: "switching",
    index: "05",
    title: "High voltage switching",
    summary: "HV operating authority, switching sheets, permits and in-house ePermit.",
    image: "/images/switching.jpg",
    alt: "Technicians at an outdoor containerised high voltage switchboard",
    objectPosition: "center 40%",
  },
  {
    id: "emergency",
    index: "06",
    title: "Emergency call out",
    summary:
      "24-hour HV fault response — fault location, re-terminations and return-to-service testing.",
    image: "/images/emergency.jpg",
    alt: "Control wiring and terminal blocks inside electrical equipment",
    objectPosition: "center",
  },
];

export type Sector = {
  id: string;
  index: string;
  title: string;
  summary: string;
  image: string;
  alt: string;
  objectPosition?: string;
  scope: ScopeItem[];
};

export const sectors: Sector[] = [
  {
    id: "battery",
    index: "01",
    title: "Battery",
    summary:
      "HV connection, commissioning and protection for grid-scale battery storage, from first termination to energisation.",
    image: "/images/bess-site.jpg",
    alt: "Rows of containerised battery units on a gravel hardstand",
    objectPosition: "center 60%",
    scope: [
      { title: "HV terminations 11 kV + 33 kV", detail: "Indoor and outdoor, to network standard" },
      { title: "Switchgear commissioning", detail: "Primary and secondary injection" },
      { title: "Relay and protection testing", detail: "Settings, verification and reporting" },
      { title: "Cable pulling and installation", detail: "MV and HV reticulation across site" },
      { title: "Energisation and handover", detail: "Switching programs and permit control" },
      { title: "Maintenance programs", detail: "Scheduled O+M on live assets" },
    ],
  },
  {
    id: "wind",
    index: "02",
    title: "Wind",
    summary:
      "Collection network jointing, earthing and substation works across some of South Australia's largest wind farms.",
    image: "/images/wind-blade.jpg",
    alt: "Wind turbine blade above a ridgeline wind farm in dry hills",
    objectPosition: "70% center",
    scope: [
      { title: "MV/HV cable terminations", detail: "Collector feeders and turbine tails" },
      { title: "Collection network jointing", detail: "XLPE straight joints across the array" },
      { title: "Grid earth works", detail: "Turbine and substation earth grids" },
      { title: "Substation", detail: "Collector substation HV works" },
      { title: "Transmission earthing", detail: "Overhead line and structure earthing" },
      { title: "Turbine commissioning", detail: "Pre-energisation testing and switching" },
    ],
  },
  {
    id: "solar",
    index: "03",
    title: "Solar",
    summary:
      "DC array through to grid interconnection — inverter, combiner and MV collection works for utility and small-scale solar.",
    image: "/images/solar-panels.jpg",
    alt: "Utility solar array stretching to the horizon",
    objectPosition: "center 70%",
    scope: [
      { title: "DC array management", detail: "Array layout, stringing and DC reticulation" },
      { title: "String combiner boxes", detail: "Supply, install and terminate" },
      { title: "Inverter commissioning", detail: "Central and string inverters to energisation" },
      { title: "MV collection network", detail: "HV cable, joints and terminations" },
      { title: "Grid interconnection", detail: "Protection, metering and network liaison" },
      { title: "Small scale EPC", detail: "Turnkey delivery under 5 MW" },
    ],
  },
];

export type Project = {
  id: string;
  index: string;
  title: string;
  sector: string;
  summary: string;
  points?: string[];
  outcome?: string;
  image: string;
  alt: string;
  objectPosition?: string;
  secondary?: { src: string; alt: string; objectPosition?: string };
};

export const projects: Project[] = [
  {
    id: "barossa-bess",
    index: "01",
    title: "111 MW BESS · Barossa",
    sector: "Battery",
    summary:
      "Critical emergency response after a fault on the 275 kV incoming cable. Given four days' notice, we designed a switching program to isolate the site, take the main transformer offline for its service window and re-energise the full BESS across a two-day coordinated operation.",
    outcome: "Site safely isolated, service window completed, re-energised without incident.",
    image: "/images/bess-site.jpg",
    alt: "Containerised battery units on a grid-scale battery site",
    objectPosition: "center 65%",
    secondary: {
      src: "/images/branded-vehicle.jpg",
      alt: "Earthed High Voltage vehicle beside a row of battery containers",
      objectPosition: "center 70%",
    },
  },
  {
    id: "tailem-bend-bess",
    index: "02",
    title: "Tailem Bend BESS 2 · Doosan",
    sector: "Battery",
    summary:
      "Operation and maintenance on emergency call-out — permit supervision, subcontractor coordination and site management activities across the live battery site.",
    outcome: "Ongoing O+M partner for a live grid-scale BESS.",
    image: "/images/inspection.jpg",
    alt: "Technicians inspecting an open cabinet on a battery installation",
    objectPosition: "center 40%",
  },
  {
    id: "goyder-south",
    index: "03",
    title: "Goyder South Wind Farm",
    sector: "Wind",
    summary:
      "Underground HV distribution cable jointing across the whole Goyder South site in the SA Mid North, as specialist jointing partner to Neoen and its EPC partners GE Vernova and Elecnor. The project that shaped Earthed's technical direction.",
    outcome: "78 turbines connected. Every joint terminated or personally witnessed by Caleb Vears.",
    image: "/images/nexans-joints.jpg",
    alt: "High voltage straight joints prepared on collection cables",
    objectPosition: "center",
    secondary: {
      src: "/images/junction-complete.jpg",
      alt: "Closed inline junction enclosure with cables entering a wind farm trench",
      objectPosition: "center",
    },
  },
  {
    // TODO(caleb): the previous site marked the outcome line for this project as TBC.
    id: "substation-feeder",
    index: "04",
    title: "Substation feeder · inline junction box",
    sector: "Wind",
    summary:
      "1200 mm² collection network feeder terminations — Nexans termination kits, elbows and feeder exits at the collector substation.",
    image: "/images/junction-setup.jpg",
    alt: "Collection cables dressed into an open inline junction box on a wind farm",
    objectPosition: "center",
    secondary: {
      src: "/images/feeder.jpg",
      alt: "Screened separable connectors on a switchgear feeder panel",
      objectPosition: "center",
    },
  },
  {
    id: "port-wakefield",
    index: "05",
    title: "5 MW Solar Farm · Port Wakefield",
    sector: "Solar",
    summary:
      "Our first experience managing an EPC site. All electrical components were carefully undertaken and complied by Earthed — battling the winter months, our team achieved handover within the 16-week timeframe set by the client.",
    points: [
      "8,000+ panels · 20 combiner boxes · 4 inverter units",
      "5 MW battery, with provisions for a bitcoin mine addition",
      "HV switchroom constructed and commissioned",
    ],
    outcome: "Handed over in 16 weeks — grid-connected, commissioned and operational.",
    image: "/images/solar-panels.jpg",
    alt: "Rows of solar modules on a utility-scale farm",
    objectPosition: "center 65%",
    secondary: {
      src: "/images/combiner.jpg",
      alt: "Open string combiner box with DC switchgear at a solar farm",
      objectPosition: "center",
    },
  },
  {
    id: "kerta-road",
    index: "06",
    title: "Kerta Road 5 MW Solar Farm",
    sector: "Solar",
    summary:
      "Emergency HV cable repair response at the 5 MW solar farm after a civil excavator strike severed sixteen underground 300 mm² HV distribution cables mid-build. Earthed High Voltage mobilised, staged the cuts, performed sixteen Raychem heat-shrink straight joints and the full post-joint IR and VLF test regime, and returned the asset to service.",
    outcome: "16 cables repaired. Every joint IR and VLF tested. Asset back online by Caleb Vears.",
    image: "/images/kerta-cables.jpg",
    alt: "Red and black high voltage cables laid out beside battery containers",
    objectPosition: "center 70%",
    secondary: {
      src: "/images/solar-trench.jpg",
      alt: "Cables in a trench running beside a solar array at sunset",
      objectPosition: "center 60%",
    },
  },
];

export const gallery: { src: string; alt: string; caption: string }[] = [
  {
    src: "/images/wind-blade.jpg",
    alt: "Wind turbine blade above a ridgeline of turbines",
    caption: "Wind · collection network country",
  },
  {
    src: "/images/nexans-joints.jpg",
    alt: "High voltage straight joints on collection cables",
    caption: "XLPE joints",
  },
  {
    src: "/images/junction-setup.jpg",
    alt: "Open inline junction box with collection cables",
    caption: "Inline junction",
  },
  {
    src: "/images/bess-site.jpg",
    alt: "Containerised battery units on a hardstand",
    caption: "Grid-scale battery",
  },
  {
    src: "/images/switching.jpg",
    alt: "Technicians working at an outdoor switchboard",
    caption: "HV switching",
  },
  {
    src: "/images/solar-trench.jpg",
    alt: "Cables trenched beside a solar array",
    caption: "Solar collection",
  },
  {
    src: "/images/feeder.jpg",
    alt: "Separable connectors inside switchgear",
    caption: "Feeder exits",
  },
  {
    src: "/images/maintenance.jpg",
    alt: "Test set at a containerised switchboard",
    caption: "Testing",
  },
  {
    src: "/images/combiner.jpg",
    alt: "String combiner box at a solar farm",
    caption: "Combiner",
  },
  {
    src: "/images/earthing.jpg",
    alt: "Earth conductor trench beside a foundation",
    caption: "Earthing",
  },
  {
    src: "/images/branded-vehicle.jpg",
    alt: "Earthed High Voltage vehicle on a battery site",
    caption: "On site",
  },
  {
    src: "/images/terminations.jpg",
    alt: "Prepared high voltage cable end",
    caption: "Termination prep",
  },
];

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
