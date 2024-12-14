import React from "react";
import { Box, Typography, Avatar, Button } from "@basetoolkit/ui";

const ComplexLayoutExample = () => {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        "@media (max-width: 900px)": {
          flexDirection: "column",
        },
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          marginBottom: "40px",
          "& h1": {
            fontSize: "36px",
            fontWeight: "bold",
            color: "primary.main",
            "@media (max-width: 600px)": {
              fontSize: "28px",
            },
          },
          "& p": {
            fontSize: "18px",
            color: "text.secondary",
          },
        }}
      >
        <Typography component="h1">Welcome to Your Dashboard</Typography>
        <Typography component="p">Manage your profile, settings, and more</Typography>
      </Box>

      {/* Main Layout Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          width: "100%",
          "@media (max-width: 900px)": {
            gridTemplateColumns: "1fr 1fr",
          },
          "@media (max-width: 600px)": {
            gridTemplateColumns: "1fr",
          },
        }}
      >
        {/* Profile Section */}
        <Box
          sx={{
            padding: "30px",
            backgroundColor: "background.paper",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            borderRadius: "15px",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
            "& .avatar-container": {
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            },
          }}
        >
          <Box className="avatar-container">
            <Avatar
              src="https://randomuser.me/api/portraits/men/44.jpg"
              alt="User Avatar"
              sx={{ width: "100px", height: "100px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }}
            />
          </Box>
          <Typography sx={{ fontWeight: "bold", textAlign: "center", fontSize: "22px" }}>
            John Doe
          </Typography>
          <Typography sx={{ textAlign: "center", color: "text.secondary", marginBottom: "20px" }}>
            Full-Stack Developer
          </Typography>
          <Button
            variant="contained"
            sx={{
              display: "block",
              margin: "0 auto",
              backgroundColor: "primary.main",
              color: "white",
              padding: "8px 20px",
              borderRadius: "50px",
              "&:hover": {
                backgroundColor: "secondary.main",
              },
            }}
          >
            View Profile
          </Button>
        </Box>

        {/* Info Boxes */}
        <Box
          sx={{
            padding: "20px",
            backgroundColor: "#f9f9f9",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              backgroundColor: "#ececec",
            },
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>Settings</Typography>
          <Typography sx={{ color: "text.secondary", marginTop: "10px" }}>
            Manage account and app preferences.
          </Typography>
        </Box>

        <Box
          sx={{
            padding: "20px",
            backgroundColor: "#f9f9f9",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              backgroundColor: "#ececec",
            },
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>Notifications</Typography>
          <Typography sx={{ color: "text.secondary", marginTop: "10px" }}>
            Stay updated with recent activity.
          </Typography>
        </Box>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          padding: "20px",
          backgroundColor: "background.paper",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          "@media (max-width: 600px)": {
            padding: "10px",
          },
        }}
      >
        <Typography sx={{ fontSize: "16px", color: "text.secondary" }}>
          © 2024 Your Dashboard. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default ComplexLayoutExample;
