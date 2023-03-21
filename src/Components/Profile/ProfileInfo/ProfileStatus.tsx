import React from 'react';

type StatusPropsType = {
    status: string
}

type StateType = {
    editMode: boolean
}

class ProfileStatus extends React.Component<StatusPropsType, StateType> {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                    : <div>
                        <input value={this.props.status} onBlur={this.deactivateEditMode.bind(this)} autoFocus/>
                    </div>
                }
            </>
        );
    }
}

export default ProfileStatus;