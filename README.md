# Mood4Food

![Mood4Food](https://media.discordapp.net/attachments/871965838905864192/947506400471449630/Screen_Shot_2022-02-27_at_05.57.58.png)

Built for HackUCI 2022 using Mage.ai

## Inspiration
We were inspired to come up with Mood4Food after seeing Mage’s incredible platform and seeing the prize pool. 

Out of all the available models available on **Mage**, we thought that the personalized ranking model was the most interesting one. 

Since we are always on the lookout for dishes to try out, we got to work on building a food recommender web app!

## What it does
**Mood4Food** takes in a few of the user’s criteria — such as their age, the weather, time of day, and a potential cuisine they would like to try. 

It sends the user features to the machine learning model API that we trained to rank food based on the criteria, and it displays the received list of predictions ranked in decreasing order of what the user would most likely rate a 10/10.

## How we built it
We uploaded a self-generated dataset, set the ‘dishes’ as the column we wanted to rank in order optimize the user ‘rating’, and then let Mage do all the heavy lifting training the ranking model.

After the training was done, we activated the API for the model and began to work on the front end to consume the API. 

We created a rough wire frame of the website using diagram.net. 

Afterwards, we used React to build our website since it allowed us to easily display the generated data from the API. We also used Bootstrap to quickly prototype and build the HTML/CSS layout of the app.

**(IMG) Training our data on Mage:**

![Data on Mage](https://media.discordapp.net/attachments/871965838905864192/947506206958845972/Screen_Shot_2022-02-27_at_06.50.00.png?width=1888&height=1279)



## Challenges we ran into
Since neither of us have worked with machine learning or artificial intelligence before, we spent the first 24 hours either trying to find applicable datasets or figuring out why the datasets that we did find was not working. 

Eventually, with the help of Tommy Dang from Mage, we went with generating our own dataset for the purpose of demoing our app and the recommender system. 

## Accomplishments that we're proud of
We are very proud to be able to say that we used an actual machine learning model in a project we created! 

We are also very proud of both finishing our first hackathon!

## What we learned
We learned a lot about the datasets required for machine learning, the various types of models, and all the different business uses cases of ML! 

## What's next for Mood4Food
If we weren’t on such a tight deadline, we would have definitely made our web app more mobile friendly.

Additionally, if we ever have access to the relevant user data from a Yelp-like app in the future, we would very much want to build a more accurate model based on real user data. 

Until then, we definitely look forward to use Mage in future projects!
