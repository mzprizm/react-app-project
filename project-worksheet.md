## Project Overview: Infinite Jokes Generator

_enjoy a few laughs!_ 😄

### Project Links

- [carolyn's github repo](https://github.com/mzprizm/react-app-project)
- [deployed on netlify @ **https://optimistic-hermann-f8f0c5.netlify.com/**](https://optimistic-hermann-f8f0c5.netlify.com/)

### Project Description

"Infinite Jokes Generator" serves up 2-part jokes using a public API. When the new joke button is clicked, a joke is generated. Another click reveals the colorful answer. To generate another joke, click the new joke button again. Other components include About page, header/nav, footer (see architecture linked below). This app is mobile-first design, responsive, using flexbox. Inspiration -- Example of a [dad joke generator site with motion](https://dadjokegenerator.com/)

### API

The API I have chosen is "Official Joke API" -- returns a 2-part joke. No private key required.
**[Official Joke API](https://github.com/15Dkatz/official_joke_api)** "The majority of these jokes were contributed by joke-loving coders around the world!" All different themes of fun jokes. [my API link](https://official-joke-api.appspot.com/random_joke)
```
{
"id": 354,
"type": "general",
"setup": "Why didn’t the skeleton cross the road?",
"punchline": "Because he had no guts."
}
```

### Wireframes

- [wireframes](https://res.cloudinary.com/mzprizm/image/upload/v1585315843/Screen_Shot_2020-03-27_at_6.29.35_AM_l3ljpo.png)
- [react architecture](https://docs.google.com/drawings/d/1JHA2GmCaWnYUhfoBDY1f9NPjtdV8rhGYHhxbOGapDYw/edit?usp=sharing)

### Time/Priority Matrix
[Time-priority Matrix](https://docs.google.com/drawings/d/1TO5TRVcUEK9qGF6cnxtz1UyaMwTM2WM7zHg9Yfhz1CU/edit?usp=sharing)

### MVP / Post - MVP
#### MVP 
- Find and use external api 
- Render data on page 
- Allow user to interact with the page

#### PostMVP 

- Add another API or search options, for extra fun / complexity (like funny gifs)
- Add more exciting graphics / motion
- social shares

### Components
| Component | Description | 
| --- | :---: |  
| Index | Renders Bridge| 
| Bridge | routes between About, Jokes(home), Rainbow
| App, JokeSetup & JokePunchline | Renders Jokes This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | simple, hidden on rainbow page on mobile display| 
| About | The header stays, the main switches to showing /about | 
| Rainbow, RainbowDivs | Page showing the rainbow colors the joke punchlines rotate through, just for fun design | 
| Button | button component | 
| Flex | flex component |
| Emoji | emoji component |

| Component | Priority | Estimated Time | 
| --- | :---: |  :---: | 
| prep | MVP | 8hrs|
| Working with API | MVP | 3hrs| 
| Building Components | MVP | 7 hrs| 
| Hooks, states etc | MVP | 4 hrs| 
| Styling | MVP | 4hrs | 
| Getting support | MVP | 3hrs| 
| Deployment | MVP | 3hrs| 
| Finishing up Round 1 | MVP | 2hr | 
| QA Round 1 | MVP | 2hr | 
| QA Round 2 | MVP | 1hr | 
| Project worksheet | MVP | 1hr | 
| ReadME + Youtube| MVP | 1hr | 
| Present | MVP | 1hr | 
| Total |MVP | 40 hrs| 

### Additional Libraries
- Emoji
- https://www.npmjs.com/package/react-share

### Code Snippet
I loved how simple components can be and how powerful props are in React.

```
export default function Flex(props) {
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        ...props,
      }}
    > 
      {props.children}
    </div>
```

### Issues
Deployment was very tricky for me. Ultimately dragging the build folder into Netlify works great (thank you Suresh!)
I faced many import errors along the way due to reorganizing my components and the architecture. I didn't realize at the start that I'd have a component called Flex for example. 

### Future Update Plans
Improve styling. Add icons on About page and link to youtube explanation video. Write blog post about process. Add animations. Night mode. Make the rainbow colors truly random. Add gifs of people laughing to the About page to get people in the laughing mood :) Add a page on resources about laughter.
