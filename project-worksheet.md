![](corgi-carousel.gif)

## Project Overview: Infinite Jokes Generator

_because we could all use a few more laughs these days!_ 😄
### Project Links

- [carolyn's github repo](https://github.com/mzprizm/react-app-project)
- _after deployment, add link to deployed app_

### Project Description

"Infinite Jokes Generator" will serve up 2-part jokes using a public API. When the new joke button is clicked, a joke is generated. Another button will be clicked to reveal the answer. To generate another joke, click the new joke button again. Other components include About page, header/nav, possibly a footer. This app will be mobile-first design, responsive, using flexbox. Inspiration -- Example of a [dad joke generator site with motion](https://dadjokegenerator.com/)

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
- [react architecture](https://docs.google.com/drawings/d/1JHA2GmCaWnYUhfoBDY1f9NPjtdV8rhGYHhxbOGapDYw/edit)

### Time/Priority Matrix
[Time-priority Matrix](https://docs.google.com/drawings/d/1TO5TRVcUEK9qGF6cnxtz1UyaMwTM2WM7zHg9Yfhz1CU/edit)

### MVP / Post - MVP
#### MVP 
- Find and use external api 
- Render data on page 
- Allow user to interact with the page

#### PostMVP 

- Add another API or search options, for extra fun / complexity (like funny gifs)
- Add more exciting graphics / motion
- sticky social shares

### Components
| Component | Description | 
| --- | :---: |  
| Index | Renders Bridge which renders App| 
| App, JokeSetup & JokePunchline | Renders Jokes This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | just simple | 
| Main | This will render the joke and button | 
| About | The header stays, the main switches to showing /about | 
| Rainbow | Page showing the rainbow colors the joke punchlines rotate through, just for fun design | 
| Social | Social Media Buttons | 
| Button | button component | 

| Component | Priority | Estimated Time | 
| --- | :---: |  :---: | 
| prep | MVP | 8hrs|
| Working with API | MVP | 3hrs| 
| Building Components | MVP | 7 hrs| 
| Hooks, states etc | MVP | 4 hrs| 
| Styling | MVP | 4 | 
| Getting support | MVP | 3hrs| 
| Deployment | MVP | 2hrs| 
| Finishing up Round 1 | MVP | 2hr | 
| QA Round 1 | MVP | 2hr | 
| Finishing Up Round 2 | MVP | 2hr | 
| QA Round 2 | MVP | 1hr | 
| ReadME| MVP | 1hr | 
| Present | MVP | 1hr | 
| Total |MVP | 40 hrs| 

### Additional Libraries
_list supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc._ 

### Code Snippet

_up to 10 lines + description_

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
