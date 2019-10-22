import React from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import profilePic from "./circle-cropped.png";

export default class Resume extends React.Component {
  render() {
    return (
      <div>
        <Grid className="bg3">
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src={profilePic} alt="avatar" style={{ height: "200px" }} />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Nadav Elkayam</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr
              style={{ borderTop: "3px dotted #833fb2", width: "50%" }}
            />{" "}
            {/*line*/}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <hr style={{ borderTop: "3px dotted #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Beer Sheva, Israel</p>
            {/* <h5>Phone</h5>
            <p>(123) 456-7890</p> */}
          </Cell>
          <Cell className="rresume-right-col" col={8}>
            <h2 style={{ color: "white" }}>Education</h2>

            <Education
              startYear={2002}
              endYear={2006}
              schoolName="My University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Education
              startYear={2007}
              endYear={2009}
              schoolName="My 2nd University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2 style={{ color: "white" }}>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Experience
              startYear={2012}
              endYear={2016}
              jobName="Second Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2 style={{ color: "white" }}>Skills</h2>
            <Skills skill="Java" progress={100} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="TypeScript" progress={90} />
            <Skills skill="React" progress={75} />
          </Cell>
        </Grid>
      </div>
    );
  }
}
