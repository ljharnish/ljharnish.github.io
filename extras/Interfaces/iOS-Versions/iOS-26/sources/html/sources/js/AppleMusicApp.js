function appSpecificFunction() { 
    if(CONNECTIONVARIABLES.media.audio.playing) {
        var imageData = CONNECTIONVARIABLES.media.audio.data.tags.picture.data;
        var base64String = "";
        for (var i = 0; i < imageData.length; i++) {
            base64String += String.fromCharCode(imageData[i]);
        }
        document.getElementById("bottomNowPlayingImg").src = "data:" + CONNECTIONVARIABLES.media.audio.data.tags.picture.format + ";base64," + window.btoa(base64String);

        document.getElementById('bottomNowPlayingP').innerText = CONNECTIONVARIABLES.media.audio.data.tags.title;

        document.getElementById('bottomNowPlaying').classList.add('open');
    }

    if(CONNECTIONVARIABLES.settings.display_brightness_appearance) {
        if(CONNECTIONVARIABLES.settings.display_brightness_appearance == 'light') {
            document.body.classList.remove('dark');
        } else {
            document.body.classList.add('dark');
        }
    }
}



document.getElementById('musicUploadInput').addEventListener('change', function(event) {
    const file = event.target.files[0];


    if (file && file.type === 'audio/mpeg') {
        let audioURL = URL.createObjectURL(file)

        const audio = new Audio(audioURL);
        audio.controls = false;

        console.log(audioURL)

        window.jsmediatags.read(file, {
            onSuccess: function(tag) {
                console.log(tag)

                console.log('----- Song Uploaded -----');
                console.log(
                    `Song Data:
                    \n\nTitle: ${tag.tags.title || file.name}
                    \nAlbum: ${tag.tags.album || "Unknown"}
                    \nArtist: ${tag.tags.artist || "Unknown"}
                    \nYear: ${tag.tags.year || "Unknown"}`
                );
                console.log('----- End Song Data -----');

                try {
                    var imageData = tag.tags.picture.data;
                    var base64String = "";
                    for (var i = 0; i < imageData.length; i++) {
                        base64String += String.fromCharCode(imageData[i]);
                    }
                    document.getElementById("bottomNowPlayingImg").src = "data:" + tag.tags.picture.format + ";base64," + window.btoa(base64String);
                } catch(e) {
                    document.getElementById("bottomNowPlayingImg").src = '../image/unknown-file.png'
                }
                document.getElementById('bottomNowPlayingP').innerText = tag.tags.title || file.name;

                if(!tag.tags.title) {
                    tag.tags.title = file.name;
                }

                document.getElementById('bottomNowPlaying').classList.add('open');

                CONNECTIONVARIABLES.media.audio.playing = true;
                CONNECTIONVARIABLES.media.audio.url = audioURL;
                CONNECTIONVARIABLES.media.audio.data = tag;
        
                document.dispatchEvent(new CustomEvent('SyncVariables', { detail: window.CONNECTIONVARIABLES }));
            },
            onError: function(error) {
                console.log(error);
            }
        })


        //const container = document.getElementById('audioPlayerContainer') || document.body;
        //container.appendChild(audio);

        //audio.play().catch(error => {
        //    console.error('Error playing the audio:', error);
        //});

    } else {
        alert('Please upload a valid MP3 file.');
    }

    document.getElementById('musicUploadInput').value = null;
});