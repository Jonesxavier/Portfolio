/* =====================================================================
   Jones Xavier — SRE Portfolio (standalone, no build step)
   Global THREE + Vue (vendored). Edit the RESUME object to update both
   the map and the résumé/blog pages.
   ===================================================================== */

/* ----------------------------- DATA ----------------------------- */
const RESUME = {
  contact: {
    name: 'Jones Xavier',
    title: 'Senior Site Reliability Engineer',
    email: 'jones.xavier0987@gmail.com',
    phone: '+91 7530068302',
    location: 'Tamil Nadu, India',
    github: 'https://github.com/Jonesxavier',
    linkedin: 'https://www.linkedin.com/in/jonesxavier0987'
  },
  summary:
    'Senior Site Reliability Engineer and pod lead at Aptean with a DevOps / CloudOps ' +
    'background across Azure, AIX, Linux and Windows. I build the automation, IaC and ' +
    'observability — and increasingly the AI agents — that keep mission-critical products ' +
    'reliable, and I lead the people who run them.',
  experiences: [
    {
      id: 'aptean', order: 3, role: 'Senior Site Reliability Engineer',
      org: 'Aptean Inc', orgShort: 'Aptean', region: 'aptean', period: 'Nov 2024 – Present', start: '2024', current: true,
      bullets: [
        'Pod Lead for the UK Pathfinder products (Calidus, Foodware, Swords, Axxos, Priam, Proteus, Unity F8, Gouldhall) hosted on Aptean Data Centre, with customers across the globe.',
        'Lead a 4-person AI & Automation team building agents on Aptean Intelligence to streamline workflow and eliminate repetitive pre/post-patching validation and alert triage.',
        'Single point of contact during shift for cross-product issues — triage tickets, assign ownership and drive resolution within SLA.',
        'Own ops, escalations and infra across the customer estate: SSL renewals on Apache/IIS (AIX/Windows), failover and HA.',
        'D365 F&O deployments via LCS for 60+ customers; brought Terraform, Jenkins and Azure Automate into TechOps from scratch.'
      ]
    },
    {
      id: 'hcl-cloudops', order: 2, role: 'Senior CloudOps Engineer',
      org: 'HCL Tech', orgShort: 'HCL Tech', region: 'hcl', period: 'May 2021 – Oct 2024', start: '2021', current: false,
      bullets: [
        'Led the design of enterprise microservice applications (Commerce Experience Group) driving $3.53B annual revenue on Azure, Cosmos DB, Functions and Key Vault.',
        'Migrated 15+ on-prem applications and data platforms via Lift & Shift, Azure Migrate and Azure Arc.',
        'Upgraded Terraform 12.8 → 13.1 and Chef 15 → 17; served a year as Terraform/ARM/Python code approver.',
        'Mentored a team to a 200% productivity lift building cloud infra from scratch for MRC Global.',
        'Set up Jenkins CI/CD and fixed a chronic linter failure across 5 repos, improving workflow ~50%.'
      ]
    },
    {
      id: 'hcl-cloud', order: 1, role: 'Cloud Engineer', subtitle: 'Pepsico account',
      org: 'HCL Tech', orgShort: 'HCL Tech', region: 'hcl', period: 'Dec 2020 – May 2021', start: '2020', current: false,
      bullets: [
        'Maintained 5,000+ Azure servers with zero escalations on P1 issues.',
        'Deployed 30+ Windows, 50+ Linux and 10+ SQL servers, plus 50+ virtual desktops and 25+ Function Apps in six months.',
        'Ran JIRA sprint boards and completed 90+ pending import tasks during a version upgrade.'
      ]
    }
  ],
  skillGroups: [
    { title: 'Cloud & Platforms', items: ['Microsoft Azure', 'Azure DevOps', 'AWS', 'MS D365 F&O / LCS'] },
    { title: 'OS & Infrastructure', items: ['AIX Unix', 'Linux', 'Windows', 'SQL Administration'] },
    { title: 'Automation & IaC', items: ['Terraform', 'CloudFormation', 'Jenkins', 'CI/CD', 'Python', 'YAML', 'Shell'] },
    { title: 'Containers & Observability', items: ['Kubernetes', 'ArgoCD', 'Helm', 'Prometheus', 'Grafana'] },
    { title: 'AI & Practices', items: ['Agentic AI', 'Agentic Workflow', 'Incident Response'] }
  ],
  certifications: [
    'Microsoft AZ-104 · Azure Administrator', 'Microsoft AZ-305 · Azure Solutions Architect',
    'Microsoft AZ-140 · Azure Virtual Desktop', 'AWS Solutions Architect Associate (SAA-C03)',
    'AWS Solutions Architect Professional (SAP-C02)'
  ],
  education: {
    degree: 'Bachelor of Engineering, Computer Science & Engineering',
    school: 'PSNA College of Engineering & Technology (PSNACET)', location: 'Tamil Nadu, India'
  },
  // Experience pins along the river. t = 0..1 along river, side = bank (+1/-1).
  mapNodes: [
    { expId: 'hcl-cloud', t: 0.10, side: -1 },
    { expId: 'hcl-cloudops', t: 0.22, side: 1 },
    { expId: 'aptean', t: 0.40, side: -1 }
  ],
  // Companies as regions (label shown zoomed out; pins revealed zoomed in).
  regions: [
    { id: 'hcl', name: 'HCL TECH', lx: -165, lz: 235, clear: 150 },
    { id: 'aptean', name: 'APTEAN', lx: -15, lz: 50, clear: 115 }
  ],
  mapPins: [
    { id: 'm1', region: 'hcl', order: 1, role: '5,000+ Azure servers', org: 'Cloud Engineer · HCL Tech', orgShort: 'HCL', period: 'Dec 2020 – May 2021', start: '2020', bullets: ['Maintained 5,000+ Azure servers with zero escalations on P1 issues at any hour, for Pepsico.'] },
    { id: 'm2', region: 'hcl', order: 2, role: 'Mass server deploys', org: 'Cloud Engineer · HCL Tech', orgShort: 'HCL', period: 'Dec 2020 – May 2021', start: '2020', bullets: ['Deployed 30+ Windows, 50+ Linux and 10+ SQL servers, plus 50+ virtual desktops and 25+ Function Apps in six months.'] },
    { id: 'm3', region: 'hcl', order: 3, role: 'JIRA sprint cleanup', org: 'Cloud Engineer · HCL Tech', orgShort: 'HCL', period: 'Dec 2020 – May 2021', start: '2020', bullets: ['Ran JIRA sprint boards and cleared 90+ pending import tasks during a version upgrade.'] },
    { id: 'm4', region: 'hcl', order: 4, role: '$3.53B microservices', org: 'Senior CloudOps · HCL Tech', orgShort: 'HCL', period: 'May 2021 – Oct 2024', start: '2021', bullets: ['Designed enterprise microservices (Commerce Experience Group) driving $3.53B annual revenue on Azure, Cosmos DB, Functions and Key Vault.'] },
    { id: 'm5', region: 'hcl', order: 5, role: '15+ cloud migrations', org: 'Senior CloudOps · HCL Tech', orgShort: 'HCL', period: 'May 2021 – Oct 2024', start: '2021', bullets: ['Migrated 15+ on-prem applications and data platforms via Lift & Shift, Azure Migrate and Azure Arc.'] },
    { id: 'm6', region: 'hcl', order: 6, role: 'Code approver', org: 'Senior CloudOps · HCL Tech', orgShort: 'HCL', period: 'May 2021 – Oct 2024', start: '2021', bullets: ['Served a year as Terraform/ARM/Python code approver; upgraded Terraform 12.8 to 13.1 and Chef 15 to 17.'] },
    { id: 'm7', region: 'hcl', order: 7, role: 'Jenkins CI/CD fix', org: 'Senior CloudOps · HCL Tech', orgShort: 'HCL', period: 'May 2021 – Oct 2024', start: '2021', bullets: ['Set up Jenkins CI/CD and fixed a chronic linter failure across 5 repos, improving workflow ~50%.'] },
    { id: 'm8', region: 'hcl', order: 8, role: '200% mentoring lift', org: 'Senior CloudOps · HCL Tech', orgShort: 'HCL', period: 'May 2021 – Oct 2024', start: '2021', bullets: ['Mentored a team to a 200% productivity lift building cloud infrastructure from scratch for MRC Global.'] },
    { id: 'm9', region: 'aptean', order: 9, role: 'Pod Lead — Pathfinder', org: 'Senior SRE · Aptean', orgShort: 'Aptean', period: 'Nov 2024 – Present', start: '2024', bullets: ['Pod Lead for the UK Pathfinder products (Calidus, Foodware, Swords, Axxos, Priam, Proteus, Unity F8, Gouldhall) on Aptean Data Centre, with customers worldwide.'] },
    { id: 'm10', region: 'aptean', order: 10, role: 'Shift SPOC', org: 'Senior SRE · Aptean', orgShort: 'Aptean', period: 'Nov 2024 – Present', start: '2024', bullets: ['Single point of contact during shift for cross-product issues — triage tickets, assign ownership and drive resolution within SLA.'] },
    { id: 'm11', region: 'aptean', order: 11, role: 'AI & Automation team', org: 'Senior SRE · Aptean', orgShort: 'Aptean', period: 'Nov 2024 – Present', start: '2024', bullets: ['Lead a 4-person AI & Automation team building agents on Aptean Intelligence.'] },
    { id: 'm12', region: 'aptean', order: 12, role: 'Patching automation', org: 'Senior SRE · Aptean', orgShort: 'Aptean', period: 'Nov 2024 – Present', start: '2024', bullets: ['Eliminated repetitive pre/post-patching validation and alert triage — faster cycles, fewer human errors.'] },
    { id: 'm13', region: 'aptean', order: 13, role: 'Ops · SSL · HA', org: 'Senior SRE · Aptean', orgShort: 'Aptean', period: 'Nov 2024 – Present', start: '2024', bullets: ['Own ops, escalations and infra across the estate: SSL renewals on Apache/IIS (AIX/Windows), failover and HA.'] },
    { id: 'm14', region: 'aptean', order: 14, role: 'D365 + IaC from scratch', org: 'Senior SRE · Aptean', orgShort: 'Aptean', period: 'Nov 2024 – Present', start: '2024', bullets: ['D365 F&O deployments via LCS for 60+ customers; brought Terraform, Jenkins and Azure Automate into TechOps from scratch.'] }
  ],
  // Slice-of-life lake (right). Technical = diamonds scattered across the map (TECH_PINS).
  lake: { x: 270, z: 20, radius: 56 },
  blogDefaults: {
    technical: [
      { title: 'Agents that read the patch notes for me', date: 'Apr 2025', body: 'Wired an automation on Aptean Intelligence to run pre and post-patch validation — service health, SSL expiry, failover state — and post one green or red summary before we touch a customer. The manual checklist went from twenty minutes to a glance. Sample post, swap in the real write-up.' },
      { title: 'A Terraform module that paid for itself', date: 'Mar 2025', body: 'Turned the repeated spin-up-a-customer-environment runbook into one Terraform module with sane defaults. New environments take minutes and come out identical, which means far fewer environment-drift incidents. Sample post, swap in the real write-up.' },
      { title: 'Fewer 3am pages, on purpose', date: 'Feb 2025', body: 'Re-tuned alerting to page on symptoms, not noise: grouped the flapping alerts, added burn-rate thresholds, routed the rest to a daily digest. On-call went from jumpy to boring, which was exactly the goal. Sample post, swap in the real write-up.' }
      // add more technical posts below this line
    ],
    slice: [
      { title: 'Chai before the world wakes', date: 'May 2025', body: 'The best twenty minutes of the day — terrace, hot chai, no notifications. Sample post, swap in your own.' },
      { title: 'Weekend trek, no signal', date: 'Apr 2025', body: 'Hills, a flask, and zero bars of reception. Came back tired and strangely reset. Sample post, swap in your own.' },
      { title: 'Re-learning the guitar', date: 'Mar 2025', body: 'Fingertips sore, neighbours patient, three chords down and a lifetime to go. Sample post, swap in your own.' }
      // add more slice-of-life posts below this line
    ],
    hobby: [
      { title: 'The wind is my satnav', date: 'Jun 2025', body: 'Ghost of Tsushima swapped the minimap for a gust of wind, and reader, I have given it my full trust. Swipe up, follow the breeze, ignore every survival instinct. It has led me to fox dens, secret hot springs, and — twice — straight off a cliff. Ten out of ten, would let the weather drive again.' },
      { title: 'Foxes are a full-time job', date: 'Jun 2025', body: 'I set out to liberate Tsushima from the Mongol horde. Instead I have a backlog: fourteen foxes to follow to their shrines, nine haiku unwritten, one very patient hot spring. Vengeance can wait, Jin — this fox booped my hand and it must be honoured.' },
      { title: 'Photo mode ruined my K/D', date: 'May 2025', body: 'Every duel goes fine until the wind catches the maple leaves just so. Then I vanish into photo mode for ten minutes tuning fog, petals and a tasteful sepia filter, and unpause directly onto a Mongol spear. Worth it. The screenshot was immaculate.' }
      // add more gaming / Ghost of Tsushima posts below this line
    ]
  },
  loadingLines: [
    'Every reliable system began as an uncharted shore.',
    'Charting the islands of a career, one incident at a time.',
    'Here be uptime. Here be dragons.'
  ]
}
const expById = (id) => RESUME.experiences.find((e) => e.id === id)
let BLOG_SEQ = 0
function loadPosts(cat) {
  let saved = []
  try { saved = JSON.parse(localStorage.getItem('blog_' + cat) || '[]') } catch (e) {}
  return (RESUME.blogDefaults[cat] || []).concat(saved)
}
function savePost(cat, post) {
  let saved = []
  try { saved = JSON.parse(localStorage.getItem('blog_' + cat) || '[]') } catch (e) {}
  saved.push(post); localStorage.setItem('blog_' + cat, JSON.stringify(saved))
}
function loadExperiences() {
  try { const o = JSON.parse(localStorage.getItem('resume_experiences') || 'null'); if (o) return o } catch (e) {}
  return JSON.parse(JSON.stringify(RESUME.experiences))
}
function loadPinOverrides() { try { return JSON.parse(localStorage.getItem('pin_overrides') || '{}') } catch (e) { return {} } }
function savePinOverrides(obj) { localStorage.setItem('pin_overrides', JSON.stringify(obj)) }
function effectivePins() {
  const ov = loadPinOverrides()
  return RESUME.mapPins.map((p) => {
    const o = ov[p.id] || {}
    const body = o.body != null ? o.body : ((p.bullets && p.bullets[0]) || '')
    return { id: p.id, region: p.region, order: p.order, org: p.org, orgShort: p.orgShort, start: p.start,
      role: o.role != null ? o.role : p.role, period: o.period != null ? o.period : p.period, body: body, bullets: [body] }
  })
}

