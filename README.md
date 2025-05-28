# bakingtimer

This will be based on egg timer app by @bizbunny . She found a video by nashallery that seemed fun to replicate fom what I'm told.

The goal of this project is to make a simple timer app to help teach myself Electron. The app will allow the user to set different times depending on the baked good chosen at the start.

# Process

## Electron

The project is mostly coded in the Javascript framework Electron for functionality, with some HTML and CSS for stylizing purposes.

## The assets

The art assets are drawn in Pixelorama. I wanted to keep on theme with the pixel art aesthetic, and Pixelorama is a drawing platform that allows you to draw in that style and is free on itch.io.

I separated the image assets into folder by screen aside from the main background and frame.

### Main background assets

#### The main background

![mainbackground](./assets/bakingTimer-bg.png)

#### The main frame

![mainframe](./assets/bakingTimer-frame.png)

#### The Exit button

![exitButton](./assets/bakingtimer-exitbutton.png)

#### The minimize button

![minimizeButton](./assets/bakingtimer-minbutton.png)

### Start Screen

#### Dog mascot

![Dog](./assets/startScreen/bgtimer-dog.png)

#### Start button

##### I'm also going to be using this as a baseplate button image for any other needed button

![start button](./assets/startScreen/bgtimer-startbtn.png)

#### Talk bubble

![talk bubble](./assets/startScreen/talkbubble.png)

### Picking which pastry

#### Bread button

![bread button](./assets/choicesScreen/bread.png)

#### Cake button

![cake button](./assets/choicesScreen/cake.png)

#### Cookie button

![cookie button](./assets/choicesScreen/cookie.png)

#### Muffin button

![muffin button](./assets/choicesScreen/muffin.png)

## What the screens will look like.

I have designed the assets around the dimensions of the app and what each screen will ideally look like in the final product. Below are what I had planned each screen to look like.

It was only during development I had realized I forgot crucial elements of this app, like the timing display, and some text to indicate to the user what was going on.

### The Start Screen

![start screen target](./assets/bakingTimer-startMenu.png)

### Pastry Choice Menu Screen

![choice menu screen](./assets/bakingTimer-choiceMenu.png)

### Timer Waiting Screen

![timer waiting screen](./assets/bakingTimer-waitingTimerMenu.png)

### Timer Complete Screen

![timer complete screen](./assets/bakingTimer-DoneTimerMenu.png)

## The rest of the code

I started off, after installing Electron with the quick tutorial, getting a base place app. Once that worked, I could start stylizing with the Pixelify Sans font provided by the google fonts api, and add a custom background for my baking timer app.

All the art assets are designed by me in Pixelorama, a free pixel art app on itch.io. I would stylize the base plate app of each screen the best I could using the templates I made for myself shown above. Once each screen looked the way I planned it to. Then came coding the functionality.

### Code issues I faced

I came to a point where the app worked in the browser just fine, but when launching the app via npm, the functionality was gone. Some sources mention its how Electron works with its security. It's the contextisolation part. The renderer doesn't have access to Node.js but preload is supposed to fix that.

#### What the devtools say in electron app:

##### 1 -fixed

Refused to load the stylesheet 'https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' because it violates the following Content Security Policy directive: "default-src 'self'". Note that 'style-src-elem' was not explicitly set, so 'default-src' is used as a fallback.
index.html:16
meta tag additions seems to have fixed this error

##### 2-fixed

Failed to load resource: net::ERR_FILE_NOT_FOUND
bgtimer-dog_waiting.png:1

##### 3-fixed

Failed to load resource: net::ERR_FILE_NOT_FOUND
oven-open.png:1

##### 4-fixed

Failed to load resource: net::ERR_FILE_NOT_FOUND
bgtimer-dog_donetimer.png:1

##### 5

Failed to load resource: net::ERR_FILE_NOT_FOUND
renderer.js:1

##### 6-fixed

Failed to load resource: net::ERR_FILE_NOT_FOUND
oven-closed.png:1

##### 7 -fixed

Failed to load resource: net::ERR_FILE_NOT_FOUND
bakingTimer-bg.png:1

This seems to have fixed the resource loading errors 2,3,4,6,7 :
https://stackoverflow.com/questions/72505239/failed-to-load-resource-neterr-file-not-found-using-im

##### 8 -fixed

Refused to load the stylesheet 'https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' because it violates the following Content Security Policy directive: "default-src 'self'". Note that 'style-src-elem' was not explicitly set, so 'default-src' is used as a fallback.
index.html:1
This fixed the font error: https://stackoverflow.com/questions/68445115/electron-google-fonts-violates-content-security-policy

## sound attribution

Pop 9 by D.S.G. -- https://freesound.org/s/328119/ -- License: Creative Commons 0

Alarm Clock Digital by zanox -- https://freesound.org/s/233645/ -- License: Attribution NonCommercial 4.0

## recipes used for baking time

cookies: https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/

cake: https://www.allrecipes.com/recipe/17481/simple-white-cake/

muffin: https://smittenkitchen.com/2010/08/perfect-blueberry-muffins/

bread: https://sallysbakingaddiction.com/homemade-artisan-bread/print/80079/
