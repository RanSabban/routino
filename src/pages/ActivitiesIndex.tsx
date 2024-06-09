import ActivityDetails from "./ActivityDetails"

const ActivitiesIndex: React.FC = () => {

    return (
        <section className="acitivities-index-container">
            <div className="activities-title-container">
                <span className="activities-title">Welcome To The New YOU!</span>
            </div>
            <ActivityDetails />
        </section>
    )
}

export default ActivitiesIndex