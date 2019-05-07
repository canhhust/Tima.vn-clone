import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Profile.scss';
import { getCurrentProfile } from '../../actions/profile.action';
import SwappingSquaresSpinner from '../common/SwappingSquaresSpinner';
import FixedInfo from './FixedInfo';
import UpdateInfo from './UpdateInfo';
import UpdatePackage from './UpdatePackage';
import UpdateDistrict from './UpdateDistrict';
import UpdateCensorship from './UpdateCensorship';
export class Profile extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  render() {
    const { profile, loading } = this.props.profile;

    let Content =
      loading || profile === null ? (
        <SwappingSquaresSpinner />
      ) : (
        <>
          <div className="container bg-white">
            <div className="tm-account bg-gray-lightest p-md-5 pt-md-4 p-3">
              <FixedInfo profile={profile} />
              <UpdateInfo profile={profile} />
            </div>
          </div>
          <div className="container py-5">
            <div className="tm-account bg-white p-md-5 pt-md-4 p-3">
              {profile.user.typeOfAcc === 'loan' && (
                <UpdatePackage profile={profile} />
              )}
              {profile.user.typeOfAcc === 'loan' && (
                <UpdateDistrict profile={profile} />
              )}
              <UpdateCensorship profile={profile} />
            </div>
          </div>
        </>
      );

    return <div className="main-page">{Content}</div>;
  }
}
Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile
});

const mapDispatchToProps = {
  getCurrentProfile
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
