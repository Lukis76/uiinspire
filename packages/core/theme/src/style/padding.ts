const numberOfIterations = 200

interface CssVariables {
  [key: string]: string
}

const paddingVariables: CssVariables = {}

for (let i = 1; i <= numberOfIterations; i++) {
  // Generar el nombre de la variable
  const variableName = `unit-${i}`

  // Asignar el valor a la variable CSS
  paddingVariables[variableName] = `var(--unit-${i})`
}

export const padding = {
  ...paddingVariables,
  xs: 'var(unit-2)',
  sm: 'var(unit-4)',
  md: 'var(unit-6)',
  lg: 'var(unit-8)',
  xl: 'var(unit-10)',
  ['2xl']: 'var(unit-12)',
  ['3xl']: 'var(unit-14)',
  ['4xl']: 'var(unit-16)',
  ['5xl']: 'var(unit-18)',
}
