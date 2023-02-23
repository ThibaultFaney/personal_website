import React from 'react';

function App() {
  return (
    <div>
      <header>
        <h1>My Research Profile</h1>
        <nav>
          <ul>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#publications">Publications</a></li>
            <li><a href="#research-topics">Research Topics</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about-me">
          <h2>About Me</h2>
          <p>Insert your bio information here</p>
        </section>
        <section id="publications">
          <h2>Publications</h2>
          <ul>
            <li>Insert your publication 1 here</li>
            <li>Insert your publication 2 here</li>
            <li>Insert your publication 3 here</li>
          </ul>
        </section>
        <section id="research-topics">
          <h2>Research Topics</h2>
          <ul>
            <li>Insert your research topic 1 here</li>
            <li>Insert your research topic 2 here</li>
            <li>Insert your research topic 3 here</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>Copyright © Your Name</p>
      </footer>
    </div>
  );
}

export default App;
