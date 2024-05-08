import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/global.css';
import './styles/variable.css';
import ProjectSession from './components/features/ProjectSection';
import Newsletter from './components/features/Newsletter';
import ConferenceSection from './components/features/ConferenceSection';
import ResearchProject from './components/features/ResearchProject';
import AtelierSection from './components/features/AtelierSecion';
import ReflexionSection from './components/features/ReflexionSection';
import ProgrammeSection from './components/features/ProgrammeSection';
import FormationSection from './components/features/FormationSection';
import ConditionSection from './components/features/ConditionSection';
import Event from './pages/Events/Event';

function App() {



  return (
    <>
      <Event />
      {/* <ProjectSession />
      <Newsletter />
      <ConferenceSection />
      <ResearchProject />
      <AtelierSection />
      <ReflexionSection />
      <ProgrammeSection />
      <FormationSection />
      <ConditionSection /> */}
    </>
  )
}

export default App