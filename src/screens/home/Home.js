// import React, { Component } from "react";
// import "./Home.css";
// import Header from "../../common/header/Header";
// import MoviesData from "../../common/MoviesData";
// import SingleImageList from "../../screens/SingleImageList"; 
// import RegularImageList from "../RegularImageList"
// import SimpleCard from "../filters";

// export default class Home extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       MoviesData: MoviesData,
//     };
//   }
//   render() {
//     return (
//       <div>
//         <Header />
//         <div className="headerBar">
//           <span className="headerText">Upcoming Movies</span>
//         </div>
//         <SingleImageList MoviesData={this.state.MoviesData} />
//         <div className="flex-container">
//           <div className="left">
//             <a href=""><RegularImageList MoviesData={this.state.MoviesData} /></a>
//           </div>
//           <div className="right">
//            {/* <SimpleCard/> */}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
import React from "react";
import "./Home.css";
// import "../../common/header/Header";
import Header from "../../common/header/Header.js";
import SingleImageList from "../../screens/SingleImageList"; 
import moviesData from "../../common/MoviesData";
import RegularImageList from "../RegularImageList"
import SimpleCard, { userSelection } from "../filters";
import genres from "../genres";
import artists from "../artists";
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: moviesData,
      genres: genres,
      artists: artists,
      userSelection: moviesData,
    };
  }

  filterHandler = () => {
    if (
      userSelection.name === "" &&
      userSelection.releaseDateEnd === "" &&
      userSelection.releaseDateStart === "" &&
      userSelection.genres.length === 0 &&
      userSelection.artists.length === 0
    ) {
      const state = this.state;
      state.userSelection = moviesData;
      this.setState(state);
      return moviesData;
    } else {
      const filteredMovies = this.state.data.filter((movie) => {
        if (
          movie.title.toLowerCase() === userSelection.name.toLowerCase() ||
          movie.genres.some((genre) => userSelection.genres.includes(genre)) ||
          movie.artists.some((artist) =>
            userSelection.artists.includes(
              `${artist.first_name} ${artist.last_name}`
            )
          )
        ) {
          console.log(movie);
          return movie;
        }
      });

      const state = this.state;
      state.userSelection = filteredMovies;

      this.setState(state);
    }
  };

  render() {
    return (
      <div>
        <Header />
        {/* <span className="heading">Upcoming Movies</span> */}
        <SingleImageList moviesData={this.state.data} />

        <div className="flex-container">
          <div className="left">
            <RegularImageList moviesData={this.state.userSelection} />
          </div>
          <div className="right">
            <SimpleCard
              genres={this.state.genres}
              artists={this.state.artists}
              filterHandler={this.filterHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;