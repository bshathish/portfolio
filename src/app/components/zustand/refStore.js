import { create } from "zustand";

export const useRefStore = create((set)=>({
    homeRef:null,
    aboutRef:null,
    projectRef:null,
    contactRef:null,
    setHomeRef:(newValue)=>set({homeRef:newValue}),
    setAboutRef:(newValue)=>set({aboutRef:newValue}),
    setProjectRef:(newValue)=>set({projectRef:newValue}),
    setContactRef:(newValue)=>set({contactRef:newValue}),
}));