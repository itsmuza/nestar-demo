import withLayoutBasic from "@/libs/components/layout/layoutBasic";
import { Container } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
  const [title, setTitle] = useState<string>("hello");
  return (
    <Container>
      Community{" "}
      <button onClick={() => alert("Hello MIT")} style={{ margin: "15px" }}>
        Press ME
      </button>
    </Container>
  );
};

export default withLayoutBasic(Community);
