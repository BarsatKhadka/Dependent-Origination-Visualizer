import { create } from 'zustand'

const useStore = create((set) => ({
  darkMode: localStorage.getItem('dark') !=null  ? true: false,
  setDarkMode: (isDark) => set({ darkMode: isDark }),
  visualizeOn: 2,
  setVisualizeOn: (isOn) => set({ visualizeOn: isOn }),

}))

export default useStore