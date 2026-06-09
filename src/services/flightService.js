import axios from 'axios'

const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true'
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

// ─── Dados de referência ───────────────────────────────────────────────────

const AIRLINES = [
  { code: 'TM', name: 'LAM Moçambique Airlines' },
  { code: 'ET', name: 'Ethiopian Airlines' },
  { code: 'EK', name: 'Emirates' },
  { code: 'QR', name: 'Qatar Airways' },
  { code: 'SA', name: 'South African Airways' },
  { code: 'KQ', name: 'Kenya Airways' },
  { code: 'MS', name: 'EgyptAir' },
  { code: '3Z', name: 'Airlink' },
]

const AIRPORTS = {
  MPM: 'Aeroporto Internacional de Maputo',
  BEW: 'Aeroporto Internacional da Beira',
  APL: 'Aeroporto Internacional de Nampula',
  POL: 'Aeroporto de Pemba',
  VNX: 'Aeroporto de Vilankulo',
  TET: 'Aeroporto de Tete',
  UEL: 'Aeroporto de Quelimane',
  VPY: 'Aeroporto de Chimoio',
  JNB: 'O.R. Tambo International Airport',
  LIS: 'Aeroporto Humberto Delgado',
  DXB: 'Dubai International Airport',
  ADD: 'Addis Ababa Bole International Airport',
  NBO: 'Jomo Kenyatta International Airport',
  DOH: 'Hamad International Airport',
  CAI: 'Cairo International Airport',
  CPT: 'Cape Town International Airport',
}

const ROUTES = {
  MPM: ['JNB', 'LIS', 'DXB', 'ADD', 'NBO', 'DOH', 'BEW', 'APL', 'CAI', 'CPT'],
  BEW: ['MPM', 'JNB', 'APL', 'TET', 'UEL'],
  APL: ['MPM', 'BEW', 'POL', 'UEL', 'ADD'],
  POL: ['MPM', 'APL', 'ADD', 'NBO'],
  VNX: ['MPM', 'JNB', 'CPT'],
  TET: ['MPM', 'BEW', 'UEL'],
  UEL: ['MPM', 'APL', 'BEW'],
  VPY: ['MPM', 'BEW', 'TET'],
}

const STATUSES = ['Programado', 'Programado', 'Programado', 'Em voo', 'Aterrou', 'Cancelado']
const GATES = ['A', 'B', 'C', 'D']

// ─── Helpers ───────────────────────────────────────────────────────────────

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateScheduledTime(offsetHours) {
  const d = new Date()
  d.setHours(d.getHours() + offsetHours)
  d.setMinutes(pick([0, 15, 30, 45]))
  d.setSeconds(0)
  d.setMilliseconds(0)
  return d.toISOString()
}

function generateFlight(depCode, arrCode, index = 0) {
  const airline = pick(AIRLINES)
  const status = pick(STATUSES)
  const hasDelay = Math.random() > 0.75
  const depOffset = index * 1.5 - 3
  const arrOffset = depOffset + randomInt(1, 4)

  return {
    flight_number: `${airline.code}${randomInt(100, 999)}`,
    airline: airline.name,
    status,
    departure: {
      airport: depCode,
      airport_name: AIRPORTS[depCode] || depCode,
      scheduled: generateScheduledTime(depOffset),
      terminal: Math.random() > 0.4 ? String(randomInt(1, 3)) : null,
      gate: Math.random() > 0.3 ? `${pick(GATES)}${randomInt(1, 25)}` : null,
      delay: hasDelay ? randomInt(5, 90) : null,
    },
    arrival: {
      airport: arrCode,
      airport_name: AIRPORTS[arrCode] || arrCode,
      scheduled: generateScheduledTime(arrOffset),
      terminal: Math.random() > 0.4 ? String(randomInt(1, 5)) : null,
      gate: Math.random() > 0.3 ? `${pick(GATES)}${randomInt(1, 30)}` : null,
      delay: null,
      baggage: Math.random() > 0.5 ? `Esteira ${randomInt(1, 6)}` : null,
    },
  }
}

function mockDelay() {
  return new Promise((resolve) => setTimeout(resolve, randomInt(500, 1200)))
}

// ─── API pública ───────────────────────────────────────────────────────────

export async function searchFlightsByAirport(airportCode, type = 'departure') {
  if (!USE_MOCK) {
    const res = await axios.get(`${API_URL}/v1/flights/search`, {
      params: { airport_code: airportCode, type },
    })
    return res.data.data || []
  }

  await mockDelay()

  const routes = ROUTES[airportCode] || ['JNB', 'LIS', 'ADD']
  const count = randomInt(3, 7)

  return Array.from({ length: count }, (_, i) => {
    const partner = routes[i % routes.length]
    return type === 'departure'
      ? generateFlight(airportCode, partner, i)
      : generateFlight(partner, airportCode, i)
  })
}

export async function searchFlightByNumber(flightNumber) {
  if (!USE_MOCK) {
    const res = await axios.get(`${API_URL}/v1/flights/number/${flightNumber.toUpperCase()}`)
    return res.data.data || null
  }

  await mockDelay()

  const code = flightNumber.match(/^[A-Z]+/i)?.[0]?.toUpperCase() || 'TM'
  const airline = AIRLINES.find((a) => a.code === code) || AIRLINES[0]
  const routes = ROUTES.MPM
  const dest = pick(routes)
  const flight = generateFlight('MPM', dest, 0)
  flight.flight_number = flightNumber.toUpperCase()
  flight.airline = airline.name
  return flight
}
