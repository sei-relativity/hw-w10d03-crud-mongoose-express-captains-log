
![General Assembly Logo](https://raw.git.generalassemb.ly/software-engineering-immersive/SEI-Course-Materials/master/ga_cog.png)

# The Captain's Log

![Insert Pun Image here](https://i.imgflip.com/2174sq.jpg)

#### Learning Objectives

- Full CRUD app with a mongo database

#### Prerequisites

- JavaScript
- Express / Node 
- Mongo / Mongoose

---

## Multi-part/Multi-day Lab

Every great captain, whether on the waters or in the skies, keeps a daily log.

Let's build the perfect Captain's Log App for our extraordinary captains.

There are many ways to get started building an app. This lab follows a specific order for two reasons:

 - to align with the content of lecture
 - to give you an order to guide you to create small bits of functionality and test each one before moving on to the next part

If you finish lab early consider:

  - adding some CSS and practice styling your app
  - try working with the date object! Try to make it look human readable in HTML. It's tricky! [A Hint](https://momentjs.com/)
  - try working through the next section of the lab before it is covered in lecture - see what you can figure out
  - **SUPER BONUS** - Once you finish this whole lab, add a second model for comments, it should have the name of the person who wrote it, and some text for the comment (maybe time stamps?). This model should 'belong' the the post, the data should be related in some way. Do you own research of how to set up a `one-to-many` relationship (one post can have many comments, one comment only belongs to one post), in MongoDB. Use Mongo Documents, Google, or [Matt's Notes](https://git.generalassemb.ly/Web-Development-Immersive-Remote/WDIR-Stan-Lee/tree/master/unit_2/w07d01/instructor_notes) - note we will not have class time to teach a second, related model. 

### Set up

#### Restful Routes

Let's keep track of our Restful Routes as we build out our app. 

|#|Action|URL|HTTP Verb|mongoose method|
|:---:|:---:|:---:|:---:|:---:|
|1| Index | /logs/ | GET | `Log.find({})` |
|2| Show | /logs/:id | GET | `Log.findById(req.params.id)` |
|3| Create | /logs/ | POST| `Log.create(req.body)` |
|4| Update | /logs/:id | PUT | `Log.findByIdAndUpdate()` |
|5| Destroy | /logs | DELETE | `Log.findByIdAndRemove()` |

1. Create a new folder `mkdir captains_log`
1. `cd catpains_log`
1. `npm init`
1. `npm install express`
1. `touch server.js`
1. Edit `package.json` to have `"main": "server.js",`


## Use today's lesson for reference on next steps

[lesson-w10d03-crud-mongoose-express](https://github.com/sei-eternity/lesson-w10d03-crud-mongoose-express#test-fruit-route-and-reqbody)


### `Log` Model
1. `mkdir models`
1. `touch models/logs.js`
1. Create the logs schema

  - title: string
  - entry: string
  - shipIsBroken: Boolean (bonus: set a default to true)
    - Super bonus:
      - as a second argument to mongoose.Schema(), add `{ timestamps: true }`



### Bonuses
1. The captain wants to keep track of eating habits: make a new set of routes in a new file in your controller folder called foodlogs
  1. build out the 7 restful routes for foodlogs, include a new model with whatever properties make sense
1. make a seed file and seed it
1. have your update route redirect to the show page of the log that was edited
1. create a seed file and seed your database
1. work on your css, make this Captain's Log look awesome!
1. if you have timestamps, figure out how to edit/display the edited date

---

*Copyright 2019, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
