document.addEventListener('DOMContentLoaded', () => {

    fetch('https://lhotwll217.github.io/data/events_300_rss.json')
        .then(data => data.json())
        .then(events => (renderTodayEvents(events)))

    // .then(events => events.forEach(event => {
    //     console.log(event.startdate)
})






function renderTodayEvents(events) {

    console.log(events)

    //Build New Array With Only Todays Events
    function buildTodayArray(events) {
        // Create todays date
        let today = new Date
        let dayDate = today.toISOString().split('T', 1)[0]
        // events.forEach(console.log(events.startdate))

        //Find all objects in JSON with same date as today
        let todayArray = events.filter(function (e) { return e.startdate === dayDate })
        return todayArray;
    }

    let todayArray = buildTodayArray(events)
    console.log(todayArray)

    function buildTodayHTML(today) {

        today.forEach(e => {
            console.log(e)

            let eventContainer = document.createElement('div')
            let eventH2 = document.createElement('div')
            let eventImg = document.createElement('img')
            let eventDescription = document.createElement('p')
            // let eventTime = document.createElement('p')
            // let eventLocation = document.createElement('p')

            eventContainer.className = 'event-container'

            eventH2.textContent = e.title
            eventImg.src = e.image
            eventDescription.innerHTML = `<div> ${e.description} </div > `
            // eventTime.textContent = `${e.starttime} - ${e.endtime} `
            // eventLocation.textContent = e.location

            eventContainer.append(eventH2, eventImg, eventDescription, eventLocation)
            document.querySelector('body').append(eventContainer)





        })


    }
    console.log(buildTodayHTML(todayArray))



    // function buildTodayHTML(todayArray)
    // buildTodayArray(events).forEach({


    // M


    // })


}





