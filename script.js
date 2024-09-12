const btmAddPrsonal = document.querySelector(".add-Personnel")
btmAddPrsonal.addEventListener("click",(e)=>{
    //יוצר אשיות
    const person = creatPerson()
    // מןסיף אותו לאיחסון
    addToLocal(person)
    // מנקה את טבלת המשימות
    clearMissens()



})

//פונקציה ליצירת אשיות
function creatPerson() {
    // יוצר וביא את המשתנים
    let prsonFromHtml = document.querySelectorAll(".creat-Personnel input")
    const keys = ["FullName","RANK","POSITION","PLATOON","Time"]
    let person = {}
    let i = 0
    
    // עובר בלולאה ויוצר את האוביירט
    for(const key of keys){
        person[key] = prsonFromHtml[i].value   
        i ++
    }
    // מכניס גם את הסטוס לתוך האובייקט
    person["STATUS"] = document.querySelector(".STATUS option").value 
    return person
}

// מחזיר מערך מאיחסון הדפדפן
function lodlocalStorage(){
    let arrPerson = localStorage.getItem("Person")
    if (arrPerson === null){
        arrPerson = "[]"
    }
    return JSON.parse(arrPerson)
}

// מקבלת אישיות ומכניסה אותה לאחסון
function addToLocal(person){
       //מביא מערך מאיחסון הדפדפן
       let arrPersonal = lodlocalStorage()
       arrPersonal.push(person)
       localStorage.setItem("Person",JSON.stringify(arrPersonal))
       
}

// מנקה את כל המשימות מה html
function clearMissens() {
    document.querySelector(".details").innerHTML = ''
}

//  מעכדכן את כל של המשמות בדף התצוגה
function lowdMissen(){
    let arrPerson = lodlocalStorage()
    for(let person of arrPerson){
        // יוצר אלמנט שיוכנס לתוך הדף בהמשך
        let missens = creteElemetMissens(person)
    }
}

//יוצר אךמנט htmlלהזרקה 
function creteElemetMissens(person){

    let mynDiv = document.createElement("div")
    mynDiv.classList.add("details")
    
    let divFullname = document.createElement("div")
    let pFullname = document.createElement("p")
    pFullname.textContent = person.FullName
    divFullname.appendChild(pFullname)

    let divRANK = document.createElement("div")
    let pRANK = document.createElement("p")
    pRANK.textContent = person.RANK
    divRANK.appendChild(pRANK)

    let divPOSITION = document.createElement("div")
    let pPOSITION = document.createElement("p")
    pPOSITION.textContent = person.POSITION
    divPOSITION.appendChild(pPOSITION)

    let divPLATOON= document.createElement("div")
    let pPLATOON= document.createElement("p")
    pPLATOON.textContent = person.PLATOON
    divPLATOON.appendChild(pPLATOON)

    let divTime = document.createElement("div")
    let pTime = document.createElement("p")
    pTime.textContent = person.Time
    divTime.appendChild(pFullname)    
}
