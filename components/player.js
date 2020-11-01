const app = document.getElementById('rootpl')
var pn

new URLSearchParams(window.location.search).forEach((value,name)=>{
    pn={value}    
})

var pn2 = pn.value

var link = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p='+pn2;
//  console.log(pn2)

var request = new XMLHttpRequest()
request.open('GET',link)

request.onload = function(){

    var data = JSON.parse(this.response)
    
    if(request.status>=200 && request.status<400){
        
        data.player.forEach(pl => {

            if(pl.strSport=="Soccer"){
                const ul = document.createElement('ul')

                const ul2 = document.createElement('ul')

                const li =document.createElement('li')
                li.textContent = 'Name : '+pl.strPlayer;
                const li2 = document.createElement('li')
                li2.textContent ='Nationality : '+ pl.strNationality
                const li3 = document.createElement('li')
                li3.textContent ='Team : '+ pl.strTeam
                const li4 = document.createElement('li')
                li4.textContent ='Kit : '+ pl.strKit
                const li5 = document.createElement('li')
                li5.textContent ='Agent : '+ pl.strAgent
                const li6 = document.createElement('li')
                li6.textContent ='Birth Location : '+ pl.strBirthLocation
                const li7 = document.createElement('li')
                li7.textContent ='Position : '+ pl.strPosition
                const li8 = document.createElement('li')
                li8.textContent ='Height : '+ pl.strHeight
                const li9 = document.createElement('li')
                li9.textContent ='Weight : '+ pl.strWeight
                const li10 = document.createElement('li')
                li10.textContent ='Gender : '+ pl.strGender
                const li11 = document.createElement('li')
                li11.textContent ='About : '+ pl.strDescriptionEN

                ul2.appendChild(li)
                ul2.appendChild(li2)
                ul2.appendChild(li3)
                ul2.appendChild(li4)
                ul2.appendChild(li5)
                ul2.appendChild(li6)
                ul2.appendChild(li7)
                ul2.appendChild(li8)
                ul2.appendChild(li9)
                ul2.appendChild(li10)
                ul2.appendChild(li11)
                
                ul.appendChild(ul2)
                app.appendChild(ul)

                const br = document.createElement('br')
                app.appendChild(br)
                const hr = document.createElement('hr')
                app.appendChild(hr)
                
            }    
        });

    }
}

request.send()

