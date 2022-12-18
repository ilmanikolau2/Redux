import Login from "./componetes/Login";
import Logout from "./componetes/Logout";
import User from "./componetes/User";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Login />
      <br></br>
      <User />
      <br></br>
      <Logout />
    </Container>
  );
}

export default App;
