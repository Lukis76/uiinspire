import type { Config } from 'tailwindcss'
import { config as obj1 } from './tailwind.config'

function mergeObjects(obj1: Config, obj2: Config) {
  const result = { ...obj1 }

  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
        // Si ambos valores son objetos, realiza una fusión recursiva
        if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
          // Si ambos valores son arrays, combínalos
          result[key] = [...obj1[key], ...obj2[key]]
        } else {
          result[key] = mergeObjects(obj1[key], obj2[key])
        }
      } else {
        // De lo contrario, simplemente asigna el valor del segundo objeto
        result[key] = obj2[key]
      }
    }
  }

  return result
}

export const mergeTailwindConfig = (obj2: Config) => {
  return mergeObjects(obj1, obj2)
}
