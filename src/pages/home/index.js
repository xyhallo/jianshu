import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";

import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import { actionCreators } from "./store";

class Home extends PureComponent {
    handleScrollTop() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img
                        className="banner-img"
                        src="https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
                        alt=""
                    />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                {
                    this.props.showScroll? (<BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>):null
                }
                {/* <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> */}
            </HomeWrapper>
        );
    }

    componentDidMount() {
        console.log(this.props)
        this.props.changeHomeData();
        this.bindEvents()
    }

    componentWillUnmount(){
        window.removeEventListener("scroll",this.props.changeScrollTopShow)
    }

    bindEvents(){
        window.addEventListener("scroll",this.props.changeScrollTopShow)
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(["home","showScroll"])
});

const mapDispatch = dispatch => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop>500){
            dispatch(actionCreators.toggleTopShow(true));
        }else{
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
});
export default connect(
    mapState,
    mapDispatch
)(Home);
