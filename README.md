# AlgoViz: Interactive Algorithm Visualizer

## Overview

AlgoViz is an interactive web application designed to visualize common sorting algorithms. This project aims to make complex algorithms more accessible and understandable through dynamic, step-by-step visualizations.

## Features

- Interactive visualizations of popular sorting algorithms:
  - Bubble Sort
  - Insertion Sort
  - Merge Sort
  - Quick Sort
  - Selection Sort
- Adjustable input size and sorting speed
- Step-by-step execution with detailed explanations
- Responsive design for various screen sizes

## Tech Stack

- **Frontend Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- yarn or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/miggoxyz/algoviz.git
cd algoviz
```

2. Install dependencies:

```bash
yarn install
```

3. Run the development server:

```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/algorithms`: Contains TypeScript implementations of sorting algorithms
- `/components`: Reusable React components
- `/pages`: Next.js pages and routing
- `/styles`: Global styles and Tailwind configuration
- `/types`: TypeScript type definitions
- `/utils`: Utility functions and helpers
