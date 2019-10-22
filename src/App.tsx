import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./main";
import { Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                NadavEM
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/">
                <img
                  className="smallimg"
                  src="https://cdn1.iconfinder.com/data/icons/real-estate-set-2/512/15-512.png"
                  alt=""
                />
              </Link>
            </Navigation>
          </Header>

          <Drawer>
            <Navigation className="bg1">
              <Link
                style={{
                  fontSize: 15,
                  textDecoration: "none",
                  color: "#11c4ac"
                }}
                to="/"
              >
                Home
              </Link>
              <Link
                style={{
                  fontSize: 15,
                  textDecoration: "none",
                  color: "#11c4ac"
                }}
                to="/resume"
              >
                Resume
              </Link>
              <Link
                style={{
                  fontSize: 15,
                  textDecoration: "none",
                  color: "#11c4ac"
                }}
                to="/aboutme"
              >
                About Me
              </Link>
              <Link
                style={{
                  fontSize: 15,
                  textDecoration: "none",
                  color: "#11c4ac"
                }}
                to="/projects"
              >
                Projects
              </Link>
              <Link
                style={{
                  fontSize: 15,
                  textDecoration: "none",
                  color: "#11c4ac"
                }}
                to="/contact"
              >
                Contact
              </Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
