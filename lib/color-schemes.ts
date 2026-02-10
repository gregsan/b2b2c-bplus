export interface ColorScheme {
  accent: string
  accentHover: string
  accentLight: string
  dark: string
}

export const colorSchemes: Record<string, ColorScheme> = {
  // 🟢 Green Group (PrivatBank, OTP, Ukrsibbank, A Bank, Credit Agricole, Ukrgas)
  green: {
    accent: '#00A651',        // Насичений зелений
    accentHover: '#008F47',   // Темніший при hover
    accentLight: '#E6F7EF',   // Світлий відтінок для фонів
    dark: '#E6F7EF',          // Темно-зелений
  },

  // 🟡 Yellow/Orange Group (Raiffeisen, Idea, Tascombank, Kredo, Piraeus)
  yellow: {
    accent: '#FACE00',        // Яскравий жовтий (як у ПриватБанку)
    accentHover: '#E6B800',   // Золотистий при hover
    accentLight: '#FFF9E6',   // М'який жовтий фон
    dark: '#4D3E00',          // Темно-жовтий/коричневий
  },

  // 🔵 Blue Group (Alliance, Asvio, Глобус, Kredit Dnipro, BIZBANK, МТБ)
  blue: {
    accent: '#0066CC',        // Класичний банківський синій
    accentHover: '#0052A3',   // Темно-синій при hover
    accentLight: '#E6F2FF',   // Світло-блакитний фон
    dark: '#002952',          // Глибокий синій
  },

  // 🔴 Red Group (Pravex, Procredit)
  red: {
    accent: '#E60000',        // Насичений червоний
    accentHover: '#B30000',   // Темно-червоний при hover
    accentLight: '#FFE6E6',   // Світло-рожевий фон
    dark: '#4D0000',          // Бордовий
  },

  // 🟣 Special Group (izibank - рожевий неон)
  pink: {
    accent: '#FF1A75',        // Яскравий рожевий
    accentHover: '#E6005C',   // Темно-рожевий при hover
    accentLight: '#FFE6F2',   // Ніжно-рожевий фон
    dark: '#4D0024',          // Темно-бордовий
  },

  // ⚫ Gray (резервна нейтральна схема)
  gray: {
    accent: '#475569',        // Сірий з синім відтінком
    accentHover: '#334155',   // Темніший сірий
    accentLight: '#F1F5F9',   // Світло-сірий фон
    dark: '#1E293B',          // Темно-сірий
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