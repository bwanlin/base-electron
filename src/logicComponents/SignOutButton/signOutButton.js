import React from 'react';
import { Button } from 'antd'

const SignOutButton = ({ firebase }) => {
    const handleSignOut = () => {
        console.log("DISCONNECTED!")
    }
    return (
        <Button onClick={handleSignOut}>
            Sign Out
        </Button>
    )
};

export default SignOutButton;