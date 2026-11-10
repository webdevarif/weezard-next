export interface StrategyStepItem {
  id: string;
  stepNumber: number;
  stepLabel: string;
  title: string;
  position: "top" | "bottom";
  bgColor: string;
  waveColor: string;
}

export interface StrategySectionData {
  header: {
    title: string;
    subtitle: string;
    cta?: {
      label: string;
      href: string;
    };
  };
  steps: StrategyStepItem[];
}
