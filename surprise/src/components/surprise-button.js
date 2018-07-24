import React from 'react';

export default function SurpriseButton(props) {
    return <button onClick={e =>
                props.handleClickSurprised()
            }>Surprise!</button>;
}

