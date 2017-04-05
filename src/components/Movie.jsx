import React from 'react';
import config from '../config';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHeartFilled from 'material-ui/svg-icons/action/favorite';
import ActionHeart from 'material-ui/svg-icons/action/favorite-border';
import { saveMovie, removeMovie } from '../actions/user.actions'
import { connect } from 'react-redux';
import { red500 } from 'material-ui/styles/colors';

var styles = {
  card: {
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
  },
  overview: {
    color:'#AAAAAA',
    fontSize: 14
  },
  img:{
    borderRadius: 3
  },
  rating:{
    paddingTop:15,
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionBar: {
    display: 'flex',
    flexDirection:'row'
  },
}

@connect((store) => {
  return {
    user: store.user
  }
})

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

    return (
          <div style={styles.card}>
            <img style={styles.img}
              src={config.posterPath+'/w500/'+poster_path}
              width={250}
            />
            <div style={styles.movieInfo}>
              <h3>{original_title}</h3>
              <div style={styles.overview}>{overview}</div>
              <div style={styles.actionBar}>
                <div style={styles.rating}>{vote_average}/10
                </div>
                <div>
                  { this.props.user.movieHash.includes(id) &&
                    <IconButton tooltip="Saved!"
                       onTouchTap={(event)=> {
                         // remove movie from collection
                         this.props.dispatch(removeMovie(id))
                       }}
                      >
                      <ActionHeartFilled color={red500} />
                    </IconButton>
                  } {!this.props.user.movieHash.includes(id) &&
                    <IconButton tooltip="Save Movie!"
                      onTouchTap={(event)=> {
                        this.props.dispatch(saveMovie({ original_title,
                                id,
                                poster_path,
                                overview,
                                popularity,
                                vote_average,
                                vote_count
                              }))
                      }}
                      >
                      <ActionHeart />
                    </IconButton>
                  }
                </div>
              </div>
            </div>
          </div>
    );
  }
}
