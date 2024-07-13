export const MIN_ANIMATION_SPEED = 100;
export const MAX_ANIMATION_SPEED = 400;

export function generateRandomNumberFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const algorithmOptions = [
  { value: "bubble", label: "Bubble Sort" },
  { value: "insertion", label: "Insertion Sort" },
  { value: "selection", label: "Selection Sort" },
  { value: "merge", label: "Merge Sort" },
  { value: "quick", label: "Quick Sort" },
];
