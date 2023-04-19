import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import { Contents } from "./components/Contents";
import { DataContext } from "./store/DataContext";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <DataContext.Provider
        value={{ weatherData, setWeatherData, loading, setLoading }}
      >
        <Header />
        <Contents />
      </DataContext.Provider>
    </div>
  );
}

export default App;
