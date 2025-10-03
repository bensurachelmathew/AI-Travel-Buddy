# AI-Travel-Buddy
    AI Travel Buddy app 
# AI-Travel-Buddy
    An AI-powered travel assistant built with Node.js + Express and a simple frontend.
    It helps you plan trips, suggest itineraries, and answer travel-related questions using the OpenAI API.

# Project Structure
    AI-Travel-Buddy/
    │── server.js        # Node.js backend (API)
    │── index.html       # Frontend (chat UI)
    │── package.json     # Dependencies & scripts
    │── .env             # API key config

# Setup Instructions
1. Clone Repo & Install Dependencies
    git clone hhttps://github.com/bensurachelmathew/AI-Travel-Buddy.git
    cd travel-buddy
    npm install

2. Configure Environment

    Create a .env file in the root:

    OPENAI_API_KEY=your_openai_api_key_here

3. Run Backend
    npm install
    node server.js


    Backend runs at → http://localhost:8000

4. Run Frontend

    Open index.html in your browser.
    Type a message (e.g., Plan me a 3-day trip to Tokyo) and get an AI-generated itinerary.