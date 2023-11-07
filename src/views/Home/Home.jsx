import React, { useState } from "react";
import './Home.css'
import { useSearchParams } from "react-router-dom";
import Diya from './diva.png'
import DiwaliLamp from "./diwali-lamp.png";
import Lamp from "./lamp.png";

const GREETINGS = [
  "सर्व मित्र परिवाराला …दीपावलीच्या धनदायी ,प्रकाशमय,चैतन्यदायी मंगलमय शुभेच्छा !!!दीपावलीच्या हार्दिक शुभेछा…",
  "लक्ष लक्ष दिव्यांनी उजळुन निघो ही निशाघेऊनि येवो नवी उमेद नवी आशा,सोबत आमच्या लक्ष लक्ष शुभेच्छा!",
  "यशाची रोषणाई कीर्तीचे अभ्यंग स्नान मनाचे लक्ष्मिपुजनसमृद्धीचे फराळप्रेमाची भाऊबीजअशा मंगल दिवाळीच्या शुभेच्छा",
  "एक दिवा लावु जिजाऊचरणी।  एक दिवा लावु शिवचरणी।  एक दिवा लावु शंभुचरणी। आमचा इतिहास हीच आमची प्रतिष्ठा….. दिपावलीच्या हार्दिक शिवशुभेच्छा…. आपल्या घरि सुख समाधान सदैव नांदो हिच जगदंबेचरणी प्रार्थना॥ ।। जय शिवराय ।। तुम्हाला व तुमच्या कुटुंबियांना दिवाळीच्या हार्दिक शुभेछा !!",
  "सगळा आनंद सगळे सौख्य,सगळ्या स्वप्नांची पूर्णता,यशाची सगळी शिखरे,सगळे ऐश्वर्य,हे आपल्याला मिळू दे,ही दीपावली आपल्या आयुष्याला एक नवा उजाळा देवू दे…",
  "स्नेहाचा सुगंध दरवळला,आनंदाचा सण आला.विनंती आमची परमेश्वराला,सौख्य, समृध्दी लाभो तुम्हाला.दिवाळीच्या हार्दिक शुभेच्छा!",
];

function Home() {
  const [searchParams] = useSearchParams();
  const [to, setTo] = useState(searchParams.get("to"));
  // const to = searchParams.get("to");

  const [from, setFrom] = useState(searchParams.get("from"))
  // const from = searchParams.get("from");

  const [greetingNumber, setGreetingNumber] = useState(searchParams.get("s") >= GREETINGS.length ? 0 : searchParams.get("s") || 0)
  // const greetingNumber = searchParams.get("s") >= GREETINGS.length ? 0 : searchParams.get("s") || 0;

  const [theme, setTheme] = useState(searchParams.get("t"));

  return (
    <>
      <div className="container mt-5">
        <div className={`card shadow custom-card ${`theme-${theme}`}`} >
          <div className="card-body  content">
            <div className=" mt-5 position-relative ">
              <img
                src={DiwaliLamp}
                alt="diwali-lamp "
                className="position-absolute left-lamp"
              />
              {/* <img src={Lamp} alt="lamp" className="position-absolute lamp" /> */}
              <img
                src={DiwaliLamp}
                alt="diwali-lamp"
                className="position-absolute right-lamp"
              />



            </div>
            <div className="to fs-6 fw">
              <p className=""> 💐Dear {to}</p>
            </div>



            <div className="fs-5 text-center">
              <p>{GREETINGS[greetingNumber]}</p>
            </div>

            <div className="from ">
              <p className="">🙏 शुभेच्छुक {from}</p>
            </div>
          </div>


        </div>
      </div>

      <div
        className="container text-center  fw-bold fs-4 mt-4">
        <p>
          Do You Want To Create Your Own Diwali Greeting ?<br /> Customize it here and Share it.👇🏻{" "}
        </p>
      </div>
   

      <div className="container">

        <div className="row mb-4">
          <div className="col-md-3">
            <input type="text"
              className="mt-5 input-box shadow"
              placeholder="To.."
              value={to}
              onChange={(e) => {
                setTo(e.target.value)
              }
              } />
          </div>

          <div className="col-md-3">
            <input type="text"
              className="mt-5 input-box shadow"
              placeholder="From"
              value={from}
              onChange={(e) => {
                setFrom(e.target.value)
              }
              }

            />
          </div>
          <div className="col-md-3">
            <select className="mt-5 select-container"
              value={greetingNumber}
              onChange={(e) => {
                setGreetingNumber(e.target.value);
              }}>
              <option value={0}>Gretting-1</option>
              <option value={1}>Gretting-2</option>
              <option value={2}>Gretting-3</option>
              <option value={3}>Gretting-4</option>
              <option value={4}>Gretting-5</option>
            </select>
          </div>

          <div className="col-md-3">
            <select className="mt-5 select-container"
              value={theme}
              onChange={(e) => {
                setTheme(e.target.value);
              }}>
              <option value="orange">Orange Theme</option>
              <option value="red" className="bg-danger">Red Theme</option>
              <option value="purple">Purplr Theme</option>
              <option value="blue">Blue Theme</option>
              <option value="yellow">Yellow Theme</option>
            </select>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home;