/* --------------------------- MATH/UTIL --------------------------- */
const clamp = (v, a, b) => Math.max(a, Math.min(b, v))
const lerp = (a, b, t) => a + (b - a) * t
function smoothstep(e0, e1, x) { const t = clamp((x - e0) / (e1 - e0), 0, 1); return t * t * (3 - 2 * t) }
function hexToRgb(hex) { const n = parseInt(hex.slice(1), 16); return { r: ((n >> 16) & 255) / 255, g: ((n >> 8) & 255) / 255, b: (n & 255) / 255 } }
function mixRgb(a, b, t) { return { r: lerp(a.r, b.r, t), g: lerp(a.g, b.g, t), b: lerp(a.b, b.b, t) } }
function setSRGB(tex) {
  if ('colorSpace' in tex && THREE.SRGBColorSpace) tex.colorSpace = THREE.SRGBColorSpace
  else if (THREE.sRGBEncoding) tex.encoding = THREE.sRGBEncoding
  return tex
}

/* ----------------------------- NOISE ----------------------------- */
function makeNoise2D(seed) {
  const p = new Uint8Array(256)
  for (let i = 0; i < 256; i++) p[i] = i
  let s = (seed >>> 0) || 1
  const rand = () => { s = (s + 0x6d2b79f5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296 }
  for (let i = 255; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); const tmp = p[i]; p[i] = p[j]; p[j] = tmp }
  const perm = new Uint8Array(512)
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255]
  const grad = [[1, 1], [-1, 1], [1, -1], [-1, -1], [1, 0], [-1, 0], [0, 1], [0, -1]]
  const F2 = 0.5 * (Math.sqrt(3) - 1), G2 = (3 - Math.sqrt(3)) / 6
  return function (xin, yin) {
    let n0 = 0, n1 = 0, n2 = 0
    const sk = (xin + yin) * F2, i = Math.floor(xin + sk), j = Math.floor(yin + sk)
    const tk = (i + j) * G2, x0 = xin - (i - tk), y0 = yin - (j - tk)
    let i1, j1; if (x0 > y0) { i1 = 1; j1 = 0 } else { i1 = 0; j1 = 1 }
    const x1 = x0 - i1 + G2, y1 = y0 - j1 + G2, x2 = x0 - 1 + 2 * G2, y2 = y0 - 1 + 2 * G2
    const ii = i & 255, jj = j & 255
    const g0 = grad[perm[ii + perm[jj]] % 8], g1 = grad[perm[ii + i1 + perm[jj + j1]] % 8], g2 = grad[perm[ii + 1 + perm[jj + 1]] % 8]
    let t0 = 0.5 - x0 * x0 - y0 * y0; if (t0 > 0) { t0 *= t0; n0 = t0 * t0 * (g0[0] * x0 + g0[1] * y0) }
    let t1 = 0.5 - x1 * x1 - y1 * y1; if (t1 > 0) { t1 *= t1; n1 = t1 * t1 * (g1[0] * x1 + g1[1] * y1) }
    let t2 = 0.5 - x2 * x2 - y2 * y2; if (t2 > 0) { t2 *= t2; n2 = t2 * t2 * (g2[0] * x2 + g2[1] * y2) }
    return 70 * (n0 + n1 + n2)
  }
}
function fbm(noise, x, y, oct, freq, lac, gain) {
  lac = lac || 2; gain = gain || 0.5; let sum = 0, amp = 1, f = freq, norm = 0
  for (let o = 0; o < oct; o++) { sum += amp * noise(x * f, y * f); norm += amp; f *= lac; amp *= gain }
  return (sum / norm) * 0.5 + 0.5
}
function ridged(noise, x, y, oct, freq, lac, gain) {
  lac = lac || 2; gain = gain || 0.5; let sum = 0, amp = 1, f = freq, norm = 0
  for (let o = 0; o < oct; o++) { const n = 1 - Math.abs(noise(x * f, y * f)); sum += amp * n * n; norm += amp; f *= lac; amp *= gain }
  return sum / norm
}

/* ------------------------------ PATH ----------------------------- */
const WORLD = 720, WORLD_HALF = 360, RIVER_SCALE = 1.4, RIVER_OFFX = -120, RIVER_OFFZ = 195
const riverWaypoints = [
  [-46, 44], [-38, 33], [-41, 20], [-28, 12], [-31, 0],
  [-16, -4], [-19, -16], [-4, -19], [4, -16], [1, -28], [16, -30], [27, -40]
]
function buildRiverCurve() {
  const pts = riverWaypoints.map((p) => new THREE.Vector3(p[0] * RIVER_SCALE + RIVER_OFFX, 0, p[1] * RIVER_SCALE + RIVER_OFFZ))
  return new THREE.CatmullRomCurve3(pts, false, 'catmullrom', 0.5)
}
function sampleRiver2D(curve, n) {
  const out = []
  for (let i = 0; i <= n; i++) { const p = curve.getPointAt(i / n); out.push({ x: p.x, z: p.z }) }
  return out
}
function makeDistanceField(points) {
  return function (x, z) {
    let best = Infinity
    for (let i = 0; i < points.length; i++) { const dx = x - points[i].x, dz = z - points[i].z, d = dx * dx + dz * dz; if (d < best) best = d }
    return Math.sqrt(best)
  }
}

