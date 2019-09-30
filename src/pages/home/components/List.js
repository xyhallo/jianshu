import React, { PureComponent } from "react";
import { ListItem, ListInfo,LoadMore } from "../style";
import { connect } from "react-redux"
import { actionCreators } from "../store"
import { Link } from "react-router-dom"

class List extends PureComponent {
    render() {
        const {list,getMoreList,page} = this.props
        return (
         <>
           {
               list.map((item,index)=>{
                    return(
                        <Link key={index} to={"/detail/" + item.get('id')}>
                        <ListItem>
                        <ListInfo>
                            <h3 className="title">{item.get("title")}</h3>
                            <p className="desc">
                                {item.get("desc")}
                            </p>
                        </ListInfo>
                        <img
                            className="pic"
                            src={item.get("imgUrl")}
                            alt=""
                        />
                    </ListItem>
                    </Link>
                    )
               })
           }
             <LoadMore onClick={()=>getMoreList(page)}>阅读更多</LoadMore>
         </>
        );
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(["home","articleList"]),
    page: state.getIn(["home","articlePage"])
})

const mapDispatch = (dispatch) => ({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page))
    }
})

export default connect(mapStateToProps,mapDispatch)(List);
