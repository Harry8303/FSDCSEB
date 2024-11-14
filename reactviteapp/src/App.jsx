import React from 'react';
import Student from './Student';

function App() {
  const h1 = <h1>Hello World</h1>;
  const mystyle = {
    color: 'red',
    backgroundColor: 'yellow',
  };

  return (
    <div style={{ backgroundColor: 'blueviolet' }}>
      {h1}
      <div style={mystyle}>
        ABES Engineering College
      </div>

      <div>
        <Student
          college="ABES ENGG COLLEGE"
          name="Harry"
          branch="CSE"
          roll="123"
          section="B"
          image="https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png"
        />
        <Student
          college="ABES ENGG COLLEGE"
          name="Ron"
          branch="ECE"
          roll="124"
          section="A"
          image="https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png"
        />
        <Student
          college="ABES ENGG COLLEGE"
          name="Hermione"
          branch="IT"
          roll="125"
          section="C"
          image="https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png"
        />
      </div>
    </div>
  );
}

export default App;
