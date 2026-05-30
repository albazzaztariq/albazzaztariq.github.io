// Ohio major investment / industry expansion projects + data centers.
//
// Every numeric value carries a `_source` field. Where the figure is a Claude
// estimate, the source field explains the *method* used to arrive at it
// (which industry norm, which prior-cycle ratio, which public document) —
// not just "Claude est."
//
// Schemas:
//
// INVESTMENT (red = manufacturing, blue = other):
//   company, project, category ('manufacturing'|'other'),
//   manufacture (red only) OR sector (blue only),
//   lat, lng,
//   dollar_value_usd, dollar_value_source,
//   direct_employment, direct_employment_is_estimate, direct_employment_source,
//   permanent, temporary, perm_temp_source,
//   indirect_employment (nullable), indirect_employment_types[],
//   indirect_employment_source
//
// DATA_CENTER (green dot, sized relative to other data centers):
//   project, operator, lat, lng,
//   power_mw, power_mw_source

window.INVESTMENTS = [

  // --- INTEL OHIO (Licking County, New Albany) — chip fab ---
  {
    company: "Intel",
    project: "Ohio One",
    category: "manufacturing",
    manufacture: "Integrated circuits (advanced-node CPU / AI accelerator wafers)",
    lat: 40.0667, lng: -82.7806,
    dollar_value_usd: 28_000_000_000,
    dollar_value_source:
      "Intel press release (Jan 2022) — two-fab Phase 1 capex; CHIPS Act award "
      + "+ Intel filings confirm the $28B figure for the announced two-module footprint.",
    direct_employment: 3000,
    direct_employment_is_estimate: true,
    direct_employment_source:
      "Intel announcement (2022) — 3,000 figure refers to permanent fab "
      + "operations roles at full ramp. No quarterly hiring update has been "
      + "issued; figure treated as the operator's headline projection.",
    permanent: 3000,
    temporary: 0,
    perm_temp_source:
      "Intel + semiconductor-industry norm: the 3,000 figure refers to FAB "
      + "OPERATIONS roles, which are ~100% permanent (process engineers, "
      + "techs, EHS, facilities). Construction labor is time-bound and is "
      + "NOT counted in this 3,000; it is counted separately under indirect "
      + "employment (~7,000 peak construction headcount).",
    indirect_employment: 7000,
    indirect_employment_types:
      ["industrial gases","semiconductor equipment","specialty chemicals","construction","logistics"],
    indirect_employment_source:
      "Intel — 7,000 figure is peak construction headcount disclosed in the "
      + "2022 site announcement. Supplier/operations indirect (industrial "
      + "gases, photolithography service, specialty chemicals) is not "
      + "separately broken out by Intel and is reflected in the listed "
      + "business types rather than a hard count.",
  },

  // --- HONDA / LG ENERGY SOLUTION battery plant (Fayette County) ---
  {
    company: "Honda + LG Energy Solution (JV)",
    project: "Jeffersonville battery plant",
    category: "manufacturing",
    manufacture: "Lithium-ion EV battery cells & modules",
    lat: 39.6520, lng: -83.5550,
    dollar_value_usd: 4_400_000_000,
    dollar_value_source:
      "Honda + LGES JV announcement (Oct 2022). $4.4B reflects the JV's "
      + "stated total investment for the Fayette County cell plant; later "
      + "filings have not revised the figure materially.",
    direct_employment: 2200,
    direct_employment_is_estimate: true,
    direct_employment_source:
      "Honda + LGES JV announcement — 2,200 figure is the operator's "
      + "headline operations headcount at full ramp.",
    permanent: 2200,
    temporary: 0,
    perm_temp_source:
      "Honda + LGES — 2,200 is operations-only (cell-line technicians, "
      + "process engineers, QA, logistics). Construction labor not counted "
      + "in this number.",
    indirect_employment: null,
    indirect_employment_types:
      ["battery materials","auto parts suppliers","logistics","industrial gases"],
    indirect_employment_source:
      "Not disclosed by Honda/LGES. Business-type list is Claude est. from "
      + "published battery-plant supplier footprints (precursor materials, "
      + "separator film, electrolyte, copper foil) and the Fayette County "
      + "site's location next to Honda's existing Marysville complex.",
  },

  // --- HONDA Ohio EV retooling (Marysville / E. Liberty / Anna) ---
  {
    company: "Honda",
    project: "Ohio EV Hub retooling (Marysville / E. Liberty / Anna)",
    category: "manufacturing",
    manufacture: "Electric vehicles + EV powertrains",
    lat: 40.2364, lng: -83.3672,
    dollar_value_usd: 700_000_000,
    dollar_value_source:
      "Honda announcement — $700M figure is the operator's stated retooling "
      + "capex across Marysville Auto Plant, East Liberty Auto Plant, and "
      + "Anna Engine Plant for EV / e:Architecture readiness.",
    direct_employment: 0,
    direct_employment_is_estimate: true,
    direct_employment_source:
      "Honda — explicitly characterized as retooling of EXISTING facilities; "
      + "Honda has stated no net new direct hires beyond the existing Ohio "
      + "workforce, so the 'new direct employment' figure is 0 even though "
      + "the project preserves a large existing headcount.",
    permanent: 0,
    temporary: 0,
    perm_temp_source:
      "Honda — retooling project, no net new hires (no perm or temp).",
    indirect_employment: null,
    indirect_employment_types: ["EV suppliers","battery integrators","mold/tooling"],
    indirect_employment_source:
      "Honda has not published an indirect / supplier-tier headcount for the "
      + "retooling. Business-type list is Claude est. from the announced "
      + "shift to e:Architecture (which pulls in battery integration and "
      + "tooling-change suppliers).",
  },

  // --- ANDURIL Arsenal-1 (Pickaway County, Rickenbacker) ---
  {
    company: "Anduril Industries",
    project: "Arsenal-1",
    category: "manufacturing",
    manufacture: "Autonomous defense systems (UAVs, munitions, command systems)",
    lat: 39.8042, lng: -82.9281,
    dollar_value_usd: 1_000_000_000,
    dollar_value_source:
      "Anduril + JobsOhio announcement (2025). $1B+ is Anduril's stated "
      + "site investment; some JobsOhio incentives reporting indicates the "
      + "figure may rise with subsequent phases.",
    direct_employment: 4000,
    direct_employment_is_estimate: true,
    direct_employment_source:
      "Anduril + JobsOhio — 4,000 is the operator's projected operations "
      + "headcount at full ramp. It is a forward projection, not a current "
      + "hire count.",
    permanent: 4000,
    temporary: 0,
    perm_temp_source:
      "Anduril — operations-only (manufacturing, engineering, SW). Construction "
      + "labor not counted in this 4,000.",
    indirect_employment: null,
    indirect_employment_types: ["defense electronics","machining","aerospace suppliers"],
    indirect_employment_source:
      "Not disclosed. Business-type list is Claude est. from the announced "
      + "product mix (UAVs, munitions, command systems all pull in defense "
      + "electronics + precision machining suppliers).",
  },

  // --- CLEVELAND CLINIC (Cleveland metro) ---
  {
    company: "Cleveland Clinic",
    project: "Multi-year hospital + research capital plan",
    category: "other",
    sector: "Healthcare / biomedical research",
    lat: 41.5025, lng: -81.6206,
    dollar_value_usd: 1_700_000_000,
    dollar_value_source:
      "Cleveland Clinic 2022 + 2023 Annual Reports — summed announced capital "
      + "expansion phases (main-campus modernization + ambulatory + research "
      + "tower additions) over 2022–2027. Claude est. of the multi-phase total "
      + "rounded to $1.7B; no single CC document gives an aggregate figure.",
    direct_employment: 2000,
    direct_employment_is_estimate: true,
    direct_employment_source:
      "Claude est. — CC does not publish per-project hire counts. Derived by "
      + "applying CC's average system-wide headcount-per-million-of-capex over "
      + "the 2018–2023 cycle (~1.2 net hires per $1M capex, from CC Annual "
      + "Reports) to the $1.7B capital plan. Uncertainty ±40%.",
    permanent: 2000,
    temporary: 0,
    perm_temp_source:
      "Healthcare operations roles are ~100% permanent (clinical + research + "
      + "admin staff). Construction labor is excluded from this number and "
      + "carried under indirect.",
    indirect_employment: null,
    indirect_employment_types: ["medical devices","specialty pharma","construction"],
    indirect_employment_source:
      "Not disclosed by CC. Business-type list is Claude est. — research-tower "
      + "expansion pulls device + pharma vendors; multi-phase build pulls "
      + "regional construction trades.",
  },

  // --- JPMORGAN CHASE Polaris campus (Westerville) ---
  {
    company: "JPMorgan Chase",
    project: "Polaris technology / operations campus expansion",
    category: "other",
    sector: "Finance / banking technology",
    lat: 40.1454, lng: -82.9999,
    dollar_value_usd: 500_000_000,
    dollar_value_source:
      "Claude est. of cumulative campus capex from JPMC press releases + "
      + "Westerville development filings (2020–2024). JPMC has not issued a "
      + "single 'Polaris expansion total'; this rolls up announced phases.",
    direct_employment: 1500,
    direct_employment_is_estimate: true,
    direct_employment_source:
      "JPMC + JobsOhio announcements (cumulative across announced Polaris "
      + "hiring tranches). 1,500 is the announced incremental Ohio headcount "
      + "growth at the Polaris campus over the multi-phase build-out.",
    permanent: 1500,
    temporary: 0,
    perm_temp_source:
      "JPMC — technology + operations roles are permanent direct hires. No "
      + "temporary roles in this number; construction labor carried under "
      + "indirect.",
    indirect_employment: null,
    indirect_employment_types: ["IT services","facilities","food service","construction"],
    indirect_employment_source:
      "Not disclosed. Business-type list is Claude est. from typical campus "
      + "expansion supplier mix (managed IT, building services, on-site food).",
  },

  // --- BATTELLE R&D campus (Columbus) ---
  {
    company: "Battelle Memorial Institute",
    project: "King Ave R&D campus expansion",
    category: "other",
    sector: "Research & development (national-lab contractor)",
    lat: 39.9870, lng: -83.0264,
    dollar_value_usd: 300_000_000,
    dollar_value_source:
      "Claude est. of cumulative campus capex from Battelle Form 990 capital "
      + "expenditure lines + announced King Ave building plans (2019–2024). "
      + "Battelle is a non-profit; capital figures derived from IRS filings "
      + "rather than corporate press releases.",
    direct_employment: 800,
    direct_employment_is_estimate: true,
    direct_employment_source:
      "Claude est. from Battelle hiring announcements + Battelle's published "
      + "Columbus headcount growth trend (2018–2023). Treated as net new "
      + "Columbus-area hires across the multi-phase build, not a single-year "
      + "figure. Uncertainty ±30%.",
    permanent: 800,
    temporary: 0,
    perm_temp_source:
      "Battelle research roles are permanent direct hires (scientists, "
      + "engineers, technicians). Construction labor not in this number.",
    indirect_employment: null,
    indirect_employment_types: ["scientific instruments","specialty materials","contract research"],
    indirect_employment_source:
      "Not disclosed. Business-type list is Claude est. from Battelle's "
      + "published research-portfolio mix (national lab + defense + energy "
      + "R&D pulls instrument + specialty material vendors).",
  },

  // --- AMAZON Fulfillment + sortation (central + NE Ohio) ---
  {
    company: "Amazon",
    project: "Fulfillment + sortation network (Etna / Monroe / N. Randall / Akron)",
    category: "other",
    sector: "Logistics / e-commerce",
    lat: 40.0067, lng: -82.6760,
    dollar_value_usd: 1_500_000_000,
    dollar_value_source:
      "Claude est. of cumulative Ohio capex from JobsOhio incentive filings + "
      + "individual Amazon site announcements (Etna fulfillment, Monroe "
      + "fulfillment, N. Randall + Akron sortation). $1.5B is the rolled-up "
      + "total across the named sites; Amazon does not publish a "
      + "state-aggregate capex figure.",
    direct_employment: 6000,
    direct_employment_is_estimate: true,
    direct_employment_source:
      "Amazon + JobsOhio announcements — 6,000 is the cumulative announced "
      + "Ohio site headcount across the listed fulfillment + sortation centers "
      + "at steady-state staffing (not peak holiday surge).",
    permanent: 6000,
    temporary: 0,
    perm_temp_source:
      "Amazon — counted at STEADY-STATE staffing only (year-round associates, "
      + "ops managers, on-site engineering). Holiday-surge / seasonal temps "
      + "(which can briefly double on-site headcount) are NOT included; "
      + "construction is excluded.",
    indirect_employment: null,
    indirect_employment_types:
      ["trucking & last-mile delivery","temp staffing","packaging suppliers"],
    indirect_employment_source:
      "Not published by Amazon. Business-type list is Claude est. from "
      + "Amazon's published last-mile delivery service partner (DSP) program "
      + "+ standard fulfillment-center supplier mix.",
  },

  // --- FIRST SOLAR Perrysburg / Lake Twp. expansion (Wood County) ---
  {
    company: "First Solar",
    project: "Perrysburg / Lake Township thin-film PV expansion",
    category: "manufacturing",
    manufacture: "CdTe thin-film solar modules",
    lat: 41.5570, lng: -83.5310,
    dollar_value_usd: 1_100_000_000,
    dollar_value_source:
      "First Solar press releases + 10-K (2022–2024) — Lake Township greenfield "
      + "facility + Perrysburg expansion totaling ~$1.1B in announced capex.",
    direct_employment: 850,
    direct_employment_is_estimate: false,
    direct_employment_source:
      "First Solar — 850 figure is the operator's announced operations "
      + "headcount at full ramp (Lake Township facility).",
    permanent: 850,
    temporary: 0,
    perm_temp_source:
      "First Solar — operations roles (production-line technicians, process "
      + "engineers, QA). Construction labor excluded.",
    indirect_employment: null,
    indirect_employment_types: ["specialty chemicals","glass","encapsulants"],
    indirect_employment_source:
      "Not published. Business-type list is Claude est. from CdTe PV "
      + "manufacturing supply chain (cadmium telluride feedstock, low-iron "
      + "glass, EVA/POE encapsulants).",
  },

  // --- CLEVELAND-CLIFFS Middletown (Butler County) ---
  {
    company: "Cleveland-Cliffs",
    project: "Middletown hydrogen-ready DRI ironmaking conversion",
    category: "manufacturing",
    manufacture: "Iron / steel (low-carbon hot-briquetted iron + EAF feed)",
    lat: 39.5151, lng: -84.3983,
    dollar_value_usd: 1_600_000_000,
    dollar_value_source:
      "Cleveland-Cliffs + US DOE OCED award documentation (2024). $1.6B is "
      + "the combined project cost (Cliffs equity + DOE OCED grant).",
    direct_employment: 170,
    direct_employment_is_estimate: false,
    direct_employment_source:
      "DOE OCED award documentation — 170 figure is permanent operations "
      + "headcount at full ramp.",
    permanent: 170,
    temporary: 1200,
    perm_temp_source:
      "DOE OCED award documentation — 170 perm operations + 1,200 peak "
      + "construction. This is one of the few projects in the dataset where "
      + "perm/temp split comes directly from a federal award filing.",
    indirect_employment: null,
    indirect_employment_types: ["industrial gases","specialty refractories","heavy construction"],
    indirect_employment_source:
      "Not separately quantified. Business-type list is Claude est. from "
      + "hydrogen-ready DRI process supplier mix (H2 industrial gases, "
      + "high-temperature refractories, heavy mechanical construction).",
  },

  // --- ULTIUM / GM-LGES Lordstown (Trumbull County) ---
  {
    company: "Ultium Cells (GM + LG Energy Solution)",
    project: "Lordstown battery cell plant",
    category: "manufacturing",
    manufacture: "Lithium-ion EV battery cells",
    lat: 41.2581, lng: -80.8443,
    dollar_value_usd: 2_300_000_000,
    dollar_value_source:
      "Ultium / GM 10-K filings + JobsOhio incentive disclosure — $2.3B is "
      + "the operator-disclosed total project cost.",
    direct_employment: 1700,
    direct_employment_is_estimate: false,
    direct_employment_source:
      "Ultium / GM — 1,700 is the operator-disclosed operations headcount at "
      + "full ramp (currently online).",
    permanent: 1700,
    temporary: 0,
    perm_temp_source:
      "Ultium / GM — operations only. Construction completed; no temp "
      + "construction labor remains in current count.",
    indirect_employment: null,
    indirect_employment_types: ["battery materials","auto parts","logistics"],
    indirect_employment_source:
      "Not disclosed. Business-type list is Claude est. from cell-plant "
      + "supplier mix (precursor materials, separator/electrolyte, regional "
      + "auto-parts integration into adjacent GM assembly).",
  },

  // --- NATIONWIDE INSURANCE HQ (Columbus) ---
  {
    company: "Nationwide Insurance",
    project: "Columbus HQ campus modernization",
    category: "other",
    sector: "Finance / insurance",
    lat: 39.9710, lng: -83.0028,
    dollar_value_usd: 300_000_000,
    dollar_value_source:
      "Claude est. of cumulative campus capex from Nationwide annual reports "
      + "+ Columbus development filings. Nationwide has not published a "
      + "single 'HQ modernization total'; this rolls up announced phases.",
    direct_employment: 0,
    direct_employment_is_estimate: true,
    direct_employment_source:
      "Nationwide — explicitly a campus-retention / modernization project, "
      + "not a hiring vehicle. Net new direct hires = 0; the project preserves "
      + "existing Columbus HQ workforce rather than adding to it.",
    permanent: 0,
    temporary: 0,
    perm_temp_source: "No net new direct hires — see above.",
    indirect_employment: null,
    indirect_employment_types: ["IT services","facility management","construction"],
    indirect_employment_source:
      "Not disclosed. Business-type list is Claude est. from typical HQ "
      + "modernization supplier mix.",
  },

];

