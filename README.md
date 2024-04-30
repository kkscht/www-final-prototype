# Wanderella

This is the prototype for CS160 Spring 2024 - User Interface Design & Development (Tim's section, 104-6: WorldWide Women)

The express-stack-starter code repositiory that helped set up the local host can be found [here](https://github.com/cs160-spring2024/express-stack-starter)!

To install server depedencies, use:

```bash
npm install
```

Then run the server script on your development computer:

```bash
node server.js
``` 

## Problem Statement

Young women face unique gender-specific challenges while traveling. Confidence in one’s safety is a common deterrent in traveling solo, as women are more likely to be targets of harassment and assault. Even with copious amounts of planning, it is easy to overlook information such as emergency numbers or the reputation of a last-minute hostel booking.

There is a need to increase the accessibility of information (emergency, cultural, etc.) as well as tools regarding the general safety of young solo female travelers as they explore international destinations.


## Target User Group

Our target user group is specific to young women who are traveling individually to an international destination, whose main concerns are related to safety.
 
Their primary needs relate to being able to store and access emergency and personal information quickly from any location, and they want to be able to learn from other women regarding safety concerns in the area they are traveling to. Their highest priority is to be fully immersed in the culture and experiences offered by the destination while having a safe accommodation to rest at the end of the day.


### Solution
Wanderella utilizes Google Maps APIs, Reagent (service for forwarding requests to popular LLMs), Geolocation, and local storage on the user’s device. All of these services provide persistent and personalized data responses based on the user’s profile and current location. The use of the Bootstrap library and icons allow for consistent imagery, aesthetic, and usability. 

Navigation is largely controlled by a navigation bar on the bottom of the user’s window, as the application is intended for on-the-go use while traveling (mimicking a native application, but on the web).


### Tasks

Wanderella features 3 main tasks to combat safety concerns while traveling solo.

#### Find & Store Safety Information
Geolocation and local storage allow quick and easy access to emergency service numbers, while an AI assistant delivers location-based safety tips and cultural basics.

#### Profile Dashboard
A persistent and local dashboard allows users to store any information they wish to have on hand, and this information is used to increase personalization of services.

#### Safety Ratings
An in-app map and ratings service allows verified users to communicate concerns around their area and identify female-safe housing accommodations.


### Helpful citations:
- https://github.com/cs160-spring2024/express-stack-starter
- https://expressjs.com/en/starter/hello-world.html
- https://expressjs.com/en/4x/api.html#express
- https://rea.gent/