/* ---------------------------- TERRAIN ---------------------------- */
const PONDS = [
  { x: 40, z: -120, r: 30 }, { x: -285, z: 30, r: 24 }, { x: -240, z: 235, r: 20 },
  { x: -10, z: 305, r: 26 }, { x: 165, z: -55, r: 25 }, { x: 215, z: 110, r: 28 },
  { x: 95, z: 185, r: 22 }, { x: -160, z: -165, r: 24 }
]
const GEM_PINS = [
  { x: 70, z: -130, c: 0x4fa3b8 }, { x: 195, z: -180, c: 0x9b6cc4 }, { x: -50, z: -60, c: 0xd56a86 },
  { x: 150, z: 80, c: 0x6fb56b }, { x: -210, z: -75, c: 0xe0a93b }, { x: 95, z: 155, c: 0x4fa3b8 },
  { x: 255, z: -25, c: 0x9b6cc4 }, { x: -120, z: 35, c: 0xd56a86 }, { x: 25, z: 250, c: 0x6fb56b }, { x: 225, z: 165, c: 0xe0a93b }
]
const MAX_H = 60, SEA_DEPTH = 20, CARVE_R = 14.0, RIVERBED = -1.8
const BANDS = [
  { max: -0.6, c: hexToRgb('#9c8a55') }, { max: 1.6, c: hexToRgb('#d8c388') },
  { max: 6, c: hexToRgb('#a9b066') }, { max: 12, c: hexToRgb('#86954c') },
  { max: 19, c: hexToRgb('#6f7a3c') }, { max: 27, c: hexToRgb('#6b5734') },
  { max: Infinity, c: hexToRgb('#f0e7cf') }
]
const UNEXPLORED_TINT = { r: 0.5, g: 0.47, b: 0.39 }
function buildTerrain(distanceTo, seed, seg) {
  seed = seed || 7; seg = seg || 240
  const noise = makeNoise2D(seed), step = WORLD / seg, stride = seg + 1
  const grid = new Float32Array(stride * stride)
  const L = RESUME.lake
  // Southern archipelago (Japan-ish curved chain) — extra land at the bottom.
  const SOUTH = [[-130, 190], [-80, 222], [-25, 238], [35, 232], [90, 205], [135, 170]]
  const spinePts = []
  for (let i = 0; i < SOUTH.length - 1; i++) {
    const a = SOUTH[i], b = SOUTH[i + 1]
    for (let k = 0; k < 14; k++) spinePts.push({ x: a[0] + (b[0] - a[0]) * (k / 14), z: a[1] + (b[1] - a[1]) * (k / 14) })
  }
  spinePts.push({ x: SOUTH[5][0], z: SOUTH[5][1] })
  const southDist = makeDistanceField(spinePts)
  function heightAt(x, z) {
    const d = Math.hypot(x, z) / WORLD_HALF
    const warp = noise(x * 0.013 + 50, z * 0.013 - 30) * 0.30
    let island = 1 - smoothstep(0.97, 1.30, d + warp)
    const sw = noise(x * 0.02 - 80, z * 0.02 + 40) * 9
    island = Math.max(island, 1 - smoothstep(30, 58, southDist(x, z) + sw))
    const base = fbm(noise, x, z, 5, 0.011)
    const ridge = ridged(noise, x + 200, z - 120, 4, 0.015)
    const mMask = smoothstep(0.5, 0.92, fbm(noise, x - 300, z + 260, 3, 0.007))
    let e = clamp(base * 0.55 + ridge * mMask, 0, 1.4)
    let h = e * island * MAX_H - (1 - island) * SEA_DEPTH
    const dr = distanceTo(x, z)
    if (dr < CARVE_R) { const k = smoothstep(CARVE_R, 0, dr); h = Math.min(h, lerp(h, RIVERBED, k)) }
    const dl = Math.hypot(x - L.x, z - L.z)
    if (dl < L.radius) { const k = smoothstep(L.radius, L.radius * 0.25, dl); h = Math.min(h, lerp(h, -1.8, k)) }
    for (let pi = 0; pi < PONDS.length; pi++) {
      const P = PONDS[pi], dp = Math.hypot(x - P.x, z - P.z)
      if (dp < P.r) { const k = smoothstep(P.r, P.r * 0.3, dp); h = Math.min(h, lerp(h, -1.3, k)) }
    }
    return h
  }
  for (let r = 0; r < stride; r++) { const z = -WORLD_HALF + r * step; for (let c = 0; c < stride; c++) { grid[r * stride + c] = heightAt(-WORLD_HALF + c * step, z) } }
  function sampleHeight(x, z) {
    const fx = clamp((x + WORLD_HALF) / step, 0, seg), fz = clamp((z + WORLD_HALF) / step, 0, seg)
    const c0 = Math.floor(fx), r0 = Math.floor(fz), c1 = Math.min(c0 + 1, seg), r1 = Math.min(r0 + 1, seg)
    const tx = fx - c0, tz = fz - r0
    const h00 = grid[r0 * stride + c0], h10 = grid[r0 * stride + c1], h01 = grid[r1 * stride + c0], h11 = grid[r1 * stride + c1]
    return lerp(lerp(h00, h10, tx), lerp(h01, h11, tx), tz)
  }
  const geo = new THREE.PlaneGeometry(WORLD, WORLD, seg, seg)
  geo.rotateX(-Math.PI / 2)
  const pos = geo.attributes.position, colors = new Float32Array(pos.count * 3)
  function colorFor(h, x, z) {
    let band = BANDS[BANDS.length - 1].c
    for (let i = 0; i < BANDS.length; i++) { if (h < BANDS[i].max) { band = BANDS[i].c; break } }
    const j = noise(x * 0.5, z * 0.5) * 0.035
    let c = { r: clamp(band.r + j, 0, 1), g: clamp(band.g + j, 0, 1), b: clamp(band.b + j, 0, 1) }
    const amt = smoothstep(26, 60, distanceTo(x, z)) * 0.3
    if (h > -0.6) c = mixRgb(c, UNEXPLORED_TINT, amt)
    return c
  }
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i), h = sampleHeight(x, z)
    pos.setY(i, h)
    const col = colorFor(h, x, z); colors[i * 3] = col.r; colors[i * 3 + 1] = col.g; colors[i * 3 + 2] = col.b
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  geo.computeVertexNormals()
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.96, metalness: 0 })
  const mesh = new THREE.Mesh(geo, mat); mesh.name = 'island'
  return { mesh, sampleHeight }
}

/* ------------------------------ SEA ------------------------------ */
/* Sea is calm + pale with faint hatching, so the flowing river stands out. */
function waveTexture() {
  const s = 256, cv = document.createElement('canvas'); cv.width = cv.height = s
  const ctx = cv.getContext('2d'); ctx.strokeStyle = 'rgba(255,255,255,0.34)'; ctx.lineWidth = 1.2
  for (let row = 0; row < 8; row++) {
    const y0 = 14 + row * 30; ctx.beginPath()
    for (let x = 0; x <= s; x += 4) { const y = y0 + Math.sin((x / s) * Math.PI * 4 + row) * 4; x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y) }
    ctx.stroke()
  }
  const tex = new THREE.CanvasTexture(cv); tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(13, 13); return tex
}
function buildSea() {
  const group = new THREE.Group()
  const seaGeo = new THREE.PlaneGeometry(WORLD * 3.4, WORLD * 3.4); seaGeo.rotateX(-Math.PI / 2)
  const sea = new THREE.Mesh(seaGeo, new THREE.MeshStandardMaterial({ color: 0x4f93c4, roughness: 0.5, metalness: 0.12, transparent: true, opacity: 1 }))
  sea.position.y = -0.3; group.add(sea)
  const tex = waveTexture()
  const waves = new THREE.Mesh(seaGeo.clone(), new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.32, depthWrite: false }))
  waves.position.y = -0.12; group.add(waves)
  group.position.set(120, 0, 130)
  return { group, update(t) { tex.offset.x = t * 0.004; tex.offset.y = Math.sin(t * 0.04) * 0.008 } }
}

/* ----------------------------- RIVER ----------------------------- */
/* Bright, fast, clearly-flowing blue water — visually distinct from the sea. */
function buildRiver(curve, sampleHeight, segments) {
  const N = segments || 320
  const positions = new Float32Array((N + 1) * 2 * 3), uvs = new Float32Array((N + 1) * 2 * 2), indices = []
  const p = new THREE.Vector3(), tan = new THREE.Vector3(), perp = new THREE.Vector3()
  let cumLen = 0, prev = null
  for (let i = 0; i <= N; i++) {
    const t = i / N; curve.getPointAt(t, p); curve.getTangentAt(t, tan); perp.set(-tan.z, 0, tan.x).normalize()
    const y = sampleHeight(p.x, p.z) + 0.7, halfW = lerp(3.5, 9.0, t)
    if (prev) cumLen += Math.hypot(p.x - prev.x, p.z - prev.z); prev = { x: p.x, z: p.z }
    const li = i * 2, ri = i * 2 + 1
    positions[li * 3] = p.x + perp.x * halfW; positions[li * 3 + 1] = y; positions[li * 3 + 2] = p.z + perp.z * halfW
    positions[ri * 3] = p.x - perp.x * halfW; positions[ri * 3 + 1] = y; positions[ri * 3 + 2] = p.z - perp.z * halfW
    const v = cumLen * 0.05; uvs[li * 2] = 0; uvs[li * 2 + 1] = v; uvs[ri * 2] = 1; uvs[ri * 2 + 1] = v
    if (i < N) { const a = i * 2, b = i * 2 + 1, c = (i + 1) * 2, d = (i + 1) * 2 + 1; indices.push(a, b, c, b, d, c) }
  }
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2)); geo.setIndex(indices); geo.computeVertexNormals()
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
    uniforms: { uTime: { value: 0 }, uDeep: { value: new THREE.Color(0x156486) }, uShallow: { value: new THREE.Color(0x66d0ea) } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
    fragmentShader: [
      'uniform float uTime; uniform vec3 uDeep; uniform vec3 uShallow; varying vec2 vUv;',
      'void main(){',
      '  float flow = vUv.y * 2.0 - uTime * 0.4;',
      '  float streak = sin(flow * 8.0 + sin(vUv.x * 6.2831) * 0.6) * 0.5 + 0.5;',
      '  float ripple = sin(flow * 24.0 + vUv.x * 11.0) * 0.5 + 0.5;',
      '  float m = mix(streak, ripple, 0.4);',
      '  vec3 col = mix(uDeep, uShallow, m);',
      '  float edge = smoothstep(0.0, 0.16, vUv.x) * smoothstep(1.0, 0.84, vUv.x);',
      '  col = mix(uShallow * 1.05, col, edge);',
      '  float glint = smoothstep(0.78, 1.0, sin(flow * 10.0 - vUv.x * 4.0) * 0.5 + 0.5);',
      '  col += glint * 0.25;',
      '  gl_FragColor = vec4(col, 0.96);',
      '}'
    ].join('\n')
  })
  const mesh = new THREE.Mesh(geo, mat); mesh.renderOrder = 2; mesh.name = 'river'
  return { mesh, update(t) { mat.uniforms.uTime.value = t } }
}

/* ------------------------------ LAKE ----------------------------- */
function buildWater(x, z, r, phase) {
  const geo = new THREE.CircleGeometry(r, 40); geo.rotateX(-Math.PI / 2)
  const pos = geo.attributes.position
  for (let i = 1; i < pos.count; i++) {
    const vx = pos.getX(i), vz = pos.getZ(i), ang = Math.atan2(vz, vx)
    const fct = 0.6 + 0.3 * Math.sin(ang * 3 + phase) + 0.18 * Math.sin(ang * 7 - phase * 1.7) + 0.1 * Math.sin(ang * 5 + phase * 2.3)
    pos.setX(i, vx * fct); pos.setZ(i, vz * fct)
  }
  geo.computeVertexNormals()
  const mat = new THREE.MeshStandardMaterial({ color: 0x5fa6cf, roughness: 0.35, metalness: 0.22, transparent: true, opacity: 0.9 })
  const m = new THREE.Mesh(geo, mat); m.position.set(x, 0.14, z); return m
}
function buildLake() { const L = RESUME.lake; return buildWater(L.x, L.z, L.radius * 0.92, L.x * 0.05) }

