

class Persone {
    constructor(email, name, password, age, money) {
        this.email = email
        this.name = name
        this.password = password
        this.age = age
        this.money = parseInt(money)
    }
    emaiiil(item) {
        this.email.push(item);
    }
    ageeee(i) {
        this.age.push(i);
    }
    passwooooord(it) {
        this.password.push(it);
    }
    naaaame(ite) {
        this.name.push(ite);
    }
    moneyyyy(e) {
        this.money.push(e)
    }

}
let personage = new Persone([], [], [], [], [])
console.log(personage);


let ask = confirm("p4iti tdkhale wla tamchi b7alak")

while (ask == true) {
    let ask = prompt("wate do you want 'loge in'  or, 'sing up' or,'change password' or 'exit'").toLowerCase().trim()
    switch (ask) {
        case 'sing up':
            while (true) {
                if (ask == "sing up") {
                    let email = prompt("enter youre email").split(" ").join("")
                    personage.emaiiil(email)
                    if (email.includes("@") || email >= 10) {
                        let name = prompt("entrer your full name ").split(" ")
                        let name1 = name[0].charAt(0).toUpperCase() + name[0].slice(1)
                        let name2 = name[1].charAt(0).toUpperCase() + name[1].slice(1)
                        let test = name1 + name2
                        //hanta fine tkone tjarabe ktabe smiytake w ispace ra fine darte liha bache i wali l7arfe lawale dyale kola smiya kbire tikhasake darori dire ya 2 smiyate ya ispace ma3arte 3lache darni rasi w khalitha haka
                        personage.naaaame(test)
                        if (test.length > 5) {
                            let passworde = prompt("enter your password")
                            personage.passwooooord(passworde)
                            let taikede = prompt("akade lpasworde dyalake")
                            if (passworde === taikede) {

                                if (taikede) {
                                    let aage = prompt("give me your age ")

                                    if (aage.length < 3 && aage.length > 1) {
                                        personage.ageeee(aage)
                                        alert("mar7abane bike")

                                        let again = prompt("Do you want to sign up another person? (yes/no)").toLowerCase();
                                        if (again !== "yes") {
                                            break;
                                        }



                                    } else {
                                        alert("asire ra ka3ma ma9bole a " + personage.name)
                                        personage.age = []
                                        personage.password = []
                                        personage.name = []
                                        personage.email = []
                                    }
                                }
                            } else {
                                alert("ra lcode li 3awdti ctabti 4alate")
                                personage.password = []
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
                    alert("tat3awade chi7aja 3andake fiha lmochkile")
                    break;

                }


            }

            break;
        case 'loge in':

            if (ask == "loge in") {
                let ta9labe = prompt("dakhale l email dyalake").split(" ").join("")
                let ta9labe2 = personage.email.indexOf(ta9labe);
                if (ta9labe2 != -1) {
                    let code = prompt("dire code dyalake bache tadkhole").trim()


                    if (personage.password[ta9labe2] === code) {
                        alert("ahlane w sahlane " + personage.name[ta9labe2])
                        alert("fine tsagalti m3ana walate 3andake 1000 dh mabrooooooooke")
                        personage.moneyyyy(1000)
                        let lflouse = confirm(" ba4i ta3rafe momaisate ta3e l bq ")
                        while (lflouse == true) {
                            let lflouse = prompt("3andake l7a9e 't7ate flouse' wla 'lkridi' wla 'dkhale bihoem machro3e'")
                            if (lflouse == "n7ate flouse") {
                                let ch7ale = parseInt(prompt("ch7ale ba4i t7ate"))
                                if (ch7ale < 1000) {
                                    personage.money = parseInt(personage.money += ch7ale)
                                    alert("haya t7atate " + personage.money)

                                }
                            } else {
                                alert("man9darche nkharjake ta ana wa7la hna")
                            }
                            if (ch7ale == "lkridi") {


                            }
                        }
                        alert("sf rake khrajti mane l banq ")














                    } else {
                        alert("ra l code dyalake 4alate")
                    }
                } else {
                    alert("ra khasake t9ayade 3ade dkhale")
                }

            }
            break;
        case "change password":
            if (ask == "change password") {
                let change = prompt("dakhale email dyalake bache tbadale l code ").split(" ").join("")
                let change1 = personage.email.indexOf(change);
                if (change1 != -1) {
                    let codeJdide = prompt("ktabe l code jdide ")
                    personage.passwooooord(codeJdide[change1])
                } else {
                    alert("akhoya sire t9ayade ba3da 3ade aji badale l code")
                }




            } else {
                alert("ra ma3andake ma tbadale ha l3are")
            }
            break;

        case 'exit':
            if (ask == "exit") {
                alert("nharake mabrouke")

            }
            break;
        default:
            alert("nharake mabrouke")
            break;
    }






}

alert("okey sire b7alake")





















