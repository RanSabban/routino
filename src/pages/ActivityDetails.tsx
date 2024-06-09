import { useEffect, useState } from 'react'
import { activityService } from '@services/activity.service.local.js'
import ActivityPreview  from '../cmps/ActivityPreview'


const ActivityDetails: React.FC = () => {

    const [activities, setActivities] = useState([])

    useEffect(() => {
        loadActivities()
    },[])

    const loadActivities = async () => {
        const activities = await activityService.query()
        console.log(activities)
        setActivities(activities)
    }

    const onToggleActivity = async (activityId: string) => {
        await activityService.toggleActivity(activityId)
        loadActivities()
    }

    if(!activities.length) return <div>Loading...</div>
    
    return (
        <section className="activity-details-container">
            <div className="activity-details-title-container">
                <span className="activity-details-title">Activity Details</span>
            </div>
            {activities.map(activity => <ActivityPreview key={activity._id}
            activity={activity} 
            onToggleActivity={onToggleActivity}
            />)}
        </section>
    )
}

export default ActivityDetails