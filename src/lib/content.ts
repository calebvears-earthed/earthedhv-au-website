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

export const heroLines = ["Renewable energy", "High voltage", "South Australia"] as const;

export const positioning = [
  "We terminate and joint high voltage cables.",
  "We work on substations and switchgear.",
  "We do the work most electricians can't.",
] as const;

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
    title: "111 MW Barossa BESS",
    summary:
      "Critical emergency response after a fault on the 275 kV incoming cable. Given four days' notice, we designed a switching program to isolate the site, take the main transformer offline for its service window and re-energise the full BESS across a two-day coordinated operation.",
    outcome: "Site safely isolated, service window completed, re-energised without incident.",
    src: "/images/bess-rows.jpg",
    width: 1600,
    height: 1200,
    alt: "Containerised battery units on a grid-scale battery site",
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
] as const;
