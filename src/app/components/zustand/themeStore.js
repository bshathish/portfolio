import { create } from "zustand"; 

export const useThemeStore = create((set) => ({
  colorScheme: 'dark',
  setColorScheme: () => set((state) => ({
    colorScheme: state.colorScheme === 'light' ? 'dark' : 'light'
  }))
}));