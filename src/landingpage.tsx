import React from "react";
import { Grid, Cell } from "react-mdl";

import Boogi from "./boogi";

export default class landingpage extends React.Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="bg landing-grid">
          <Cell col={12} className="landpic">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <img
              src="https://library.kissclipart.com/20180909/goe/kissclipart-avatar-icon-developer-clipart-computer-icons-progr-8837b27ee602fca5.png"
              alt="mypic"
              className="avatar-img"
            />
            {/* <Boogi name="JDJJDJDJDJDH" /> */}

            <div className="banner-text">
              <h1>Full Stack Developer</h1>
              <hr
                style={{ borderTop: "3px solid #11c4ac", width: "40%" }}
              />{" "}
              <p>
                HTML/CSS | JavaScript | TypeScript | React | NodeJS | Java |
                Python | C# | C | Solidity | MongoDB
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Freecodecamp */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>

                {/* Youtube */}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
