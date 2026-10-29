import type { LeadPayload } from './types'

type LeadDestination = {
  url: string
  defaultCampaign: string
}

const DESTINATIONS: Record<string, LeadDestination> = {
  'comunidad-pombalfit': {
    url: 'https://script.google.com/macros/s/AKfycbyMJGc1a2inh6ZAOyXKhnfsCkXroUao_zRVz6xdEbzLovLDBDQou-sw3EHTaY1ZgI-P/exec',
    defaultCampaign: 'comunidad',
  },
}

export function getLeadDestination(
  quizId: string,
): LeadDestination | null {
  return DESTINATIONS[quizId] ?? null
}

export type GoogleSheetsLead = {
  nombre: string
  email: string
  whatsapp: string

  edad: string
  cambioDeseado: string
  objetivo: string
  alimentacionActual: string
  planAlimentacion: string
  ejercicio: string
  principalDificultad: string
  freno: string
  resultadoDeseado: string
  cuando: string
  ayuda: string
  contacto: string

  origen: string
  campana: string
}

export function toGoogleSheetsLead(
  lead: LeadPayload,
  defaultCampaign: string,
): GoogleSheetsLead {
  return {
    nombre: lead.name,
    email: lead.email,
    whatsapp: lead.whatsapp,

    // 1. Edad
    edad: lead.answer_1 ?? '',

    // 2. Objetivo principal
    objetivo: lead.answer_2 ?? '',

    // 3. Alimentación actual
    alimentacionActual: lead.answer_3 ?? '',

    // 4. Plan de alimentación actual
    planAlimentacion: lead.answer_4 ?? '',

    // 5. Ejercicio actual
    ejercicio: lead.answer_5 ?? '',

    // 6. Principal dificultad
    principalDificultad: lead.answer_6 ?? '',

    // 7. Qué le está frenando
    freno: lead.answer_7 ?? '',

    // 8. Resultado concreto que quiere conseguir
    resultadoDeseado: lead.answer_8 ?? '',

    // 9. Cuándo quiere empezar
    cuando: lead.answer_9 ?? '',

    // 10. Qué ayuda necesita
    ayuda: lead.answer_10 ?? '',

    // 11. Si quiere que contactemos
    contacto: lead.answer_11 ?? '',

    // Ya no utilizamos "Cambio deseado"
    cambioDeseado: '',

    origen: lead.utm_source || 'Directo',
    campana: lead.utm_campaign || defaultCampaign,
  }
}
