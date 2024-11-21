import { tutorialConfig as sapCapBasics } from './sap-cap-basics/config';
import { tutorialConfig as sapCapK8s } from './sap-cap-k8s/config';

interface TutorialConfig {
  order: number;
  tasks: string[];
}

export const tutorialConfig: { [key: string]: TutorialConfig } = {
  'sap-cap-basics': sapCapBasics,
  'sap-cap-k8s': sapCapK8s
};