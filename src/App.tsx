import { Dashboard } from './components/Dashboard';
import { Header } from './components/header';
import { GlobalStyled } from './styles/globals'

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyled />
    </>
  );
}

