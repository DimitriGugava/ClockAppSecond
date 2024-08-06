import "./Main.css";

const Main = () => {
  return (
    <div className="main_Container">
      <div className="quotes_Box">
        <button className="quotes_Span_Button"></button>
        <p className="quotes_Main_Text">
          “The science of operations, as derived from mathematics more
          especially, is a science of itself, and has its own abstract truth and
          value.”
        </p>
        <p className="quotes_Author">Ada Lovelace</p>
      </div>
      <div className="clock_Display_Box">
        <div className="clock_Greeting_Box">
          <img className="clock_MoonOrSun" /> Good Morning
        </div>
        <div className="clock_Location_Box">
          <div className="clock_Box">
            <p className="clock_Text">12:00</p>
            <p className="clock_Timezone_Text">BST</p>
          </div>
          <p className="clock_City_Country_Text">In London, UK</p>
        </div>
      </div>
      <div className="more_Button_Box">
        <p className="more_Btn_Text">More</p>
        <img className="more_Button_Img" />
      </div>
      <div className="detailed_Info_Container">
        <div className="detailed_Info_Box">
          <div className="detailed_Info_ContentBox">
            <p className="detailed_Info_ContentBox_FadeText">
              Current Timezone
            </p>
            <p className="detailed_Info_ContentBox_BoldText">Europe/London</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
