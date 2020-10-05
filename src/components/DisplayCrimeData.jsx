import {
  fetchTeaserListData,
  fetchContentListData,
} from "../modules/crimeReports";
import { Pie } from "react-chartjs-2";
import React, { Component } from "react";
import parse from "html-react-parser";
import { Button } from "semantic-ui-react";

class DisplayCrimeData extends Component {
  state = {
    crimeData: [],
  };

  componentDidMount = async () => {
    let crimeData = await fetchTeaserListData();
    this.setState({ crimeData: crimeData });
  };
  readMore = async () => {
    let crimeData = await fetchContentListData();
    this.setState({ crimeData: crimeData });
  };

  render() {
    const authenticated = this.props.authenticated;
    let graph;

    if (authenticated) {
      let location = [];
      let types = [];

      if (this.state.crimeData !== null) {
        this.state.crimeData.forEach((data) => {
          types.push(data.title_type);
          location.push(data.title_location);
        });
        const crimeGraph = {
          datasets: [
            {
              data: [10, 3, 4, 6, 4, 3],
            },
          ],
          label: ["Stockholm"],
        };
        graph = (
          <>
            <Pie data={crimeGraph} />
          </>
        );
      }
    }

    let readMoreButton;
    if (authenticated) {
      readMoreButton = (
        <Button data-cy="read-more" id="read-more" onClick={this.readMore}>
          Read more
        </Button>
      );
    }

    let teaserList = this.state.crimeData.map((report) => {
      return (
        <div data-cy={"data-" + report.id} key={report.id}>
          <p data-cy="teaser" id="teaser">
            {report.description}
          </p>
          {report.content && (
            <p data-cy="teaser" id="content">
              {parse(`${report.content}`)}
            </p>
          )}
        </div>
      );
    });

    return (
      <div>
        {readMoreButton}
        {teaserList}
        {graph}
      </div>
    );
  }
}

export default DisplayCrimeData;