/* ---------------------------- SPRITE ----------------------------- */
function makeTextSprite(text, opts) {
  opts = opts || {}
  const fontSize = opts.fontSize || 64, weight = opts.weight || 600
  const family = opts.family || 'Georgia, "Times New Roman", serif'
  const color = opts.color || '#43361c', ls = opts.ls != null ? opts.ls : 2
  const sub = opts.sub || null, subSize = opts.subSize || 26, subColor = opts.subColor || '#6b5a30'
  const outline = opts.outline || 'rgba(243,236,214,0.85)', worldHeight = opts.worldHeight || 4
  const dpr = 2
  const measure = document.createElement('canvas').getContext('2d')
  const setFont = (px, w) => (measure.font = w + ' ' + px + 'px ' + family)
  const widthOf = (str, letter) => { let w = 0; for (const ch of str) w += measure.measureText(ch).width + letter; return w - letter }
  const spaced = (ctx, str, x, y, letter) => { let cx = x; for (const ch of str) { ctx.strokeText(ch, cx, y); ctx.fillText(ch, cx, y); cx += ctx.measureText(ch).width + letter } }
  setFont(fontSize, weight); const mainW = widthOf(text, ls)
  let subW = 0; if (sub) { setFont(subSize, 600); subW = widthOf(sub, ls * 0.8) }
  const padX = fontSize * 0.4, padY = fontSize * 0.35, lineGap = sub ? subSize * 0.7 : 0
  const w = Math.ceil(Math.max(mainW, subW) + padX * 2), h = Math.ceil(fontSize + (sub ? subSize + lineGap : 0) + padY * 2)
  const canvas = document.createElement('canvas'); canvas.width = w * dpr; canvas.height = h * dpr
  const ctx = canvas.getContext('2d'); ctx.scale(dpr, dpr); ctx.textBaseline = 'top'; ctx.lineJoin = 'round'
  ctx.font = weight + ' ' + fontSize + 'px ' + family; ctx.fillStyle = color; ctx.strokeStyle = outline; ctx.lineWidth = Math.max(2, fontSize * 0.06)
  spaced(ctx, text, (w - mainW) / 2, padY, ls)
  if (sub) { ctx.font = '600 ' + subSize + 'px ' + family; ctx.fillStyle = subColor; ctx.lineWidth = Math.max(1.5, subSize * 0.06); spaced(ctx, sub, (w - subW) / 2, padY + fontSize + lineGap, ls * 0.8) }
  const tex = setSRGB(new THREE.CanvasTexture(canvas)); tex.anisotropy = 4
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, depthTest: false }))
  sprite.scale.set(worldHeight * (w / h), worldHeight, 1)
  return sprite
}

/* ----------------------------- COIN ------------------------------ */
const BANK_OFFSET = 17, POLE_H = 8, COIN_SIZE = 14, COIN_DEPTH = 1.4, SPIN_SPEED = 0.7
function roundRect(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath() }
function coinFaceTexture(exp, accentHex) {
  const ac = accentHex || '#9c7c34'
  const s = 320, cv = document.createElement('canvas'); cv.width = cv.height = s; const ctx = cv.getContext('2d')
  ctx.clearRect(0, 0, s, s)
  ctx.save(); ctx.translate(s / 2, s / 2); ctx.rotate(Math.PI / 4)
  const d = s * 0.6
  const g = ctx.createLinearGradient(-d / 2, -d / 2, d / 2, d / 2); g.addColorStop(0, '#f6eed6'); g.addColorStop(1, '#e6d8b0')
  ctx.fillStyle = g; ctx.fillRect(-d / 2, -d / 2, d, d)
  ctx.strokeStyle = ac; ctx.lineWidth = 22; ctx.lineJoin = 'round'; ctx.strokeRect(-d / 2, -d / 2, d, d)
  ctx.restore()
  ctx.fillStyle = '#2b261b'; ctx.font = 'bold 150px Georgia, serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(String(exp.order), s / 2, s / 2 + 4)
  const tex = setSRGB(new THREE.CanvasTexture(cv)); tex.anisotropy = 4; return tex
}
function buildCoin(exp, x, y, z, accentHex) {
  const group = new THREE.Group()
  group.position.set(x, y, z)
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(7, 24), new THREE.MeshBasicMaterial({ color: 0x2b261b, transparent: true, opacity: 0.18, depthWrite: false }))
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.3; group.add(shadow)
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: coinFaceTexture(exp, accentHex), transparent: true, depthWrite: false }))
  const SIZE = 24, baseY = 16; sp.scale.set(SIZE, SIZE, 1); sp.position.y = baseY
  sp.userData.expId = exp.id; group.add(sp)
  const phase = Math.random() * Math.PI * 2; let cur = 1, tgt = 1
  return {
    exp, group, hitMeshes: [sp], position: group.position.clone(),
    setHover(hv) { tgt = hv ? 1.18 : 1 },
    update(time, dt) { sp.position.y = baseY + Math.sin(time * 1.4 + phase) * 1.0; cur = lerp(cur, tgt, Math.min(1, dt * 10)); sp.scale.set(SIZE * cur, SIZE * cur, 1) }
  }
}

/* --------------------------- BLOG PIN ---------------------------- */
function buildBlogPin(item, x, y, z, color) {
  const group = new THREE.Group(); group.position.set(x, y, z)
  const pid = 'bp' + (BLOG_SEQ++)
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(6, 20), new THREE.MeshBasicMaterial({ color: 0x2b261b, transparent: true, opacity: 0.2, depthWrite: false }))
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.3; group.add(shadow)
  const mk = new THREE.Mesh(new THREE.OctahedronGeometry(7), new THREE.MeshStandardMaterial({ color: color || 0x4fa3b8, metalness: 0.3, roughness: 0.45 }))
  mk.position.y = 13; mk.userData.blogId = pid; group.add(mk)
  const hit = new THREE.Mesh(new THREE.BoxGeometry(18, 28, 18), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }))
  hit.position.y = 13; hit.userData.blogId = pid; group.add(hit)
  const phase = Math.random() * Math.PI * 2; let cur = 1, tgt = 1
  return {
    item, pid, group, hitMeshes: [mk, hit],
    setHover(hv) { tgt = hv ? 1.3 : 1 },
    update(time, dt) { mk.rotation.y += dt * 0.9; mk.position.y = 13 + Math.sin(time * 1.4 + phase) * 0.5; cur = lerp(cur, tgt, Math.min(1, dt * 10)); mk.scale.setScalar(cur) }
  }
}

/* ------------------------------ FOG ------------------------------ */
const CORRIDOR = 30
function cloudTexture() {
  const s = 128, cv = document.createElement('canvas'); cv.width = cv.height = s; const ctx = cv.getContext('2d')
  const blob = (cx, cy, r) => { const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r); g.addColorStop(0, 'rgba(255,252,240,0.95)'); g.addColorStop(0.6, 'rgba(245,238,218,0.55)'); g.addColorStop(1, 'rgba(245,238,218,0)'); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill() }
  blob(64, 70, 46); blob(44, 58, 30); blob(86, 60, 32); blob(64, 50, 28)
  return setSRGB(new THREE.CanvasTexture(cv))
}
function buildFog(distanceTo, sampleHeight, clearPts) {
  const group = new THREE.Group(), tex = cloudTexture(), clouds = [], L = RESUME.lake, regions = RESUME.regions
  const EX_X = -110, EX_Z = 180, EX_R = 212
  const place = (x, z) => {
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, opacity: 0.4 + Math.random() * 0.22, color: 0xefe7d2 })
    const sp = new THREE.Sprite(mat), scale = 60 + Math.random() * 40
    sp.scale.set(scale, scale * 0.7, 1)
    const by = Math.max(sampleHeight(x, z), 0) + 22 + Math.random() * 14
    sp.position.set(x, by, z); group.add(sp)
    clouds.push({ sp, bx: x, bz: z, by, speed: 0.05 + Math.random() * 0.07, drift: 3 + Math.random() * 4, phase: Math.random() * Math.PI * 2, baseOpacity: mat.opacity })
  }
  for (let x = -WORLD_HALF + 8; x <= WORLD_HALF - 8; x += 44)
    for (let z = -WORLD_HALF + 8; z <= WORLD_HALF - 8; z += 44)
      if (sampleHeight(x, z) > 0.7 && !regions.some((r) => Math.hypot(x - r.lx, z - r.lz) < (r.clear || 120)) && Math.hypot(x - L.x, z - L.z) > L.radius + 32)
        place(x + (Math.random() - 0.5) * 18, z + (Math.random() - 0.5) * 18)
  // UNEXPLORED lives at the top (north = -z).
  const mk = (txt, sub, x, z) => { const s = makeTextSprite(txt, { fontSize: 72, ls: 7, color: '#4a3a1c', sub, subSize: 28, worldHeight: 56 }); s.position.set(x, 72, z); group.add(s) }
  mk('UNEXPLORED', 'HERE BE DRAGONS', 30, -160)
  return {
    group,
    update(time) {
      for (const c of clouds) {
        c.sp.position.x = c.bx + Math.sin(time * c.speed + c.phase) * c.drift
        c.sp.position.z = c.bz + Math.cos(time * c.speed * 0.8 + c.phase) * c.drift * 0.6
        c.sp.position.y = c.by + Math.sin(time * 0.4 + c.phase) * 0.6
        c.sp.material.opacity = c.baseOpacity + Math.sin(time * 0.5 + c.phase) * 0.08
      }
    }
  }
}

/* ---------------------------- CONTROLS --------------------------- */
class MapControls {
  constructor(camera, dom, opts) {
    opts = opts || {}
    this.camera = camera; this.dom = dom
    this.target = (opts.target || new THREE.Vector3()).clone()
    this.distance = opts.distance || 230; this.minDistance = opts.minDistance || 70; this.maxDistance = opts.maxDistance || 560
    const tilt = (opts.tilt || 52) * (Math.PI / 180)
    this.dir = new THREE.Vector3(0, Math.sin(tilt), Math.cos(tilt)).normalize()
    this.bound = opts.bound || 132
    this._dragging = false; this._last = { x: 0, y: 0 }; this._touch = { mode: 0, dist: 0, startDist: 0, mid: { x: 0, y: 0 } }
    this._onWheel = this.onWheel.bind(this); this._onDown = this.onPointerDown.bind(this)
    this._onMove = this.onPointerMove.bind(this); this._onUp = this.onPointerUp.bind(this)
    this._onTS = this.onTouchStart.bind(this); this._onTM = this.onTouchMove.bind(this); this._onTE = this.onTouchEnd.bind(this)
    dom.addEventListener('wheel', this._onWheel, { passive: false })
    dom.addEventListener('pointerdown', this._onDown)
    window.addEventListener('pointermove', this._onMove); window.addEventListener('pointerup', this._onUp)
    dom.addEventListener('touchstart', this._onTS, { passive: false })
    dom.addEventListener('touchmove', this._onTM, { passive: false }); dom.addEventListener('touchend', this._onTE)
    this.update()
  }
  pan(dx, dz) { this.target.x = clamp(this.target.x + dx, -this.bound, this.bound); this.target.z = clamp(this.target.z + dz, -this.bound, this.bound) }
  zoomBy(f) { this.distance = clamp(this.distance * f, this.minDistance, this.maxDistance) }
  onWheel(e) {
    e.preventDefault(); const unit = e.deltaMode === 1 ? 16 : 1
    if (e.ctrlKey) this.zoomBy(1 + e.deltaY * unit * 0.01)
    else { const k = 0.0016 * this.distance; this.pan(e.deltaX * unit * k, e.deltaY * unit * k) }
  }
  onPointerDown(e) { if (e.pointerType === 'touch') return; this._dragging = true; this._last.x = e.clientX; this._last.y = e.clientY }
  onPointerMove(e) {
    if (!this._dragging || e.pointerType === 'touch') return
    const dx = e.clientX - this._last.x, dy = e.clientY - this._last.y; this._last.x = e.clientX; this._last.y = e.clientY
    const k = 0.0016 * this.distance; this.pan(-dx * k, -dy * k)
  }
  onPointerUp() { this._dragging = false }
  _td(t) { return Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY) }
  _tm(t) { return { x: (t[0].clientX + t[1].clientX) / 2, y: (t[0].clientY + t[1].clientY) / 2 } }
  onTouchStart(e) {
    if (e.touches.length === 2) { this._touch.mode = 2; this._touch.startDist = this._td(e.touches); this._touch.dist = this.distance; this._touch.mid = this._tm(e.touches) }
    else if (e.touches.length === 1) { this._touch.mode = 1; this._last.x = e.touches[0].clientX; this._last.y = e.touches[0].clientY }
  }
  onTouchMove(e) {
    e.preventDefault()
    if (this._touch.mode === 2 && e.touches.length === 2) {
      const d = this._td(e.touches); this.distance = clamp(this._touch.dist * (this._touch.startDist / d), this.minDistance, this.maxDistance)
      const mid = this._tm(e.touches), k = 0.0016 * this.distance; this.pan(-(mid.x - this._touch.mid.x) * k, -(mid.y - this._touch.mid.y) * k); this._touch.mid = mid
    } else if (this._touch.mode === 1 && e.touches.length === 1) {
      const dx = e.touches[0].clientX - this._last.x, dy = e.touches[0].clientY - this._last.y; this._last.x = e.touches[0].clientX; this._last.y = e.touches[0].clientY
      const k = 0.0016 * this.distance; this.pan(-dx * k, -dy * k)
    }
  }
  onTouchEnd(e) { this._touch.mode = e.touches.length; if (e.touches.length === 1) { this._last.x = e.touches[0].clientX; this._last.y = e.touches[0].clientY } }
  update() { this.camera.position.copy(this.target).addScaledVector(this.dir, this.distance); this.camera.lookAt(this.target) }
  dispose() {
    this.dom.removeEventListener('wheel', this._onWheel); this.dom.removeEventListener('pointerdown', this._onDown)
    window.removeEventListener('pointermove', this._onMove); window.removeEventListener('pointerup', this._onUp)
    this.dom.removeEventListener('touchstart', this._onTS); this.dom.removeEventListener('touchmove', this._onTM); this.dom.removeEventListener('touchend', this._onTE)
  }
}

