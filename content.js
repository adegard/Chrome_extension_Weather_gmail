
function AddImage(imageurl, selector){
    if ( document.body.innerHTML.indexOf(imageurl) > -1) {
      console.log('Image exists. ');
      } else {
        console.log('Image does not exists.')
        waitForElementToExist(selector).then(element => {
	  console.log('The element exists', element);
		const image = document.createElement('img')
		image.src = imageurl;
		image.style.height = '50px';
		document.querySelector(selector).prepend(image)	  
	});

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

AddImage("https://cdn.icon-icons.com/icons2/4188/PNG/512/game_mail_gold_message_communication_envelope_email_letter_send_icon_262419.png", 
		 '.z0');
