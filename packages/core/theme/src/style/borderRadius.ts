const numberOfIterations = 200

interface CssVariables {
  [key: string]: string
}

const roundedVariables: CssVariables = {}

for (let i = 1; i <= numberOfIterations; i++) {
  // Generar el nombre de la variable
  const variableName = `unit-${i}`

  // Asignar el valor a la variable CSS
  roundedVariables[variableName] = `calc(var(--unit-${i}) / 2)`
}

export const rounded = {
  ...roundedVariables,
  xs: 'var(unit-1)',
  sm: 'var(unit-2)',
  md: 'var(unit-3)',
  lg: 'var(unit-4)',
  xl: 'var(unit-5)',
  ['2xl']: 'var(unit-6)',
  ['3xl']: 'var(unit-7)',
  ['4xl']: 'var(unit-8)',
  ['5xl']: 'var(unit-9)',
}