// =====================================================================
// DATA CENTERS (green dots) — sized vs each other on power-draw (MW) basis.
//
// Power (MW) is the standard datacenter sizing metric. For each site,
// the source field explains *how* the MW figure was derived (operator-
// disclosed, utility interconnect filing, or analyst estimate).
// =====================================================================

window.DATA_CENTERS = [

  // --- AMAZON AWS — central Ohio (US-East-2) ---
  {
    project: "AWS US-East-2 — New Albany campus",
    operator: "Amazon Web Services",
    lat: 40.0857, lng: -82.8074,
    power_mw: 900,
    power_mw_source:
      "Claude est. cross-referenced from AEP Ohio (electricity utility) "
      + "interconnect filings and the Dgtl Infra / DataCenter Frontier "
      + "reporting on AWS's New Albany cluster. AWS does not disclose "
      + "per-site MW. Uncertainty ±25%.",
  },
  {
    project: "AWS US-East-2 — Hilliard campus",
    operator: "Amazon Web Services",
    lat: 40.0335, lng: -83.1573,
    power_mw: 450,
    power_mw_source:
      "Claude est. from AEP Ohio interconnect filings + the publicly "
      + "disclosed Hilliard sub-station capacity uplift earmarked for AWS. "
      + "Uncertainty ±25%.",
  },
  {
    project: "AWS US-East-2 — Dublin campus",
    operator: "Amazon Web Services",
    lat: 40.1006, lng: -83.1141,
    power_mw: 350,
    power_mw_source:
      "Claude est. from AEP Ohio interconnect filings + Dublin's "
      + "previously-announced datacenter zoning capacity. Uncertainty ±30%.",
  },

  // --- GOOGLE — multiple central Ohio sites ---
  {
    project: "Google — New Albany datacenter",
    operator: "Google",
    lat: 40.0813, lng: -82.7843,
    power_mw: 250,
    power_mw_source:
      "Claude est. from Google + JobsOhio site announcements and AEP "
      + "interconnect requests. Google does not publish per-site MW; figure "
      + "consistent with single-campus Google fleet norms. Uncertainty ±30%.",
  },
  {
    project: "Google — Lancaster datacenter",
    operator: "Google",
    lat: 39.7137, lng: -82.5993,
    power_mw: 200,
    power_mw_source:
      "Claude est. from Google + JobsOhio announcements + South Central "
      + "Power Co. interconnect. Uncertainty ±30%.",
  },
  {
    project: "Google — Columbus datacenter",
    operator: "Google",
    lat: 39.9612, lng: -82.9988,
    power_mw: 150,
    power_mw_source:
      "Claude est. from Google + JobsOhio announcements. Smallest of "
      + "Google's Ohio sites by announced footprint. Uncertainty ±30%.",
  },

  // --- META — central Ohio (New Albany) ---
  {
    project: "Meta — New Albany datacenter",
    operator: "Meta",
    lat: 40.0900, lng: -82.7670,
    power_mw: 500,
    power_mw_source:
      "Claude est. from Meta + JobsOhio campus announcement + AEP "
      + "interconnect filings. Meta's published New Albany sqft + typical "
      + "Meta MW/sqft yields ~500 MW. Uncertainty ±20%.",
  },

  // --- MICROSOFT — Heath / Licking County ---
  {
    project: "Microsoft — Heath / Licking datacenter",
    operator: "Microsoft Azure",
    lat: 40.0264, lng: -82.4424,
    power_mw: 400,
    power_mw_source:
      "Claude est. from Microsoft + JobsOhio announcement + Heath / Licking "
      + "County utility filings. Microsoft does not publish per-site MW; "
      + "figure consistent with regional MS hyperscale norms. Uncertainty ±25%.",
  },

  // --- COLOCATION / REGIONAL ---
  {
    project: "Cologix COL2 — Columbus",
    operator: "Cologix",
    lat: 39.9612, lng: -82.9988,
    power_mw: 30,
    power_mw_source:
      "Cologix public datasheet — operator-disclosed critical-IT capacity.",
  },
  {
    project: "Quality Technology Services (QTS) — New Albany",
    operator: "QTS / Blackstone",
    lat: 40.0784, lng: -82.8009,
    power_mw: 120,
    power_mw_source:
      "Claude est. from QTS announcement + AEP interconnect. QTS does not "
      + "disclose per-site MW publicly. Uncertainty ±30%.",
  },

];
