import { Card, Divider } from "@mui/material";
import { FaLocationDot } from "react-icons/fa6";
import "./jobCard.css";

function JobCard({ data, selected, handleOnClick }) {
  return (
    <Card
      className="card"
      variant="outlined"
      sx={[
        { borderRadius: "12px" },
        selected && { borderColor: "#04b541", borderWidth: "3px" },
      ]}
      onMouseOver={() => {
        console.log("mousing over");
      }}
      onClick={handleOnClick}
    >
      <div className="top">
        <img className="image" src={data.photo_url} alt="" />
        <div className="details">
          <div className="row">
            <div className="company">{data.company}</div>
            <div className="rating">{data.rating} ★</div>
          </div>
          <div className="title">{data.title}</div>
          <div className="time">
            <div className="timestamp">{data.posted}</div>
            <FaLocationDot color="grey" fontSize="18px" />
            <div className="location">{data.location}</div>
          </div>
        </div>
        <div className="role-tag">{data.role_tag}</div>
      </div>
      <Divider
        sx={{
          width: "100%",
          borderBottomWidth: 1,
          marginTop: 2,
          marginBottom: 1,
        }}
      />
      <div className="bottom">
        {data.tags.map((tag, index) => {
          return (
            <div key={index} className="tag">
              {tag}
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default JobCard;
