
const x= process.argv[2]
const axios=require('axios')
const {to} = require('await-to-js')




    async function g() {
        let [error, contest] = await to(axios.get('https://clist.by/get/events/'))
        if (error) {
            console.log("error found", error)
        }
        if(!contest.data)
            console.log("error")
        let date = new Date()

        switch (x)
        {
            case "Finished":
                console.log("Contests already finished are")
                contest.data.forEach(d =>{
                    let e=new Date(d.end)
                    if(date>e)
                        console.log(d)
                })
                break;
            case "Present":
                console.log("Contests currently running are")
                contest.data.forEach(d =>{
                    let s=new Date(d.start)
                    let e=new Date(d.end)
                    if(date>s && date<e)
                        console.log(d)
                })
                break;
            case "Upcoming":
                console.log("Contests will going to take place in future")
                contest.data.forEach(d =>{
                    let s=new Date(d.start);
                    if(date<s)
                        console.log(d)
                })
                break;
            default:
                console.log("wrong")
    }}
    g()
// const gevnts = async() => {
//     console.log("Choose : (Finished,Present,Upcoming)")
//     const contest = await coding_events()


//     }
// }
// gevnts()
//
