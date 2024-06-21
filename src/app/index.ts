import { Person } from '@/entities/person';
import * as styles from './styles.module.scss';

const App = () => {
  return `
    <div class="${styles.app}">
      <div class="${styles.appText}"></div>
      ${Person()}
    </div>`;
};

export { App };
