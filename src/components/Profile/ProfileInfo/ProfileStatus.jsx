import React from "react";
import classes from "./ProfileInfo.module.css"

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    };
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    };
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    };

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div className={classes.Status}
                           onClick={this.activateEditMode}>
                        Status: {this.props.status}
                    </div>

                    : <input onChange={this.onStatusChange}
                           value={this.state.status}
                           onBlur={this.deactivateEditMode}
                           onKeyPress={(event) => {
                               if (event.key === "Enter")
                                   this.deactivateEditMode()
                           }}
                           autoFocus={true}/>
                }
            </div>
        )
    }
}

export default ProfileStatus;