function buildGem(x, y, z, color) {
  const group = new THREE.Group(); group.position.set(x, y, z)
  const sh = new THREE.Mesh(new THREE.CircleGeometry(5, 16), new THREE.MeshBasicMaterial({ color: 0x2b261b, transparent: true, opacity: 0.16, depthWrite: false }))
  sh.rotation.x = -Math.PI / 2; sh.position.y = 0.3; group.add(sh)
  const gem = new THREE.Mesh(new THREE.OctahedronGeometry(7), new THREE.MeshStandardMaterial({ color: color, metalness: 0.5, roughness: 0.18, transparent: true, opacity: 0.9 }))
  gem.position.y = 12; group.add(gem)
  const phase = Math.random() * Math.PI * 2
  return { group, update(time, dt) { gem.rotation.y += dt * 1.2; gem.position.y = 12 + Math.sin(time * 1.7 + phase) * 0.6 } }
}

function buildCliffDiamond(x, y, z, color) {
  const group = new THREE.Group(); group.position.set(x, y, z)
  const mat = new THREE.MeshStandardMaterial({ color: color, metalness: 0.35, roughness: 0.12, transparent: true, opacity: 0.82, flatShading: true })
  const main = new THREE.Mesh(new THREE.OctahedronGeometry(16), mat); main.position.y = 14; group.add(main)
  const s1 = new THREE.Mesh(new THREE.OctahedronGeometry(8), mat); s1.position.set(-12, 7, 7); s1.rotation.set(0.4, 1, 0.2); group.add(s1)
  const s2 = new THREE.Mesh(new THREE.OctahedronGeometry(6), mat); s2.position.set(11, 6, -8); s2.rotation.set(0.2, 2, 0.5); group.add(s2)
  const phase = Math.random() * Math.PI * 2
  return { group, update(time, dt) { main.rotation.y += dt * 0.2; main.position.y = 14 + Math.sin(time * 0.7 + phase) * 0.6; s1.rotation.y += dt * 0.3; s2.rotation.y -= dt * 0.25 } }
}

const TECH_SLOTS = [
  { x: 20, z: -120 }, { x: 140, z: -90 }, { x: -90, z: -110 }, { x: 205, z: -165 }, { x: -185, z: -45 },
  { x: 90, z: 135 }, { x: 245, z: 110 }, { x: -45, z: 175 }, { x: 165, z: -10 }, { x: -130, z: 105 }
]
function buildGameIsland(cx, cz, R) {
  const seg = 64
  const geo = new THREE.PlaneGeometry(R * 2, R * 2, seg, seg); geo.rotateX(-Math.PI / 2)
  const noise = makeNoise2D(99)
  const pos = geo.attributes.position, colors = new Float32Array(pos.count * 3)
  const vx = -0.36 * R, vz = 0, volcR = 0.5 * R, craterR = 0.13 * R, peakH = 36, craterDepth = 13
  const band = (h) => h < 0.5 ? hexToRgb('#dcc79a') : (h < 4 ? hexToRgb('#a9b066') : hexToRgb('#86954c'))
  for (let i = 0; i < pos.count; i++) {
    const lx = pos.getX(i), lz = pos.getZ(i)
    const warp = noise(lx * 0.04 + 3, lz * 0.04 - 3) * 0.12
    const inBig = 1 - smoothstep(0.78, 1.0, Math.hypot(lx, lz) / (0.96 * R) + warp)
    const inBite = 1 - smoothstep(0.78, 1.0, Math.hypot(lx - 0.52 * R, lz) / (0.62 * R) + warp)
    const isl = clamp(inBig - inBite, 0, 1)
    let h = fbm(noise, lx + 200, lz - 200, 3, 0.05) * isl * 6 - (1 - isl) * 5
    let cone = 0
    const dv = Math.hypot(lx - vx, lz - vz)
    if (isl > 0.15 && dv < volcR) {
      cone = Math.pow(1 - dv / volcR, 1.35) * peakH
      h += cone
      if (dv < craterR) h -= (1 - dv / craterR) * craterDepth
    }
    pos.setY(i, h)
    let c
    if (cone > 6 && dv < craterR + 3) c = hexToRgb('#cf5a33')
    else if (cone > 10) c = hexToRgb('#5b4a44')
    else c = band(h)
    colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3)); geo.computeVertexNormals()
  const grp = new THREE.Group()
  const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.95, metalness: 0 }))
  grp.add(mesh)
  const lava = new THREE.Mesh(new THREE.CircleGeometry(craterR * 0.8, 18), new THREE.MeshBasicMaterial({ color: 0xff6a2a }))
  lava.rotation.x = -Math.PI / 2; lava.position.set(vx, peakH - craterDepth + 1.6, vz); grp.add(lava)
  grp.position.set(cx, 0, cz); grp.name = 'gaming-island'
  return grp
}

function buildLongLand(cx, cz, hw, hd) {
  const geo = new THREE.PlaneGeometry(hw * 2, hd * 2, 96, 44); geo.rotateX(-Math.PI / 2)
  const noise = makeNoise2D(202)
  const pos = geo.attributes.position, colors = new Float32Array(pos.count * 3)
  const colAt = (h, jx, jz) => {
    let b = BANDS[BANDS.length - 1].c
    for (let k = 0; k < BANDS.length; k++) { if (h < BANDS[k].max) { b = BANDS[k].c; break } }
    const j = noise(jx * 0.5, jz * 0.5) * 0.03
    return { r: clamp(b.r + j, 0, 1), g: clamp(b.g + j, 0, 1), b: clamp(b.b + j, 0, 1) }
  }
  for (let i = 0; i < pos.count; i++) {
    const lx = pos.getX(i), lz = pos.getZ(i)
    const warp = noise(lx * 0.011 + 50, lz * 0.011 - 50) * 0.18
    const d = Math.hypot(lx / hw, lz / hd)
    const isl = 1 - smoothstep(0.72, 1.0, d + warp)
    const base = fbm(noise, lx + cx, lz + cz, 5, 0.013)
    const ridge = ridged(noise, lx + 300, lz - 300, 4, 0.02)
    const mMask = smoothstep(0.5, 0.9, fbm(noise, lx - 200, lz + 400, 3, 0.008))
    const e = clamp(base * 0.55 + ridge * mMask, 0, 1.4)
    const h = e * isl * 46 - (1 - isl) * 8
    pos.setY(i, h)
    const c = colAt(h, lx + cx, lz + cz); colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3)); geo.computeVertexNormals()
  const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.96, metalness: 0 }))
  mesh.position.set(cx, 0, cz); mesh.name = 'frontier-land'
  return mesh
}

function buildLandBridge(cx, cz, hw, hd) {
  const geo = new THREE.PlaneGeometry(hw * 2, hd * 2, 36, 22); geo.rotateX(-Math.PI / 2)
  const noise = makeNoise2D(303)
  const pos = geo.attributes.position, colors = new Float32Array(pos.count * 3)
  for (let i = 0; i < pos.count; i++) {
    const lx = pos.getX(i), lz = pos.getZ(i)
    const xt = 1 - smoothstep(0.6, 1.0, Math.abs(lx) / hw)
    const e = fbm(noise, lx + cx, lz + cz, 3, 0.04)
    const h = (3 + e * 7) * xt - (1 - xt) * 5
    pos.setY(i, h)
    const c = h < 0.6 ? hexToRgb('#d8c388') : (h < 5 ? hexToRgb('#a9b066') : hexToRgb('#86954c'))
    colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3)); geo.computeVertexNormals()
  const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.96, metalness: 0 }))
  mesh.position.set(cx, 0, cz); mesh.name = 'land-bridge'
  return mesh
}

