export const site = {
  name: "Earthed High Voltage",
  legalName: "Earthed High Voltage Pty Ltd",
  url: "https://www.earthedhv.au",
  email: "calebvears@earthedhv.au",
  phoneDisplay: "0433 839 284",
  phoneTel: "+61433839284",
  licence: "PGE 363823",
  abn: "99 679 180 879",
  acn: "679 180 879",
  locality: "Adelaide Hills",
  region: "SA",
  regionName: "South Australia",
  founder: "Caleb Vears",
  founded: "2024",
  formspree: "https://formspree.io/f/mvkzjdwe",
  sister: {
    name: "Earthed Energy",
    href: "https://earthedenergy.au",
    note: "Solar and battery. A separate company and a separate site.",
  },
  positioning: [
    "We terminate and joint high voltage cables.",
    "We work on substations and switchgear.",
    "We do the work most electricians can't.",
  ],
} as const;

export type Photo = {
  src: string;
  alt: string;
  position?: string;
};

export type ScopeItem = { title: string; detail: string };

export type Service = {
  slug: string;
  index: string;
  title: string;
  summary: string;
  description: string;
  image: Photo;
  relatedProjects: string[];
  relatedCapabilities: string[];
};

export type Capability = {
  slug: string;
  index: string;
  title: string;
  summary: string;
  description: string;
  image: Photo;
  secondary?: Photo;
  scope: ScopeItem[];
  relatedProjects: string[];
  map: { x: string; y: string };
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  sector: "Battery" | "Wind" | "Solar";
  summary: string;
  description: string;
  points?: string[];
  outcome?: string;
  image: Photo;
  secondary?: Photo;
  relatedServices: string[];
  relatedCapabilities: string[];
};

export const aboutCopy = {
  headline: "The future of renewable energy at Earthed.",
  paragraphs: [
    "Earthed started in the Adelaide Hills, founded by Caleb Vears in 2024 off the back of ten years working in distribution power systems with a strong focus on renewable energy. Since then Earthed has worked alongside some of the world's leading renewable energy companies, right here in South Australia. We hold a real focus on maintaining a healthy working environment, using our craft to implement strict safe operating procedures inside our in-house safety system. Our clients get the confidence of knowing Earthed was there.",
    "Find out about our project success below, and let us know if we can assist you in the world of green energy.",
  ],
  contactLine:
    "Earthed has worked alongside large international companies, local and non-local investors and local network connection expertise. We welcome any enquiry for collaboration.",
} as const;

export const services: Service[] = [
  {
    slug: "distribution-power-systems",
    index: "01",
    title: "Distribution power systems",
    summary: "Small scale EPC for network connections and distribution power systems.",
    description:
      "Small scale EPC for network connections and distribution power systems across renewable sites in South Australia.",
    image: {
      src: "/images/distribution.jpg",
      alt: "Overhead connection and pole hardware above a solar array",
      position: "center 40%",
    },
    relatedProjects: ["port-wakefield"],
    relatedCapabilities: ["solar", "commissioning"],
  },
  {
    slug: "cable-terminations",
    index: "02",
    title: "Cable terminations",
    summary:
      "Wide experience across multiple disciplines, primarily XLPE joints and terminations up to 66 kV. Indoor and outdoor terminations suited to network standards.",
    description:
      "XLPE joints and terminations up to 66 kV. Indoor and outdoor terminations suited to network standards.",
    image: {
      src: "/images/terminations.jpg",
      alt: "Prepared high voltage cable end with the conductor exposed",
    },
    relatedProjects: ["goyder-south", "kerta-road", "substation-feeder"],
    relatedCapabilities: ["hv-cable-jointing", "wind", "battery-bess"],
  },
  {
    slug: "earthing",
    index: "03",
    title: "Earthing",
    summary: "Grid earth works, transmission earthing, testing and remediation.",
    description:
      "Grid earth works, transmission earthing, testing and remediation for wind, solar and battery sites.",
    image: {
      src: "/images/earthing.jpg",
      alt: "Earth conductor in a trench beside a concrete foundation, with an excavator on site",
      position: "center 60%",
    },
    relatedProjects: ["goyder-south"],
    relatedCapabilities: ["wind"],
  },
  {
    slug: "operation-and-maintenance",
    index: "04",
    title: "Operation and maintenance",
    summary: "Scheduled maintenance programs, inspections and asset reporting.",
    description:
      "Scheduled maintenance programs, inspections and asset reporting for live high voltage assets.",
    image: {
      src: "/images/testing.jpg",
      alt: "High voltage test set connected at a containerised switchboard",
    },
    relatedProjects: ["tailem-bend-bess", "barossa-bess"],
    relatedCapabilities: ["battery-bess", "commissioning"],
  },
  {
    slug: "high-voltage-switching",
    index: "05",
    title: "High voltage switching",
    summary: "HV operating authority, switching sheets, permits and in-house ePermit.",
    description:
      "High voltage switching with operating authority, switching sheets, permits and an in-house ePermit.",
    image: {
      src: "/images/switching.jpg",
      alt: "Technicians at an outdoor containerised high voltage switchboard",
      position: "center 40%",
    },
    relatedProjects: ["barossa-bess"],
    relatedCapabilities: ["switching", "commissioning", "battery-bess"],
  },
  {
    slug: "emergency-call-out",
    index: "06",
    title: "Emergency call out",
    summary:
      "24-hour HV fault response: fault location, re-terminations and return-to-service testing.",
    description:
      "24-hour high voltage fault response, including fault location, re-terminations and return-to-service testing.",
    image: {
      src: "/images/wiring.jpg",
      alt: "Control wiring and terminal blocks inside electrical equipment",
    },
    relatedProjects: ["barossa-bess", "kerta-road", "tailem-bend-bess"],
    relatedCapabilities: ["switching", "hv-cable-jointing"],
  },
];

