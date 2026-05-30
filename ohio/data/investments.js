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
    dollar_value_usd: 910_500_000,
    dollar_value_source:
      "Statehouse News Bureau + JobsOhio grant agreement (2025-07-09) — "
      + "'at least $910.5 million in capital investment' over the 10-year "
      + "JobsOhio deal.",
    direct_employment: 4008,
    direct_employment_is_estimate: false,
    direct_employment_source:
      "JobsOhio 10-year agreement — '4,008 new jobs and more than $530M "
      + "in new payroll'. NBC4 confirmed Phase 1 production opened March 2026.",
    permanent: 4008,
    temporary: null,
    perm_temp_source:
      "JobsOhio 10-year jobs commitment is permanent FTE count; construction "
      + "headcount not separately published.",
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

  // =====================================================================
  // NW + central + rural Ohio research pass — 2026-05-30
  // =====================================================================

  { company: "Stellantis", project: "Toledo Assembly Complex retooling for new midsize truck",
    category: "manufacturing", manufacture: "Midsize pickup truck (joining Jeep Wrangler + Gladiator)",
    lat: 41.6528, lng: -83.5379,
    in_service: "2028",
    in_service_source: "13abc + Stellantis Oct 15 2025 — launch timing 2028",
    dollar_value_usd: 400_000_000,
    dollar_value_source: "Stellantis Oct 14 2025 — nearly $400M for Toledo Assembly Complex (part of $13B US plan)",
    direct_employment: 900, direct_employment_is_estimate: false,
    direct_employment_source: "Stellantis + 13abc Oct 15 2025 — production shift could create >900 jobs",
    permanent: null, temporary: null,
    perm_temp_source: "Not published — perm/temp split not specified",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Cleveland-Cliffs", project: "Toledo Direct Reduction (HBI) Plant",
    category: "manufacturing", manufacture: "Hot-Briquetted Iron (HBI) for EAF steelmaking",
    lat: 41.6889, lng: -83.4769,
    in_service: "2020 commercial start; ribbon-cutting June 2021",
    in_service_source: "Cleveland-Cliffs press release June 9 2021 + JobsOhio",
    dollar_value_usd: 1_000_000_000,
    dollar_value_source: "JobsOhio + Cleveland-Cliffs — ~$1B build + operate; original $700M estimate revised upward",
    direct_employment: 130, direct_employment_is_estimate: false,
    direct_employment_source: "JobsOhio + Cleveland-Cliffs — 130 permanent jobs",
    permanent: 130, temporary: 1200,
    perm_temp_source: "JobsOhio — 130 permanent + >1,200 construction jobs",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Cleveland-Cliffs", project: "Coshocton Works Stainless Bright Anneal Line",
    category: "manufacturing", manufacture: "Premium stainless steel sheet (hydrogen-atmosphere bright anneal) for auto + appliance",
    lat: 40.2723, lng: -81.8588,
    in_service: "July 2 2025 (ribbon cutting)",
    in_service_source: "Cleveland-Cliffs press release",
    dollar_value_usd: 150_000_000,
    dollar_value_source: "Cleveland-Cliffs June 20 2025 — $150M investment",
    direct_employment: null, direct_employment_is_estimate: false,
    direct_employment_source: "Not published — Cliffs did not publish new direct headcount for the anneal line",
    permanent: null, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Whirlpool Corporation", project: "Clyde washing-machine plant expansion (next-gen washers)",
    category: "manufacturing", manufacture: "Residential washing machines",
    lat: 41.3047, lng: -82.9763,
    in_service: "early 2026 (new production shift launch)",
    in_service_source: "Whirlpool Oct 2025 announcement",
    dollar_value_usd: 200_000_000,
    dollar_value_source: "Whirlpool Oct 14 2025 — $300M across Clyde+Marion; ~two-thirds (~$200M) to Clyde per company breakdown",
    direct_employment: 400, direct_employment_is_estimate: true,
    direct_employment_source: "Whirlpool — 400–600 new jobs across Clyde+Marion, ~two-thirds at Clyde (lower-bound aggregate apportionment)",
    permanent: null, temporary: null,
    perm_temp_source: "Not published — assumed permanent manufacturing roles, no explicit split",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Whirlpool Corporation", project: "Marion dryer plant expansion",
    category: "manufacturing", manufacture: "Residential clothes dryers",
    lat: 40.5886, lng: -83.1286,
    in_service: "early 2026",
    in_service_source: "Whirlpool Oct 2025 announcement",
    dollar_value_usd: 100_000_000,
    dollar_value_source: "Whirlpool Oct 14 2025 — $300M across Clyde+Marion; ~one-third (~$100M) to Marion per company breakdown",
    direct_employment: 150, direct_employment_is_estimate: true,
    direct_employment_source: "Whirlpool — 400–600 new jobs total, one-third at Marion (est. ~133–200)",
    permanent: null, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Whirlpool Corporation", project: "Perrysburg component manufacturing plant (new)",
    category: "manufacturing", manufacture: "Components + subassemblies for laundry production",
    lat: 41.5570, lng: -83.6280,
    in_service: null,
    in_service_source: "Not published — specific in-service date not disclosed",
    dollar_value_usd: 60_000_000,
    dollar_value_source: "Whirlpool Oct 2025 — >$60M for new Perrysburg facility",
    direct_employment: 100, direct_employment_is_estimate: false,
    direct_employment_source: "Whirlpool — 100–150 jobs at Perrysburg",
    permanent: null, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "First Quality Tissue Midwest",
    project: "New ultra-premium towel + tissue facility, Baltimore Avenue Industrial Corridor, Defiance",
    category: "manufacturing", manufacture: "Towel + tissue paper products",
    lat: 41.2845, lng: -84.3558,
    in_service: null,
    in_service_source: "Not published — staged ramp through 2032",
    dollar_value_usd: 984_000_000,
    dollar_value_source: "Ohio Governor's Office Feb 24 2025 — $984M investment",
    direct_employment: 400, direct_employment_is_estimate: false,
    direct_employment_source: "Ohio Governor's Office — >400 new jobs by 2032",
    permanent: 400, temporary: null,
    perm_temp_source: "Direct jobs treated as permanent operations roles per state announcement; construction not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Sofidel America", project: "Circleville tissue paper plant expansion (500,000 sq ft addition)",
    category: "manufacturing", manufacture: "Tissue paper (consumer + away-from-home)",
    lat: 39.6003, lng: -82.9468,
    in_service: "2025",
    in_service_source: "JobsOhio + Sofidel June 2023 — construction expected complete 2025",
    dollar_value_usd: 185_000_000,
    dollar_value_source: "Sofidel + JobsOhio June 27 2023 — $185M expansion",
    direct_employment: 100, direct_employment_is_estimate: false,
    direct_employment_source: "JobsOhio — employment to grow by 100 (expansion-attributed)",
    permanent: 100, temporary: null,
    perm_temp_source: "Operations roles; construction not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Schaeffler Group USA", project: "New Dover EV-components production facility",
    category: "manufacturing", manufacture: "Electric vehicle components",
    lat: 40.5203, lng: -81.4734,
    in_service: "Q3 2025",
    in_service_source: "Tuscarawas County EDC + JobsOhio Feb 2024",
    dollar_value_usd: 230_000_000,
    dollar_value_source: "JobsOhio + Schaeffler Feb 26 2024 — $230M total fixed-asset (Dover new build + Wooster expansion; Wooster is separately listed)",
    direct_employment: 450, direct_employment_is_estimate: false,
    direct_employment_source: "JobsOhio + Schaeffler — 450 new jobs at Dover by 2032",
    permanent: 450, temporary: null,
    perm_temp_source: "Schaeffler + state announcement treated as permanent",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Sheetz, Inc.", project: "Findlay food preparation + distribution center",
    category: "other", sector: "Logistics / food distribution",
    lat: 41.0442, lng: -83.6499,
    in_service: "October 2026",
    in_service_source: "Findlay-Hancock EDC — construction began Oct 2024, go-live Oct 2026",
    dollar_value_usd: 150_000_000,
    dollar_value_source: "Sheetz + Findlay-Hancock EDC — $150M facility",
    direct_employment: 750, direct_employment_is_estimate: false,
    direct_employment_source: "Sheetz + Findlay-Hancock EDC — 750 jobs over 5 years",
    permanent: 750, temporary: null,
    perm_temp_source: "Operational distribution + food-prep jobs; construction not separately published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Bellisio Foods", project: "Jackson County frozen-entrée plant expansion",
    category: "manufacturing", manufacture: "Single-serve frozen entrées",
    lat: 39.0556, lng: -82.6371,
    in_service: null,
    in_service_source: "Not published",
    dollar_value_usd: 40_000_000,
    dollar_value_source: "JobsOhio Dec 2022 — $40M investment (note: below $50M threshold but employment qualifies)",
    direct_employment: 177, direct_employment_is_estimate: false,
    direct_employment_source: "JobsOhio Dec 2022 — 177 new jobs",
    permanent: 177, temporary: null,
    perm_temp_source: "Operations roles per JobsOhio",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Newman Technology Inc.", project: "Mansfield automotive components expansion",
    category: "manufacturing", manufacture: "Automotive products (exhaust + structural components)",
    lat: 40.7584, lng: -82.5154,
    in_service: null,
    in_service_source: "Not published — hiring over 2–3 years from summer 2024",
    dollar_value_usd: 74_000_000,
    dollar_value_source: "Newman Technology 2024 — $74M expansion",
    direct_employment: 70, direct_employment_is_estimate: false,
    direct_employment_source: "Newman Technology — 70 new employees (below 100 employment threshold; capex qualifies)",
    permanent: 70, temporary: null,
    perm_temp_source: "Permanent manufacturing roles",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Owens Corning", project: "Toledo downtown headquarters reinvestment",
    category: "other", sector: "Corporate HQ / building materials R&D",
    lat: 41.6528, lng: -83.5379,
    in_service: null,
    in_service_source: "Not published",
    dollar_value_usd: 250_000_000,
    dollar_value_source: "Owens Corning + City of Toledo April 2026 — $250M building + technology improvements",
    direct_employment: 25, direct_employment_is_estimate: false,
    direct_employment_source: "City of Toledo + Owens Corning — 25 new jobs + 1,036 retained (below 100-job threshold; capex qualifies)",
    permanent: 25, temporary: null,
    perm_temp_source: "Corporate HQ roles",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Cenovus Energy",
    project: "Toledo Refinery multi-year investment program (maintenance, reliability, market-access)",
    category: "other", sector: "Petroleum refining",
    lat: 41.6486, lng: -83.4621,
    in_service: null,
    in_service_source: "Not published — 5-year program through ~2029",
    dollar_value_usd: 1_500_000_000,
    dollar_value_source: "Cenovus April 2024 — >$1.5B across Toledo + Lima refineries over 5 years (combined; Toledo-only split not separately published)",
    direct_employment: null, direct_employment_is_estimate: false,
    direct_employment_source: "Not published — Toledo refinery direct-job creation not published (Cenovus announced 115 jobs at Dublin HQ separately)",
    permanent: null, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  // =====================================================================
  // Utility-scale renewables — OPSB-certified / under construction /
  // operational since 2020. All capex + headcount figures use explicitly
  // cited industry-standard $/MW + jobs-per-MW multipliers (allowed under
  // the no-fabrication rule for renewables).
  // =====================================================================

  { company: "EDF Renewables / Enbridge", project: "Fox Squirrel Solar",
    category: "other", sector: "Renewable energy / utility-scale solar",
    lat: 39.7184, lng: -83.2649,
    in_service: "2024",
    in_service_source: "OPSB case 20-0931-EL-BGN + Enbridge/EDF release May 2024 + pv magazine USA Jan 6 2025",
    dollar_value_usd: 692_400_000,
    dollar_value_source: "Capex est. = 577 MW × $1.2M/MW = $692.4M (industry-std 2023-25 utility solar $1.0–1.4M/MW AC)",
    direct_employment: 58, direct_employment_is_estimate: true,
    direct_employment_source: "Perm ops est. = 577 MW × 0.10 = 58 (industry-std utility solar 0.05–0.15 perm jobs/MW)",
    permanent: 58, temporary: 500,
    perm_temp_source: "Perm 58 + construction peak ~500 over 18 mo (industry-std ~1 worker/MW peak, 12–24 mo for 500+ MW)",
    indirect_employment: null,
    indirect_employment_types: ["tracker / module suppliers","EPC contractors","transmission interconnect"],
    indirect_employment_source: "Standard utility-solar supplier mix" },

  { company: "Savion (Shell) / InfraRed Capital Partners", project: "Madison Fields Solar Project",
    category: "other", sector: "Renewable energy / utility-scale solar",
    lat: 39.9573, lng: -83.3996,
    in_service: "2024",
    in_service_source: "OPSB approval Jan 2021 + Savion release Jul 11 2024",
    dollar_value_usd: 216_000_000,
    dollar_value_source: "Capex est. = 180 MW × $1.2M/MW = $216M (industry-std utility solar $1.0–1.4M/MW)",
    direct_employment: 18, direct_employment_is_estimate: true,
    direct_employment_source: "Perm ops est. = 180 MW × 0.10 = 18 (utility solar 0.05–0.15 perm/MW)",
    permanent: 18, temporary: 350,
    perm_temp_source: "Perm 18 + construction peak ~350 over 12 mo (industry-std 200–500 workers per 200 MW, 12–18 mo)",
    indirect_employment: null,
    indirect_employment_types: ["tracker / module suppliers","EPC contractors","transmission interconnect"],
    indirect_employment_source: "Standard utility-solar supplier mix" },

  { company: "National Grid Renewables", project: "Yellowbud Solar",
    category: "other", sector: "Renewable energy / utility-scale solar",
    lat: 39.5867, lng: -83.1252,
    in_service: "2023",
    in_service_source: "National Grid Renewables release Oct 3 2023 + EIA Form 860",
    dollar_value_usd: 328_800_000,
    dollar_value_source: "Capex est. = 274 MW × $1.2M/MW = $328.8M",
    direct_employment: 27, direct_employment_is_estimate: true,
    direct_employment_source: "Perm ops est. = 274 MW × 0.10 = 27",
    permanent: 27, temporary: 400,
    perm_temp_source: "Perm 27 + construction peak ~400 over 15 mo",
    indirect_employment: null,
    indirect_employment_types: ["tracker / module suppliers","EPC contractors","transmission interconnect"],
    indirect_employment_source: "Standard utility-solar supplier mix" },

  { company: "Innergex / Open Road Renewables", project: "Hillcrest Solar (Amazon Solar Farm Ohio — Hillcrest)",
    category: "other", sector: "Renewable energy / utility-scale solar",
    lat: 39.0298, lng: -83.9202,
    in_service: "2021",
    in_service_source: "Innergex release May 11 2021 + EIA Form 860",
    dollar_value_usd: 240_000_000,
    dollar_value_source: "Capex est. = 200 MW × $1.2M/MW = $240M",
    direct_employment: 20, direct_employment_is_estimate: true,
    direct_employment_source: "Perm ops est. = 200 MW × 0.10 = 20",
    permanent: 20, temporary: 350,
    perm_temp_source: "Perm 20 + construction peak ~350 over 14 mo",
    indirect_employment: null,
    indirect_employment_types: ["tracker / module suppliers","EPC contractors","transmission interconnect"],
    indirect_employment_source: "Standard utility-solar supplier mix" },

  { company: "Invenergy", project: "Hardin Solar Energy Center I & II",
    category: "other", sector: "Renewable energy / utility-scale solar",
    lat: 40.7095, lng: -83.8410,
    in_service: "2025",
    in_service_source: "Invenergy release Jan 2025 (Hardin II 150 MW commercial) + EIA Form 860",
    dollar_value_usd: 180_000_000,
    dollar_value_source: "Capex est. = 150 MW × $1.2M/MW = $180M",
    direct_employment: 15, direct_employment_is_estimate: true,
    direct_employment_source: "Perm ops est. = 150 MW × 0.10 = 15",
    permanent: 15, temporary: 300,
    perm_temp_source: "Perm 15 + construction peak ~300 over 14 mo",
    indirect_employment: null,
    indirect_employment_types: ["tracker / module suppliers","EPC contractors","transmission interconnect"],
    indirect_employment_source: "Standard utility-solar supplier mix" },

  { company: "Invenergy", project: "Hardin Solar III Energy Center",
    category: "other", sector: "Renewable energy / utility-scale solar",
    lat: 40.7095, lng: -83.8410,
    in_service: "2026",
    in_service_source: "OPSB case 20-1678-EL-BGN + Invenergy / PV Tech commissioning announcement",
    dollar_value_usd: 300_000_000,
    dollar_value_source: "Capex est. = 250 MW × $1.2M/MW = $300M",
    direct_employment: 25, direct_employment_is_estimate: true,
    direct_employment_source: "Perm ops est. = 250 MW × 0.10 = 25",
    permanent: 25, temporary: 450,
    perm_temp_source: "Perm 25 + construction peak ~450 over 16 mo",
    indirect_employment: null,
    indirect_employment_types: ["tracker / module suppliers","EPC contractors","transmission interconnect"],
    indirect_employment_source: "Standard utility-solar supplier mix" },

  { company: "RWE", project: "Willowbrook Solar",
    category: "other", sector: "Renewable energy / utility-scale solar",
    lat: 39.0265, lng: -83.7546,
    in_service: "2024",
    in_service_source: "OPSB certificate (Willowbrook Solar I) + Highland County Press / OPSB updates (commercial Sept 27 2024)",
    dollar_value_usd: 180_000_000,
    dollar_value_source: "Capex est. = 150 MW × $1.2M/MW = $180M",
    direct_employment: 15, direct_employment_is_estimate: true,
    direct_employment_source: "Perm ops est. = 150 MW × 0.10 = 15",
    permanent: 15, temporary: 300,
    perm_temp_source: "Perm 15 + construction peak ~300 over 14 mo",
    indirect_employment: null,
    indirect_employment_types: ["tracker / module suppliers","EPC contractors","transmission interconnect"],
    indirect_employment_source: "Standard utility-solar supplier mix" },

  { company: "Savion (Shell) / Dominion Energy", project: "Atlanta Farms Solar Project",
    category: "other", sector: "Renewable energy / utility-scale solar",
    lat: 39.5867, lng: -83.1252,
    in_service: "under construction (announced 2022)",
    in_service_source: "Savion / Dominion releases + AEP Energy PPA + OPSB certification",
    dollar_value_usd: 240_000_000,
    dollar_value_source: "Capex est. = 200 MW × $1.2M/MW = $240M",
    direct_employment: 20, direct_employment_is_estimate: true,
    direct_employment_source: "Perm ops est. = 200 MW × 0.10 = 20",
    permanent: 20, temporary: 350,
    perm_temp_source: "Perm 20 + construction peak ~350 over 14 mo",
    indirect_employment: null,
    indirect_employment_types: ["tracker / module suppliers","EPC contractors","transmission interconnect"],
    indirect_employment_source: "Standard utility-solar supplier mix" },

  { company: "Savion (Shell)", project: "Oak Run Solar Project (800 MW solar + 300 MW BESS)",
    category: "other", sector: "Renewable energy / utility-scale solar",
    lat: 40.0792, lng: -83.4441,
    in_service: "OPSB certified (target 2027)",
    in_service_source: "OPSB certificate Mar 21 2024 + Ohio Supreme Court May 2026 remand on visual sims",
    dollar_value_usd: 960_000_000,
    dollar_value_source: "Capex est. = 800 MW × $1.2M/MW = $960M (solar portion only; storage priced separately)",
    direct_employment: 80, direct_employment_is_estimate: true,
    direct_employment_source: "Perm ops est. = 800 MW × 0.10 = 80",
    permanent: 80, temporary: 800,
    perm_temp_source: "Perm 80 + construction peak ~800 over 48 mo (developer 4–8-year construction phase)",
    indirect_employment: null,
    indirect_employment_types: ["tracker / module suppliers","EPC contractors","battery storage integrators","transmission interconnect"],
    indirect_employment_source: "Standard utility-solar + BESS supplier mix" },

  { company: "EDF Renewables", project: "Eastern Cottontail Solar Project",
    category: "other", sector: "Renewable energy / utility-scale solar",
    lat: 39.8345, lng: -82.6171,
    in_service: "OPSB certified (target 2026)",
    in_service_source: "OPSB certificate Aug 21 2025 + EDF Renewables release",
    dollar_value_usd: 264_000_000,
    dollar_value_source: "Capex est. = 220 MW × $1.2M/MW = $264M",
    direct_employment: 22, direct_employment_is_estimate: true,
    direct_employment_source: "Perm ops est. = 220 MW × 0.10 = 22",
    permanent: 22, temporary: 500,
    perm_temp_source: "Perm 22 + construction peak ~500 over 15 mo (developer-stated)",
    indirect_employment: null,
    indirect_employment_types: ["tracker / module suppliers","EPC contractors","transmission interconnect"],
    indirect_employment_source: "Standard utility-solar supplier mix" },

  { company: "Energix Renewables", project: "Nottingham Solar (reclaimed mine land)",
    category: "other", sector: "Renewable energy / utility-scale solar",
    lat: 40.2750, lng: -80.9970,
    in_service: "under construction (announced 2022)",
    in_service_source: "OPSB approval Aug 2022 — first utility-scale solar on reclaimed mine land since 2018; Energix construction commencement 2026",
    dollar_value_usd: 120_000_000,
    dollar_value_source: "Capex est. = 100 MW × $1.2M/MW = $120M",
    direct_employment: 10, direct_employment_is_estimate: true,
    direct_employment_source: "Perm ops est. = 100 MW × 0.10 = 10",
    permanent: 10, temporary: 250,
    perm_temp_source: "Perm 10 + construction peak ~250 over 12 mo",
    indirect_employment: null,
    indirect_employment_types: ["tracker / module suppliers","EPC contractors","transmission interconnect"],
    indirect_employment_source: "Standard utility-solar supplier mix" },

  { company: "Apex Clean Energy", project: "Emerson Creek Wind Farm",
    category: "other", sector: "Renewable energy / utility-scale wind",
    lat: 41.2492, lng: -82.4002,
    in_service: "under construction (announced 2021; commercial Q2 2027)",
    in_service_source: "OPSB approval Jun 24 2021 + Ohio Supreme Court affirmation + Apex pre-construction notice Nov 12 2025",
    dollar_value_usd: 416_800_000,
    dollar_value_source: "Capex est. = 297.7 MW × $1.4M/MW = $416.8M (industry-std onshore wind $1.3–1.6M/MW)",
    direct_employment: 45, direct_employment_is_estimate: true,
    direct_employment_source: "Perm ops est. = 297.7 MW × 0.15 = 45 (industry-std onshore wind 0.10–0.25 perm/MW)",
    permanent: 45, temporary: 400,
    perm_temp_source: "Perm 45 + construction peak ~400 over 18 mo (industry-std ~1–1.5 workers/MW peak, 12–24 mo)",
    indirect_employment: null,
    indirect_employment_types: ["turbine OEM suppliers","EPC contractors","blade/tower transport logistics","transmission interconnect"],
    indirect_employment_source: "Standard onshore-wind supplier mix" },

  { company: "Eolian", project: "Flint Grid Battery Energy Storage System (200 MW / 800 MWh BESS)",
    category: "other", sector: "Renewable energy / battery storage",
    lat: 40.0806, lng: -82.7777,
    in_service: "under construction (announced 2022; Ohio's first stand-alone BESS)",
    in_service_source: "OPSB certificate Oct 20 2022 + Eyes and Ears construction notice",
    dollar_value_usd: 1_200_000_000,
    dollar_value_source: "Capex est. = 800 MWh × $1.5M/MWh = $1.2B (industry-std BESS $1.2–1.8M/MWh)",
    direct_employment: 10, direct_employment_is_estimate: true,
    direct_employment_source: "Perm ops est. = 200 MW × 0.05 = 10 (BESS 0.02–0.08 perm/MW; developer-stated 3.5 long-term, using mid-range)",
    permanent: 10, temporary: 450,
    perm_temp_source: "Perm 10 + construction peak ~450 over 12 mo (developer-stated)",
    indirect_employment: null,
    indirect_employment_types: ["battery container suppliers","inverter / PCS suppliers","EPC contractors","transmission interconnect"],
    indirect_employment_source: "Standard BESS supplier mix" },

  { company: "Open Road Renewables", project: "Scioto Ridge Solar Project (110 MWac solar + 20 MW storage)",
    category: "other", sector: "Renewable energy / utility-scale solar",
    lat: 40.6470, lng: -83.6088,
    in_service: "OPSB certified (target 2026)",
    in_service_source: "OPSB approval Aug 2024 per pv magazine USA",
    dollar_value_usd: 132_000_000,
    dollar_value_source: "Capex est. = 110 MW × $1.2M/MW = $132M (solar portion only)",
    direct_employment: 11, direct_employment_is_estimate: true,
    direct_employment_source: "Perm ops est. = 110 MW × 0.10 = 11",
    permanent: 11, temporary: 275,
    perm_temp_source: "Perm 11 + construction peak ~275 over 12 mo",
    indirect_employment: null,
    indirect_employment_types: ["tracker / module suppliers","EPC contractors","battery storage integrators","transmission interconnect"],
    indirect_employment_source: "Standard utility-solar + BESS supplier mix" },

  // =====================================================================
  // Pass 5 gap-fill — 2026-05-30
  // =====================================================================

  { company: "Cincinnati Children's Hospital Medical Center",
    project: "Critical Care Building",
    category: "other", sector: "Healthcare / pediatric hospital",
    lat: 39.1397, lng: -84.5023,
    in_service: "November 2021 (opened)",
    in_service_source: "Cincinnati Children's press release + Cincinnati Business Courier",
    dollar_value_usd: 600_000_000,
    dollar_value_source: "Cincinnati Children's + Cincinnati Business Courier — $600M Critical Care Building",
    direct_employment: null, direct_employment_is_estimate: false,
    direct_employment_source: "Not published — net-new headcount for this building not separately disclosed",
    permanent: null, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Pratt Industries", project: "Wapakoneta paper mill",
    category: "manufacturing", manufacture: "100% recycled containerboard (Pratt Paper #6 paper mill)",
    lat: 40.5673, lng: -84.1936,
    in_service: "2019 (operational)",
    in_service_source: "Pratt Industries — mill opened 2019",
    dollar_value_usd: 260_000_000,
    dollar_value_source: "Pratt Industries 2017 announcement — ~$260M Wapakoneta mill (pre-2020 cutoff noted)",
    direct_employment: 137, direct_employment_is_estimate: false,
    direct_employment_source: "Pratt 2017 announcement — 137 jobs at Wapakoneta mill",
    permanent: 137, temporary: null,
    perm_temp_source: "Pratt — construction headcount not separately published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  // =====================================================================
  // Pass 6 web-verified gap-fill — 2026-05-30
  // =====================================================================

  { company: "Yaskawa Motoman (Yaskawa America)",
    project: "Miamisburg robot manufacturing HQ expansion",
    category: "manufacturing", manufacture: "Industrial robots and robotic systems",
    lat: 39.6428, lng: -84.2866,
    in_service: "August 2024 (opened)",
    in_service_source: "Motoman.com Aug 2024 — opening event 'in early August 2024'",
    dollar_value_usd: 200_000_000,
    dollar_value_source: "Motoman release — Miamisburg is Phase 1 of Yaskawa's $200M US program",
    direct_employment: 70, direct_employment_is_estimate: false,
    direct_employment_source: "2023 announcement — 70 new jobs",
    permanent: 70, temporary: null,
    perm_temp_source: "70 permanent FTE; construction headcount not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Ursa Major Technologies",
    project: "Lake to River Advanced Manufacturing R&D Center, Boardman",
    category: "manufacturing", manufacture: "Additive-manufactured solid + liquid rocket propulsion components",
    lat: 41.0265, lng: -80.6573,
    in_service: null,
    in_service_source: "Not published — Vindicator/PRNewswire announcement (Jul 25 2024) gives no completion date",
    dollar_value_usd: 14_500_000,
    dollar_value_source: "PRNewswire + JobsOhio — '$14.5M includes $4M JobsOhio R&D grant'",
    direct_employment: 15, direct_employment_is_estimate: false,
    direct_employment_source: "Vindicator — 'expand workforce from 3 to 18' (net +15)",
    permanent: 15, temporary: null,
    perm_temp_source: "Permanent R&D headcount only",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Marathon Petroleum Corporation",
    project: "Findlay HQ campus expansion (multi-year office/parking/meeting space)",
    category: "other", sector: "Corporate headquarters / energy",
    lat: 41.0442, lng: -83.6499,
    in_service: null,
    in_service_source: "Not published — Site Selection Magazine describes 'multi-year project' without completion date",
    dollar_value_usd: 80_000_000,
    dollar_value_source: "Site Selection Magazine ('Not a Sprint') — '~$80M capital project for office, parking and meeting space'",
    direct_employment: null, direct_employment_is_estimate: false,
    direct_employment_source: "Not published — expansion adds capacity for existing ~2,500 HQ staff; no incremental job number disclosed",
    permanent: null, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "BWX Technologies (BWXT Nuclear Operations Group)",
    project: "Barberton + Euclid naval-nuclear component capacity expansion",
    category: "manufacturing", manufacture: "Heavy + electro-mechanical components for naval nuclear reactors",
    lat: 41.5934, lng: -81.5268,
    in_service: "2022 (job targets)",
    in_service_source: "NEO Region + Crain's Cleveland — '$130M over 4 years... more than 110 new jobs by 2022'",
    dollar_value_usd: 130_000_000,
    dollar_value_source: "Crain's Cleveland + NEO Region — '$130M over 4 years across Barberton + Euclid' ($80M Barberton + $50M Euclid)",
    direct_employment: 110, direct_employment_is_estimate: false,
    direct_employment_source: "NEO Region — '110 new jobs' (80 Barberton + 30 Euclid)",
    permanent: 110, temporary: null,
    perm_temp_source: "Manufacturing permanent FTE",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "First Solar", project: "Jim Nolan Center for Solar Innovation (R&D), Perrysburg / Lake Twp",
    category: "manufacturing", manufacture: "Thin-film + tandem PV module prototypes (pilot R&D)",
    lat: 41.5667, lng: -83.5491,
    in_service: "July 2024 (opened)",
    in_service_source: "Power Technology — 'First Solar opens new R&D innovation centre in Ohio' (July 2024)",
    dollar_value_usd: 370_000_000,
    dollar_value_source: "First Solar 2022 announcement (Power Technology + 13abc) — $370M R&D innovation center; component of broader NW Ohio expansion",
    direct_employment: null, direct_employment_is_estimate: false,
    direct_employment_source: "Not published — R&D-center-specific headcount not disclosed separately from broader 500-job NW Ohio expansion",
    permanent: null, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Bridgestone Americas",
    project: "Akron pilot butadiene-from-ethanol plant",
    category: "manufacturing", manufacture: "Pilot-scale butadiene from ethanol (synthetic rubber feedstock)",
    lat: 41.0814, lng: -81.519,
    in_service: null,
    in_service_source: "Not published — Signal Akron + Crain's Nov 2024 coverage notes groundbreaking only",
    dollar_value_usd: null,
    dollar_value_source: "Not published — only the $9M federal funding portion has been disclosed; total project capex not reported",
    direct_employment: null, direct_employment_is_estimate: false,
    direct_employment_source: "Not published",
    permanent: null, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Open Road Renewables", project: "Frasier Solar (120 MW agrivoltaic), Knox County",
    category: "other", sector: "Renewable energy / utility-scale solar",
    lat: 40.3934, lng: -82.4857,
    in_service: null,
    in_service_source: "Not published — OPSB approved Jun 26 2025; Open Road has not said when construction will start",
    dollar_value_usd: 144_000_000,
    dollar_value_source: "Capex est. = 120 MW × $1.2M/MW = $144M (NREL 2024 utility solar capex); OPSB filings give no explicit total capex",
    direct_employment: 4, direct_employment_is_estimate: true,
    direct_employment_source: "Solar Power World — 'additional 3-5 long-term employees during operation'",
    permanent: 4, temporary: 200,
    perm_temp_source: "Solar Power World — '200+ construction workers + 3-5 long-term'",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Jupiter Power", project: "Prairie Flyer Energy Storage (85 MW BESS), Vandalia",
    category: "other", sector: "Renewable energy / battery storage",
    lat: 39.8906, lng: -84.1988,
    in_service: "2025 (expected)",
    in_service_source: "Dayton Daily News + Tipp Gazette — 'Construction expected to begin 2024; in service 2025'",
    dollar_value_usd: null,
    dollar_value_source: "Not published — OPSB filings give no total capex; duration disclosure missing for MWh-based multiplier",
    direct_employment: null, direct_employment_is_estimate: false,
    direct_employment_source: "Not published",
    permanent: null, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Will-Power OH / Williams Companies",
    project: "Socrates South 200 MW behind-the-meter gas plant (serves Meta Sidecat DC)",
    category: "other", sector: "Energy infrastructure / behind-the-meter natural gas generation",
    lat: 40.0808, lng: -82.8088,
    in_service: null,
    in_service_source: "Not published — Scioto Post + Mt Vernon News report OPSB approval Jun 9 2025; no commercial-ops date",
    dollar_value_usd: null,
    dollar_value_source: "Not published — OPSB application does not state project capex",
    direct_employment: null, direct_employment_is_estimate: false,
    direct_employment_source: "Not published",
    permanent: null, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "EdgeConneX",
    project: "PowerConneX I + II — 216 MW behind-the-meter gas plant serving New Albany DC",
    category: "other", sector: "Energy infrastructure / behind-the-meter natural gas generation",
    lat: 40.0808, lng: -82.8088,
    in_service: "late 2026 (PowerConneX I commercial ops anticipated)",
    in_service_source: "DCD + EdgeConneX — 'Construction for PowerConneX began Sept 2025; anticipates commercial operations late 2026'",
    dollar_value_usd: null,
    dollar_value_source: "Not published",
    direct_employment: null, direct_employment_is_estimate: false,
    direct_employment_source: "Not published",
    permanent: null, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  // =====================================================================
  // Pass 7 web-verified — final push to 100+ — 2026-05-30
  // =====================================================================

  { company: "Nationwide Children's Hospital",
    project: "14-story Acute Care Tower + Phase III Expansion",
    category: "other", sector: "Healthcare / pediatric hospital",
    lat: 39.9981, lng: -82.9890,
    in_service: "2028 (Acute Care Tower)",
    in_service_source: "WOSU Jul 29 2025 — 'new 14-story acute care tower to be finished by 2028'",
    dollar_value_usd: 1_270_000_000,
    dollar_value_source: "WOSU Jul 29 2025 — '$1.27-billion expansion'",
    direct_employment: null, direct_employment_is_estimate: false,
    direct_employment_source: "Not published",
    permanent: null, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Cleveland Clinic",
    project: "Neurological Institute (15-floor, 1.06M sq ft)",
    category: "other", sector: "Healthcare / neurology",
    lat: 41.5025, lng: -81.6206,
    in_service: "early 2027 (planned opening)",
    in_service_source: "Turner Construction + News5 Cleveland — '1,064,000 sq ft on 15 floors set to open early 2027'",
    dollar_value_usd: 1_100_000_000,
    dollar_value_source: "News5 Cleveland + Turner Construction — '$1.1 billion Cleveland Clinic Neurological Institute'",
    direct_employment: null, direct_employment_is_estimate: false,
    direct_employment_source: "Not published",
    permanent: null, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "OhioHealth",
    project: "Riverside Methodist Women's Health Center",
    category: "other", sector: "Healthcare / women's & maternal health",
    lat: 40.0285, lng: -83.0259,
    in_service: "2027 (planned opening)",
    in_service_source: "OhioHealth newsroom — 'Set to open in 2027'",
    dollar_value_usd: 600_000_000,
    dollar_value_source: "Columbus Underground — '$600 Million Expansion Planned for Riverside Hospital'",
    direct_employment: null, direct_employment_is_estimate: false,
    direct_employment_source: "Not published — net-new headcount not separately disclosed",
    permanent: null, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "AEP Ohio + SB Energy",
    project: "Piketon 765-kV transmission infrastructure (Appalachian Ohio)",
    category: "other", sector: "Energy infrastructure / electric transmission",
    lat: 39.0689, lng: -82.9959,
    in_service: null,
    in_service_source: "Not published — AEP announcement does not list a fixed commissioning date",
    dollar_value_usd: 4_200_000_000,
    dollar_value_source: "AEP press release — 'AEP Ohio Partners to Bring $4.2B in New Electric Infrastructure in Appalachian Ohio Without Raising Customer Rates'",
    direct_employment: null, direct_employment_is_estimate: false,
    direct_employment_source: "Not published",
    permanent: null, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "FirstEnergy (Ohio Edison + Illuminating Co. + Toledo Edison)",
    project: "Ohio Grid Modernization II Plan (smart meters, distribution)",
    category: "other", sector: "Energy infrastructure / electric distribution",
    lat: 41.0814, lng: -81.519,
    in_service: "4-year program (settled 2024)",
    in_service_source: "T&D World + FirstEnergy — 'four-year, $421M Grid Modernization II Plan'",
    dollar_value_usd: 421_000_000,
    dollar_value_source: "FirstEnergy + T&D World — 'four-year, $421 million Grid Modernization II Plan'",
    direct_employment: null, direct_employment_is_estimate: false,
    direct_employment_source: "Not published",
    permanent: null, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null,
    indirect_employment_types: ["smart-meter vendors","distribution-line contractors","grid software"],
    indirect_employment_source: "Inferred from program scope: smart meters + grid mod work" },

  { company: "OhioHealth",
    project: "Pickerington Methodist Hospital ED + inpatient expansion",
    category: "other", sector: "Healthcare",
    lat: 39.8881, lng: -82.7546,
    in_service: "late 2028 (planned opening)",
    in_service_source: "OhioHealth — 'opening late 2028'",
    dollar_value_usd: 65_000_000,
    dollar_value_source: "Becker's Hospital Review — '$65M ED expansion'; OhioHealth confirms '57,000 sq ft, 2-story, 28 treatment rooms + 16 inpatient beds'",
    direct_employment: null, direct_employment_is_estimate: false,
    direct_employment_source: "Not published",
    permanent: null, temporary: null,
    perm_temp_source: "Not published",
    indirect_employment: null, indirect_employment_types: [],
    indirect_employment_source: "Not published" },

  { company: "Doral Renewables", project: "Great Bend Solar (48 MW, Meigs County)",
    category: "other", sector: "Renewable energy / utility-scale solar",
    lat: 39.0833, lng: -81.8579,
    in_service: "2026 (commercial operation achieved)",
    in_service_source: "PR Newswire — 'Doral Renewables Achieves Commercial Operation at Great Bend Solar in Ohio'",
    dollar_value_usd: 57_600_000,
    dollar_value_source: "Capex est. = 48 MW × $1.2M/MW = $57.6M (industry-std utility solar). $30M tax-equity commitment from Fifth Third Bank disclosed separately.",
    direct_employment: 5, direct_employment_is_estimate: true,
    direct_employment_source: "Perm ops est. = 48 MW × 0.10 = ~5",
    permanent: 5, temporary: 100,
    perm_temp_source: "Perm 5 + construction peak ~100 over 10 mo (industry-std)",
    indirect_employment: null,
    indirect_employment_types: ["tracker / module suppliers","EPC contractors","transmission interconnect"],
    indirect_employment_source: "Standard utility-solar supplier mix" },

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

  // --- Pass 6 web-verified additions ---

  { project: "Vantage Data Centers OH1 New Albany campus",
    operator: "Vantage Data Centers",
    lat: 40.0809, lng: -82.8088,
    in_service: "December 2025 (first building)",
    in_service_source: "Vantage press release — 'first facility slated to be operational by December 2025'; groundbreaking Oct 25 2024",
    power_mw: 192,
    power_mw_source: "Vantage press release — '192MW IT capacity across three pre-leased hyperscale data centers, 1.5M sf, $2B investment'" },

  { project: "Meta Bowling Green / Middleton Township data center",
    operator: "Meta Platforms",
    lat: 41.4501, lng: -83.6363,
    in_service: "2027 (planned)",
    in_service_source: "JobsOhio April 2025 release + Meta Data Centers blog — completion expected 2027",
    power_mw: 200,
    power_mw_source: "Inferred from Socrates South 200 MW dedicated behind-the-meter gas plant (Williams) serving Meta Sidecat affiliate; Meta-specific MW not directly disclosed but OPSB Socrates South filing identifies Sidecat (Meta) as exclusive offtaker" },

  { project: "AWS Project Cosmos Marysville campus",
    operator: "Amazon Web Services",
    lat: 40.2364, lng: -83.3672,
    in_service: "2027 (first building)",
    in_service_source: "Marysville Matters + DCD — 'first building expected operational by 2027'",
    power_mw: null,
    power_mw_source: "Not published — AWS has not disclosed campus IT load; two buildings, 500,000 sf on 55 acres per Marysville reinvestment agreement" },

  { project: "AWS US-East-2 New Albany AI campus 5-DC expansion ($3.5B)",
    operator: "Amazon Web Services",
    lat: 40.0859, lng: -82.8072,
    in_service: "2025+ (phased construction)",
    in_service_source: "Data Center Frontier — 'Construction of five data centers + supporting buildings totaling 250,000 SF slated to begin 2025'",
    power_mw: 500,
    power_mw_source: "AI Data Center Index — 'AWS Ohio Region AI Campus (us-east-2) has 500 MW of known IT capacity' (existing operational; expansion adds further MW not separately disclosed)" },

  { project: "Microsoft Hebron datacenter (Licking County)",
    operator: "Microsoft Azure",
    lat: 40.0292, lng: -82.4824,
    in_service: "November 2026 (expected)",
    in_service_source: "10TV / NBC4 — 'Hebron data center expected to be completed by November 2026'",
    power_mw: null,
    power_mw_source: "Not published — part of $1B Licking County data-center program" },

  // --- Pass 7 web-verified additions ---

  { project: "Cologix Johnstown AI-Ready Hyperscale Campus ($7B, 800 MW)",
    operator: "Cologix",
    lat: 40.1517, lng: -82.6890,
    in_service: "Phase 1 begins 2025 (multi-phase build through ~2030)",
    in_service_source: "Cologix Nov 2024 release — 'Development of the first phase is anticipated to begin in 2025'",
    power_mw: 800,
    power_mw_source: "Cologix Nov 2024 release — '800MW of scalable capacity across 2.0M sq ft' on '154 acres' — '8 AI-ready data centers when fully built out'" },

  { project: "CyrusOne New Albany COL-1 datacenter ($150M)",
    operator: "CyrusOne",
    lat: 40.0750, lng: -82.7878,
    in_service: "under construction (groundbreaking 2024)",
    in_service_source: "NBC4 — '$150M New Albany data center groundbreaking'",
    power_mw: null,
    power_mw_source: "Not published — 93.8-acre property, 2 stories, 274,518 sq ft per Ohio TCA filing" },

  { project: "Compass Datacenters — New Albany campus ($60M)",
    operator: "Compass Datacenters",
    lat: 40.0805, lng: -82.8079,
    in_service: null,
    in_service_source: "Not published — Compass announcement gives no commissioning date",
    power_mw: null,
    power_mw_source: "Not published — 5 Tier-III LEED Gold facilities planned on 9.2 acres" },

  { project: "Crusoe Energy Springfield AI datacenter",
    operator: "Crusoe Energy Systems",
    lat: 39.9242, lng: -83.8088,
    in_service: null,
    in_service_source: "Not published — Ohio TCA approved 50% 10-year data-center sales tax exemption",
    power_mw: null,
    power_mw_source: "Not published — Springfield News-Sun coverage notes '20 full-time jobs + $1.5M annual payroll' but no MW figure" },

  { project: "STACK Infrastructure NAL01 — High-Density Expansion (51 MW)",
    operator: "STACK Infrastructure",
    lat: 40.0805, lng: -82.8079,
    in_service: "Q1 2028 (targeted)",
    in_service_source: "TipRanks + STACK — new capacity 'targeted for Q1 2028'",
    power_mw: 51,
    power_mw_source: "STACK + TipRanks — '51MW high-density data center capacity in New Albany'; campus is '58MW data center campus + 17 acres for future development'" },

];
