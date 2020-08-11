import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SEARCH } from '../actions/index';
import { withRouter } from 'react-router'

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: " " };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, field) {
    this.setState({ [field]: event.target.value });
  }

  handleSubmit(event) {
    const { addItem } = this.props;
    const { search } = this.state;

    event.preventDefault();
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
      .then(res => res.json())
      .then(
        (result) => {
          addItem(result.meals);
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
    this.props.history.push(('/search/' + search ));
  }

  render() {
    const { search } = this.state;
    return (
      <form id="searchForm" name="searchForm" onSubmit={this.handleSubmit}>
        <div>
          <input type="text" id="itemInput" name="mealName" placeholder="Fish... Chicken..." onChange={event => this.handleChange(event, 'search')} />
          <input type="submit" value="SEARCH" id="submitBtn" />
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addItem: item => {
    dispatch(SEARCH(item));
  },
});

SearchForm.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(withRouter(SearchForm));
