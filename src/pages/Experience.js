import React from "react";
import {
 VerticalTimeline,
 VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import SchoolIcon from "@material-ui-icons/School";
import SchoolIcon from '@mui/icons-material/School';
// import WorkIcon from "@material-ui-icons/Work";
import WorkIcon from '@mui/icons-material/Work';


function Experience() {
  return (
    <div  className="experience">
     <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
       className="vertical-timeline-element--education"
       date="2017-2021"
       iconstyle={{background: "#3e497a", color: "#fff" }}
       icon={<SchoolIcon />} >

        <h3 className="vertical-timeline-element-title">
         Excel Engineering College, Namakkal
        </h3>
        <p>BE-Computer Science And Engineering</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
       className="vertical-timeline-element--work"
       date="2023 - present"
       iconstyle={{background: "#e9d35b", color: "#fff" }}
       icon={<WorkIcon />} >

        <h3 className="vertical-timeline-element-title">
         Full Stack Developer 
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
         Coimbatore
        </h4>
        <p>Full Stack Developer Course Training in Skill Safari </p>
      </VerticalTimelineElement>
     
     </VerticalTimeline>
    </div>
  );
}

export default Experience
