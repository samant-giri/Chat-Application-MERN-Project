import React, { useState } from "react";
import {
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../../Components/Styels/StyledComponents";
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { usernameValidator } from "../../utils/validators";
import { Navigate } from "react-router-dom";



const AdminLogin = () => {
    const isAdmin = true;

    const secretKey = useInputValidation("");

    const submitHandler = (e) => {
        e.preventDefault();
    }

    if(isAdmin) return <Navigate to={"/admin/dashboard"}/>

  return (
    <div>
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          
            <>
              <Typography variant="h5">Admin Login</Typography>
              <form onSubmit={submitHandler}>

                <TextField
                  required
                  fullWidth
                  label="Secret Key"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={secretKey.value}
                  onChange={secretKey.changeHandler}
                />

                <Button
                  sx={{
                    marginTop: "1rem",
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Login
                </Button>

                
              </form>
            </>
        </Paper>
      </Container>
    </div>
  );
}

export default AdminLogin