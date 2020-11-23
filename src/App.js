import HeaderComponent from "./Components/Header";
import { Container, Row, Col } from "reactstrap";
import SliderComponent from "./Components/Slider";
import { Switch, Route } from "react-router-dom";
import Anasayfa from "./Components/Anasayfa";
import Projeler from "./Components/Projeler";
function App() {
  return (
    <div
            style={{
                position: "relative",
                minHeight: 100 + "vh",
                paddingBottom: 3 + "rem",
            }}
        >
      <Container>
        <Switch>
          <Route exact path="/">
            <Anasayfa></Anasayfa>
          </Route>
          <Route exact path="/anasayfa" component={Projeler}></Route>
          <Route exact path="/hakkımızda" component={Projeler}></Route>
          <Route exact path="/projeler" component={Projeler}></Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
