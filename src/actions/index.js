export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const TOTALZERO = "TOTAL_ZERO";
export const MEMORYPLUS = "MEMORY_PLUS";
export const MEMORYR = "MEMORYR";
export const MEMORYC = "MEMORYC";
export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};
export const reset = () => {
  return { type: TOTALZERO };
};

export const islem = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};
export const memoryPlus = () => {
  return { type: MEMORYPLUS };
};
export const memoryR = () => {
  return { type: MEMORYR };
};
export const memoryC = () => {
  return { type: MEMORYC };
};
