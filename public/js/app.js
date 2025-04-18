

let ask = prompt("wate do you wane 'loge in' or, 'sing up' or,'change password'").toLowerCase().trim()

class Persone {
    constructor(email, name, password) {
        this.email = email
        this.name = name
        this.password = password
    }
}
let personage = new Persone([], [], [])

console.log(personage);

if (ask == "loge in") {
    let email = prompt("enter youre email").split(" ").join("")
    personage.email = email
    if (email.includes("@")|| email>=10) {
        let name = prompt("entrer your full name ").split(" ")
        let name1 = name[0].charAt(0).toUpperCase() + name[0].slice(1)
        let name2 = name[1].charAt(0).toUpperCase() + name[1].slice(1)
        let test = name1 + name2
        personage.name = test
        if (test.length > 5) {
            let passworde = prompt("enter your password")
            personage.password = passworde
            let taikede = prompt("akade lpasworde dyalake")
            if (passworde === taikede) {
                alert("mar7ba bike")

            } else {
                alert("ra lcode li 3awdti ctabti 4alate")
                personage.password =[]
                personage.name = []
                personage.email = []
            }
        } else {
            alert("smaitake s4are mane 5 l 7orofe ")
            personage.name = []
            personage.email = []
        }
    } else {
        alert("3afake email dyalake ya s4are mane 10 dyale caractire ya mafihche @")
        personage.email = []
   
    }

} else {
    alert("3afake lmara jaya 3amare hadchi")
}

