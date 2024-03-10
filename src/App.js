import './styles/main.scss';
import FrontPage from './views/FrontPage';
import Navigation from 'components/navigation/Navigation';
import ProjectPage from 'views/ProjectPage';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <FrontPage></FrontPage>
      <ProjectPage></ProjectPage>
    </div>
  );
}

export default App;
