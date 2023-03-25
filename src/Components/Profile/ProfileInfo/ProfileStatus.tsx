import React, {ChangeEvent} from 'react';

type StatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

type StateType = {
    editMode: boolean,
    status: string
}

class ProfileStatus extends React.Component<StatusPropsType, StateType> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: StatusPropsType, prevState: StateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode
                    ? <div>
                        <span
                            onDoubleClick={this.activateEditMode}>{this.props.status ? this.props.status : '------------'}</span>
                    </div>
                    : <div>
                        <input value={this.state.status} onBlur={this.deactivateEditMode} onChange={this.onChangeStatus}
                               autoFocus/>
                    </div>
                }
            </>
        );
    }
}

export default ProfileStatus;