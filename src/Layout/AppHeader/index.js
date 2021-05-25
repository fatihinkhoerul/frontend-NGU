import React, {Fragment} from 'react';
import cx from 'classnames';
import {Link} from 'react-router-dom'

import {connect} from 'react-redux';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import HeaderDots from "./Components/HeaderDots";
import {Button} from "reactstrap";

class Header extends React.Component {
    render() {
        let {
            headerBackgroundColor,
            enableMobileMenuSmall,
            enableHeaderShadow
        } = this.props;
        return (
            <Fragment>
                <CSSTransitionGroup
                    component="div"
                    className={cx("app-header", headerBackgroundColor, {'header-shadow': enableHeaderShadow})}
                    transitionName="HeaderAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={1500}
                    transitionEnter={false}
                    transitionLeave={false}>

                    <div className="header-dots">
                        <div className="app-header-right">
                            <Button className="mb-2 mr-2 btn-icon btn-shadow btn-outline-2x" outline
                                    color="success">
                                <i className="lnr-user btn-icon-wrapper"> </i>
                                <Link to="/homepage" style={{textDecoration:"none"}}>Homepage</Link>

                            </Button>
                            <Button className="mb-2 mr-2 btn-icon btn-shadow btn-outline-2x" outline
                                    color="info">
                                <i className="lnr-paperclip btn-icon-wrapper"> </i>
                                <Link to="/report" style={{textDecoration:"none"}}>Report</Link>

                            </Button>
                            <Button className="mb-2 mr-2 btn-icon btn-shadow btn-outline-2x" outline
                                    color="focus">
                                <i className="lnr-keyboard btn-icon-wrapper"> </i>
                                <Link to="/form" style={{textDecoration:"none"}}>Form</Link>

                            </Button>
                        </div>
                    </div>
                </CSSTransitionGroup>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
    closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
    headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
    enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);