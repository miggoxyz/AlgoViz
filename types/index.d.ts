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
