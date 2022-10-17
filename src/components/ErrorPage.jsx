import React from "react";
import { Flex, Box, Text, useTheme } from "@100mslive/react-ui";
import { useNavigate } from "react-router-dom";
import { CREATE_ROOM_DOC_URL } from "../common/constants";

function ErrorPage({ error }) {
  const themeType = useTheme().themeType;

  const navigate = useNavigate();

  const handleAppointment = () => {
    navigate("/preview/633fceb2e08863a3f2f82f4c/patient");
  };
  return (
    <Flex
      align="center"
      justify="center"
      css={{
        size: "100%",
        color: "$textPrimary",
        backgroundColor: "$bgPrimary",
      }}
    >
      <Box css={{ position: "relative", overflow: "hidden", r: "$3" }}>
        <img
          src={
            themeType === "dark"
              ? require("../images/error-bg-dark.svg")
              : require("../images/error-bg-light.svg")
          }
          alt="Error Background"
        />
        {window.location.hostname === "localhost" ? (
          <Flex
            align="center"
            direction="column"
            css={{ position: "absolute", size: "100%", top: "33.33%", left: 0 }}
          >
            <Text variant="h3">Almost There!</Text>
            <Text
              variant="body1"
              css={{ margin: "1.75rem", textAlign: "center" }}
            >
              {
                "Hi there! thanks for trying us out, there is not much here yet. Let's get you all setup to join a meeting. "
              }
              <a
                href={CREATE_ROOM_DOC_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline" }}
              >
                Click here
              </a>{" "}
              for next steps
            </Text>
          </Flex>
        ) : (
          <Flex
            align="center"
            direction="column"
            css={{ position: "absolute", size: "100%", top: "33.33%", left: 0 }}
          >
            <Text variant="h2">Welcome</Text>
            <Text variant="h5" css={{ m: "1.75rem" }}>
              {error}
            </Text>
            <button className="btn-appointment" onClick={handleAppointment}>
              Book Appointment
            </button>
          </Flex>
        )}
      </Box>
    </Flex>
  );
}

ErrorPage.displayName = "ErrorPage";

export default ErrorPage;
