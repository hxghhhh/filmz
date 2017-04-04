import React from 'react';
import config from '../config';

var styles = {
  card: {
    padding:5,
    display: 'flex',
    flexDirection: 'row',
    height: 350,
    backgroundColor:'white',
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 3
  },
  movieInfo: {
    width: 250,
    padding:10
  }
}

export default class Movie extends React.Component {
  render() {
    const { original_title,
            id,
            poster_path,
            overview,
            popularity,
            vote_average,
            vote_count
          } = this.props;
    console.log(this.props)
    return (
          <div style={styles.card}>
            <img src={config.posterPath+'/w500/'+poster_path}
              width={250}
            />
            <div style={styles.movieInfo}>
              <h3>{original_title}</h3>
              <div>{overview}</div>
            </div>
          </div>
    );
  }
}
