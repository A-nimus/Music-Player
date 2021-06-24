var info = document.querySelector(".fa fa-info-circle");
var a = document.querySelector(".song");
var fill = document.querySelector('.slider');
var img = document.querySelector('.image');
var bimg = document.querySelector(".body");
var txt=document.querySelector('.text');
var it=document.querySelector(".mintime");
var lt=document.querySelector(".maxtime");

var song_list = ["https://dl.dropbox.com/s/zjd3uidoiq27enw/Marshmello%20-%20Alone.mp3?dl=1","https://dl.dropbox.com/s/ks9uvxq5nohvh4m/Alan%20Walker%20Vs%20Venom%20-%20Darkside%20%28feat.%20Au_Ra%20and%20Tomine%20Harket%29%20%28128%20%20kbps%29.mp3?dl=1", "https://dl.dropbox.com/s/k47snscltqgg24f/Ed%2BSheeran%2B-%2BShape%2Bof%2BYou%2B%2528Official%2BMusic%2BVideo%2529%20%28192%20%20kbps%29.mp3?dl=1", "https://dl.dropbox.com/s/ibnutmop8lqz1oz/Marshmello_Anne_Marie_FRIENDS_Lyrics_.mp3?dl=1"];

var bg=["https://lh3.googleusercontent.com/T3I3ji0zbGsLRjlvsphvZcUYEhm_PNLav7K9HSnzmqEP3tKy0aC3Y17084i1Av6AJQU", "https://dl.dropbox.com/s/t0dzupb4r9wfuuz/alan-walker-darkside.jpg?dl=0", "https://dl.dropbox.com/s/hmors2i51nm4pgi/Shape-Of-You.jpg?dl=0", "https://dl.dropbox.com/s/3lecdots3a42i0e/th.jpg?dl=0"];

var text=["<h1>Alone</h1><h4>Marshmello</h4>", "<h1>Darkside</h1><h4>Alan Walker</h4>", "<h2>Shape of You</h2><h4>Ed Sheeran</h4>", "<h1>Friends</h1><h4>Anne Marie</h4>", "<h1>BGM</h1><h4>Jack Sparrow</h4>", "<h1>Astronomia</h1><h4>Tony Iggy</h4>"];

var i = 0;
var max=song_list.length-1;

var loop=false;

    function loopc(){
        loop=!loop;
        a.loop=loop;
    }

function next() {
    i++;
    if (i >= song_list.length) {
        i = 0;
    }
    a.setAttribute("src", song_list[i]);
    img.setAttribute("src", bg[i]);
    bimg.style.background="url("+bg[i]+") no-repeat center center/cover";
    txt.innerHTML=text[i];
    a.load();
    playpause();
}

function prev() {
    i--;
    if (i < 0) {
        i = song_list.length-1;
    }
    a.setAttribute("src", song_list[i]);
    img.setAttribute("src", bg[i]);
    bimg.style.background="url("+bg[i]+") no-repeat center center/cover";
    txt.innerHTML=text[i];
    a.load();
    playpause();
}

function playpause() {

    if (a.paused) {
        a.play();
        let ppbtn = document.querySelector('.pp-btn');
        ppbtn.innerHTML = '<i class="fa fa-pause"></i>';
        document.querySelector(".maxtime").innerHTML=a.duration;
    }


    else {
        a.pause();
        ppbtn = document.querySelector('.pp-btn');
        ppbtn.innerHTML = '<i class="fa fa-play-circle"></i>';
    }
}

a.addEventListener('timeupdate', () => {
    let progress = a.currentTime / a.duration;
    fill.value = progress * 100;
    var cs=parseInt(a.currentTime%60);
    var cm=parseInt((a.currentTime/60)%60);
    it.textContent=cm+':'+cs;
    const ds=parseInt(a.duration%60);
    const dm=parseInt((a.duration/60)%60);
    lt.textContent=dm+':'+ds;
    
})


fill.addEventListener("change", function(){
    var time=a.duration * (fill.value/100);
    a.currentTime=time;
});

fill.addEventListener("mousedown", function(){
    a.pause();
});

fill.addEventListener("mouseup", function(){
    a.play();
});

a.addEventListener("ended", () => {
  next();
 })
 
 a.onloadeddata = () =>  {
 fill.value=a.currentTime;

 const ds = parseInt(a.duration % 60)
 const dm = parseInt((a.duration / 60) % 60)
 lt.textContent = dm + ':' + ds;
 }


function toggleinfo(){
Swal.fire({
                title:"Music Player\nGlassmorphism UI 🎵🎶",
                txt:"Thanks for paying attention.💓\n•This functionality will be added in next version.🎵\n\n•Till the time enjoy the music😸",
                
            });
}
