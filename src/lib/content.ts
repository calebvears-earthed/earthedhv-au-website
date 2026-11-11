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
  approval: "SAPN approved contractor",
  locality: "Adelaide Hills",
  region: "SA",
  regionName: "South Australia",
  founder: "Caleb Vears",
  founded: "2024",
  formspree: "https://formspree.io/f/mvkzjdwe",
  sister: {
    name: "Earthed Energy",
    href: "https://earthedenergy.au",
    note: "Part of the Earthed Energy group. A separate company and a separate site.",
  },
} as const;

export const heroLines = ["Renewable energy", "High voltage"] as const;

export const about = {
  headline: "The future of renewable energy at Earthed.",
  body: "Earthed started in the Adelaide Hills, founded by Caleb Vears in 2024 off the back of ten years working in distribution power systems with a strong focus on renewable energy. Since then Earthed has worked alongside some of the world's leading renewable energy companies, right here in South Australia. We hold a real focus on maintaining a healthy working environment, using our craft to implement strict safe operating procedures inside our in-house safety system. Our clients get the confidence of knowing Earthed was there.",
  safety:
    "Strict safe operating procedures sit inside our in-house safety system, with switching sheets, permits and an in-house ePermit.",
  contactLine:
    "Earthed has worked alongside large international companies, local and non-local investors and local network connection expertise. We welcome any enquiry for collaboration.",
} as const;

export const capabilities = [
  {
    title: "Distribution power systems",
    summary: "Small scale EPC for network connections and distribution power systems.",
  },
  {
    title: "Cable terminations",
    summary:
      "Wide experience across multiple disciplines, primarily XLPE joints and terminations up to 66 kV. Indoor and outdoor terminations suited to network standards.",
  },
  {
    title: "Earthing",
    summary: "Grid earth works, transmission earthing, testing and remediation.",
  },
  {
    title: "Operation and maintenance",
    summary: "Scheduled maintenance programs, inspections and asset reporting.",
  },
  {
    title: "High voltage switching",
    summary: "HV operating authority, switching sheets, permits and in-house ePermit.",
  },
  {
    title: "Emergency call out",
    summary: "24-hour HV fault response: fault location, re-terminations and return-to-service testing.",
  },
] as const;

export const projects = [
  {
    title: "Goyder South Wind Farm",
    summary:
      "Underground HV distribution cable jointing across the whole Goyder South site in the SA Mid North, as specialist jointing partner to Neoen and its EPC partners GE Vernova and Elecnor. The project that shaped Earthed's technical direction.",
    outcome: "78 turbines connected. Every joint terminated or personally witnessed by Caleb Vears.",
    src: "/images/nexans-joints.jpg",
    width: 1170,
    height: 1117,
    alt: "High voltage straight joints prepared on collection cables",
  },
  {
    title: "Full-site isolation and restoration",
    summary:
      "A major underground cable fault required full-site isolation, coordinated HV switching and restoration of supply.",
  },
  {
    title: "Electrical permit supervision on a live grid-scale battery",
    summary:
      "Earthed HV provided independent electrical work permit supervision for the O&M contractor of a grid-scale battery in South Australia. Across an eight-month call-up engagement, the role covered electrical access and isolation permit approvals, review of safe work controls, pre-start coordination and contractor monitoring during planned works.",
  },
  {
    title: "Port Wakefield 5 MW",
    summary:
      "Our first experience managing an EPC site. All electrical components were carefully undertaken and complied by Earthed. Battling the winter months, our team achieved handover within the 16-week timeframe set by the client. 8,000+ panels, 20 combiner boxes, 4 inverter units. 5 MW battery, with provisions for a bitcoin mine addition. HV switchroom constructed and commissioned.",
    outcome: "Handed over in 16 weeks: grid-connected, commissioned and operational.",
    src: "/images/solar-panels.jpg",
    width: 1200,
    height: 1600,
    alt: "Rows of solar modules on a utility-scale farm",
  },
  {
    title: "Kerta Road",
    summary:
      "Emergency HV cable repair response at the 5 MW solar farm after a civil excavator strike severed sixteen underground 300 mm² HV distribution cables mid-build. Earthed High Voltage mobilised, staged the cuts, performed sixteen Raychem heat-shrink straight joints and the full post-joint IR and VLF test regime, and returned the asset to service.",
    outcome: "16 cables repaired. Every joint IR and VLF tested. Asset back online by Caleb Vears.",
    src: "/images/solar-trench.jpg",
    width: 1200,
    height: 1600,
    alt: "Cables in a trench running beside a solar array at sunset",
  },
  {
    title: "1200 mm² substation feeder",
    summary:
      "1200 mm² collection network feeder terminations: Nexans termination kits, elbows and feeder exits at the collector substation.",
    src: "/images/junction-setup.jpg",
    width: 1200,
    height: 1600,
    alt: "Collection cables dressed into an open inline junction box on a wind farm",
  },
] as const;
