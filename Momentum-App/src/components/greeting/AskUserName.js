import React from 'react';

const AskUsername = props => {
    return (
        <div className="greetingBox">
            <form onSubmit={props.onSubmit}>
               What's your name? <input type="text" value={props.formValue} onChange={props.onChange} />
            </form>
        </div>
    );
};

export default AskUsername;