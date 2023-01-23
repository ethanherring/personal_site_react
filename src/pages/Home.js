import JobComponent from '../components/JobComponent';
import '../App.css';


function HomePage() {
  return (
    
      <div className="App">
        <header className="App-header">
                {/* All Job Cards */}
                <JobComponent />
                {/* All Skill Cards */}
                {/* <SkillsComponent /> */}
        </header>
        <body className="App-body">
          


        </body>

      </div>

  );
}

export default HomePage;
