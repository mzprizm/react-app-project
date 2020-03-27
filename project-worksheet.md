![](corgi-carousel.gif)

## Project Overview: Infinite Jokes Generator

### Project Links

- [carolyn's github repo](https://github.com/mzprizm/react-app-project)
- _after deployment, add link to deployed app_

### Project Description

"Infinite Jokes Generator" will serve up 2-part jokes using a public API. When the new joke button is clicked, a joke is generated. Another button will be clicked to reveal the answer. To generate another joke, click the new joke button again. Other components include About page, header/nav, possibly a footer. This app will be mobile-first design, responsive, using flexbox. Inspiration -- Example of a [dad joke generator site with motion](https://dadjokegenerator.com/)

### API

The API I have chosen is either 1 "Joke API" or 2 "Official Joke API" -- both return 2-part joke as object. No private key required.

1. "[JokeAPI](https://sv443.net/jokeapi/v2) is a RESTful API that serves uniformly and well formatted jokes.
It can be used without any API token, membership, registration or payment. It supports a variety of filters that can be applied to get just the right jokes you need." [my API link](https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=twopart)

```
{
"category": "Programming",
"type": "twopart",
"setup": "Why does no one like SQLrillex?",
"delivery": "He keeps dropping the database.",
"flags": {
"nsfw": false,
"religious": false,
"political": false,
"racist": false,
"sexist": false
},
"id": 13,
"error": false
}
```

2. [Official Joke API](https://github.com/15Dkatz/official_joke_api)"The majority of these jokes were contributed by joke-loving coders around the world!" All different themes of fun jokes. [my API link]((https://official-joke-api.appspot.com/random_joke) )
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
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Main | This will render the joke and button | 
| About | The header stays, the main switches to showing /about | 

| Component | Priority | Estimated Time | 
| --- | :---: |  :---: | 
| prep | MVP | 6hrs|
| Working with API | MVP | 3hrs| 
| Building Components | MVP | 4 hrs| 
| Hooks, states etc | MVP | 4 hrs| 
| Styling | MVP | 2| 
| Getting support | MVP | 3hrs| 
| Finishing up | MVP | 4hr | 
| Total |MVP | 26 hrs| 

### Additional Libraries
_list supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc._ 

### Code Snippet

_up to 10 lines + description_

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
