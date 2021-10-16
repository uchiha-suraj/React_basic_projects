import { useState } from 'react';
import tabs from './data.js';
import { FaAngleDoubleRight } from 'react-icons/fa'

function App() {

  const [index, setIndex] = useState(0);
  const [value, setValue] = useState(0);
  const {company, title, dates, duties} = tabs[index];

  return (
    <div className="App">
      <section className = 'section'>
        <div className = 'title'>
          <h2>experience</h2>
          <div className = 'underline'></div>
        </div>

        <div classname = "jobs-center">
          <div className = 'btn-container'>
            {tabs.map((item, index) => {
              return (
                <button
                  key = {item.id}
                  onClick = {() => setValue(index)}
                  className = {`job-btn ${index === value && 'active-btn'}`}
                >
                  {item.company}
                </button>
              )
            })}
          </div>
          <article className = 'job-info'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className = 'job-date'>{dates}</p>
            
            {duties.map((duty, index) => {
              return (
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
                </div>
              )
            })}
          </article>
        </div>

        <button type = "button" className = 'btn'>
          more info
        </button>
      </section>
    </div>
  );
}

export default App;
