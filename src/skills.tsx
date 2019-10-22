import React from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

interface skillsProps {
  skill: string;
  progress: number;
}

export default class Skills extends React.Component<skillsProps> {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div style={{ color: "white", display: "flex" }}>
            {this.props.skill}{" "}
            <ProgressBar
              style={{
                color: "white",
                margin: "auto",
                width: "75%",
                paddingLeft: "auto"
              }}
              progress={this.props.progress}
            />{" "}
          </div>
        </Cell>
      </Grid>
    );
  }
}