export const capabilities: Capability[] = [
  {
    slug: "battery-bess",
    index: "01",
    title: "Battery and BESS",
    summary:
      "HV connection, commissioning and protection for grid-scale battery storage, from first termination to energisation.",
    description:
      "High voltage connection, commissioning and protection for grid-scale battery storage in South Australia.",
    image: {
      src: "/images/bess-rows.jpg",
      alt: "Rows of containerised battery units on a gravel hardstand",
      position: "center 60%",
    },
    secondary: {
      src: "/images/cable-lay.jpg",
      alt: "Red and black high voltage cables laid beside containerised electrical equipment",
    },
    scope: [
      { title: "HV terminations 11 kV + 33 kV", detail: "Indoor and outdoor, to network standard" },
      { title: "Switchgear commissioning", detail: "Primary and secondary injection" },
      { title: "Relay and protection testing", detail: "Settings, verification and reporting" },
      { title: "Cable pulling and installation", detail: "MV and HV reticulation across site" },
      { title: "Energisation and handover", detail: "Switching programs and permit control" },
      { title: "Maintenance programs", detail: "Scheduled O+M on live assets" },
    ],
    relatedProjects: ["barossa-bess", "tailem-bend-bess"],
    map: { x: "18%", y: "78%" },
  },
  {
    slug: "wind",
    index: "02",
    title: "Wind",
    summary:
      "Collection network jointing, earthing and substation works across some of South Australia's largest wind farms.",
    description:
      "Collection network jointing, earthing and substation works on South Australian wind farms.",
    image: {
      src: "/images/wind-blade.jpg",
      alt: "Wind turbine blade above a ridgeline wind farm in dry hills",
      position: "70% center",
    },
    secondary: {
      src: "/images/nexans-joints.jpg",
      alt: "High voltage straight joints prepared on collection cables",
    },
    scope: [
      { title: "MV/HV cable terminations", detail: "Collector feeders and turbine tails" },
      { title: "Collection network jointing", detail: "XLPE straight joints across the array" },
      { title: "Grid earth works", detail: "Turbine and substation earth grids" },
      { title: "Substation", detail: "Collector substation HV works" },
      { title: "Transmission earthing", detail: "Overhead line and structure earthing" },
      { title: "Turbine commissioning", detail: "Pre-energisation testing and switching" },
    ],
    relatedProjects: ["goyder-south", "substation-feeder"],
    map: { x: "18%", y: "22%" },
  },
  {
    slug: "solar",
    index: "03",
    title: "Solar",
    summary:
      "DC array through to grid interconnection: inverter, combiner and MV collection works for utility and small-scale solar.",
    description:
      "DC array through to grid interconnection for utility and small-scale solar, including inverters, combiners and MV collection.",
    image: {
      src: "/images/solar-panels.jpg",
      alt: "Utility solar array stretching across open ground",
      position: "center 70%",
    },
    secondary: {
      src: "/images/combiner.jpg",
      alt: "Open string combiner box with DC switchgear at a solar farm",
    },
    scope: [
      { title: "DC array management", detail: "Array layout, stringing and DC reticulation" },
      { title: "String combiner boxes", detail: "Supply, install and terminate" },
      { title: "Inverter commissioning", detail: "Central and string inverters to energisation" },
      { title: "MV collection network", detail: "HV cable, joints and terminations" },
      { title: "Grid interconnection", detail: "Protection, metering and network liaison" },
      { title: "Small scale EPC", detail: "Turnkey delivery under 5 MW" },
    ],
    relatedProjects: ["port-wakefield", "kerta-road"],
    map: { x: "18%", y: "50%" },
  },
  {
    slug: "hv-cable-jointing",
    index: "04",
    title: "HV cable jointing and termination",
    summary:
      "Wide experience across multiple disciplines, primarily XLPE joints and terminations up to 66 kV. Indoor and outdoor terminations suited to network standards.",
    description:
      "High voltage cable jointing and termination up to 66 kV, including XLPE straight joints, indoor and outdoor terminations, and feeder exits.",
    image: {
      src: "/images/nexans-joints.jpg",
      alt: "High voltage straight joints prepared on collection cables",
    },
    secondary: {
      src: "/images/junction-complete.jpg",
      alt: "Closed inline junction enclosure with cables entering a wind farm trench",
    },
    scope: [
      { title: "XLPE joints and terminations", detail: "Up to 66 kV, indoor and outdoor" },
      { title: "Collection network jointing", detail: "Straight joints across the array" },
      { title: "Feeder terminations", detail: "1200 mm² Nexans kits, elbows and feeder exits" },
      { title: "Heat-shrink straight joints", detail: "Raychem joints after a cable strike" },
      { title: "Inline junction boxes", detail: "Open, dress, close and hand back" },
      { title: "Post-joint testing", detail: "IR and VLF before return to service" },
    ],
    relatedProjects: ["goyder-south", "kerta-road", "substation-feeder"],
    map: { x: "50%", y: "50%" },
  },
  {
    slug: "switching",
    index: "05",
    title: "Switching",
    summary: "HV operating authority, switching sheets, permits and in-house ePermit.",
    description:
      "High voltage switching for isolation, service windows and re-energisation, with switching sheets, permits and an in-house ePermit.",
    image: {
      src: "/images/bess-yard.jpg",
      alt: "Transformer yard at a battery site, with the Earthed vehicle in the foreground",
      position: "center 40%",
    },
    secondary: {
      src: "/images/switching.jpg",
      alt: "Technicians at an outdoor containerised high voltage switchboard",
    },
    scope: [
      { title: "HV operating authority", detail: "Switching on renewable and network assets" },
      { title: "Switching sheets", detail: "Written programs for isolation and restoration" },
      { title: "Permits", detail: "Permit control around the service window" },
      { title: "In-house ePermit", detail: "Permit issue inside the Earthed safety system" },
      { title: "Isolation", detail: "Take plant offline, hold the window, restore it" },
      { title: "Emergency switching", detail: "Short-notice programs after a fault" },
    ],
    relatedProjects: ["barossa-bess"],
    map: { x: "80%", y: "28%" },
  },
  {
    slug: "commissioning",
    index: "06",
    title: "Commissioning",
    summary:
      "Switchgear, inverter and turbine commissioning through to energisation, handover and return-to-service testing.",
    description:
      "Commissioning of switchgear, inverters and turbines, with protection testing, energisation and handover.",
    image: {
      src: "/images/substation-screen.jpg",
      alt: "Substation overview on a battery site display",
      position: "center",
    },
    secondary: {
      src: "/images/testing.jpg",
      alt: "High voltage test set connected at a containerised switchboard",
    },
    scope: [
      { title: "Switchgear commissioning", detail: "Primary and secondary injection" },
      { title: "Relay and protection testing", detail: "Settings, verification and reporting" },
      { title: "Inverter commissioning", detail: "Central and string inverters to energisation" },
      { title: "Turbine commissioning", detail: "Pre-energisation testing and switching" },
      { title: "Energisation and handover", detail: "Switching programs and permit control" },
      { title: "Return to service", detail: "IR, VLF and re-energisation after a fault" },
    ],
    relatedProjects: ["port-wakefield", "goyder-south", "barossa-bess"],
    map: { x: "80%", y: "74%" },
  },
];

