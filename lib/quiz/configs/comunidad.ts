import type { QuizConfig } from '../types'

export const recetasQuiz: QuizConfig = {
  id: 'comunidad-pombalfit',
  brand: 'PombalFit',

  welcome: {
    title: 'Queremos conocerte mejor 💗',
    headline: 'Cuéntanos un poquito sobre ti',
    description:
      'Si formas parte de la comunidad PombalFit, nos encantaría saber en qué momento te encuentras, qué te gustaría conseguir y qué es lo que más te está costando. Tus respuestas nos ayudarán a conocerte mejor y a saber cómo podemos ayudarte.',
    cta: 'EMPEZAR',
    highlights: [
      'Solo unos minutos',
      'Respuestas confidenciales',
      'Queremos escucharte',
    ],
  },

  questions: [
    {
      id: 'edad',
      title: '¿En qué franja de edad estás?',
      options: [
        { value: 'menos_40', label: 'Menos de 40 años' },
        { value: '40_49', label: '40–49 años' },
        { value: '50_59', label: '50–59 años' },
        { value: '60_mas', label: '60 años o más' },
      ],
    },

    {
      id: 'objetivo',
    title: '¿Cuál es tu principal objetivo en este momento?',
      options: [
        { value: 'perder_grasa', label: 'Perder grasa' },
        { value: 'tonificar', label: 'Tonificar y ganar músculo' },
        { value: 'fuerza', label: 'Sentirme más fuerte' },
        { value: 'energia', label: 'Tener más energía y sentirme mejor' },
        { value: 'alimentacion', label: 'Mejorar mi alimentación' },
        {
          value: 'constancia',
          label: 'Crear una rutina y conseguir ser constante',
        },
        {
          value: 'salud_habitos',
          label: 'Mejorar mi salud y mis hábitos',
        },
        { value: 'otro', label: 'Tengo otro objetivo' },
      ],
    },

    {
      id: 'alimentacion_actual',
      title: '¿Cómo describirías tu alimentación actualmente?',
      options: [
        {
          value: 'organizada',
          label: 'Tengo una alimentación bastante organizada',
        },
        {
          value: 'intento_constancia',
          label: 'Intento cuidarme, pero me cuesta ser constante',
        },
        {
          value: 'empiezo_abandono',
          label: 'Empiezo a cuidarme, pero termino abandonando',
        },
        {
          value: 'no_se_como',
          label: 'Sé que debería mejorarla, pero no sé muy bien cómo',
        },
        {
          value: 'no_cuido',
          label: 'Ahora mismo no estoy cuidando mi alimentación',
        },
      ],
    },

    {
      id: 'plan_alimentacion',
      title: '¿Sigues actualmente algún plan de alimentación?',
      options: [
        {
          value: 'personalizado',
          label: 'Sí, tengo un plan personalizado',
        },
        {
          value: 'por_mi_cuenta',
          label: 'Sí, sigo una dieta o plan por mi cuenta',
        },
        {
          value: 'saludable_sin_plan',
          label: 'Intento comer saludable, pero no sigo ningún plan',
        },
        {
          value: 'ninguno',
          label: 'No sigo ningún plan de alimentación',
        },
        {
          value: 'antes_si',
          label: 'He seguido planes anteriormente, pero ahora no',
        },
      ],
    },

    {
      id: 'ejercicio',
      title: '¿Y actualmente haces ejercicio?',
      options: [
        {
          value: '4_mas',
          label: 'Sí, entreno 4 o más días por semana',
        },
        {
          value: '2_3',
          label: 'Sí, entreno 2–3 días por semana',
        },
        {
          value: 'irregular',
          label: 'Sí, pero entreno de forma irregular',
        },
        {
          value: 'actividad_sin_entreno',
          label: 'Camino o hago algo de actividad, pero no entreno',
        },
        {
          value: 'no_entreno',
          label: 'Ahora mismo no hago ejercicio',
        },
      ],
    },

    {
      id: 'principal_dificultad',
      title: '¿Qué es lo que más te está costando ahora mismo?',
      options: [
        { value: 'constancia', label: 'Ser constante' },
        { value: 'organizacion', label: 'Organizarme' },
        { value: 'que_comer', label: 'Saber qué comer' },
        {
          value: 'fines_semana',
          label: 'Los fines de semana o la vida social',
        },
        {
          value: 'ejercicios',
          label: 'Saber qué ejercicios hacer',
        },
        {
          value: 'tiempo',
          label: 'Encontrar tiempo para entrenar y cuidarme',
        },
        {
          value: 'motivacion',
          label: 'Mantener la motivación',
        },
        {
          value: 'sin_resultados',
          label: 'Llevo tiempo intentándolo y no veo resultados',
        },
        {
          value: 'varias',
          label: 'Un poco de todo 😅',
        },
      ],
    },

    {
      id: 'freno',
      title: '¿Qué crees que te está frenando para conseguir el cambio que quieres?',
      type: 'text',
      placeholder:
        'Cuéntanoslo con tus palabras. Puede ser falta de tiempo, organización, motivación, no saber qué hacer, haberlo intentado muchas veces...',
    },

    {
      id: 'resultado_deseado',
      title: 'Si pudieras conseguir un cambio concreto en los próximos meses, ¿cuál sería?',
      type: 'text',
      placeholder:
        'Por ejemplo: perder 8 kg, ganar músculo, sentirme más fuerte, entrenar 3 días por semana, aprender a comer mejor...',
    },

    {
      id: 'cuando',
      title: '¿Cuándo te gustaría empezar a trabajar de verdad en ese objetivo?',
      options: [
        {
          value: 'cuanto_antes',
          label: 'Quiero empezar cuanto antes 🔥',
        },
        {
          value: 'proximas_semanas',
          label: 'En las próximas semanas',
        },
        {
          value: '2_3_meses',
          label: 'En los próximos 2–3 meses',
        },
        {
          value: 'mas_adelante',
          label: 'Más adelante',
        },
        {
          value: 'informandome',
          label: 'Ahora mismo solo estoy informándome',
        },
      ],
    },

    {
      id: 'ayuda',
      title: 'Si tuvieras ayuda, ¿qué crees que necesitarías para conseguirlo?',
      options: [
        {
          value: 'alimentacion',
          label: 'Ayuda principalmente con mi alimentación',
        },
        {
          value: 'entrenamiento',
          label: 'Un entrenamiento adaptado a mí',
        },
        {
          value: 'nutricion_entrenamiento',
          label: 'Nutrición + entrenamiento personalizado',
        },
        {
          value: 'seguimiento',
          label: 'Seguimiento y ayuda para conseguir ser constante',
        },
        {
          value: 'orientacion',
          label: 'No lo sé, me gustaría que me orientaseis',
        },
        {
          value: 'por_mi_cuenta',
          label: 'Ahora mismo prefiero hacerlo por mi cuenta',
        },
      ],
    },

    {
      id: 'contacto',
      title: '¿Te gustaría que nuestro equipo revisase tus respuestas y te orientase personalmente?',
      options: [
        {
          value: 'si_contacto',
          label: 'Sí, me gustaría que me contactaseis 💗',
        },
        {
          value: 'quiero_saber',
          label: 'Quizá, primero quiero saber cómo funciona',
        },
        {
          value: 'no_por_ahora',
          label: 'No por ahora, solo quería responder a la encuesta',
        },
      ],
    },
  ],

  leadForm: {
    title: '¡Gracias por contarnos un poquito más sobre ti! 💗',
    description:
      'Déjanos tus datos para identificar tus respuestas. Si nos has indicado que quieres ayuda, nuestro equipo podrá revisar tu situación y contactar contigo personalmente.',
    submitLabel: 'ENVIAR MIS RESPUESTAS',
    privacyConsentLabel:
      'He leído y acepto la Política de Privacidad.',
    privacyPolicy: {
      label: 'Política de Privacidad',
      url: 'https://pombalfit.com/politica-de-privacidad',
      openInNewTab: true,
    },
  },

  result: {
    title: '¡Gracias, {name}! 💗',
    description:
      'Tus respuestas nos ayudan a conocer mejor a nuestra comunidad y a saber qué necesitas en este momento.',

    primaryCta: {
      label: 'CONOCER POMBALFIT',
      url: 'https://pombalfit.com',
      openInNewTab: true,
    },

    upsell: {
      title: '¿Quieres hablar directamente con nosotras?',
      paragraphs: [
        'Si nos has indicado que quieres ayuda, revisaremos tus respuestas para conocer mejor tu situación.',
        'Y si prefieres dar el primer paso ahora, puedes escribirnos directamente por WhatsApp y contarnos cualquier duda que tengas.',
      ],

      cta: {
        label: 'VISITAR POMBALFIT',
        url: 'https://pombalfit.com',
        openInNewTab: true,
      },

      consultCta: {
        label: 'HABLAR POR WHATSAPP',
        url: `https://wa.me/34684693717?text=${encodeURIComponent(
          'Hola PombalFit, acabo de completar la encuesta de la comunidad y me gustaría hablar con vosotras.'
        )}`,
        openInNewTab: true,
      },
    },
  },
}
