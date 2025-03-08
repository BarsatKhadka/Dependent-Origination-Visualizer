import { create } from 'zustand'

const useStore = create((set) => ({
  darkMode: false,
  setDarkMode: (isDark) => set({ darkMode: isDark }),
}))

export default useStore