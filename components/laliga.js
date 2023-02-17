const app = document.getElementById("root")

var request = new XMLHttpRequest()
request.open('GET','https://www.scorebat.com/video-api/v1/')

request.onload = function(){

    var data = JSON.parse(this.response)
    
    if(request.status>=200 && request.status<400){
        data.forEach(game => {
            if(game.competition.name=="SPAIN: La Liga"){
                
                const div = document.createElement('div')
                div.innerHTML = game.videos[0].embed

                const a =document.createElement('a')
                a.href = game.thumbnail
                a.innerHTML = "here"    
            
                app.appendChild(div)
                
                console.log(game.title)
            }        
        });
    }
    else{
        alert("Service currenlty unavailable. Please visit later, we realize this is dissapointing")
    }    
}

request.send()
