import React from "react";
import { Grid, Cell } from "react-mdl";

interface experienceProps {
  startYear: number;
  endYear: number;
  jobName: string;
  jobDescription: string;
}

export default class Experience extends React.Component<experienceProps> {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p style={{ color: "white" }}>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ color: "white", marginTop: "0px" }}>
            {this.props.jobName}
          </h4>
          <p style={{ color: "white" }}>{this.props.jobDescription}</p>
        </Cell>
      </Grid>
    );
  }
}
