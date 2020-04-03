# react-app-project

## Infinite Jokes Generator
Click a button to reveal a new joke every time. Try to guess the punchline, and click the button to reveal the answer and see if you're right! 

## Motivation
_because we could always use a few more laughs!_

## Build status
Deployed [https://optimistic-hermann-f8f0c5.netlify.com/](https://optimistic-hermann-f8f0c5.netlify.com/)

## Built with
- [React](https://reactjs.org/)

## Features
The minimal yet colorful and meme-like design, responsive / mobile-first layout, and fun concept make this app awesome. (If you'd like, please drop a comment and/or let me know what else you think I should add or improve by adding a github issue. Thank you!)

## Code Example
When you click the button on the homepage (/joke) you get a random joke to enjoy served up from the public Official Jokes API. The colors are displayed for fun on the rainbows tab. This site will evolve as I continue to have time to add to it and improve it.
```
  const handleSubmitonApp = async () => {
    const jokesURL = `https://official-joke-api.appspot.com/jokes/general/random`;
    let res = await fetch(jokesURL);
    let json = await res.json();
    setJSON(json);
    setShowing(true);
    setConcealedPunchline(true);
    setRandomColor(makeRandomColor());
  };
```

## API Reference
 **[Official Joke API](https://github.com/15Dkatz/official_joke_api)** -- "the majority of these jokes were contributed by joke-loving coders around the world!" All different themes of fun jokes. 

## Credits
Project created for General Assembly Software Engineering Education
