import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import List from "../components/List";
import MyListTitles from "../components/MyListTitles";
import { actions } from "../modules/index";
import selectors from "../modules/selectors";
import logo from "../data/logo.png";

class MainPages extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    myLists: PropTypes.array,
    recommendations: PropTypes.array,
  };
  constructor(props) {
    super(props);
    this.actions = props.actions;
  }

  componentDidMount() {
    this.actions.getRenderLists();
  }

  render() {
    const { actions, myLists, recommendations } = this.props;
    const { addItem, removeItem } = actions;
    return (
      <Fragment>
        <img src={logo} alt="logo" className="netflx-logo" />
        <List
          handleAction={removeItem}
          movieLists={myLists}
          movieTitle="My List(s)"
        />
        <List
          handleAction={addItem}
          movieLists={recommendations}
          movieTitle="Recommendation List(s)"
        />
        <MyListTitles myLists={myLists} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  myLists: selectors.getMyList(state),
  recommendations: selectors.getRecommendation(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...actions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPages);
