document.addEventListener('DOMContentLoaded', () => {

    fetch('https://lhotwll217.github.io/data/events_300_rss.json')
        .then(data => data.json())
        .then(events => (renderTodayEvents(events)))

    // .then(events => events.forEach(event => {
    //     console.log(event.startdate)
});

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
            let attendP = document.createElement('p')
            let attendBtn = document.createElement('button')
            let attendTxt = document.createElement('span')


            // let eventTime = document.createElement('p')
            // let eventLocation = document.createElement('p')

            eventContainer.className = 'event-container'

            eventH2.textContent = e.title
            eventImg.src = e.image
            eventDescription.innerHTML = `<div> ${e.description} </div > `
            attendBtn.textContent = "Attending?"
            attendTxt.textContent = `0 people attending.`
            // eventTime.textContent = `${e.starttime} - ${e.endtime} `
            // eventLocation.textContent = e.location

            attendBtn.addEventListener('click', () => {
                // document.querySelector('span').textContent = "1 likes"


                attendingArray = document.querySelector('span').textContent.split(' ')
                // console.log(likes)
                // newArray = likes
                let attendingNumber = attendingArray[0]
                let attendingPeople = attendingArray[1]
                let attendingAttending = attendingArray[2]
                console.log(attendingNumber)

                function incrementalAttendance(x) {

                    let attendingNumber = parseInt(x);
                    attendingNumber++
                    console.log(attendingNumber)
                    // let newArray = [likeNumber, likes]
                    attendTxt.textContent = (attendingNumber + ' ' + attendingPeople + ' ' + attendingAttending);

                }

                incrementalAttendance(attendingNumber)

            })

            attendP.append(attendBtn, attendTxt)
            eventContainer.append(eventH2, eventImg, eventDescription, attendP)
            document.querySelector('body').append(eventContainer)




        })


    }
    console.log(buildTodayHTML(todayArray))



    // function buildTodayHTML(todayArray)
    // buildTodayArray(events).forEach({


    // M


    // })


}

// document.querySelector('button').addEventListener('click', () => {
//     // document.querySelector('span').textContent = "1 likes"


//     attendingArray = document.querySelector('span').textContent.split(' ')
//     // console.log(likes)
//     // newArray = likes
//     let attendingNumber = attendingArray[0]
//     let attendingPeople = attendingArray[1]
//     let attendingAttending = attendingArray[2]
//     console.log(likeNumber)

//     function incrementalAttendance(x) {

//         let attendingNumber = parseInt(x);
//         attendingNumber++
//         console.log(attendingNumber)
//         // let newArray = [likeNumber, likes]
//         // document.querySelector('span').textContent = (likeNumber + ' ' + likes);
//     }
// })

// incrementalLiker(attendingNumber)


// })

