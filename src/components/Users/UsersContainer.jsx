import {connect} from "react-redux";
import Users from "./Users";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import {
    getUsers,
    onFollow,
    onUnfollow,
    setCurrentPage,
    setFetching,
    setTotalUsersCount,
    setUsers
} from "../../redux/usersReducer";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    changePage = (page) => {
        this.props.setCurrentPage(page);
        this.props.getUsers(page, this.props.pageSize);
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

export default connect(mapStateToProps,
    {onFollow, onUnfollow, setUsers, setCurrentPage,
        setTotalUsersCount, setFetching, getUsers}
)(UsersContainer);