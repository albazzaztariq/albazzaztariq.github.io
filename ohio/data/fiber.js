// Ohio long-haul fiber / data-transmission lines (interstate with one
// endpoint in Ohio, or intrastate with both endpoints in Ohio).
//
// Schema per entry:
//   name, operator,
//   type: 'interstate-endpoint' | 'intrastate',
//   endpoints_ohio: [<city names>],
//   endpoint_other_state: <city, state> or null,
//   path: [[lat,lng], ...] approximate polyline,
//   in_service: string, in_service_source: string,
//   capacity_str: string, capacity_source: string,
//   thickness_proxy_value: number (used to scale line weight),
//   thickness_proxy_units: 'strands' | 'Tbps' | '$M' (explains the proxy),
//   economic_impact_usd: number or null,
//   economic_impact_source: string,
//   _general_source: string (URL + quoted phrase)
//
// Pending research-agent results; ships empty so the overlay toggle still
// works without crashing. Will be populated in a follow-up commit.

window.FIBER_LINES = [];
