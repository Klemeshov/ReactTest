import {connect} from "react-redux";
import Users from "./Users";
import {
    FOLLOW,
    SET_CURRENT_PAGE,
    SET_FETCHING,
    SET_TOTAL_USERS_COUNT,
    SET_USERS,
    UNFOLLOW
} from "../../redux/usersReducer";
import React from "react";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setFetching(true);
        axios.get(`http://localhost:5000/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setFetching(false);
            this.props.setTotalUsersCount(response.data.totalCount);
            this.props.setUsers(response.data.users);
        })
    }

    changePage = (page) => {
        this.props.setCurrentPage(page);
        this.props.setFetching(true);
        axios.get(`http://localhost:5000/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setFetching(false);
            this.props.setTotalUsersCount(response.data.totalCount);
            this.props.setUsers(response.data.users);
        })
    };

    render() {
        return (
            <>
            {!this.props.isFetching
            ? <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            onFollow={this.props.onFollow}
            onUnfollow={this.props.onUnfollow}
            currentPage={this.props.currentPage}
            changePage={this.changePage}/>
            : <Preloader/>
            }
            </>

        )
    }
}

let mapStateToProps = (state) => (
    {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching
    }
);

let mapDispatchToProps = (dispatch) => (
    {
        onFollow: (id) => {
            dispatch({type: FOLLOW, id: id})
        },
        onUnfollow: (id) => {
            dispatch({type: UNFOLLOW, id: id})
        },
        setUsers: (users) => {
            dispatch({type: SET_USERS, users: users})
        },
        setCurrentPage: (page) => {
            dispatch({type: SET_CURRENT_PAGE, page: page})
        },
        setTotalUsersCount: (totalUsersCount) => (dispatch({
            type: SET_TOTAL_USERS_COUNT,
            totalUsersCount: totalUsersCount
        })),
        setFetching: (fetching) =>(dispatch({type: SET_FETCHING, fetching:fetching}))
    }
);


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);