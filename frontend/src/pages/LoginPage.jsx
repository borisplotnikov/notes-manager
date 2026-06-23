//
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";
import { Button, Container, Card } from "react-bootstrap";

export default function LoginPage() {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleMockLogin = () => {
    login(); // Sets isAuthenticated to true
    navigate("/dashboard"); // Redirects to the guarded dashboard
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card style={{ width: "400px" }} className="p-4 shadow-sm">
        <Card.Title className="text-center mb-4">Sign In</Card.Title>
        <Button variant="primary" className="w-100" onClick={handleMockLogin}>
          Log In (Mock Bypass)
        </Button>
      </Card>
    </Container>
  );
}
