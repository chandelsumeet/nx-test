// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { Shared, Button } from '@org/shared';
export function App() {
  return (
    <div>
      <Button />
      <Shared />
    </div>
  );
}

export default App;
