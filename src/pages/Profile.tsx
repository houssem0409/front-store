import NavBar from "../components/Navbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
export default function Profile() {
  return (
    <>
      <NavBar>


      <Container fixed>
        <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" }}>
          <h1>name</h1>
          <h1>Lastname</h1>
          <h1>Email</h1>
        </Box>
      </Container>
      </NavBar>
    </>
  );
}
