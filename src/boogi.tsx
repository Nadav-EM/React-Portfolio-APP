import React from "react";

interface myProps {
  name: string;
  age?: number | undefined | null;
}

export default class boogi extends React.Component<myProps> {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
