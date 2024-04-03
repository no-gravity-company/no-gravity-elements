export interface InfoBoxProps {
  label: string;
  testProp?: string;
  coolProp?: number;
  isInformative?: boolean;
}

export type InfoBoxData = {
  inputValue: string;
  isCool: true;
};

export interface InfoBoxEvents {
  'nge-info-box-button-click': (event: CustomEvent<InfoBoxData>) => void;
}
