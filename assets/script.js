var path = 'wallpapers/',
    imgs = ['google-earth-view-6579.jpg','google-earth-view-6311.jpg','google-earth-view-6260.jpg'],
    i = Math.floor(Math.random()*imgs.length);
	document.getElementById('.bg').style.backgroundImage = 'url("+path+imgs[i]+")'; 