/* --------------------------- MAP SCENE --------------------------- */
const SKY = 0xc3dbe2, LOD_NEAR = 120, LOD_FAR = 210
function createMapScene(container, handlers) {
  handlers = handlers || {}
  const onHover = handlers.onHover, onZoom = handlers.onZoom, onAnchor = handlers.onAnchor
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(container.clientWidth, container.clientHeight)
  if ('outputColorSpace' in renderer && THREE.SRGBColorSpace) renderer.outputColorSpace = THREE.SRGBColorSpace
  else if (THREE.sRGBEncoding) renderer.outputEncoding = THREE.sRGBEncoding
  renderer.domElement.style.display = 'block'; renderer.domElement.style.touchAction = 'none'
  container.appendChild(renderer.domElement)

  const scene = new THREE.Scene(); scene.background = new THREE.Color(SKY); scene.fog = new THREE.Fog(SKY, 2200, 5400)
  const camera = new THREE.PerspectiveCamera(46, container.clientWidth / container.clientHeight, 0.5, 13000)
  scene.add(new THREE.HemisphereLight(0xeaf3ff, 0x5a4a2a, 0.6))
  const sun = new THREE.DirectionalLight(0xfff2cf, 1.45); sun.position.set(120, 180, 70); scene.add(sun)

  const curve = buildRiverCurve(), river2D = sampleRiver2D(curve, 300), distanceTo = makeDistanceField(river2D)
  const terrain = buildTerrain(distanceTo); scene.add(terrain.mesh)
  const sea = buildSea(); scene.add(sea.group)
  const river = buildRiver(curve, terrain.sampleHeight); scene.add(river.mesh)
  scene.add(buildLake())
  PONDS.forEach((P) => scene.add(buildWater(P.x, P.z, P.r * 0.92, P.x * 0.07 + P.z * 0.03)))
  const coins = []
  const ACCENT = { hcl: '#2f7d99', aptean: '#bb3b2c' }
  RESUME.regions.forEach((rg) => {
    const pins = effectivePins().filter((m) => m.region === rg.id)
    const N = pins.length
    pins.forEach((pin, i) => {
      const sd = (rg.id === 'hcl' ? 13 : 71) + i * 1.7
      const r1 = Math.abs(Math.sin(sd * 127.1) * 43758.5) % 1
      const r2 = Math.abs(Math.sin(sd * 311.7) * 24634.6) % 1
      let ang, rad
      if (rg.id === 'aptean') { ang = (i / N) * Math.PI * 2 + 0.4 + (r1 - 0.5) * 0.22; rad = 80 * (0.9 + r2 * 0.18) }
      else { ang = i * 2.399963 + (r1 - 0.5) * 0.9; rad = Math.sqrt((i + 0.6) / N) * 120 * (0.78 + r2 * 0.4) }
      let x = rg.lx, z = rg.lz
      for (let t = 0; t < 6; t++) { x = rg.lx + Math.cos(ang) * rad; z = rg.lz + Math.sin(ang) * rad; if (terrain.sampleHeight(x, z) > 1.2) break; rad *= 0.84 }
      coins.push(buildCoin(pin, x, Math.max(terrain.sampleHeight(x, z), 0.5), z, ACCENT[rg.id]))
    })
  })
  coins.forEach((c) => scene.add(c.group))

  const L = RESUME.lake
  const ringPins = (posts, cx, cz, ringR, color) => posts.map((it, i) => {
    const a = (i / Math.max(posts.length, 1)) * Math.PI * 2 + 0.4, r = ringR + (i % 2) * 7
    const x = cx + Math.cos(a) * r, z = cz + Math.sin(a) * r
    return buildBlogPin(it, x, Math.max(terrain.sampleHeight(x, z), 0.4), z, color)
  })
  const blogPins = ringPins(loadPosts('slice'), L.x, L.z, L.radius + 12, 0x4fa3b8)
  scene.add(buildGameIsland(450, 300, 76))
  const gameLabel = makeTextSprite('RESPAWN ISLE', { fontSize: 84, ls: 8, color: '#46361a', worldHeight: 24 }); gameLabel.material.opacity = 0.82; gameLabel.position.set(450, 50, 300); scene.add(gameLabel)
  const GAME_SLOTS = [{ x: -10, z: -52 }, { x: 15, z: -44 }, { x: -30, z: -38 }, { x: -10, z: 52 }, { x: 15, z: 44 }, { x: -30, z: 38 }]
  loadPosts('hobby').forEach((it, i) => {
    const sl = GAME_SLOTS[i % GAME_SLOTS.length]
    blogPins.push(buildBlogPin(it, 450 + sl.x, 6, 300 + sl.z, 0x9b6cc4))
  })
  const techPts = []
  loadPosts('technical').forEach((it, i) => {
    const sl = TECH_SLOTS[i % TECH_SLOTS.length]
    blogPins.push(buildBlogPin(it, sl.x, Math.max(terrain.sampleHeight(sl.x, sl.z), 0.5), sl.z, 0x2f8fd6))
    techPts.push({ x: sl.x, z: sl.z })
  })
  blogPins.forEach((b) => scene.add(b.group))

  const mkRegion = (name, x, z) => { const s = makeTextSprite(name, { fontSize: 96, ls: 11, color: '#46361a', worldHeight: 42 }); s.material.opacity = 0.82; s.position.set(x, terrain.sampleHeight(x, z) + 58, z); return s }
  const regionSprites = RESUME.regions.map((rg) => mkRegion(rg.name, rg.lx, rg.lz))
  regionSprites.forEach((s) => scene.add(s))
  /* slice-of-life label removed — it lives on the website now */
  const lodLabels = regionSprites.slice()

  const fog = buildFog(distanceTo, terrain.sampleHeight, techPts); scene.add(fog.group)

  const NL = { x: -30, z: -560, hw: 430, hd: 150 }
  scene.add(buildLongLand(NL.x, NL.z, NL.hw, NL.hd))
  scene.add(buildLandBridge(NL.x, -400, 95, 58))
  const itaniaLbl = makeTextSprite('ITANIA', { fontSize: 90, ls: 12, color: '#46361a', worldHeight: 46 }); itaniaLbl.material.opacity = 0.85; itaniaLbl.position.set(NL.x, 72, NL.z); scene.add(itaniaLbl)
  const fCloudTex = cloudTexture()
  const frontierClouds = []
  for (let fx = NL.x - NL.hw; fx <= NL.x + NL.hw; fx += 56) {
    for (let fz = NL.z - NL.hd; fz <= NL.z + NL.hd; fz += 56) {
      if (Math.hypot((fx - NL.x) / NL.hw, (fz - NL.z) / NL.hd) > 0.82) continue
      const m = new THREE.SpriteMaterial({ map: fCloudTex, transparent: true, depthWrite: false, opacity: 0.5 + Math.random() * 0.28, color: 0xefe7d2 })
      const sp = new THREE.Sprite(m); const sc = 42 + Math.random() * 30; sp.scale.set(sc, sc * 0.7, 1)
      const bx = fx + (Math.random() - 0.5) * 30, bz = fz + (Math.random() - 0.5) * 30
      sp.position.set(bx, 36 + Math.random() * 14, bz); scene.add(sp)
      frontierClouds.push({ sp, bx, bz, speed: 0.05 + Math.random() * 0.06, drift: 4 + Math.random() * 4, phase: Math.random() * 6.283 })
    }
  }

  const center = new THREE.Vector3(120, 0, 130)
  const controls = new MapControls(camera, renderer.domElement, { target: center, distance: 640, minDistance: 110, maxDistance: 2400, tilt: 52, bound: 640 })

  const raycaster = new THREE.Raycaster(), ndc = new THREE.Vector2()
  const allHits = coins.reduce((a, c) => a.concat(c.hitMeshes), []).concat(blogPins.reduce((a, b) => a.concat(b.hitMeshes), []))
  let hoveredKey = null, lastMove = null
  const coinFor = (id) => coins.find((c) => c.exp.id === id)
  const blogFor = (id) => blogPins.find((b) => b.pid === id)
  function pick(e) {
    const rect = renderer.domElement.getBoundingClientRect()
    ndc.x = ((e.clientX - rect.left) / rect.width) * 2 - 1; ndc.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
    raycaster.setFromCamera(ndc, camera)
    const hits = raycaster.intersectObjects(allHits, false)
    if (!hits.length) return null
    const u = hits[0].object.userData
    return u.expId ? { kind: 'exp', id: u.expId } : (u.blogId ? { kind: 'blog', id: u.blogId } : null)
  }
  function applyHover(p) {
    const key = p ? p.kind + ':' + p.id : null
    if (key === hoveredKey) return
    if (hoveredKey && hoveredKey.indexOf('exp:') === 0) { const c = coinFor(hoveredKey.slice(4)); if (c) c.setHover(false) }
    if (hoveredKey && hoveredKey.indexOf('blog:') === 0) { const b = blogFor(hoveredKey.slice(5)); if (b) b.setHover(false) }
    hoveredKey = key
    if (p) {
      if (p.kind === 'exp') { const c = coinFor(p.id); if (c) { c.setHover(true); anchorWorld = new THREE.Vector3(c.group.position.x, c.group.position.y + 18, c.group.position.z); if (onHover) onHover({ kind: 'exp', exp: c.exp }) } }
      else { const b = blogFor(p.id); if (b) { b.setHover(true); anchorWorld = new THREE.Vector3(b.group.position.x, b.group.position.y + 15, b.group.position.z); if (onHover) onHover({ kind: 'blog', blog: b.item }) } }
      renderer.domElement.style.cursor = 'pointer'
    } else { renderer.domElement.style.cursor = 'grab'; if (onHover) onHover(null) }
  }
  const onMove = (e) => { lastMove = e; applyHover(pick(e)) }
  const onClick = (e) => { const p = pick(e); if (!p) return; if (p.kind === 'exp') focusOn(coinFor(p.id).position, 230); else focusOn(blogFor(p.id).group.position, 240) }
  renderer.domElement.addEventListener('pointermove', onMove)
  renderer.domElement.addEventListener('pointerup', onClick)
  renderer.domElement.addEventListener('wheel', () => { if (lastMove) requestAnimationFrame(() => applyHover(pick(lastMove))) }, { passive: true })

  let tween = null, lastDist = -1, anchorWorld = null; const projV = new THREE.Vector3()
  const focusOn = (pos, dist) => { tween = { t: 0, dur: 0.9, from: { x: controls.target.x, z: controls.target.z, d: controls.distance }, to: { x: clamp(pos.x, -controls.bound, controls.bound), z: clamp(pos.z, -controls.bound, controls.bound), d: dist } } }
  const resetView = () => focusOn(center, 640)

  const clock = new THREE.Clock(); let raf = 0
  function animate() {
    raf = requestAnimationFrame(animate)
    const dt = Math.min(clock.getDelta(), 0.05), time = clock.elapsedTime
    if (tween) {
      tween.t += dt / tween.dur; const k = smoothstep(0, 1, Math.min(tween.t, 1))
      controls.target.x = lerp(tween.from.x, tween.to.x, k); controls.target.z = lerp(tween.from.z, tween.to.z, k); controls.distance = lerp(tween.from.d, tween.to.d, k)
      if (tween.t >= 1) tween = null
    }
    coins.forEach((c) => c.update(time, dt))
    blogPins.forEach((b) => b.update(time, dt))
    sea.update(time); river.update(time); fog.update(time); frontierClouds.forEach((c) => { c.sp.position.x = c.bx + Math.sin(time * c.speed + c.phase) * c.drift; c.sp.position.z = c.bz + Math.cos(time * c.speed * 0.8 + c.phase) * c.drift * 0.6 }); controls.update()
    if (onZoom && Math.abs(controls.distance - lastDist) > 4) { lastDist = controls.distance; onZoom(controls.distance) }
    if (anchorWorld && onAnchor) { projV.copy(anchorWorld).project(camera); if (projV.z < 1) onAnchor((projV.x * 0.5 + 0.5) * renderer.domElement.clientWidth, (-projV.y * 0.5 + 0.5) * renderer.domElement.clientHeight) }
    renderer.render(scene, camera)
  }
  animate()

  const ro = new ResizeObserver(() => { const w = container.clientWidth, h = container.clientHeight; if (!w || !h) return; camera.aspect = w / h; camera.updateProjectionMatrix(); renderer.setSize(w, h) })
  ro.observe(container)

  return {
    zoomIn() { controls.zoomBy(0.82) },
    zoomOut() { controls.zoomBy(1.22) },
    resetView,
    dispose() {
      cancelAnimationFrame(raf); ro.disconnect()
      renderer.domElement.removeEventListener('pointermove', onMove); renderer.domElement.removeEventListener('pointerup', onClick)
      controls.dispose()
      scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) { const m = Array.isArray(o.material) ? o.material : [o.material]; m.forEach((x) => { if (x.map) x.map.dispose(); x.dispose() }) } })
      renderer.dispose(); if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement)
    }
  }
}

