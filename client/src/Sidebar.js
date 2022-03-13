import React from 'react';
import "./Sidebar.css";

function Sidebar() {
    return <div className='sidebar'>
        {/* <Avatar /> */}
        <div className="sidebarChat_info">
            <h2>Room Name</h2>
            <p>This is the last messages</p>
        </div>
    </div>;
}

export default Sidebar;