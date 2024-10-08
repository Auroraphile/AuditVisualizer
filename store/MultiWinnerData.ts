// stores/useGlobalJsonStore.ts
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface MultiWinnerData {
  multiWinner: any | null; // 用于存储 JSON 数据
  setMultiWinner: (data: any) => void; // 设置 JSON 数据
  clearMultiWinner: () => void; // 清空 JSON 数据
  candidateList: any[];
  setCandidateList: (data: any) => void;
  clearCandidateList: () => void;
  assertionList: any[];
  setAssertionList: (data: any) => void;
  clearAssertionList: () => void;
}

const useMultiWinnerDataStore = create<MultiWinnerData>()(
  devtools(
    (set) => ({
      multiWinner: null, // 初始状态为空
      setMultiWinner: (data) => set({ multiWinner: data }), // 设置 JSON 数据
      clearMultiWinner: () => set({ multiWinner: null }), // 清空 JSON 数据
      candidateList: [],
      setCandidateList: (data) => set({ candidateList: data }),
      clearCandidateList: () => set({ candidateList: [] }),
      assertionList: [],
      setAssertionList: (data) => set({ assertionList: data }),
      clearAssertionList: () => set({ assertionList: [] }),
    }),
    { name: "multiWinner-store" },
  ),
);

export default useMultiWinnerDataStore;
