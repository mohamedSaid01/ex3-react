import './App.css';
import Card from './Components/Card';
import reactionImage from './Assets/fire-flame-simple-solid.svg';
import memoryImage  from './Assets/landmark-solid.svg';
import verbalImage  from './Assets/school-solid.svg';
import visualImage  from './Assets/eye-solid.svg';


function App() {
  return (
    <div className="App">
      <div className="sideLeft">
        <h3>Your Result</h3>
        <div className='cercle'>
          <div >
            <p className='p1'>76</p> 
            <p className='p2'>of 100</p>
          </div>
        </div>
        <h2>Great</h2>
        <div className='paragraphe'>
            <p>You sccored higher than 65% of the people who have taken these tests</p>
        </div>

      </div>

      <div className="sideRight">
        <h3>Summary</h3>
        <div className='cards'>
          <Card 
          image = {reactionImage}
          nom = {"Reaction"}
          number = {"80"}
          bgColor= "209, 142, 142"
          textColor= "195, 70, 70"
          />
          <Card 
          image = {memoryImage}
          nom = {"Memory"}
          number = {"92"}
          bgColor= "246, 240, 134"
          textColor= "213, 186, 8"
          />
          <Card 
          image = {verbalImage}
          nom = {"Verbal"}
          number = {"61"}
          bgColor= "84, 224, 80"
          textColor= "13, 138, 9"
          />
          <Card 
          image = {visualImage}
          nom = {"Visual"}
          number = {"61"}
          bgColor= "43, 131, 255"
          textColor= "42, 27, 255"
          />
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
