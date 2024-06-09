import React, { useState } from "react";
import { Activity } from '../types/interfaces'
import { Checkbox } from "../reusable/Checkbox";

interface ActivityPreviewProps {
    activity: Activity;
    onToggleActivity: (activityId: string) => void;
}

const ActivityPreview: React.FC<ActivityPreviewProps> = ({ activity, onToggleActivity }) => {
    const [isDone, setIsDone] = useState(activity.isDone)

    const handleToggle = (activityId: string) => {
        console.log('here');
        setIsDone(!isDone)
        onToggleActivity(activityId)
    }

    return (
        <section className="activity-preview">
            <Checkbox isDone={isDone} onToggle={handleToggle} activityId={activity._id} />
            <div className="activity-preview-title-container">
                <span className="activity-preview-title">{activity.name}</span>
            </div>
            <div className="activity-preview-description-container">
                <span className="activity-preview-description">{activity.description}</span>
            </div>
            <div className="activity-preview-duration-container">
                <span className="activity-preview-duration">{activity.duration}</span>
            </div>

        </section>
    )
}

export default ActivityPreview