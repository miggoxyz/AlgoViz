declare type SortingAlgorithmType =
  | "bubble"
  | "insertion"
  | "selection"
  | "merge"
  | "quick";

declare type SelectOptionsType = {
  value: string;
  label: string;
};

declare type AnimationArrayType = [number[], boolean][]; // [array, isSwapped]

declare interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
}

declare interface SelectProps {
  options: SelectOptionsType[];
  defaultValue: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  isDisabled?: boolean;
}

declare interface SortingAlgorithmContextType {
  arrayToSort: number[];
  setArrayToSort: (array: number[]) => void;
  selectedAlgorithm: SortingAlgorithmType;
  setSelectedAlgorithm: (algorithm: SortingAlgorithmType) => void;
  isSorting: boolean;
  setIsSorting: (isSorting: boolean) => void;
  animationSpeed: number;
  setAnimationSpeed: (speed: number) => void;
  isAnimationComplete: boolean;
  setIsAnimationComplete: (isComplete: boolean) => void;
  resetArrayAndAnimation: () => void;
  runAnimation: (animations: AnimationArrayType) => void;
  requiresReset: boolean;
}
