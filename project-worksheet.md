![](corgi-carousel.gif)

## Project Overview: Infinite Jokes Generator

### Project Links

- [carolyn's github repo](https://github.com/mzprizm/react-app-project)
- to do after deployment -- [add deployment link]()

### Project Description

My project will be a jokes generator that serves up 2-part programming jokes using a public API. When the button is clicked, a joke is generated. After that, I might add a matching gif to go with the joke using Giphy API. I will also have an About page. This app will be mobile-first design, responsive. 

### API

The API I have chosen is [JokeAPI](https://sv443.net/jokeapi/v2) is a RESTful API that serves uniformly and well formatted jokes.
It can be used without any API token, membership, registration or payment.
It supports a variety of filters that can be applied to get just the right jokes you need.

```
{
"category": "Programming",
"type": "twopart",
"setup": "Why are modern programing languages so materialistic?",
"delivery": "Because they are object oriented.",
"flags": {
"nsfw": false,
"religious": false,
"political": false,
"racist": false,
"sexist": false
},
"id": 21,
"error": false
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

- Add another API or search options, for extra fun / complexity

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
| Building Components + Hooks | MVP | 12hrs| 
| Styling | MVP | 2| 
| Getting support | MVP | 3hrs| 
| Finishing up | MVP | 5hr | 
| Total |MVP | 31 hrs| 

### Additional Libraries
(list supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc.) 

### Code Snippet

( up to 10 lines + description)

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
