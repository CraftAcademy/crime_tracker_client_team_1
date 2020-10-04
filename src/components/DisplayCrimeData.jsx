import {
  fetchTeaserListData,
  fetchContentListData,
} from "../modules/crimeReports";
/* import parse from "html-react-parser"; */
import { Bar } from "react-chartjs-2";
import React, { Component } from "react";
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
    let graph;
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
            data: types,
            location: location,
            label: "crime type",
          },
        ],
        location: location,
      };

      graph = (
        <>
          <Bar data={crimeGraph} />
        </>
      );
    }

    const authenticated = this.props.authenticated;
    let readMoreButton;
    if (authenticated) {
      readMoreButton = (
        <Button data-cy="read-more" onClick={this.readMore}>
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
          <p data-cy="teaser" id="content">
            {report.content}
          </p>
        </div>
      );
    });

    return (
      <div>
        <h1>Crime Reports</h1>
        {teaserList}
        {readMoreButton}
        {graph}
      </div>
    );
  }
}

export default DisplayCrimeData;
