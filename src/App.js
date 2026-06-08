import './App.css';
import { Alert } from './Alert';

export function App() {
  return (
    <Alert type="information" heading="success" closable={false}>
      everything is really good
    </Alert>
  );
}
