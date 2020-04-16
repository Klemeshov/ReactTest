import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    };

    activateEditMode = () => {
        this.setState({
            editMode:true
        })
    };
    deactivateEditMode = () => {
        this.setState({
            editMode:false
        })
    };

    render() {
        return (
            <div>
                {
                    !this.state.editMode
                        ? <div onDoubleClick={this.activateEditMode}>{this.props.status}</div>
                        : <div>
                            <input value={this.props.status} onBlur={this.deactivateEditMode} autoFocus={true}/>
                        </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;