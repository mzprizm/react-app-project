![](corgi-carousel.gif)

## Project Overview

### Project Links

- [carolyn's github repo](https://github.com/mzprizm/react-app-project)
- [add deployment link]()

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

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [add link to your wireframes]()
- [add link to your react architecture]()


#### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Allow user to interact with the page

#### PostMVP EXAMPLE

- Add localStorage or firebase for storage

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 

| Component | Priority | Estimated Time | 
| --- | :---: |  :---: | 
| prep | MVP | 10hrs|
| Working with API | MVP | 6hrs| 
| Building Components + Hooks | MVP | 10hrs| 
| Finishing up | MVP | 5hr | 
| Total |MVP | 31 hrs| 

### Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

### Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
