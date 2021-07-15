document.addEventListener('DOMContentLoaded', () => {

    fetch('https://lhotwll217.github.io/data/events_300_rss.json')
        .then(data => data.json())
        .then(events => (renderTodayEvents(events)))

    tomorrowBTN = document.createElement('button')
    tomorrowBTN.textContent = 'Click Me To See Tomorrow\'s Events'
    tomorrowBTN.id = 'tomorrowBTN'

    document.querySelector('body').append(tomorrowBTN)

    tomorrowBTN.addEventListener('click', () => {

        const removeDivs = document.getElementsByClassName('event-container');
        console.log(removeDivs)
        while (removeDivs.length > 0) removeDivs[0].remove();

        fetch('https://lhotwll217.github.io/data/events_300_rss.json')
            .then(data => data.json())
            .then(events => (renderTomorrowEvents(events)))

        function renderTomorrowEvents(events) {

            function buildTomorrowHTML(tomorrow) {

                tomorrow.forEach(e => {
                    console.log(e)

                    let eventContainer = document.createElement('div')
                    let eventH2 = document.createElement('h2')
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

                    let eventComment = document.createElement('form')
                    let nameInput = document.createElement('input')
                    let commentInput = document.createElement('input')
                    let submitBtn = document.createElement('button')
                    let commentDiv = document.createElement('div')
                    let commentH3 = document.createElement('h3')

                    eventComment.className = 'event-comment'
                    nameInput.placeholder = 'Name'
                    commentInput.placeholder = "Say Something!"
                    commentDiv.className = 'comment-div'
                    // commentInput.name = "userComment"
                    commentInput.type = 'text'
                    // commentInput.className = 'commentInput'
                    submitBtn.type = 'submit'
                    submitBtn.class = "comment-button"
                    submitBtn.textContent = 'Post'
                    commentH3.textContent = 'Comments'


                    eventComment.append(nameInput, commentInput, submitBtn)

                    eventComment.addEventListener('submit', (e) => {

                        e.preventDefault()
                        let newComment = document.createElement('p')
                        newComment.className = 'posted-comments'
                        newComment.textContent = (`${e.target[0].value}: ${e.target[1].value}`)

                        commentDiv.append(newComment)
                    })

                    attendBtn.addEventListener('click', () => {

                        let attendingArray = attendTxt.textContent.split(' ')
                        let attendingNumber = attendingArray[0]
                        let attendingPeople = attendingArray[1]
                        let attendingAttending = attendingArray[2]


                        function incrementalAttendance(x) {

                            let attendingNumber = parseInt(x);
                            attendingNumber++
                            console.log(attendingNumber)
                            attendTxt.textContent = (attendingNumber + ' ' + attendingPeople + ' ' + attendingAttending);
                        }

                        incrementalAttendance(attendingNumber)

                    })




                    attendP.append(attendBtn, attendTxt)
                    eventContainer.append(eventH2, eventImg, eventDescription, attendP, commentH3, commentDiv, eventComment,)
                    document.querySelector('body').append(eventContainer)


                    function buildTomorrowArray(events) {

                        let tomorrow = new Date
                        tomorrow.setDate(tomorrow.getDate() + 1)
                        console.log(tomorrow)
                        let tomorrowDate = tomorrow.toISOString().split('T', 1)[0]
                        console.log(tomorrowDate)

                        // events.forEach(console.log(events.startdate))

                        //Find all objects in JSON with same date as today
                        let tomorrowArray = events.filter(function (e) { return e.startdate === tomorrowDate })
                        return tomorrowArray;


                    }

                    let tomorrowArray = buildTomorrowArray(events)
                    buildTomorrowHTML(tomorrowArray)
                })


            }






            function buildTomorrowHTML(tomorrow) {

                tomorrow.forEach(e => {
                    console.log(e)

                    let eventContainer = document.createElement('div')
                    let eventH2 = document.createElement('h2')
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

                    let eventComment = document.createElement('form')
                    let nameInput = document.createElement('input')
                    let commentInput = document.createElement('input')
                    let submitBtn = document.createElement('button')
                    let commentDiv = document.createElement('div')
                    let commentH3 = document.createElement('h3')

                    eventComment.className = 'event-comment'
                    nameInput.placeholder = 'Name'
                    commentInput.placeholder = "Say Something!"
                    commentDiv.className = 'comment-div'
                    // commentInput.name = "userComment"
                    commentInput.type = 'text'
                    // commentInput.className = 'commentInput'
                    submitBtn.type = 'submit'
                    submitBtn.class = "comment-button"
                    submitBtn.textContent = 'Post'
                    commentH3.textContent = 'Comments'


                    eventComment.append(nameInput, commentInput, submitBtn)

                    eventComment.addEventListener('submit', (e) => {

                        e.preventDefault()
                        let newComment = document.createElement('p')
                        newComment.className = 'posted-comments'
                        newComment.textContent = (`${e.target[0].value}: ${e.target[1].value}`)

                        commentDiv.append(newComment)
                    })

                    attendBtn.addEventListener('click', () => {

                        let attendingArray = attendTxt.textContent.split(' ')
                        let attendingNumber = attendingArray[0]
                        let attendingPeople = attendingArray[1]
                        let attendingAttending = attendingArray[2]


                        function incrementalAttendance(x) {

                            let attendingNumber = parseInt(x);
                            attendingNumber++
                            console.log(attendingNumber)
                            attendTxt.textContent = (attendingNumber + ' ' + attendingPeople + ' ' + attendingAttending);
                        }

                        incrementalAttendance(attendingNumber)

                    })




                    attendP.append(attendBtn, attendTxt)
                    eventContainer.append(eventH2, eventImg, eventDescription, attendP, commentH3, commentDiv, eventComment,)
                    document.querySelector('body').append(eventContainer)


                })
                buildTomorrowHTML(todayArray)


            }



        }






    })



    function buildTodayHTML(today) {

        today.forEach(e => {
            console.log(e)

            let eventContainer = document.createElement('div')
            let eventH2 = document.createElement('h2')
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

            let eventComment = document.createElement('form')
            let nameInput = document.createElement('input')
            let commentInput = document.createElement('input')
            let submitBtn = document.createElement('button')
            let commentDiv = document.createElement('div')
            let commentH3 = document.createElement('h3')

            eventComment.className = 'event-comment'
            nameInput.placeholder = 'Name'
            commentInput.placeholder = "Say Something!"
            commentDiv.className = 'comment-div'
            // commentInput.name = "userComment"
            commentInput.type = 'text'
            // commentInput.className = 'commentInput'
            submitBtn.type = 'submit'
            submitBtn.class = "comment-button"
            submitBtn.textContent = 'Post'
            commentH3.textContent = 'Comments'


            eventComment.append(nameInput, commentInput, submitBtn)

            eventComment.addEventListener('submit', (e) => {

                e.preventDefault()
                let newComment = document.createElement('p')
                newComment.className = 'posted-comments'
                newComment.textContent = (`${e.target[0].value}: ${e.target[1].value}`)

                commentDiv.append(newComment)
            })

            attendBtn.addEventListener('click', () => {

                let attendingArray = attendTxt.textContent.split(' ')
                let attendingNumber = attendingArray[0]
                let attendingPeople = attendingArray[1]
                let attendingAttending = attendingArray[2]


                function incrementalAttendance(x) {

                    let attendingNumber = parseInt(x);
                    attendingNumber++
                    console.log(attendingNumber)
                    attendTxt.textContent = (attendingNumber + ' ' + attendingPeople + ' ' + attendingAttending);
                }

                incrementalAttendance(attendingNumber)

            })




            attendP.append(attendBtn, attendTxt)
            eventContainer.append(eventH2, eventImg, eventDescription, attendP, commentH3, commentDiv, eventComment,)
            document.querySelector('body').append(eventContainer)


        })


    }
    console.log(buildTodayHTML(todayArray))


    function renderTodayEvents(events) {

        console.log(events)

        //Build New Array With Only Todays Events
        function buildTodayArray(events) {
            // Create Todays Date
            let today = new Date()
            let tomorrow = new Date
            tomorrow.setDate(tomorrow.getDate() + 1)
            console.log(tomorrow)
            let tomorrowDate = tomorrow.toISOString().split('T', 1)[0]
            console.log(tomorrowDate)
            let dayDate = today.toISOString().split('T', 1)[0]
            // events.forEach(console.log(events.startdate))

            //Find all objects in JSON with same date as today
            let todayArray = events.filter(function (e) { return e.startdate === dayDate })
            return todayArray;
        }

        let todayArray = buildTodayArray(events)

        buildTodayHTML(todayArray)
        // console.log(todayArray)

    }

});

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

