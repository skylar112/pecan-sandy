# Fitness Tracker using MongoDB

https://cryptic-wildwood-89289.herokuapp.com/

Fitness tracker is built using NodeJS Express, Mongoose, and MongoDB. Users can create a new workout routine by entering a workout name, which is saved to the database. Users can select cardio or resistance training, and the app allows the user to add exercises to the workout routine.

## Approach

Probably the most important step, I needed to figure out what I needed to do to start this app. I broke down my objective into a few key steps:
1. Set up a server with a connection to a MongoDB database
2. Define MongoDB schemas using Mongoose which will interact with the database
3. Get user input about whether they want to create a new workout, or continue an existing one
4. After choosing a workout, allow users to add new exercises to the workout
5. Save the workout and the exercises to the database
