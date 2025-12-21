import React from "react";
import { useParams } from "react-router-dom";

import Steel from "./steel";
import Cement from "./cement";
import Sheet from "./sheet";
import Cutter from "./cutter";
import Pipe from "./pipe";

export default function BrandDetails() {
  const { slug } = useParams();

  switch (slug) {
    case "steel":
      return <Steel />;
    case "cement":
      return <Cement />;
    case "sheet":
      return <Sheet />;
    case "cutter":
      return <Cutter />;
    case "pipe":
      return <Pipe />;
    default:
      return (
        <h2 style={{ textAlign: "center", marginTop: "100px" }}>
          Product not found
        </h2>
      );
  }
}
