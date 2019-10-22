import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import profilePic from "./circle-cropped.png";

export default class contact extends React.Component {
  render() {
    return (
      <div className="bg contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2></h2>

            <img src={profilePic} alt="avatar" style={{ height: "250px" }} />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr style={{ borderTop: "1px solid #11c4ac", width: "40%" }} />{" "}
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "Anton",
                      color: "white"
                    }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (054) 493-1135
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "Anton",
                      color: "white"
                    }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    Nadavz.elkayam@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "Anton",
                      color: "white"
                    }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    MySkypeID
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
