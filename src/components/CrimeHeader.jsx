import React from "react";
import { Grid, Header, Segment } from "semantic-ui-react";

const CrimeHeader = () => {
  return (
    <>
      <Segment inverted>
        <Header size="huge" id="header">
          <Grid>
            <h2 id="header-txt">Crime Tracker</h2>
          </Grid>
        </Header>
      </Segment>
    </>
  );
};
export default CrimeHeader;