export const projects: Project[] = [
  {
    slug: "goyder-south",
    index: "01",
    title: "Goyder South Wind Farm",
    sector: "Wind",
    summary:
      "Underground HV distribution cable jointing across the whole Goyder South site in the SA Mid North, as specialist jointing partner to Neoen and its EPC partners GE Vernova and Elecnor. The project that shaped Earthed's technical direction.",
    description:
      "Underground high voltage distribution cable jointing across Goyder South Wind Farm in the SA Mid North, as specialist jointing partner to Neoen, GE Vernova and Elecnor.",
    outcome: "78 turbines connected. Every joint terminated or personally witnessed by Caleb Vears.",
    image: {
      src: "/images/nexans-joints.jpg",
      alt: "High voltage straight joints prepared on collection cables",
    },
    secondary: {
      src: "/images/junction-complete.jpg",
      alt: "Closed inline junction enclosure with cables entering a wind farm trench",
    },
    relatedServices: ["cable-terminations", "earthing"],
    relatedCapabilities: ["wind", "hv-cable-jointing", "commissioning"],
  },
  {
    slug: "barossa-bess",
    index: "02",
    title: "111 MW Barossa BESS",
    sector: "Battery",
    summary:
      "Critical emergency response after a fault on the 275 kV incoming cable. Given four days' notice, we designed a switching program to isolate the site, take the main transformer offline for its service window and re-energise the full BESS across a two-day coordinated operation.",
    description:
      "Emergency switching at the 111 MW Barossa BESS after a fault on the 275 kV incoming cable, including isolation, the transformer service window and re-energisation.",
    outcome: "Site safely isolated, service window completed, re-energised without incident.",
    image: {
      src: "/images/bess-rows.jpg",
      alt: "Containerised battery units on a grid-scale battery site",
      position: "center 65%",
    },
    secondary: {
      src: "/images/branded-vehicle.jpg",
      alt: "Earthed High Voltage vehicle beside a row of battery containers",
      position: "center 70%",
    },
    relatedServices: ["high-voltage-switching", "emergency-call-out", "operation-and-maintenance"],
    relatedCapabilities: ["battery-bess", "switching", "commissioning"],
  },
  {
    slug: "tailem-bend-bess",
    index: "03",
    title: "Tailem Bend BESS",
    sector: "Battery",
    summary:
      "Operation and maintenance on emergency call-out: permit supervision, subcontractor coordination and site management activities across the live battery site. Tailem Bend BESS 2, Doosan.",
    description:
      "Operation and maintenance on emergency call-out at Tailem Bend BESS 2, including permit supervision, subcontractor coordination and site management.",
    outcome: "Ongoing O+M partner for a live grid-scale BESS.",
    image: {
      src: "/images/inspection.jpg",
      alt: "Technicians inspecting an open cabinet on a battery installation",
      position: "center 40%",
    },
    secondary: {
      src: "/images/cabinet.jpg",
      alt: "Open cabinet on containerised electrical equipment",
    },
    relatedServices: ["operation-and-maintenance", "emergency-call-out"],
    relatedCapabilities: ["battery-bess"],
  },
  {
    slug: "port-wakefield",
    index: "04",
    title: "Port Wakefield 5 MW",
    sector: "Solar",
    summary:
      "Our first experience managing an EPC site. All electrical components were carefully undertaken and complied by Earthed. Battling the winter months, our team achieved handover within the 16-week timeframe set by the client.",
    description:
      "EPC delivery of the 5 MW Port Wakefield solar farm, handed over in 16 weeks, grid-connected, commissioned and operational.",
    points: [
      "8,000+ panels, 20 combiner boxes, 4 inverter units",
      "5 MW battery, with provisions for a bitcoin mine addition",
      "HV switchroom constructed and commissioned",
    ],
    outcome: "Handed over in 16 weeks: grid-connected, commissioned and operational.",
    image: {
      src: "/images/solar-panels.jpg",
      alt: "Rows of solar modules on a utility-scale farm",
      position: "center 65%",
    },
    secondary: {
      src: "/images/combiner.jpg",
      alt: "Open string combiner box with DC switchgear at a solar farm",
    },
    relatedServices: ["distribution-power-systems"],
    relatedCapabilities: ["solar", "commissioning"],
  },
  {
    slug: "kerta-road",
    index: "05",
    title: "Kerta Road",
    sector: "Solar",
    summary:
      "Emergency HV cable repair response at the 5 MW solar farm after a civil excavator strike severed sixteen underground 300 mm² HV distribution cables mid-build. Earthed High Voltage mobilised, staged the cuts, performed sixteen Raychem heat-shrink straight joints and the full post-joint IR and VLF test regime, and returned the asset to service.",
    description:
      "Emergency repair of sixteen 300 mm² high voltage cables at Kerta Road 5 MW solar farm, with Raychem straight joints and IR and VLF testing.",
    outcome: "16 cables repaired. Every joint IR and VLF tested. Asset back online by Caleb Vears.",
    image: {
      src: "/images/solar-trench.jpg",
      alt: "Cables in a trench running beside a solar array at sunset",
      position: "center 60%",
    },
    secondary: {
      src: "/images/cable-lay.jpg",
      alt: "Red and black high voltage cables laid beside containerised electrical equipment",
    },
    relatedServices: ["cable-terminations", "emergency-call-out"],
    relatedCapabilities: ["solar", "hv-cable-jointing"],
  },
  {
    slug: "substation-feeder",
    index: "06",
    title: "1200 mm² substation feeder",
    sector: "Wind",
    summary:
      "1200 mm² collection network feeder terminations: Nexans termination kits, elbows and feeder exits at the collector substation.",
    description:
      "1200 mm² collection network feeder terminations at a collector substation, using Nexans termination kits, elbows and feeder exits.",
    image: {
      src: "/images/junction-setup.jpg",
      alt: "Collection cables dressed into an open inline junction box on a wind farm",
    },
    secondary: {
      src: "/images/feeder.jpg",
      alt: "Screened separable connectors on a switchgear feeder panel",
    },
    relatedServices: ["cable-terminations"],
    relatedCapabilities: ["wind", "hv-cable-jointing"],
  },
];

