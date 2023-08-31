import { useGlobalContext } from "./context";
import { Box, CircularProgress } from "@mui/material";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";

function Cart() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          height: "100%",
          width: "100%",
        }}
      >
        <CircularProgress size="5rem" />
      </Box>
    );
  }
  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  );
}

export default Cart;
