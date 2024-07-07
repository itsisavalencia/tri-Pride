# Project Title
tri-Pride

## Overview

This app is for my local pride organization, tri-Pride. It will enhance their online presence and serve as a central hub for tracking the most up-to-date information on their history, board of directors, and events.

### Problem

tri-Pride previously had an outdated and non-functional website. With their recent rebranding and significant growth in 2022-2023, there was an urgent need for a modern, reliable website. Over the past year, tri-Pride’s Board of Directors, volunteers, and partners have witnessed increased community attendance at events and heightened awareness, support, and presence within the Region of Waterloo. To reflect and support this growth, a new, dynamic website was essential to effectively communicate tri-Pride's mission and activities.

### User Profile

- LGBTQ+ Individuals and Allies:
    - Interested in attending events
    - Want to learn more about the organization
    - Looking to get involved through volunteering, or joining the board
- Board Members: **(nice-to-have)**
    - Maintain up-to-date information for the community
    - Access a login page to update events and board position openings
    - Use interactive forms to update the back end and re-render the front end

### Features

As a user, I want to be able to view the mission, vision, and values of tri-Pride

As a user, I want to see tri-Pride's social media platforms linked.

As a user, I want to learn about the Board of Directors and read their bios on the About Page.

As a user, I want to view upcoming events with their details.


As a user, I want to learn how to get involved through volunteering. **(nice-to-have)**

As a board member, I want to be able to log in to update events and board position openings using interactive forms. **(nice-to-have)**

As a board member, I want to manage the content on the website to keep it current and relevant. **(nice-to-have)**

## Implementation

### Tech Stack

- React
- JavaScript
- Express
- Client libraries:
    - react
    - react-router
    - axios
    - sass
- Server libraries:
    - express
    - dotenv
    - cors
    - uuid4

### APIs

- No external APIs will be used for the first sprint

### Sitemap

- Home Page
    - Hero: A few words describing tri-Pride.
    - Mission & Vision: Cards displaying tri-Pride's mission and vision.
    - Banner showing membership organizations
- About Page
    - Board of Directors: Bios and information about the board members.
    - Mission & Vision: Detailed explanation of tri-Pride's mission, vision, and values.
- Events Page
    - Upcoming Events: Cards of upcoming events with details.
    - Past Events: Cards of upcoming events with details.
        - Photos Page **(nice-to-have)**: photos from past events
- Contact Us Page
    - Location and email info
    - Form to send email **(nice-to-have)**
- Ways to Get Involved Page **(nice-to-have)**
    - Volunteer: Form for volunteering or contact information for volunteering.
    - Join Our Board: Information about open board positions, application process, and contact details.

### Mockups

https://www.figma.com/design/TYpAbnRsSvnb0IcNgyXxJn/tri-Pride?node-id=0-1&t=nhdCFDD0qrFoKj1f-1

### Data

- No data included at this point

### Endpoints

**GET /events**

- Retrieve events

Example response:
```
[
    {
        "id": 1,
        "name": "Summer Fest 2024",
        "date": "2024-07-20",
        "location": "Kitchener, ON",
        "description": "Annual pride parade celebrating diversity and inclusivity.",
        "photo": "path/to/photo.jpg"
    },
    {
        "id": 2,
        "name": "Pride Outreach Event",
        "date": "2024-08-10",
        "location": "Waterloo, ON",
        "description": "Event aimed at community engagement and support.",
        "photo": "path/to/photo.jpg"
    }
]
```

**GET /events/:id**

- Retrieve details of a specific event.

Example response:
```
{
    "id": 1,
    "name": "Summer Fest 2024",
    "date": "2024-07-20",
    "location": "Kitchener, ON",
    "description": "Annual pride parade celebrating diversity and inclusivity.",
    "photo": "path/to/photo.jpg"
}
```

**GET /board**

- Retrieve a list of board members.

Example response:
```
[
    {
        "id": 1,
        "name": "John Doe",
        "pronouns": "he/him",
        "position": "Chairperson",
        "description": "John Doe has been actively involved in community advocacy for LGBTQ+ rights for over a decade.",
        "photo": "path/to/photo.jpg"
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "pronouns": "she/her",
        "position": "Treasurer",
        "description": "Jane Smith has a background in finance and supports financial transparency within tri-Pride.",
        "photo": "path/to/photo.jpg"
    }
]
```

**GET /board/:id**

- Retrieve details of a specific board member.

Example response:
```
{
    "id": 1,
    "name": "John Doe",
    "pronouns": "he/him",
    "position": "Chairperson",
    "description": "John Doe has been actively involved in community advocacy for LGBTQ+ rights for over a decade.",
    "photo": "path/to/photo.jpg"
}
```

**POST, PUT, DELETE /events & /board**
- Functionality will be implemented as a nice-to-have feature for board member who login.

### Auth

Login functionality for board members will be implemented as a nice-to-have feature. This will allow board members to access a secure area to update events and board member details using interactive forms.

## Roadmap

- Phase 1: Project Setup and Frontend Development
    - Set up React project structure and dependencies.
    - Create reusable components
        - Header
        - Footer
    - Create static Home Page
        - Hero 
        - Mission & vision
        - Memberships banner
    - Create static About Page
        - Board of directors.
    - Create static Events Page
    - Create static Contact Us Page

- Phase 2: Backend Development and API Implementation
    - Set up Express server with basic routes and middleware (CORS, dotenv).
    - Implement endpoints for retrieving events and board members.
    - Implement basic error handling and logging.

- Phase 3: Dynamic Content and Event Management
    - Enhance Home Page to fetch and display dynamic next event.
    - Implement CRUD operations for events.
    - Make Events Page dynamic -> list upcoming events and details.
    - Add functionality to view individual event details.

    - Implement CRUD operations for board members.
    - Make About Us Page dynamic -> list board members and descriptions.
    - Add functionality to view individual board member descriptions.

- Phase 4: Testing, Bug Fixes, and Deployment
    - Conduct thorough testing of frontend and backend functionalities.
    - Address any bugs or issues discovered during testing.
    - Prepare for deployment to staging and production environments.

## Nice-to-haves
- Integrate database for data storage (MongoDB or MySQL).
- Photos Page: photos from past events
- Contact Us Page -> Form to send email
- Ways to Get Involved Page
- **POST, PUT, DELETE** /events & /board
- Auth for board members