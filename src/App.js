import './App.css';
import { Alert } from './Alert';

export function App() {
  return (
    <Alert type="information" heading="success" closable={true} onClose={(x) => console.log(x)}>
      everything is really good
    </Alert>
  );
}
