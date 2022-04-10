# Work Flow

## Branches

We will create 5 branches: -

* One for each user story(Naming convention is mentioned below) (conventionUserStory-Shi89)
* Development branch (3380DiversityOfLiving-development)
* Interface branch (3380DiversityOfLiving-interface)

* deployement branch will be optional

## Directory structure

    3380GroupName/    
        ├───3380GroupName-ws/                       # Your Express Web Service    
        |       └───... Express files go here...    
        ├───3380GroupName-app/                      # Your React App    
        |       └───... React files go here...    
        ├───3380GroupName-data/                     # Your development Database    
        |       └───... MongoDB files go here    
        ├───3380GroupName-doc/                      # Your React App    
        |       ├─── GroupName-Deploy.md                      # DeploymentDocumentation    
        |       ├─── GroupName-MeetingMinutes-DD-MM-YYYY.md   # Meeting Minutes    
        |       ├─── GroupName-References.md                  # Your Manual    
        |       ├─── GroupName-Manual.pdf                     # Your Manual    
        |       └─── GroupName-Video.xxx                      # Video Demonstration    |    └─── README.md # Project Descriptor file

## User story naming convention

    Students must add the github 'rvirani1dc' to their git hub repository and ensurethat their github repository is submitted in the "comments" field of theirsubmission to     Blackboard. Each User story must have the naming conventionUserStory-Shi89
    

## Numbeo API access
    
    Numbeo API key is: x1livdx5oej62t
    
    The documentation: https://www.numbeo.com/api/doc.jsp
    
## React Bootstap
    
    https://react-bootstrap.github.io/

    
    

































# CSIS 3380 Project Proposal - Diversity of living

## Project Description:

We would like to propose an idea for a website where people could do the comparison between countries where they want to settle down and spend their entire life. They could compare some different aspects of life that changes with the change in the country you’ll live in like: 
* Purchasing power parity
* Employment rate
* Cost of living,etc.  


## Additional Technology


|Technology Name|Description|Link|
|--|--|--|
|Integrating Numbeo API | It is third party API for the data that we will gonna use in our app for the countries | https://www.numbeo.com/common/api.jsp|
|--|--|--|



## Project People and User Stories


|Member Name|Student Number|Github Username|User Story|Description|Weighting|
|--|--|--|--|--|--|
|Jaimish Patel|300324072|jaimishpatel41297| Frequently asked questions and Main Page and routing |Handle FAQ section and look of main page|4 points|
|Anurag  Rawal |300336565 |anuragr07|Calculations of comparison|handle comparision between two countries|3 points|
|Yanael Correa|300305586 |Casclub |Most popular Choices|Handle popular choices process in application|3 points|
|--|--|--|

**Total: 10**


## User Story Descriptions

    Frequently asked questions:
    -----
    As a client, I want to add FAQ(frequently asked questions) into the application, so that I can get my question-answer and help other users if they have the same question.
        --------------------
    Scenario: When I click add FAQ, then it should give me an input textbox to insert my question and answer and, then it should save data and display FAQ to users in the FAQ section
    --------------

    Main Page and routing:
    -----
    As a User, I want the application to redirect me on different pages as I click the different link in the navigation menu so that I can go to different links as per my need.
    --------------------
    Scenario A: When I click on login, it should redirect me to the login page and then ask for my username and password.

    Scenario B: when I click on the about page, it should redirect me to the about us page.
    --------------

    Calculations of comparison: 
    -----
    As a client, I want to see the comparison between two countries in numeric values in respect to each other, so that I can compare between two countries and will not need to do the calculations myself.
    --------------------
    Scenario: When I compare between two countries, calculations should be made by the app automatically and then I will have to just look at the data and I can make my decisions.
    --------------

    Most popular Choices:
    -----
    As a User, I want to know what the most popular or chosen country is for living around the world, for example, I do not have any idea where to start looking for, if I find what is the most chosen country, I can have a better idea and see more information from that country.
    --------------------
    Scenario: When I click the option “Most popular country around the world”, it will show me people's choices, a specific data ("only the most chosen one") should be pulled from the main data and It will be shown on the screen, also it will show me details about the specific country. It could change every month to have fresh information
    --------------

## Reference

* Markdown Tutorial - https://www.markdowntutorial.com/
* User Stories - https://uxmag.com/articles/user-story-template-with-examples
