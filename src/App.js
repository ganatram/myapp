import logo from './logo.svg';
import './App.css';
import { Alert } from './Alert';

export function App() {
  return (
    <Alert type="information" heading="success">
      everything is really good
    </Alert>
  );
}
