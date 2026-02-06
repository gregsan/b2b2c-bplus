export interface ColorScheme {
  accent: string
  accentHover: string
  accentLight: string
  dark: string
}

export const colorSchemes: Record<string, ColorScheme> = {
  blue: {
    accent: '#5B7C99',
    accentHover: '#4A6A85',
    accentLight: '#EBF0F5',
    dark: '#1E3A52',
  },
  green: {
    accent: '#5F8A6F',
    accentHover: '#4E7A5E',
    accentLight: '#EDF4F0',
    dark: '#1F3D2F',
  },
  purple: {
    accent: '#7D6B9D',
    accentHover: '#6A5A87',
    accentLight: '#F0EDF5',
    dark: '#2D1F42',
  },
  yellow: {
    accent: '#B8A055',
    accentHover: '#A08F48',
    accentLight: '#F7F4EA',
    dark: '#3D3420',
  },
  gray: {
    accent: '#6B7280',
    accentHover: '#575E6B',
    accentLight: '#F1F2F4',
    dark: '#1F2937',
  },
}

export function applyColorScheme(scheme: ColorScheme) {
  const root = document.documentElement
  root.style.setProperty('--color-accent', scheme.accent)
  root.style.setProperty('--color-accent-hover', scheme.accentHover)
  root.style.setProperty('--color-accent-light', scheme.accentLight)
  root.style.setProperty('--color-dark', scheme.dark)
  // Base colors - same for all partners
  root.style.setProperty('--color-page-bg', '#FAFAFA')
  root.style.setProperty('--color-card-bg', '#FFFFFF')
  root.style.setProperty('--color-text-primary', '#1A1A1A')
  root.style.setProperty('--color-text-secondary', '#6B6B6B')
  root.style.setProperty('--color-text-tertiary', '#9B9B9B')
  root.style.setProperty('--color-border', '#E5E5E5')
  root.style.setProperty('--color-border-hover', '#D4D4D4')
}
