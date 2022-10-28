import "./App.css";
import { useRef, useState } from "react";

function App() {
  const switchThing = useRef();
  const [month, setMonth] = useState(false);
  const [annual, setAnnual] = useState(true);
  const handleChange = (event) => {
    
      setMonth(!month);
      setAnnual(!annual);
    
  };
  return (
    <div className="App">
      <h1 className="title">Our Pricing</h1>
      <div className="option">
        <p>Annually</p>
        <label className="switch">  
          <input ref={switchThing} type="checkbox" onChange={handleChange} />
          <span className="slider round"></span>
        </label>
        <p>Montly</p>
      </div>
      {month && (
        <div className="info">
          <div className="first">
            <p className="head">Basic</p>
            <h1 className="money"> $19.99</h1>
            <hr className="line" />

            <p className="inside-info"> 500 GB Storage</p>
            <hr className="line" />
            <p className="inside-info"> 2 Users Allowed</p>
            <hr className="line " />
            <p className="inside-info"> Send up to 3 GB</p>
            <hr className="line" />
            <button className="learn learn-1">LEARN MORE</button>
          </div>

          <div className="middle">
            <p className="head">Professional</p>
            <h1 className="money"> $24.99</h1>
            <hr className="line" />

            <p className="inside-info"> 1 TB Storage</p>
            <hr className="line" />
            <p className="inside-info"> 5 Users Allowed</p>
            <hr className="line " />
            <p className="inside-info"> Send up to 10 GB</p>
            <hr className="line" />
            <button className="learn">LEARN MORE</button>
          </div>

          <div className="first first-2">
            <p className="head">Master</p>
            <h1 className="money"> $39.99</h1>
            <hr className="line" />

            <p className="inside-info"> 2 TB Storage</p>
            <hr className="line" />
            <p className="inside-info"> 10 Users Allowed</p>
            <hr className="line " />
            <p className="inside-info"> Send up to 20 GB</p>
            <hr className="line" />
            <button className="learn learn-1">LEARN MORE</button>
          </div>
        </div>
      )}
      {annual && (
        <div className="info">
          <div className="first">
            <p className="head">Basic</p>
            <h1 className="money"> $199.999</h1>
            <hr className="line" />

            <p className="inside-info"> 500 GB Storage</p>
            <hr className="line" />
            <p className="inside-info"> 2 Users Allowed</p>
            <hr className="line " />
            <p className="inside-info"> Send up to 3 GB</p>
            <hr className="line" />
            <button className="learn learn-1">LEARN MORE</button>
          </div>

          <div className="middle">
            <p className="head">Professional</p>
            <h1 className="money"> $249.99</h1>
            <hr className="line" />

            <p className="inside-info"> 1 TB Storage</p>
            <hr className="line" />
            <p className="inside-info"> 5 Users Allowed</p>
            <hr className="line " />
            <p className="inside-info"> Send up to 10 GB</p>
            <hr className="line" />
            <button className="learn">LEARN MORE</button>
          </div>

          <div className="first first-2">
            <p className="head">Master</p>
            <h1 className="money"> $399.99</h1>
            <hr className="line" />

            <p className="inside-info"> 2 TB Storage</p>
            <hr className="line" />
            <p className="inside-info"> 10 Users Allowed</p>
            <hr className="line " />
            <p className="inside-info"> Send up to 20 GB</p>
            <hr className="line" />
            <button className="learn learnOne">LEARN MORE</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
