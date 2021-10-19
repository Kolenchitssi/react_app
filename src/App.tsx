import React from "react";
import "./App.scss";
import { History } from "history";
import Footer from "./components/Footer/Footer";
import Header from "./containers/Header/Header";
import MyRouter from "./routes/MyRouter";

export interface AppProps {
  history: History;
}

function App({ history }: AppProps): JSX.Element {
  return (
    <div className="App">
      <Header />
      <MyRouter history={history} />
      <Footer />
    </div>
  );
}

export default App;
