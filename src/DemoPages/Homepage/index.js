import React, {Fragment} from "react";
import {Row} from "reactstrap";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup"
import CardData from "./CardData"
import CardIsi from './CardIsi'
import AppHeader from "../../Layout/AppHeader"

const Homepage = () => {
    return (
        <Fragment>
            <CSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <AppHeader/>
                <div className="app-main">
                    <div className="app-main__inner">
                        <Row>
                            {CardData.map((card, index) => (
                                <CardIsi key={index} title={card.title} subtitle={card.subtitle} image={card.image}/>
                            ))}
                        </Row>
                    </div>
                </div>
            </CSSTransitionGroup>
        </Fragment>
    );
};

export default Homepage;