![Speed Typing Game](assets/images/title.png)

# [Speed Typing Game](https://bgmwebdev.github.io/SpeedTypingGame/ "Live Link")


## Introduction
<hr>
Welcome to the Speed Typing Game. A game with educational purpose, for anyone who aims to become a faster typer, but also just for the fun of it. Type as many of the 6-letter words that are shown, as you can, in 60 seconds. There is a direct feedbackloop when the letters are typed, through colouring of the letters, either red or green. When you have finished you can get your score by email or try again immediately. But be careful, it's addictive! This game is written in HTML, CSS and JavaScript. 

![Responsive gameplay](assets/images/responsive.png)

## Table of Content
<hr>

[Introduction](#introduction)

[Table of content](#table-of-content)

[Project Goals](#project-goals)
- [User Goals](#user-goals)
- [Site owner Goals](#site-owner-goals)

[User Experience](#user-experience)
- [Target audience](#target-audience)
- [User Requirements and Expectations](#user-requirements-and-expectations)
- [User Stories](#user-stories)
- [Site Owner Stories](#site-owner-stories)

[Design choices](#design-choices)

[Wireframes](#wireframes)

[Technologies used](#technologies-used)
- [Languages]()
- [Tools]()

[Features](#features)
- [Header](#header)
- [Start Game page](#start-game-page)
- [Footer](#footer)
- [Game Play page](#game-play-page)
- [End Game page](#end-game-page)
- [Send email](#send-email)
- [Email sent alert](#email-sent-alert)
- [Email recieved](#email-recieved)

[Features for the future](#features-for-the-future)

[Testing](#testing)
- [Responsive design](#responsive-design)
- [Validation testing](#validation-testing)
- [Bugs & errors](#bugs--errors)

[Deployment](#deployment)
- [Steps](#steps)
- [Live link](#live-link)
- [EmailJS API](#emailjs-api)

[Credits](#credits)
- [Content](#content)
- [Media](#media)
- [books](#books)

[Acknowledgments](#acknowledgments)
<hr>

### Project Goals
- #### User Goals
    - Play to get faster at typing.
    - A fun challenge to get a better score each time.

- #### Site owner Goals
    - Create an interactive game that is challenging and fun.
    - Create a game that people would want to play more often.
    - Create a responsive website so people can play on different devices.
<hr>

### User Experience
- #### Target audience
    - People who want to become faster at typing either on mobile or keyboard.
    - People who want to play a challenging game.
    - People who want to play a quick and fun game.

- #### User Requirements and Expectations
    - The game's playability should be intuitive.
    - The game's navigation should be accessible through keyboard and mouse use.
    - People should be able to receive an email.
    - People should be able to return to start and play again without refreshing the page or use of browser window.
    - The game should look good on different sizes.

- #### User Stories
    1. I would like to be challenged in the game.
    2. I would like to have feedback wether or not I type the word correctly.
    3. I want to be able to start typing directly, without having to click on the box first.
    4. I want to be able to have to scorre send to me.
    5. I want to get feedback wether or not the score was send.
    6. I want to be able to play again right after.

- #### Site Owner Stories
    7. I want people to play the game again and again.
    8. I want people to share their score with one another.
<hr>

### Design choices
For the design I choose to keep it minimalistic. A bright blue color with a broken white contrasting color. For the Font I picked 'Chakra Petch', which I feel goes really well with the theme, speed typing. It has this 80/90's-game-vibe to it which takes me back to old sega racing games. The color green on the buttons asks for action. Green is go! which made it an obvious choice for me. I wanted to keep the game in the center of the page and not take more space, as the focus needs to be in the center, where the words will be presented. Also we read from left to right and top to bottom, I wanted to keep everything centered (including the question mark) so it would be easy to navigate with the eyes top to bottom, and not lead you astray.
<hr> 

### Wireframes
<details>
<summary>Wireframe of the gameplay for mobile</summary>

![Wireframe mobile gameplay](assets/images/wireframe_mobile.png)
</details>

<details>
<summary>Wireframe of the gameplay for desktop</summary>

![Wireframe desktop gameplay](assets/images/wireframe_desktop.png)
</details>

<hr>

### Technologies used
- #### Languages
    - HTML
    - CSS
    - JavaScript

- #### Tools
    - Bootstrap v5.0
    - GitHub
    - Gitpod
    - Balsamiq
    - Font Awesome
    - Favicon.io
    - JSHint
    - JavaScript Tutor
    - Lighthouse
    - W3C Markup validation service
    - W3C Jigsaw CSS validation service
    - WAVE WebAIM web accessibility evaluation tool
    - Amiresponsive
    - Responsinator
    - EmailJS
<hr>

### Features:
- #### Header
    - In the header you see a clear title, which also declares directly what the game is about. 

    <details>
    <summary>header</summary>

    ![Header](assets/images/header.png)
    </details>

    - Underneath the title is a collapsible question mark, which, when pressed, will show the rules.
    - The rules are straight forward and easy to understand.
    - At this point in development, the rules collapsible still needs to be closed by yourself.

    <details>
    <summary>question mark</summary>

    ![Collapsible](assets/images/collapsible.png)
    </details>
    
<hr>

- #### Start Game page
    - This is the first page you'll see when you land on the website.
    - It states a clear message: press enter to start game.
    - There is a button which can be pressed if it's not already on focus, for example after reading the rules.

    <details>
    <summary>start game page</summary>

    ![Start Game page](assets/images/start_game.png)
    </details>
    
<hr>

- #### Footer
    - The footer is clean and simple. 
    - For this project it didn't need much more.

    <details>
    <summary>footer</summary>

    ![Footer](assets/images/footer.png)
    </details>
    
<hr>

- #### Game Play page
    - The game play page indicates the time, counting down from 60 to 0.
    - The score is shown and counts live as you type the words correctly.
    - There is a box that shows the example word you have to type. This word changes automatically when the word is correctly typed.
    - The example word letters will turn red when typed wrong and green when typed right.
    - There is an answer box, where you type in the word. This box is automatically emptied when the word is correct and a new word is shown.

    <details>
    <summary>game play page</summary>

    ![Game Play page](assets/images/game_play.png)
    </details>
    
<hr>

- #### End Game page
    - This page starts with a congratulatory message stating your score.
    - It also calls for action if you want the score to be send to you.
    - There is a name box and email box. which you have to fill out if you would like the score.
    - A send score button to receive the score.
    - There is also a return button to start a new game.

    <details>
    <summary>end game page</summary>

    ![End Game page](assets/images/end_game.png)
    </details>
    
<hr>

- #### Send email
    - You have to fill out the name and email boxes if you would like the score. They are required.

    <details>
    <summary>send email</summary>

    ![Send email](assets/images/required.png)
    </details>
    
<hr>

- #### Email sent alert
    - After submitting, there is an alert message. This let's you know the email has been sent.

    <details>
    <summary>email sent alert</summary>

    ![Email sent alert](assets/images/email_sent.png)
    </details>
    
<hr>

- #### Email recieved
    - Check your inbox (or junk), you've recieved your score and a message!

    <details>
    <summary>email received</summary>

    ![Email received](assets/images/email.png)
    </details>
    
<hr>

### Features for the future
- I would like to add a custom made 404 page. Due to time management, I wasn't able to provide one. 
- For now, the rules collapsible needs to be closed manually. I would like to add the option to click anywhere, for example start game, and that it would close automatically. 
- I would like to add feedback through sound. For example, every 5th word you would hear something like "great", "well done", "you're on fire".
- It would be nice to have a certificate send to your email with an everage typing speed which you can use to show off you skills, on LinkedIn for example. 
- Also a difficulty level could be added, by taking out the colouring feedback loop. That way you wouldn't see mistakes turn up red or correct answers green.
<hr>

### Testing
- #### Responsive design
    - This website is tested for responsive design through the use of different size settings in chrome dev-tools and its device toolbar.
    - Responsivity is also tested on http://ami.responsivedesign.is/ (see image at the top of the page in the introduction and down here) and on https://www.responsinator.com/ where also different viewport sizes are presented.
    - The smallest functional size is 260x540px. With a smaller size, elements will start to overlap.

    <details>
    <summary>responsive design</summary>

    ![Responsive design](assets/images/responsive.png)
    </details>
    
<hr>

- #### Validation testing
    - W3C HTML Test:[W3C HTML Validator](https://validator.w3.org/nu/#textarea).
    - Ran the html file throughout the process (if there were changes).
    - Made all necessary corrections if they were stated.
    - Ran test again to verify all HTML passed.

    <details>
    <summary>html validation</summary>

    ![HTML validation](assets/images/html_vaildation.png)
    </details>

    - W3C Jigsaw CSS Test:W3C HTML Validator.
    - Uploaded stylesheet daily.
    - Made all necessary changes.
    - Ran test again to verify all CSS passed.

    <details>
    <summary>css validation</summary>

    ![CSS validation](assets/images/css_validation.png)
    </details>
  
    - jshint.com Test to validate my JavaScript:[jshint validator](https://jshint.com/)
    - I ran partials of the JavaScript code daily through jshint.
    - JavaScript Tutor to validate my JavaScript:[JavaScript Tutor](https://pythontutor.com/javascript.html#mode=edit)
    - I ran partials of the JavaScript code daily through JavaScript Tutor, to try things out and validate.

    - I also ran a color contrast checker.

    <details>
    <summary>color contrast validation</summary>

    ![Color contrast validation](assets/images/color_contrast_checker.png)
    </details>

    - ANd I used WAVE WebAIM web accessibility evaluation tool for color contrast

    <details>
    <summary>wave color contrast</summary>

    ![Wave Color Contrast](assets/images/contrast_wave.png)
    </details>

    - Lighthouse is used to test the live website on desktop and mobile to check performance and accessibility.
        
    <details>
    <summary>Lighthouse test on desktop</summary>

    ![Lighthouse on desktop](assets/images/desktop_performance_lighthouse.png)
    </details>

    <details>
    <summary>Lighthouse test on mobile</summary>

    ![Lighthouse on mobile](assets/images/mobile_performance_lighthouse.png)
    </details>

    - Accessibility is also checked through WAVE WebAIM web accessibility evaluation tool

    <details>
    <summary>wave accessibility</summary>

    ![Wave Accessibility](assets/images/accessibility_wave.png)
    </details>

<hr>

- #### Bugs & errors
    - First time I ran the game through lighthouse I had an 85% on accessibility, due to the fact that I did not have labels in the form and with my word box. 
    - Mid-way through the project I couldn't select or fill in the form on the last page. I changed z-index's to classes of hide and show. 
    - Up untill the end I had a manifest error pertaining to my favicon. I took it out, it resolved the error.
<hr>

### Deployment
- #### Steps
I've deployed the website early on, so I could test and update the website constantly.
The steps taken to deploy the website are taken from the readme of my first project [Women's-circle](https://github.com/BGMwebdev/first-project/blob/main/README.md#testing).

1. In the GitHub repository, navigate to the Settings tab
2. Scroll down to Github pages in the left side menu
3. From the source section drop-down menu, select the main branch
4. Once the main branch has been selected, click "Save"
5. GitHub will display a message confirming that the site has been deployed successfully
6. GitHub will provide a link to the deployed site
7. Click on the link to view the site has deployed in a new tab

- #### Live link
The live link the deployed project can be found here: [Speed Typing Game](https://bgmwebdev.github.io/SpeedTypingGame/ "Live Link")
<hr>

- #### EmailJS API
1. Create an account at emailjs.com
2. Add new email service, make note of the contact_service id
3. Add a new email template, make note of the contact_form id
4. Go the the integration dashboard, make note of your user id
5. Load the EmailJS SDK in the head of your HTML file
6. In JavaScript create a function that listens to a submit event and then initializes the SDK with your user id (emailjs.init('YOUR_USER_ID');) and submits the form (emailjs.7.sendForm('contact_service', 'contact_form', this);)

### Credits
- #### Content
    - looking back at the [Love Maths](https://github.com/BGMwebdev/love-maths) project helped me a lot to structure the projects JavaScript, to understand the interlacings of functions and event listeners and connect it with the right HTML elements.
    - [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises) helped me to learn about promises and async functions.
    - [W3schools](https://www.w3schools.com/js/js_async.asp) also helped me to learn about async functions and how to use them.
    - How to create an array from the string of words I have in my game I learned from [W3schools](https://www.w3schools.com/jsref/jsref_split.asp).
    - How a timer works and is written I learned from [W3schools](https://www.w3schools.com/howto/howto_js_countdown.asp).
    - The countdown timer I used I copied from [freecodecamp](https://www.freecodecamp.org/news/how-to-create-a-countdown-timer/), I tweaked it to my own needs for this game.
    - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) gave me a great overview of how to write and work with arrow functions. 
    - through the use of [Stack Overflow](https://stackoverflow.com/questions/11845678/adding-multiple-event-listeners-to-one-element) I found out how to use multiple event listeners with onen element. 
    - I took the example of a collapsible from [W3schools](https://www.w3schools.com/howto/howto_js_collapsible.asp) and tweaked to my own needs for this game. 
    - I used [emailjs.com](https://www.emailjs.com/docs/tutorial/overview/) and it's tutorial to set up the email service I used for my game. 
    - I took the deployment steps for e=th emailjs from [Guessing Bee project](https://github.com/4n4ru/ci-p2-GuessingBee)
    - I found this cool [CSS Box Shadow Generator](https://html-css-js.com/css/generator/box-shadow/) that I used to create a bit of depth on my pages. 
    - I had a lot of help from [Web Dev Simplified](https://www.youtube.com/watch?v=R-7eQIHRszQ) and his tutorial on how to build a speed typing game with JavaScript. He gave me some inside on how to use async functions. I used his code for the async function, as for the loop to create red and green colors and adjusted it to my game. This helped me a lot in the learning proces of how to compare index of different elements and set/change their class. 
    - The video of [Acadea.io](https://www.youtube.com/watch?v=yZ93TTdGxa8) about Building a speed typing game inspired me to use the string of words the I have used them now. This was also one of the first video's on speed typing games I watched, which inspired me to try to build one myself.
    <hr>

- #### Media
    - I took all 6 letter words from [The free Dictionary](https://www.thefreedictionary.com/6-letter-words.htm)
    - I used an Icon from [Font Awesome](https://fontawesome.com/icons/keyboard?s=light) and generated a favicon from it through [Favicon Generator](https://favicon.io/favicon-converter/)
    <hr>

- #### books
    - [JavaScript & JQuery - Jon Duckett](https://www.amazon.ca/JavaScript-JQuery-Interactive-Front-End-Development/dp/1118531647)
    <hr>

### Acknowledgments
A huge thanks to:
- My dear partner Marleen who had my back since the beginning.
- My 'old' mentor Antonio Rodriguez who guided me through the first steps.
- My 'new' mentor Mo Shami who was very clear and direct about what needed to be done!