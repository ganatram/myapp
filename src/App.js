import './App.css';
import { Alert } from './Alert';

export function App() {
  return (
    <Alert
      type="information"
      heading="success"
      closable={true}
      onClose={() => console.log('prop func invoked from parent component')}
    >
      everything is really good
    </Alert>
  );
}
