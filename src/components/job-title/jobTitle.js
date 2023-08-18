import { Card } from "@mui/material";
import "./jobTitle.css";

function JobTitle({ title }) {
  return (
    <Card className="panel" variant="outlined" sx={{ borderRadius: "12px" }}>
      <div className="container">{title}</div>
    </Card>
  );
}

export default JobTitle;
