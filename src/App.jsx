import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import { Contents } from "./components/Contents";
import { DataContext } from "./store/DataContext";
import { mockWeatherData } from "./constants/mockWeatherData";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="App">
      <DataContext.Provider value={{ weatherData, setWeatherData }}>
        <Header />
        <Contents />
      </DataContext.Provider>
    </div>
  );
}

export default App;
