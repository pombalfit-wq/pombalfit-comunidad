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

    // 2. Qué le gustaría conseguir (respuesta abierta)
    cambioDeseado: lead.answer_2 ?? '',

    // 3. Objetivo principal
    objetivo: lead.answer_3 ?? '',

    // 4. Cómo está cuidando su alimentación
    alimentacionActual: lead.answer_4 ?? '',

    // 5. Si sigue un plan de alimentación
    planAlimentacion: lead.answer_5 ?? '',

    // 6. Ejercicio actual
    ejercicio: lead.answer_6 ?? '',

    // 7. Principal dificultad
    principalDificultad: lead.answer_7 ?? '',

    // 8. Qué cree que le está frenando (respuesta abierta)
    freno: lead.answer_8 ?? '',

    // 9. Cambio concreto que quiere conseguir (respuesta abierta)
    resultadoDeseado: lead.answer_9 ?? '',

    // 10. Cuándo quiere empezar
    cuando: lead.answer_10 ?? '',

    // 11. Qué ayuda cree que necesita
    ayuda: lead.answer_11 ?? '',

    // 12. Si quiere que contactemos con ella
    contacto: lead.answer_12 ?? '',

    origen: lead.utm_source || 'Directo',
    campana: lead.utm_campaign || defaultCampaign,
  }
}