export const stats = [
  { value: "78", label: "Turbines connected at Goyder South" },
  { value: "111 MW", label: "Barossa battery, isolated and restored" },
  { value: "16", label: "Cables repaired at Kerta Road" },
  { value: "66 kV", label: "XLPE joints and terminations" },
] as const;

export const timeline = [
  {
    label: "2024",
    title: "Founded in the Adelaide Hills",
    detail:
      "Caleb Vears started Earthed after ten years in distribution power systems, with the work pointed at renewable energy.",
  },
  {
    label: "Wind",
    title: "Goyder South",
    detail:
      "Specialist jointing partner across the whole site. 78 turbines connected. The project that shaped Earthed's technical direction.",
  },
  {
    label: "Solar",
    title: "Port Wakefield",
    detail: "First EPC site. Handed over in 16 weeks: grid-connected, commissioned and operational.",
  },
  {
    label: "Repair",
    title: "Kerta Road",
    detail: "Sixteen 300 mm² cables severed mid-build. Sixteen joints, IR and VLF tested, asset returned to service.",
  },
  {
    label: "Battery",
    title: "Barossa and Tailem Bend",
    detail:
      "A two-day switching operation on the 111 MW Barossa BESS, and ongoing O+M on the live Tailem Bend battery.",
  },
] as const;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/projects", label: "Projects" },
  { href: "/safety", label: "Safety" },
  { href: "/about", label: "About" },
] as const;

export const footerNav = [
  ...nav,
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
] as const;

export function getService(slug: string) {
  return services.find((item) => item.slug === slug);
}

export function getCapability(slug: string) {
  return capabilities.find((item) => item.slug === slug);
}

export function getProject(slug: string) {
  return projects.find((item) => item.slug === slug);
}

export function allPaths() {
  return [
    "/",
    "/about",
    "/services",
    ...services.map((item) => `/services/${item.slug}`),
    "/capabilities",
    ...capabilities.map((item) => `/capabilities/${item.slug}`),
    "/projects",
    ...projects.map((item) => `/projects/${item.slug}`),
    "/safety",
    "/contact",
    "/privacy",
  ];
}
