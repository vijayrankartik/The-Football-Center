const app = document.getElementById('rootpl')
var pn
 
new URLSearchParams(window.location.search).forEach((value,name)=>{
    pn={value}    
})

var pn2 = pn.value

var link = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t="+pn2
console.log(link)

var request = new XMLHttpRequest()
request.open('GET',link)

request.onload = function(){

    var data = JSON.parse(this.response)

    if(request.status>=200 && request.status<=400){
        
        data.teams.forEach(t1 => {

            if(t1.strSport=="Soccer"){
                const ul = document.createElement('ul')

                const ul2 = document.createElement('ul')

                const li =document.createElement('li')
                li.textContent = 'Name : '+t1.strTeam;
                const li2 =document.createElement('li')
                li2.textContent = 'Year formed :'+t1.intFormedYear
                const li3 =document.createElement('li')
                li3.textContent = 'Alternate name :'+t1.strAlternate
                const li4 =document.createElement('li')
                li4.textContent = 'Primary league :'+t1.strLeague
                const li5 =document.createElement('li')
                li5.textContent = 'Secondary league :'+t1.strLeague2
                const li6 =document.createElement('li')
                li6.textContent = 'Other leagues :'+t1.strLeague3+', '+t1.strLeague4+', '+t1.strLeague5
                const li7 =document.createElement('li')
                li7.textContent = 'Stadium :'+t1.strStadium
                const li8 =document.createElement('li')
                li8.textContent = 'Stadium location :'+t1.strStadiumLocation
                const li9 =document.createElement('li')
                li9.textContent = 'Capacity of stadium :'+t1.intStadiumCapacity
                const li10 =document.createElement('li')
                li10.textContent = 'Country :'+t1.strCountry

                const ul3 = document.createElement('ul')
                ul3.textContent = 'Quick Links :'

                const a =document.createElement('a')
                a.textContent = ' Stadium '
                a.href = t1.strStadiumThumb
                const a2 =document.createElement('a')
                a2.textContent = ' Badge ' 
                a2.href = t1.strTeamBadge
                const a3 =document.createElement('a')
                a3.textContent = ' Jersey '
                a3.href = t1.strTeamJersey
                const a4 =document.createElement('a')
                a4.textContent = ' Logo '
                a4.href = t1.strTeamLogo
                const a5 =document.createElement('a')
                a5.textContent = ' Banner '
                a5.href = t1.strTeamBanner
                const a6 =document.createElement('a')
                a6.textContent = ' Fanart is here! '
                a6.href = t1.strTeamFanart2               

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

                ul3.appendChild(a)
                ul3.appendChild(a2)
                ul3.appendChild(a3)
                ul3.appendChild(a4)
                ul3.appendChild(a5)
                ul3.appendChild(a6)
 
                ul2.appendChild(ul3)

                ul.appendChild(ul2)
                app.appendChild(ul)

                const br = document.createElement('br')
                app.appendChild(br)
            }
        })
    }
}

request.send()