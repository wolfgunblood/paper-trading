import React from 'react';
import "./NotoficationOverLay.scss"

const NotificationOverlay = ({ show }) => {


    return (
        <div className={`notification-overlay-container ${show ? "show" : "hide"}`}>
            No Notification
        </div>
    )
}

export default NotificationOverlay