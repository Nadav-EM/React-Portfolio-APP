import React from "react";
import { Grid, Cell } from "react-mdl";

interface educationProps {
  startYear: number;
  endYear: number;
  schoolName: string;
  schoolDescription: string;
}

export default class Education extends React.Component<educationProps> {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p style={{ color: "white" }}>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px", color: "white" }}>
            {this.props.schoolName}
          </h4>
          <p style={{ color: "white" }}>{this.props.schoolDescription}</p>
        </Cell>
      </Grid>
    );
  }
}
