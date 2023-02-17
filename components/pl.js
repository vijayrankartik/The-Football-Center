const app = document.getElementById("root")

var request = new XMLHttpRequest()
request.open('GET','https://www.scorebat.com/video-api/v1/')

if(this.response == undefined){
    alert("Service currently unavailable, we realize this is dissapointing, please visit later")
    location.replace("highlights.html")
}

request.onload = function(){

    var data = JSON.parse(this.response)
    
    if(request.status>=200 && request.status<400){
        data.forEach(game => {
            if(game.competition.name=="ENGLAND: Premier League"){
                
                const div = document.createElement('div')
                div.innerHTML = game.videos[0].embed

                const a =document.createElement('a')
                a.href = game.thumbnail
                a.innerHTML = "here"    
            
                app.appendChild(div)
            }
            console.log(game.competition.name)        
        });
    }
}

request.send()