/* ============================ VUE APP ============================ */
const { createApp, ref, onMounted, onBeforeUnmount } = Vue
const C = RESUME.contact

const NavBar = {
  props: ['view'],
  emits: ['nav'],
  template: `
  <header class="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 md:px-10 pointer-events-none">
    <div v-if="view==='map'" class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-parch-0/85 to-transparent"></div>
    <div v-else class="pointer-events-none absolute inset-0 -z-10 bg-parch-0 shadow-[0_1px_0_rgba(120,90,32,0.15)]"></div>
    <button v-if="view !== 'resume'" class="pointer-events-auto flex flex-col items-start leading-none" @click="$emit('nav','map')">
      <span class="font-semibold text-ink" style="font-family:'Segoe UI',system-ui,-apple-system,Roboto,Helvetica,Arial,sans-serif;font-size:2.15rem;letter-spacing:0.05em">JONES XAVIER</span>
      <span class="mt-1.5 hidden text-[0.66rem] tracking-[0.34em] text-ink-faint sm:block">SENIOR SITE RELIABILITY ENGINEER</span>
    </button>
    <span v-else></span>
    <nav class="pointer-events-auto flex items-center gap-5 md:gap-7">
      <button :class="lk('map')" @click="$emit('nav','map')">MAP</button>
      <button :class="lk('resume')" @click="$emit('nav','resume')">RÉSUMÉ</button>
      <button :class="lk('github')" @click="$emit('nav','github')">GITHUB</button>
      <div class="relative">
        <button :class="lkBlogs()" @click="blogsOpen=!blogsOpen">BLOGS ▾</button>
        <template v-if="blogsOpen">
          <div class="fixed inset-0 z-40" @click="blogsOpen=false"></div>
          <div class="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-md border border-gold/40 bg-parch-0 shadow-lg">
            <button class="block w-full px-4 py-2 text-left text-[0.72rem] tracking-[0.18em] text-ink-soft transition-colors hover:bg-gold/10 hover:text-gold-deep" @click="pick('slice')">SLICE OF LIFE</button>
            <button class="block w-full px-4 py-2 text-left text-[0.72rem] tracking-[0.18em] text-ink-soft transition-colors hover:bg-gold/10 hover:text-gold-deep" @click="pick('technical')">TECHNICAL</button>
            <button class="block w-full px-4 py-2 text-left text-[0.72rem] tracking-[0.18em] text-ink-soft transition-colors hover:bg-gold/10 hover:text-gold-deep" @click="pick('hobby')">HOBBY</button>
          </div>
        </template>
      </div>
      <a :class="lk('')" :href="li" target="_blank" rel="noopener">LINKEDIN</a>
    </nav>
  </header>`,
  data() { return { li: C.linkedin, blogsOpen: false } },
  methods: {
    lk(v) {
      const base = 'pb-1 text-[0.7rem] tracking-[0.18em] border-b-[1.5px] transition-colors md:text-[0.78rem] md:tracking-[0.22em]'
      return v && this.view === v ? base + ' text-gold-deep border-gold' : base + ' text-ink-soft border-transparent hover:text-gold-deep'
    },
    lkBlogs() {
      const base = 'pb-1 text-[0.7rem] tracking-[0.18em] border-b-[1.5px] transition-colors md:text-[0.78rem] md:tracking-[0.22em]'
      return (this.view === 'technical' || this.view === 'slice') ? base + ' text-gold-deep border-gold' : base + ' text-ink-soft border-transparent hover:text-gold-deep'
    },
    pick(c) { this.$emit('nav', c); this.blogsOpen = false }
  }
}

const MapView = {
  template: `
  <div class="fixed inset-0 overflow-hidden bg-parch-1">
    <div ref="host" class="absolute inset-0 z-0"></div>

    <!-- Loading screen -->
    <div v-if="loading" class="absolute inset-0 flex flex-col items-center justify-center" style="z-index:60;background:radial-gradient(120% 120% at 50% 30%, #6f8fe8 0%, #4866d0 55%, #3550b4 100%)">
      <div style="font-family:Georgia,serif;letter-spacing:0.34em;text-transform:uppercase;color:#e7c45a;font-size:0.8rem">An Explorer's Chart</div>
      <h2 class="mt-4 max-w-2xl px-8 text-center" style="font-family:Georgia,serif;color:#f1d176;font-size:1.8rem;line-height:1.3">{{ line }}</h2>
      <div class="mt-9 h-1 w-44 overflow-hidden rounded-full" style="background:rgba(231,196,90,0.22)">
        <div class="loadbar h-full rounded-full" style="background:linear-gradient(90deg,#caa23c,#f3d781,#caa23c)"></div>
      </div>
      <div class="mt-3" style="color:rgba(241,209,118,0.7);font-size:0.72rem;letter-spacing:0.2em">CHARTING THE MAP…</div>
    </div>

    <div class="pointer-events-none absolute inset-0 z-10 select-none">
      <div class="absolute left-6 top-24 md:left-10 md:top-28" :style="{ opacity: titleVisible ? 1 : 0, transition: 'opacity .35s' }">
        <div class="eyebrow">An Explorer's Chart</div>
        <h1 class="mt-1 font-display text-2xl text-ink md:text-[2rem]">The Career of an SRE</h1>
        <p class="mt-1 max-w-xs text-sm text-ink-soft">20% explored so far.</p>
      </div>

      <transition name="card">
        <aside v-if="selected" class="pointer-events-auto absolute z-20 w-[340px] max-w-[86vw] rounded-xl border border-gold/40 bg-parch-0/95 p-5 shadow-xl backdrop-blur-sm" :style="panelStyle">
          <button class="absolute right-3 top-3 text-ink-faint hover:text-gold-deep" @click="selected=null">✕</button>
          <transition name="swap" mode="out-in">
            <div :key="cardKey">
              <template v-if="selected.kind==='exp'">
                <div class="eyebrow">Landing No. {{ selected.exp.order }}</div>
                <h2 class="mt-1 font-display text-xl text-ink">{{ selected.exp.role }}</h2>
                <p class="text-sm font-semibold text-gold-deep">{{ selected.exp.org }}<span v-if="selected.exp.subtitle"> · {{ selected.exp.subtitle }}</span></p>
                <p class="mb-3 text-xs tracking-wide text-ink-faint">{{ selected.exp.period }}</p>
                <ul class="space-y-2">
                  <li v-for="(b,i) in selected.exp.bullets" :key="i" class="flex gap-2 text-sm text-ink-soft"><span class="mt-1 text-gold">◆</span><span>{{ b }}</span></li>
                </ul>
              </template>
              <template v-else>
                <div class="eyebrow">Logbook</div>
                <h2 class="mt-1 font-display text-xl text-ink">{{ selected.blog.title }}</h2>
                <p class="mb-3 text-xs tracking-wide text-ink-faint">{{ selected.blog.date }}</p>
                <p class="whitespace-pre-line text-sm leading-relaxed text-ink-soft">{{ selected.blog.body }}</p>
              </template>
            </div>
          </transition>
        </aside>
      </transition>

      <div class="pointer-events-auto absolute bottom-8 right-6 flex flex-col gap-2 md:right-8">
        <button class="map-btn" @click="zin">+</button>
        <button class="map-btn" @click="zout">−</button>
        <button class="map-btn text-base" @click="reset">⤢</button>
      </div>
    </div>
  </div>`,
  setup() {
    const host = ref(null), selected = ref(null), loading = ref(true), titleVisible = ref(true), anchor = ref({ x: 0, y: 0 })
    const lines = RESUME.loadingLines
    const line = lines[Math.floor(Math.random() * lines.length)]
    const panelStyle = Vue.computed(() => {
      const vw = window.innerWidth, w = 340
      const onLeft = anchor.value.x < vw / 2  // same side as the pin
      return { left: (onLeft ? 24 : (vw - w - 24)) + 'px', top: '50%', transform: 'translateY(-50%)', transition: 'left .45s ease' }
    })
    const cardKey = Vue.computed(() => { const x = selected.value; return x ? (x.kind === 'exp' ? 'e' + x.exp.role : 'b' + x.blog.title) : '' })
    let scene = null, hideTimer
    onMounted(() => {
      requestAnimationFrame(() => requestAnimationFrame(() => {
        scene = createMapScene(host.value, { onHover: (payload) => { if (payload) { clearTimeout(hideTimer); selected.value = payload } else { clearTimeout(hideTimer); hideTimer = setTimeout(() => { selected.value = null }, 220) } }, onZoom: (d) => { titleVisible.value = d > 420 }, onAnchor: (x, y) => { anchor.value = { x, y } } })
        setTimeout(() => { loading.value = false }, 1500)
      }))
    })
    onBeforeUnmount(() => { if (scene) scene.dispose() })
    return { host, selected, loading, line, titleVisible, anchor, panelStyle, cardKey, zin: () => scene && scene.zoomIn(), zout: () => scene && scene.zoomOut(), reset: () => scene && scene.resetView() }
  }
}

