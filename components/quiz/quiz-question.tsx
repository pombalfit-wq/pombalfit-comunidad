'use client'

import { useEffect } from 'react'
import { Check } from 'lucide-react'
import type { QuizQuestion } from '@/lib/quiz/types'
import { cn } from '@/lib/utils'
import { screenHeadingClass } from './styles'
import { useFocusOnMount } from './use-focus-on-mount'

type QuizQuestionProps = {
  question: QuizQuestion
  selectedValue?: string
  onSelect: (value: string) => void
  autoFocusHeading: boolean
}

export function QuizQuestionScreen({
  question,
  selectedValue,
  onSelect,
  autoFocusHeading,
}: QuizQuestionProps) {
  const headingRef = useFocusOnMount<HTMLHeadingElement>(autoFocusHeading)
  const headingId = `question-${question.id}`

  const isTextQuestion = question.type === 'text'
  const options = question.options ?? []

  useEffect(() => {
    if (isTextQuestion) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return

      const index = Number.parseInt(event.key, 10) - 1
      const option = options[index]

      if (option) onSelect(option.value)
    }

    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isTextQuestion, options, onSelect])

  return (
    <section
      className="flex flex-1 flex-col pt-8 sm:pt-12"
      aria-labelledby={headingId}
    >
      <h1
        id={headingId}
        ref={headingRef}
        tabIndex={-1}
        className={screenHeadingClass}
      >
        {question.title}
      </h1>

      {isTextQuestion ? (
        <>
          <p className="mt-2 text-sm text-muted-foreground">
            Cuéntanoslo con tus propias palabras
          </p>

          <div className="mt-7">
            <textarea
              value={selectedValue ?? ''}
              onChange={(event) => onSelect(event.target.value)}
              placeholder={
                question.placeholder ??
                'Escribe aquí tu respuesta...'
              }
              rows={6}
              className={cn(
                'w-full resize-none rounded-2xl border-2 border-border bg-background px-4 py-4 text-base text-foreground',
                'placeholder:text-muted-foreground',
                'transition-all duration-200',
                'focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15',
              )}
            />
          </div>
        </>
      ) : (
        <>
          <p className="mt-2 text-sm text-muted-foreground">
            Elige una opción
          </p>

          <div
            role="group"
            aria-labelledby={headingId}
            className="mt-7 flex flex-col gap-3"
          >
            {options.map((option, index) => {
              const selected = option.value === selectedValue

              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => onSelect(option.value)}
                  style={{ animationDelay: `${60 + index * 45}ms` }}
                  className={cn(
                    'group flex min-h-16 w-full items-center gap-4 rounded-2xl border-2 bg-background px-4 py-3.5 text-left text-base font-semibold leading-snug text-foreground transition-all duration-200 [animation-fill-mode:both] animate-in fade-in slide-in-from-bottom-2 motion-reduce:animate-none',
                    'hover:border-primary/50 hover:bg-secondary active:scale-[0.99] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/25',
                    selected
                      ? 'border-primary bg-secondary shadow-[0_8px_24px_-12px_rgba(217,43,112,0.5)]'
                      : 'border-border',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors',
                      selected
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-accent text-accent-foreground group-hover:bg-primary/15',
                    )}
                  >
                    {selected ? (
                      <Check className="size-4" strokeWidth={3} />
                    ) : (
                      index + 1
                    )}
                  </span>

                  <span className="flex-1 text-pretty">
                    {option.label}
                  </span>
                </button>
              )
            })}
          </div>

          <p className="mt-6 hidden text-center text-xs text-muted-foreground sm:block">
            {`Consejo: pulsa las teclas 1–${options.length} para responder`}
          </p>
        </>
      )}
    </section>
  )
}
