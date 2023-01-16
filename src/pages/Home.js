import JobComponent from '../components/JobComponent';
import SkillsComponent from '../components/SkillsComponent';
import ScrollTopButton from '../components/ScrollTopButton';
import '../App.css';


function HomePage() {
  return (
    
      <div className="App">
        <header className="App-header">
                {/* All Job Cards */}
                <JobComponent />
                {/* All Skill Cards */}
                <SkillsComponent />

        </header>
        <body>


        </body>

        <footer className="App-footer">
          <p>Created by Ethan Herring - 2023</p>
          {/* Adds functionality to return to top of page */}
          <div className="scrollTopButton-container">
            <ScrollTopButton />
          </div>
        </footer>

      </div>

  );
}

export default HomePage;
