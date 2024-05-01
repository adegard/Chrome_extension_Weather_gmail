
function AddImage(imageurl, selector){
    if ( document.body.innerHTML.indexOf(imageurl) > -1) {
      console.log('Image exists. ');
      } else {
        console.log('Image does not exists.')
        const image = document.createElement('img')
        image.src = imageurl;
        image.style.height = '50px';
        document.querySelector(selector).prepend(image)
    }
}

function waitForElementToExist(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      subtree: true,
      childList: true,
    });
  });
}

// 👇️ using the function
waitForElementToExist('.z0').then(element => {
	  console.log('The element exists', element);
	  AddImage("https://cdn.icon-icons.com/icons2/2313/PNG/512/plant_nature_leaves_leaf_dirt_earth_icon_141982.png", 
		 '.z0');
});


