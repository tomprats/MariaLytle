import {connect} from "react-redux";
import {updateProfile} from "application/redux/actions/profile";
import Component from "./presenter";

const mapStateToProps = ({profile}) => ({profile});

export default connect(mapStateToProps, {updateProfile})(Component);
