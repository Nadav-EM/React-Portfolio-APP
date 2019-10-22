import React from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

export default class Projects extends React.Component {
  state = {
    activeTab: 0
  };

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="bg projects-grid">
          {/* Project 1 */}
          <Card shadow={8} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                border: "1px solid #11c4ac",
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover"
              }}
            >
              React Project #1
            </CardTitle>
            <CardText className="pgg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="/">GITHUB</a>
              </Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={8} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                border: "1px solid #11c4ac",
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover"
              }}
            >
              React Project #2
            </CardTitle>
            <CardText className="pgg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="/">GITHUB</a>
              </Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={8} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                border: "1px solid #11c4ac",
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover"
              }}
            >
              React Project #3
            </CardTitle>
            <CardText className="pgg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="/">GITHUB</a>
              </Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Angular</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is VueJS</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {/* <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs> */}

        <div className="content">{this.toggleCategories()}</div>
      </div>
    );
  }
}
