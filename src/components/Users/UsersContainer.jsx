import {connect} from "react-redux";
import Users from "./Users";
import React from "react";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";
import {
    onFollow,
    onUnfollow,
    setCurrentPage,
    setFetching,
    setTotalUsersCount,
    setUsers
} from "../../redux/usersReducer";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setFetching(true);
        axios.get(`http://localhost:5000/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setTotalUsersCount(response.data.totalCount);
            this.props.setUsers(response.data.users);
            this.props.setFetching(false);
        })
    }

    changePage = (page) => {
        this.props.setCurrentPage(page);
        this.props.setFetching(true);
        axios.get(`http://localhost:5000/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setTotalUsersCount(response.data.totalCount);
            this.props.setUsers(response.data.users);
            this.props.setFetching(false);
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
/*
let mapDispatchToProps = (dispatch) => (
    {
        onFollow: (id) => {
            dispatch(onFollow(id))
        },
        onUnfollow: (id) => {
            dispatch(onUnfollow(id))
        },
        setUsers: (users) => {
            dispatch(setUsers(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPage(page))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCount(totalUsersCount))
        },
        setFetching: (fetching) => {
            dispatch(setFetching(fetching))
        }
    }
);
*/
export default connect(mapStateToProps,
    {onFollow, onUnfollow, setUsers, setCurrentPage, setTotalUsersCount, setFetching}
)(UsersContainer);