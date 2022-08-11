import * as React from "react";
import { Box, Button, Grid, TextField, FormControl, InputLabel, OutlinedInput, Alert } from "@mui/material";
import "./Register.css";
import registerPhoto from "../../assets/images/23322.jpg"
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import axios from "axios"


const countries = [
  {
    value: "Turkey",
  },
  {
    value: "USA",
  },
  {
    value: "England",
  },
  {
    value: "Japan",
  },
];

const Register = () => {
  const [notify, setNotitfy] = React.useState({ message: '', status: 0, visible:false })
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [country, setCountry] = React.useState("Turkey");
  const [status, setStatus] = React.useState(false)

  const firstnameHandler = (e) => {
    setFirstname(e.target.value)
  }
  const lastnameHandler = (e) => {
    setLastname(e.target.value)
  }
  const emailHandler = (e) => {
    setEmail(e.target.value)
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }
  const usernameHandler = (e) => {
    setUsername(e.target.value)
  }
  const phoneHandler = (e) => {
    setPhone(e.target.value)
  }
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const registerHandler = async (event) =>{
    event.preventDefault();

    const response = await axios.post("https://localhost:7182/api/Auth/register", { firstname, lastname, email, password, username, country, phone, status })
    console.log(response)
    if(response?.data.success)
      setNotitfy({ message: response?.data.message, status: 200, visible:true })
  }

  return (
    <div className="register">
      {notify.visible && notify.status === 200 ? (
        <Alert severity="success">{notify.message}</Alert>
      ) : (null)}
      <Grid container spacing={2}>
        <Grid
          item
          md={12}
          lg={6}
          xl={6}
          sx={{ marginLeft: "1rem", borderRadius: "5px" }}
        >
          <img
            src={registerPhoto}
            width="100%"
            height="100%"
            alt="Login"
            style={{ borderRadius: "5px" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={5}
          xl={5}
          sx={{
            padding: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <form method="post" onSubmit={registerHandler}>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: ".5rem",
              }}
            >
              <Box
                sx={{
                  marginLeft: { xs: ".8rem" },
                  marginRight: { xs: ".8rem" },
                  marginBottom:{xs:".8rem"}
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  name="firstname"
                  onChange={firstnameHandler}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box>
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  name="lastname"
                  onChange={lastnameHandler}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: ".5rem",
              }}
            >
              <Box
                sx={{
                  marginLeft: { xs: ".8rem" },
                  marginRight: { xs: ".8rem" },
                  marginBottom:{xs:".8rem"}
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="E-mail"
                  name="email"
                  onChange={emailHandler}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box >
                <FormControl  variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    // type={values.showPassword ? "text" : "password"}
                    // value={values.password}
                    onChange={passwordHandler}
                    name="password"
                    // endAdornment={
                    //   <InputAdornment>
                    //     <IconButton
                    //       aria-label="toggle password visibility"
                    //       onClick={handleClickShowPassword}
                    //       onMouseDown={handleMouseDownPassword}
                    //       edge="start"
                    //     >
                    //       {values.showPassword ? (
                    //         <VisibilityOff />
                    //       ) : (
                    //         <Visibility />
                    //       )}
                    //     </IconButton>
                    //   </InputAdornment>
                    // }
                    label="Password"
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: ".5rem",
              }}
            >
              <Box
                sx={{
                  marginLeft: { xs: ".8rem" },
                  marginRight: { xs: ".8rem" },
                  marginBottom:{xs:".8rem"}
                }}
                
              >
                <TextField
                  id="outlined-basic"
                  label="Username"
                  name="username"
                  onChange={usernameHandler}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: ".5rem",
              }}
            >
              <Box
                sx={{
                  marginLeft: { xs: ".8rem" },
                  marginRight: { xs: ".8rem" },
                  marginBottom:{xs:".8rem"}
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  name="phone"
                  onChange={phoneHandler}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocalPhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box>
                <TextField
                  id="outlined-basic"
                  select
                  sx={{ width:"255px"}}
                  label="Country"
                  name="country"
                  value={country}
                  onChange={handleCountryChange}
                  SelectProps={{
                    native: true,
                  }}
                  
                >
                  {countries.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </TextField>
              </Box>
            </Grid>
            <input type="hidden" value="false" name="status" onChange={()=> { setStatus(false)}} />
            <Grid item sx={{ marginBottom: ".8rem" }}>
              <Button variant="contained" type="submit">REGISTER</Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;