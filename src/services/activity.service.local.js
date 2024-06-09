
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
// import { userService } from './user.service.js'

const STORAGE_KEY = 'activity'

export const activityService = {
    query,
    getById,
    save,
    remove,
    getEmptyActivity,
    toggleActivity
    // addActivityMsg
}

window.cs = activityService

const gActivities = [
      {
        "_id": "1",
        "name": "Meditation",
        "description": "A 10-minute guided meditation to start the day with a clear mind.",
        "duration": 10,
        "category": "Mindfulness",
        "isDone": false
      },
      {
        "_id": "2",
        "name": "Exercise",
        "description": "A 30-minute workout session to boost energy levels.",
        "duration": 30,
        "category": "Fitness",
        "isDone": false
      },
      {
        "_id": "3",
        "name": "Healthy Breakfast",
        "description": "Prepare and eat a nutritious breakfast.",
        "duration": 15,
        "category": "Nutrition",
        "isDone": false
      },
      {
        "_id": "4",
        "name": "Reading",
        "description": "Spend 20 minutes reading a book or an article.",
        "duration": 20,
        "category": "Personal Development",
        "isDone": false
      },
      {
        "_id": "5",
        "name": "Gratitude Journal",
        "description": "Write down three things you are grateful for.",
        "duration": 5,
        "category": "Mindfulness",
        "isDone": false
      }
    ]

async function query() {
    var activities = await storageService.query(STORAGE_KEY)
    if (!activities || !activities.length){
        activities = gActivities
        await _save(STORAGE_KEY, activities)
    } 
    // if (filterBy.txt) {
    //     const regex = new RegExp(filterBy.txt, 'i')
    //     activities = activities.filter(activity => regex.test(activity.vendor) || regex.test(activity.description))
    // }
    // if (filterBy.price) {
    //     activities = activities.filter(activity => activity.price <= filterBy.price)
    // }
    return activities
}

function getById(activityId) {
    return storageService.get(STORAGE_KEY, activityId)
}

async function remove(activityId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, activityId)
}

async function save(activity) {
    var savedActivity
    if (activity._id) {
        savedActivity = await storageService.put(STORAGE_KEY, activity)
    } else {
        // Later, owner is set by the backend
        // activity.owner = userService.getLoggedinUser()
        savedActivity = await storageService.post(STORAGE_KEY, activity)
    }
    return savedActivity
}

async function toggleActivity(activityId) {
    try {
        const activity = await getById(activityId)
        activity.completedAt = activity.completedAt ? null : Date.now()
        activity.isDone = !activity.isDone
        return await save(activity)
    } catch (err) {
        console.log('activityService: toggleActivity: err', err)
    }
}

// async function addActivityMsg(activityId, txt) {
//     // Later, this is all done by the backend
//     const activity = await getById(activityId)
//     if (!activity.msgs) activity.msgs = []

//     const msg = {
//         id: utilService.makeId(),
//         by: userService.getLoggedinUser(),
//         txt
//     }
//     activity.msgs.push(msg)
//     await storageService.put(STORAGE_KEY, activity)

//     return msg
// }

function getEmptyActivity() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}


// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))

// private

async function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}



