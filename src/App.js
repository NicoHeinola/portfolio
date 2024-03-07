import ProjectSample from 'views/ProjectSample';
import './styles/main.scss';
import FrontPage from './views/FrontPage';
import Navigation from 'components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <FrontPage></FrontPage>
      <ProjectSample></ProjectSample>
    </div>
  );
}

export default App;
