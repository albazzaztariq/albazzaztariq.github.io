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
    in_service: "delayed — first production now est. 2030–2031",
    in_service_source:
      "Intel updates Sept 2024 + Apr 2025 — original target was 2025; Intel "
      + "has publicly pushed first-fab production to 2030–2031 amid foundry "
      + "demand softening and CHIPS-Act funding sequencing.",
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
    in_service: "end of 2025",
    in_service_source:
      "Honda + LGES JV original announcement (Oct 2022) targeting end-2025 "
      + "mass production; no public revision as of latest JV update.",
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
    in_service: "phased 2024–2026",
    in_service_source:
      "Honda — retooling is being phased across the three plants from 2024 "
      + "through 2026 alongside the launch of the Acura RSX EV and Honda "
      + "0-series production.",
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
    in_service: "est. 2026",
    in_service_source:
      "Anduril + JobsOhio announcement (2025) — initial Arsenal-1 production "
      + "targeted for 2026 ramp; later phases not separately dated publicly.",
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
    in_service: "phased 2022–2027",
    in_service_source:
      "Cleveland Clinic 2022 + 2023 Annual Reports — multi-phase build-out "
      + "rolling through 2027; individual towers / ambulatory sites have their "
      + "own dates but the aggregate program runs through 2027.",
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
    in_service: "Not published — JPMC has not published a single in-service date for the Polaris expansion (the campus is in continuous incremental build-out).",
    in_service_source: "Not published",
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
    in_service: "Not published — Battelle has not published a single in-service date for the King Ave expansion (continuous incremental build-out).",
    in_service_source: "Not published",
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
    in_service: "phased 2020–2024 (most sites already operational)",
    in_service_source:
      "Amazon site openings reported across 2020–2024 (Etna 2020, Monroe 2021, "
      + "Akron 2024, N. Randall sortation 2022). The cluster is largely "
      + "operational; later expansions continue.",
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
    in_service: "2025 (Lake Township facility ramp)",
    in_service_source:
      "First Solar press releases + 10-K — Lake Township facility commercial "
      + "production targeted 2025; Perrysburg expansion already producing.",
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
    in_service: "est. 2029",
    in_service_source:
      "US DOE OCED award documentation (2024) — project ramp targeted 2029 "
      + "for hydrogen-ready DRI commissioning.",
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
    in_service: "operational since Aug 2022",
    in_service_source: "Ultium / GM — commercial cell production began Aug 2022.",
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
    in_service: "Not published — campus modernization runs continuously without a fixed in-service date.",
    in_service_source: "Not published",
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

  // =====================================================================
  // NE Ohio research pass — 2026-05-30 — every entry has rigorous sourcing
  // per the no-fabrication rule; null + "Not published" used where figures
  // were not publicly disclosed.
  // =====================================================================

  { company: "Sherwin-Williams", project: "New global headquarters tower, downtown Cleveland",
    category: "other", sector: "Corporate HQ (paint and coatings)",
    lat: 41.4993, lng: -81.6944,
    in_service: "May 2026 (ceremonial opening)",
    in_service_source: "Ideastream / news5cleveland May 2026 opening coverage",
    dollar_value_usd: 600_000_000,
    dollar_value_source: "Sherwin-Williams Feb 6, 2020 press release — HQ portion ~$600M (combined HQ + Brecksville R&D min $860M)",
    direct_employment: 3100, direct_employment_is_estimate: false,
    direct_employment_source: "Ideastream + news5cleveland May 2026 opening — ~3,100 employees in the new building",
    permanent: 3100, temporary: null,
    perm_temp_source: "Not published — construction headcount not separately broken out for HQ vs R&D",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Sherwin-Williams", project: "Morikis Global Technology Center (R&D campus), Brecksville",
    category: "other", sector: "Corporate R&D (paint and coatings)",
    lat: 41.3201, lng: -81.6265,
    in_service: "operational (R&D center already open)",
    in_service_source: "Sherwin-Williams 'Research and Development Center | Building Our Future' page",
    dollar_value_usd: 260_000_000,
    dollar_value_source: "Sherwin-Williams Feb 6, 2020 announcement — Brecksville R&D portion ~$260M",
    direct_employment: 900, direct_employment_is_estimate: false,
    direct_employment_source: "Sherwin-Williams R&D Center site — has opened to more than 900 employees",
    permanent: 900, temporary: 3000,
    perm_temp_source: "Ohio Business Magazine / corporate.sherwin-williams.com — 3,000 construction jobs projected",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Lubrizol Corporation", project: "Wickliffe HQ expansion + Brecksville consolidation",
    category: "other", sector: "Corporate HQ / R&D (specialty chemicals)",
    lat: 41.6075, lng: -81.4773,
    in_service: "Not published — consolidation announced Jan 2026; campus completion date not disclosed",
    in_service_source: "Not published",
    dollar_value_usd: null,
    dollar_value_source: "Not published — JobsOhio + Businesswire (Jan 27, 2026) describe as 'multi-million-dollar' without a specific figure",
    direct_employment: 1000, direct_employment_is_estimate: false,
    direct_employment_source: "Lubrizol Jan 27, 2026 Businesswire — >1,000 NE Ohio personnel collaborating on the singular Wickliffe campus after consolidation",
    permanent: 1000, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Foxconn (Foxconn Ohio)", project: "Acquisition and retooling of former Lordstown GM/LSM assembly plant",
    category: "manufacturing",
    manufacture: "Initially EV contract manufacturing (Endurance pickup, Monarch tractors); later AI data-center equipment",
    lat: 41.1620, lng: -80.8676,
    in_service: "operational since Nov 2022 (acquired from Lordstown Motors)",
    in_service_source: "Lordstown Motors Form 8-K (Nov 2022)",
    dollar_value_usd: 230_000_000,
    dollar_value_source: "Lordstown Motors Form 8-K (Nov 2022) — Foxconn paid $230M",
    direct_employment: 400, direct_employment_is_estimate: false,
    direct_employment_source: "Vindicator + Mahoning Matters (2025) — Foxconn maintains ~400 positions at the former Lordstown facility",
    permanent: 400, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "SoftBank (Crescent Dune LLC) / Stargate partners",
    project: "Lordstown AI data-center equipment manufacturing hub (former Foxconn/GM plant)",
    category: "manufacturing",
    manufacture: "Modular AI data-center equipment & components (Stargate project)",
    lat: 41.1620, lng: -80.8676,
    in_service: "Not published — overhaul announced 2025; production-start date not disclosed",
    in_service_source: "Not published",
    dollar_value_usd: 3_000_000_000,
    dollar_value_source: "Manufacturing Dive + WFMJ + Business Journal Daily (2025) — SoftBank purchased plant for $375M and plans to invest up to $3B in overhaul",
    direct_employment: 1700, direct_employment_is_estimate: false,
    direct_employment_source: "Tribune Chronicle + Vindicator (2025) — facility could employ up to 1,700 workers (some reports up to 2,000)",
    permanent: 1700, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Amazon", project: "Akron fulfillment center (former Rolling Acres Mall site)",
    category: "other", sector: "Logistics / e-commerce fulfillment",
    lat: 41.0285, lng: -81.5709,
    in_service: "2024 (operational)",
    in_service_source: "news5cleveland + Summit4Success opening coverage",
    dollar_value_usd: 100_000_000,
    dollar_value_source: "Business Journal Daily — 'Amazon to Build $100M Fulfillment Center in Akron'",
    direct_employment: 1500, direct_employment_is_estimate: false,
    direct_employment_source: "Amazon + news5cleveland + Summit4Success — 1,500 full-time jobs at Akron facility",
    permanent: 1500, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Amazon", project: "Canton fulfillment center (1 M sq ft)",
    category: "other", sector: "Logistics / e-commerce fulfillment",
    lat: 40.8237, lng: -81.3582,
    in_service: "operational (announced Oct 2021)",
    in_service_source: "JobsOhio press release + Cleveland 19 / WKBN coverage",
    dollar_value_usd: null,
    dollar_value_source: "Not published — JobsOhio + news5cleveland announcement (Oct 2021) did not disclose Amazon capex (Amazon took no incentives)",
    direct_employment: 1000, direct_employment_is_estimate: false,
    direct_employment_source: "JobsOhio press release (Oct 2021) + Cleveland 19 / WKBN — ~1,000 new jobs",
    permanent: 1000, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "MetroHealth System", project: "Glick Center — new main campus hospital tower",
    category: "other", sector: "Healthcare",
    lat: 41.4636, lng: -81.6987,
    in_service: "Nov 2022 (opened)",
    in_service_source: "MetroHealth opening release",
    dollar_value_usd: 946_000_000,
    dollar_value_source: "MetroHealth groundbreaking release + Cleveland State University 2017 study (~$946M financed on MetroHealth credit)",
    direct_employment: null, direct_employment_is_estimate: false,
    direct_employment_source: "Not published — project is replacement of existing hospital tower; net new operational headcount not separately disclosed",
    permanent: null, temporary: 5000,
    perm_temp_source: "MetroHealth + Cleveland State University 2017 — campus transformation supports >5,000 jobs over 9-year construction timeline",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "University Hospitals", project: "Ahuja Medical Center Phase 2 expansion (Beachwood)",
    category: "other", sector: "Healthcare",
    lat: 41.4623, lng: -81.5085,
    in_service: "completed June 2023",
    in_service_source: "University Hospitals release + Becker's Hospital Review",
    dollar_value_usd: 236_000_000,
    dollar_value_source: "UH release + Becker's Hospital Review — $236M expansion completed June 2023",
    direct_employment: null, direct_employment_is_estimate: false,
    direct_employment_source: "Not published — UH release did not specify net new permanent headcount",
    permanent: null, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Cleveland Clinic", project: "Avon Hospital expansion + Richard E. Jacobs Family Health Center",
    category: "other", sector: "Healthcare",
    lat: 41.4517, lng: -82.0354,
    in_service: "under construction — announced June 2025",
    in_service_source: "Cleveland Clinic newsroom June 25 2025 + Crain's Cleveland Business",
    dollar_value_usd: 340_000_000,
    dollar_value_source: "Cleveland Clinic newsroom June 25 2025 + Crain's Cleveland Business — $340M Avon expansion",
    direct_employment: null, direct_employment_is_estimate: false,
    direct_employment_source: "Not published",
    permanent: null, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Cleveland Clinic", project: "Fairview Hospital expansion (cancer center, medical office, parking)",
    category: "other", sector: "Healthcare",
    lat: 41.4673, lng: -81.7965,
    in_service: "under construction — announced Nov 2023",
    in_service_source: "Crain's Cleveland Business + NEOtrans Nov 2023",
    dollar_value_usd: 265_000_000,
    dollar_value_source: "Crain's Cleveland Business + NEOtrans (Nov 2023) — $265M Fairview Hospital expansion",
    direct_employment: null, direct_employment_is_estimate: false,
    direct_employment_source: "Not published",
    permanent: null, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Cleveland Browns / Haslam Sports Group",
    project: "New domed Huntington Bank Field stadium, Brook Park",
    category: "other", sector: "Sports / entertainment infrastructure",
    lat: 41.4017, lng: -81.8190,
    in_service: "est. 2029",
    in_service_source: "NFL.com + ESPN + news5cleveland — target opening 2029",
    dollar_value_usd: 2_600_000_000,
    dollar_value_source: "NFL.com + ESPN + news5cleveland — $2.6B total ($1.755B Haslam, $600M State of Ohio, $245M Brook Park)",
    direct_employment: null, direct_employment_is_estimate: false,
    direct_employment_source: "Not published — permanent stadium operations headcount not disclosed",
    permanent: null, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "City of Cleveland / Cleveland Hopkins International Airport",
    project: "Terminal Modernization Development Program (CLEvolution) Phase 1",
    category: "other", sector: "Aviation / transportation infrastructure",
    lat: 41.4117, lng: -81.8498,
    in_service: "Phase 1 build-out through 2030s",
    in_service_source: "Cleveland Airport newsroom + Axios Cleveland + Cleveland Magazine",
    dollar_value_usd: 1_600_000_000,
    dollar_value_source: "Cleveland Airport newsroom + Axios Cleveland + Cleveland Magazine — $1.6B Phase 1 (new terminal ~$1.1B)",
    direct_employment: null, direct_employment_is_estimate: false,
    direct_employment_source: "Not published",
    permanent: null, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Schaeffler Group USA", project: "Wooster e-mobility center expansion",
    category: "manufacturing",
    manufacture: "Electric motors, e-axle components, EV transmissions, torque converters, ring-gear carriers, one-way clutch assemblies",
    lat: 40.8051, lng: -81.9351,
    in_service: "operational (initial expansion 2017; subsequent expansions through 2020s)",
    in_service_source: "Schaeffler / Business Chief / PRNewswire",
    dollar_value_usd: 60_000_000,
    dollar_value_source: "Schaeffler + Business Chief + PRNewswire — $60M Wooster expansion to establish U.S. E-Mobility center",
    direct_employment: 200, direct_employment_is_estimate: false,
    direct_employment_source: "Wayne County EDC + Schaeffler corporate communications — 200 new jobs",
    permanent: 200, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Metallus Inc. (formerly TimkenSteel)",
    project: "Canton modernization + U.S. Army munitions capacity",
    category: "manufacturing",
    manufacture: "Specialty alloy steel bars + tubes; bloom reheat furnace for U.S. Army expanded munitions; EV components",
    lat: 40.7989, lng: -81.3784,
    in_service: "phased build-out (Crain's 2024 announcement)",
    in_service_source: "Crain's Cleveland Business 2024 + Metallus 8-K",
    dollar_value_usd: 112_700_000,
    dollar_value_source: "Crain's Cleveland Business 2024 — Metallus $112.7M modernization; corroborated by Metallus 8-K filings on the gov-funded bloom reheat furnace",
    direct_employment: null, direct_employment_is_estimate: false,
    direct_employment_source: "Not published — Metallus 8-K filings reference workforce training but do not specify net new headcount",
    permanent: null, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Team Wendy LLC (Avon Protection)",
    project: "Cleveland St. Clair Ave expansion / Center of Excellence in Head Protection",
    category: "manufacturing",
    manufacture: "Head-protection systems (helmets) for military, law enforcement, search and rescue, first responders, recreation",
    lat: 41.5563, lng: -81.5694,
    in_service: "under build-out (Apr 2024 announcement)",
    in_service_source: "Crain's Cleveland Business + JobsOhio + Avon Technologies Apr 2024",
    dollar_value_usd: 15_000_000,
    dollar_value_source: "Crain's Cleveland Business + JobsOhio + Avon Technologies Apr 2024 — $15M Ohio Tax Credit Authority-approved project",
    direct_employment: 200, direct_employment_is_estimate: false,
    direct_employment_source: "Avon Technologies + Team Wendy — 200 new jobs (doubling existing 200-person Cleveland workforce)",
    permanent: 200, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Bristolville 25 Developer LLC",
    project: "Proposed $3.6B AI data center campus, Lordstown",
    category: "other", sector: "IT / data center infrastructure",
    lat: 41.1620, lng: -80.8676,
    in_service: "proposed Oct 2025 — in-service date not yet disclosed",
    in_service_source: "WFMJ + Vindicator Oct 2025",
    dollar_value_usd: 3_600_000_000,
    dollar_value_source: "WFMJ + Vindicator (Oct 2025) — $3.6B, 1.65M sq ft AI data-center campus across 133 acres in Trumbull + Mahoning counties",
    direct_employment: 120, direct_employment_is_estimate: false,
    direct_employment_source: "WFMJ + Vindicator (Oct 2025) — 120 FT employees at avg wage >$84/hour per developer filings",
    permanent: 120, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  // =====================================================================
  // SW Ohio research pass — 2026-05-30
  // =====================================================================

  { company: "Joby Aviation", project: "Scaled eVTOL manufacturing facility, Dayton-Wright Brothers Airport (Area A)",
    category: "manufacturing", manufacture: "Electric vertical takeoff and landing (eVTOL) aircraft",
    lat: 39.6722, lng: -84.2294,
    in_service: "initial component production launched 2025; scaled operations ramp 2026–2027",
    in_service_source: "Dayton Daily News (Joby exec interview) + Joby press release + CNBC Jan 2026",
    dollar_value_usd: 500_000_000,
    dollar_value_source: "Joby Aviation press release Sept 2023 ('up to $500M') + JobsOhio announcement",
    direct_employment: 2000, direct_employment_is_estimate: false,
    direct_employment_source: "Joby Aviation press release Sept 2023 ('up to 2,000 jobs') + JobsOhio",
    permanent: null, temporary: null,
    perm_temp_source: "Not published — Joby + JobsOhio do not break out permanent vs temporary",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Joby Aviation", project: "Second Ohio manufacturing facility (Vandalia, 700,000 sq ft acquisition)",
    category: "manufacturing", manufacture: "Electric vertical takeoff and landing (eVTOL) aircraft",
    lat: 39.8906, lng: -84.1989,
    in_service: "operations expected to begin 2026; supports doubling to 4 aircraft/month in 2027",
    in_service_source: "Joby Aviation press release Jan 7 2026 + CNBC Jan 2026",
    dollar_value_usd: 61_500_000,
    dollar_value_source: "Joby Aviation press release Jan 7 2026 + CNBC — $61.5M acquisition price for the 700,000 sq ft Vandalia facility",
    direct_employment: null, direct_employment_is_estimate: false,
    direct_employment_source: "Not published — Vandalia-specific headcount not separately disclosed (incremental to the 2,000 Dayton total)",
    permanent: null, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "GE Aerospace", project: "Evendale / West Chester / Peebles Ohio manufacturing upgrades (part of $1B US plan)",
    category: "manufacturing", manufacture: "Commercial + defense jet engines (CMC components, engine test, MRO)",
    lat: 39.2553, lng: -84.4658,
    in_service: "investments deployed 2024–2025; Service Technology Acceleration Center (STAC) near Cincinnati opened Sept 2024",
    in_service_source: "GE Aerospace press release Mar 2024 + Local 12 (WKRC) July 2024",
    dollar_value_usd: 160_000_000,
    dollar_value_source: "GE Aerospace + Local 12 (WKRC) 2024 — Ohio total >$160M across Evendale / West Chester / Peebles (subset of $650M 2024 manufacturing plan + $1B MRO plan)",
    direct_employment: null, direct_employment_is_estimate: false,
    direct_employment_source: "Not published — GE Aerospace 2024 release announced hiring across the $650M plan but did not break out a discrete Evendale-area figure",
    permanent: null, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Procter & Gamble", project: "Mason Business Center R&D expansion (two new 3-story buildings)",
    category: "other", sector: "Consumer products R&D / corporate",
    lat: 39.3601, lng: -84.3105,
    in_service: "phased 2024–2030; ~800 employees relocating from Winton Hill beginning late 2024 through 2030",
    in_service_source: "Tradeline + Local 12 + AOL News on P&G–Mason Port Authority lease-leaseback",
    dollar_value_usd: 450_000_000,
    dollar_value_source: "Tradeline report — P&G Mason Business Center expansion ($450M, 360,000 sq ft + 130,000 sq ft buildings)",
    direct_employment: 800, direct_employment_is_estimate: false,
    direct_employment_source: "Local 12 + AOL — ~800 P&G employees relocating from Winton Hill to Mason (relocation, not net new)",
    permanent: 800, temporary: null,
    perm_temp_source: "Local 12 + AOL — 800 permanent relocations cited; construction headcount not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "AtriCure", project: "Mason global HQ expansion (120,000 sq ft lab / R&D / office / advanced mfg)",
    category: "manufacturing", manufacture: "Medical devices for treatment of atrial fibrillation",
    lat: 39.3601, lng: -84.3105,
    in_service: "occupancy ~April 1, 2026",
    in_service_source: "AtriCure + JobsOhio press release Aug 2024 + Imagine Mason PDF",
    dollar_value_usd: 45_000_000,
    dollar_value_source: "JobsOhio + AtriCure press release Aug 15 2024 — $45M build-out",
    direct_employment: 400, direct_employment_is_estimate: false,
    direct_employment_source: "AtriCure + JobsOhio + Ohio Tax Credit Authority — 400 new jobs",
    permanent: 400, temporary: null,
    perm_temp_source: "JobsOhio + Ohio Tax Credit Authority — 400 net new permanent jobs; construction temporary not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Total Quality Logistics (TQL)", project: "Headquarters expansion at Ivy Pointe, Union Township",
    category: "other", sector: "Freight brokerage / logistics HQ",
    lat: 39.1043, lng: -84.2802,
    in_service: "Not published — TQL/REDI release did not specify final completion date for the $78M commitment",
    in_service_source: "Not published",
    dollar_value_usd: 78_000_000,
    dollar_value_source: "TQL press release + REDI Cincinnati — $78M Cincinnati-region commitment incl. $18M HQ expansion + $60M payroll",
    direct_employment: 1000, direct_employment_is_estimate: false,
    direct_employment_source: "TQL press release + REDI Cincinnati — 1,000 new jobs",
    permanent: 1000, temporary: null,
    perm_temp_source: "TQL + REDI cite 1,000 new permanent jobs; construction temp not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Honda Development and Manufacturing of America",
    project: "Anna Engine Plant expansion (EV megacasting / battery case capacity)",
    category: "manufacturing", manufacture: "Automotive engines + EV battery case megacastings",
    lat: 40.3956, lng: -84.1755,
    in_service: "operational — expansion completed",
    in_service_source: "Honda news + Sidney Daily News + Dayton Daily News",
    dollar_value_usd: 200_000_000,
    dollar_value_source: "Honda + JobsOhio + Dayton Daily News — $200M Anna expansion (announced ~Jan 2021)",
    direct_employment: 120, direct_employment_is_estimate: false,
    direct_employment_source: "JobsOhio + Dayton Daily News — 120 new jobs; 2,367 retained",
    permanent: 120, temporary: null,
    perm_temp_source: "JobsOhio cites 120 net new permanent jobs; construction temp not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Crown Equipment Corporation",
    project: "New Bremen / New Knoxville final assembly plant expansion",
    category: "manufacturing", manufacture: "Electric lift trucks + material handling equipment",
    lat: 40.4359, lng: -84.3791,
    in_service: "construction completed 2019; full capacity by end of 2022",
    in_service_source: "JobsOhio Crown Equipment success-story page",
    dollar_value_usd: 130_000_000,
    dollar_value_source: "JobsOhio success-story page — $40M construction + $90M new equipment = $130M",
    direct_employment: 560, direct_employment_is_estimate: false,
    direct_employment_source: "JobsOhio — >560 new jobs across New Bremen + New Knoxville",
    permanent: 560, temporary: null,
    perm_temp_source: "JobsOhio cites 560+ new permanent jobs; construction temp not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "The Christ Hospital Health Network",
    project: "Joint and Spine Center (Orthopaedic and Spine), Mt. Auburn campus",
    category: "other", sector: "Healthcare / hospital",
    lat: 39.1167, lng: -84.5113,
    in_service: "opened 2015 (operational); subsequent Mt. Auburn master-plan phases ongoing",
    in_service_source: "SOM + Healthcare Design Magazine + BD+C reporting",
    dollar_value_usd: 280_000_000,
    dollar_value_source: "Cincinnati Business Courier (via Healthcare Design Magazine) — ~$280M (hospital did not officially disclose)",
    direct_employment: null, direct_employment_is_estimate: false,
    direct_employment_source: "Not published — Christ Hospital did not publish a discrete net-new headcount for the Joint and Spine Center",
    permanent: null, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Cintas Corporation",
    project: "Mason corporate HQ campus transformation (43 acres)",
    category: "other", sector: "Uniform / facility services corporate HQ",
    lat: 39.3601, lng: -84.3105,
    in_service: "Not published — Cintas Feb 26 2024 release did not publish a fixed completion date",
    in_service_source: "Not published",
    dollar_value_usd: null,
    dollar_value_source: "Not published — Cintas Feb 26 2024 + JobsOhio describe a 'transformative investment' without a specific dollar amount",
    direct_employment: 125, direct_employment_is_estimate: false,
    direct_employment_source: "Cintas press release Feb 26 2024 + JobsOhio — 125 new jobs, ~1,300 retained",
    permanent: 125, temporary: null,
    perm_temp_source: "Cintas + JobsOhio cite 125 net new permanent jobs; construction temp not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Kettering Health",
    project: "Dayton-area expansion bond program (Wilmington hospital, Xenia health center, Greene Memorial renovations)",
    category: "other", sector: "Healthcare / hospital network",
    lat: 39.6895, lng: -84.1696,
    in_service: "Wilmington health center fully open late 2026; Xenia health center under construction (groundbreaking Apr 2026)",
    in_service_source: "Dayton Daily News + Spectrum News 1 + Wilmington News Journal",
    dollar_value_usd: 200_000_000,
    dollar_value_source: "Bond Buyer — Kettering Health Network sold $200M of new-money + refunding bonds to fund Dayton-area expansion (Wilmington $90M, Xenia $26M new, $15M Greene Memorial renovation)",
    direct_employment: null, direct_employment_is_estimate: false,
    direct_employment_source: "Not published — Kettering Health + Bond Buyer did not publish a consolidated net-new headcount",
    permanent: null, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

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
    in_service: "phased; initial buildings operational since 2016, expansion through ~2027",
    in_service_source: "AWS + JobsOhio announcements + AEP interconnect filings — phased deployment",
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
    in_service: "phased; operational since ~2017, expansions ongoing",
    in_service_source: "AWS + Hilliard substation capacity uplift filings",
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
    in_service: "phased; operational with expansions ongoing",
    in_service_source: "AEP interconnect filings + Dublin zoning capacity disclosures",
    power_mw: 350,
    power_mw_source:
      "Claude est. from AEP Ohio interconnect filings + Dublin's "
      + "previously-announced datacenter zoning capacity. Uncertainty ±30%.",
  },

  // --- GOOGLE — multiple central Ohio sites ---
  {
    project: "Google — New Albany datacenter",
    operator: "Google",
    in_service: "operational (first New Albany Google site online since 2020)",
    in_service_source: "Google + JobsOhio announcements + AEP interconnect requests",
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
    in_service: "under construction (announced 2022)",
    in_service_source: "Google + JobsOhio announcements + South Central Power Co. interconnect",
    lat: 39.7137, lng: -82.5993,
    power_mw: 200,
    power_mw_source:
      "Claude est. from Google + JobsOhio announcements + South Central "
      + "Power Co. interconnect. Uncertainty ±30%.",
  },
  {
    project: "Google — Columbus datacenter",
    operator: "Google",
    in_service: "operational (smallest of Google's Ohio sites)",
    in_service_source: "Google + JobsOhio announcements",
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
    in_service: "phased build through ~2027",
    in_service_source: "Meta + JobsOhio campus announcement + AEP interconnect",
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
    in_service: "est. 2027",
    in_service_source: "Microsoft + JobsOhio announcement (2024) + Heath / Licking utility filings",
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
    in_service: "operational",
    in_service_source: "Cologix public datasheet",
    lat: 39.9612, lng: -82.9988,
    power_mw: 30,
    power_mw_source:
      "Cologix public datasheet — operator-disclosed critical-IT capacity.",
  },
  {
    project: "Quality Technology Services (QTS) — New Albany",
    operator: "QTS / Blackstone",
    in_service: "phased (operational with ongoing expansion)",
    in_service_source: "QTS announcement + AEP interconnect",
    lat: 40.0784, lng: -82.8009,
    power_mw: 120,
    power_mw_source:
      "Claude est. from QTS announcement + AEP interconnect. QTS does not "
      + "disclose per-site MW publicly. Uncertainty ±30%.",
  },

];