const ResumeView = {
  template: `
  <div class="min-h-screen bg-gradient-to-b from-parch-0 to-parch-2">
    <article class="mx-auto max-w-[920px] px-6 pb-24 pt-28 md:px-8">
      <header>
        <h1 class="text-5xl text-ink md:text-6xl" style="font-family:'Segoe UI',system-ui,-apple-system,Roboto,Helvetica,Arial,sans-serif;font-weight:600;letter-spacing:-0.01em">{{ c.name }}</h1>
        <p class="mt-2 text-sm font-semibold uppercase tracking-[0.28em] text-gold-deep">{{ c.title }}</p>
        <p class="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-soft">
          <a :href="'mailto:'+c.email">{{ c.email }}</a><span class="text-gold/50">·</span>
          <a :href="c.linkedin" target="_blank" rel="noopener">LinkedIn</a><span class="text-gold/50">·</span>
          <a :href="c.github" target="_blank" rel="noopener">GitHub</a><span class="text-gold/50">·</span>
          <span>{{ c.location }} · {{ c.phone }}</span>
        </p>
        <div class="mt-6 flex gap-3">
          <button class="rounded-full bg-gold px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-parch-0 transition-colors hover:bg-gold-deep" @click="downloadPdf">Download PDF</button>
          <button class="rounded-full border border-gold/50 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep transition-colors hover:border-gold hover:bg-gold/10" @click="print">Print</button>
        </div>
      </header>
      <section class="mt-12"><div class="flex items-center gap-4"><span class="eyebrow whitespace-nowrap">Summary</span><span class="rule-line"></span></div>
        <p class="mt-5 max-w-[72ch] leading-relaxed text-ink-soft">{{ summary }}</p></section>
      <section class="mt-12"><div class="flex items-center gap-4"><span class="eyebrow whitespace-nowrap">Experience</span><span class="rule-line"></span></div>
        <div class="mt-5 space-y-7">
          <div v-for="e in experiences" :key="e.id">
            <div class="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 class="font-display text-xl text-ink">{{ e.role }}<span v-if="e.subtitle" class="text-ink-faint"> ({{ e.subtitle }})</span></h3>
              <span class="text-sm text-ink-faint">{{ e.period }}</span>
            </div>
            <p class="text-sm font-semibold text-gold-deep">{{ e.org }}</p>
            <ul class="mt-2 space-y-1.5">
              <li v-for="(b,i) in e.bullets" :key="i" class="flex gap-2.5 text-[0.92rem] leading-relaxed text-ink-soft"><span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70"></span><span>{{ b }}</span></li>
            </ul>
          </div>
        </div>
      </section>
      <section class="mt-12"><div class="flex items-center gap-4"><span class="eyebrow whitespace-nowrap">Skills</span><span class="rule-line"></span></div>
        <div class="mt-5 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="g in skillGroups" :key="g.title">
            <h4 class="mb-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-ink">{{ g.title }}</h4>
            <div class="flex flex-wrap gap-2"><span v-for="s in g.items" :key="s" class="rounded-md border border-gold/40 bg-parch-0/60 px-2.5 py-1 text-xs text-ink-soft">{{ s }}</span></div>
          </div>
        </div>
      </section>
      <div class="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
        <div><div class="flex items-center gap-4"><span class="eyebrow whitespace-nowrap">Certifications</span><span class="rule-line"></span></div>
          <ul class="mt-4 space-y-2 text-sm text-ink-soft"><li v-for="ct in certifications" :key="ct" class="flex gap-2.5"><span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70"></span><span>{{ ct }}</span></li></ul></div>
        <div><div class="flex items-center gap-4"><span class="eyebrow whitespace-nowrap">Education</span><span class="rule-line"></span></div>
          <h4 class="mt-4 font-display text-lg text-ink">{{ education.degree }}</h4>
          <p class="text-sm text-ink-soft">{{ education.school }}</p>
          <p class="text-sm text-ink-faint">{{ education.location }}</p></div>
      </div>
    </article>
  </div>`,
  setup() {
    return { c: C, summary: RESUME.summary, experiences: RESUME.experiences, skillGroups: RESUME.skillGroups, certifications: RESUME.certifications, education: RESUME.education,
      print: () => window.print(),
      downloadPdf: () => { const a = document.createElement('a'); a.href = 'Jones_Xavier_Resume.pdf'; a.download = 'Jones_Xavier_Resume.pdf'; document.body.appendChild(a); a.click(); a.remove() } }
  }
}

const GithubView = {
  template: `
  <div class="min-h-screen bg-gradient-to-b from-parch-0 to-parch-2">
    <div class="mx-auto max-w-[920px] px-6 pb-24 pt-28 md:px-8">
      <div class="eyebrow">Field Notes</div>
      <h1 class="mt-1 font-display text-5xl text-ink">GitHub</h1>
      <p class="mt-4 max-w-[60ch] leading-relaxed text-ink-soft">This expedition log is still being drawn. Repositories, pinned projects and contribution activity will be charted here — we'll wire this section up next.</p>
      <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="i in 6" :key="i" class="rounded-xl border border-gold/30 bg-parch-0/60 p-5">
          <div class="h-3 w-2/3 rounded bg-gold/25"></div><div class="mt-3 h-2 w-full rounded bg-ink/10"></div>
          <div class="mt-2 h-2 w-5/6 rounded bg-ink/10"></div>
          <div class="mt-5 flex gap-2"><span class="h-2 w-12 rounded-full bg-gold/20"></span><span class="h-2 w-10 rounded-full bg-gold/20"></span></div>
        </div>
      </div>
      <a :href="gh" target="_blank" rel="noopener" class="mt-10 inline-block rounded-full border border-gold/50 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep transition-colors hover:border-gold hover:bg-gold/10">Visit GitHub profile →</a>
    </div>
  </div>`,
  setup() { return { gh: C.github } }
}

const BlogPage = {
  props: ['cat'],
  template: `
  <div class="min-h-screen bg-gradient-to-b from-parch-0 to-parch-2">
    <div class="mx-auto max-w-[920px] px-6 pb-24 pt-28 md:px-8">
      <div class="eyebrow">{{ cat === 'technical' ? 'Captain\u2019s Log' : (cat === 'hobby' ? 'Player One' : 'Off the Clock') }}</div>
      <h1 class="mt-1 font-display text-5xl text-ink">{{ label }}</h1>
      <p class="mt-4 max-w-[62ch] leading-relaxed text-ink-soft">{{ intro }}</p>

      <div class="mt-8 flex flex-wrap items-center gap-3">
        <span class="eyebrow whitespace-nowrap">{{ label }}</span><span class="rule-line"></span>
        <button class="shrink-0 rounded-full border border-gold/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep transition-colors hover:border-gold hover:bg-gold/10" @click="open=!open">+ Add</button>
        <button class="shrink-0 rounded-full border border-gold/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft transition-colors hover:border-gold hover:text-gold-deep" @click="exportDrafts">Publish…</button>
      </div>

      <div v-if="open" class="mt-4 rounded-xl border border-gold/40 bg-parch-0/70 p-4">
        <input v-model="draft.title" placeholder="Title" class="mb-2 w-full rounded-md border border-gold/40 bg-parch-0 px-3 py-2 text-sm text-ink outline-none focus:border-gold" />
        <input v-model="draft.date" placeholder="Date (optional)" class="mb-2 w-full rounded-md border border-gold/40 bg-parch-0 px-3 py-2 text-sm text-ink outline-none focus:border-gold" />
        <textarea v-model="draft.body" placeholder="Write your post…" rows="4" class="mb-3 w-full rounded-md border border-gold/40 bg-parch-0 px-3 py-2 text-sm text-ink outline-none focus:border-gold"></textarea>
        <div class="flex gap-2">
          <button class="rounded-full bg-gold px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-parch-0 transition-colors hover:bg-gold-deep" @click="submit">Save</button>
          <button class="rounded-full border border-gold/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft transition-colors hover:border-gold" @click="open=false">Cancel</button>
        </div>
      </div>

      <div v-if="exported" class="mt-4 rounded-xl border border-gold/40 bg-parch-0/70 p-4">
        <p class="mb-2 text-xs leading-relaxed text-ink-soft">To make these public for everyone, paste this into <code>RESUME.blogDefaults.{{ cat }}</code> in <code>app.js</code>, commit &amp; push — then "Clear local drafts".</p>
        <textarea readonly rows="7" class="w-full rounded-md border border-gold/40 bg-parch-0 px-3 py-2 font-mono text-xs text-ink-soft outline-none">{{ exported }}</textarea>
        <div class="mt-2 flex gap-2">
          <button class="rounded-full border border-gold/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft transition-colors hover:border-gold" @click="exported=''">Close</button>
          <button class="rounded-full border border-gold/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft transition-colors hover:border-gold" @click="clearDrafts">Clear local drafts</button>
        </div>
      </div>

      <p v-if="posts.length === 0" class="mt-6 text-sm text-ink-faint">Nothing charted yet — hit <strong>+ Add</strong> to write your first entry.</p>
      <div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(b,i) in posts" :key="i" class="rounded-xl border border-gold/30 bg-parch-0/60 p-5">
          <div class="mb-1 flex items-start justify-between gap-2">
            <h3 class="font-display text-lg text-ink">{{ b.title }}</h3>
            <span v-if="i >= defaultCount" class="mt-1 shrink-0 rounded-full bg-gold/15 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-gold-deep">Draft</span>
          </div>
          <p class="text-xs text-ink-faint">{{ b.date }}</p>
          <p class="mt-2 whitespace-pre-line text-sm text-ink-soft">{{ b.body }}</p>
        </div>
      </div>
    </div>
  </div>`,
  setup(props) {
    const posts = Vue.ref(loadPosts(props.cat))
    const open = Vue.ref(false)
    const draft = Vue.ref({ title: '', date: '', body: '' })
    const exported = Vue.ref('')
    const defaultCount = (RESUME.blogDefaults[props.cat] || []).length
    const label = props.cat === 'technical' ? 'Technical' : (props.cat === 'hobby' ? 'Hobby' : 'Slice of Life')
    const intro = props.cat === 'technical'
      ? 'War stories from the trenches — outages survived, pipelines tamed, the odd 3am win. Add with + Add; Publish to make them public.'
      : (props.cat === 'hobby'
        ? 'Games I play and what I took from them — runs, raids and small victories. Each entry is a pin on Respawn Isle. Add with + Add; Publish to make them public.'
        : 'Life outside the terminal — trails, coffee, books, small joys. Add with + Add; Publish to make them public.')
    const submit = () => {
      const d = draft.value
      if (!d.title.trim()) return
      const post = { title: d.title.trim(), date: (d.date.trim() || String(new Date().getFullYear())), body: d.body.trim() }
      savePost(props.cat, post); posts.value = posts.value.concat([post])
      open.value = false; draft.value = { title: '', date: '', body: '' }
    }
    const exportDrafts = () => {
      let saved = []
      try { saved = JSON.parse(localStorage.getItem('blog_' + props.cat) || '[]') } catch (e) {}
      exported.value = saved.length ? JSON.stringify(saved, null, 2) : '(no local drafts yet — add some with + Add)'
    }
    const clearDrafts = () => { localStorage.removeItem('blog_' + props.cat); posts.value = loadPosts(props.cat); exported.value = '' }
    return { posts, open, draft, exported, defaultCount, label, intro, submit, exportDrafts, clearDrafts }
  }
}

const VIEWS = { map: 1, resume: 1, github: 1, technical: 1, slice: 1, hobby: 1 }
createApp({
  components: { NavBar, MapView, ResumeView, GithubView, BlogPage },
  setup() {
    const view = ref('map')
    const fromHash = () => { const h = (location.hash || '').replace('#/', '').replace('#', ''); view.value = VIEWS[h] ? h : 'map' }
    const setView = (v) => { location.hash = v === 'map' ? '' : '#' + v; view.value = v }
    onMounted(() => { fromHash(); window.addEventListener('hashchange', fromHash) })
    return { view, setView }
  },
  template: `<div class="font-body">
    <MapView v-if="view==='map'" />
    <ResumeView v-else-if="view==='resume'" />
    <GithubView v-else-if="view==='github'" />
    <BlogPage v-else-if="view==='technical'" cat="technical" :key="'t'" />
    <BlogPage v-else-if="view==='slice'" cat="slice" :key="'s'" />
    <BlogPage v-else-if="view==='hobby'" cat="hobby" :key="'h'" />
  </div>`
}).mount('#app')
