**SalamChat**

A real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) with Socket.IO for real-time communication.

**Features:**

Real-time chat: Send and receive messages with other users instantly.
User authentication: Sign up and sign in to the application.
Private messaging: Chat with individual users privately.

**Setup Clone the repository:**
Bash

git clone https://github.com/your-username/salamchat.git
Install dependencies:
Bash

cd salamchat
npm install
Create a .env file in the root directory of the project and add the following environment variables:
MONGODB_URI=your_mongodb_uri
PORT=5001
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

NODE_ENV=development
Replace the placeholders with your own values:
MONGODB_URI: Your MongoDB connection URI.
PORT: The port on which the server will run (default: 5001).
JWT_SECRET: A secret string used for generating JSON Web Tokens (JWTs).
CLOUDINARY_CLOUD_NAME: Your Cloudinary cloud name.
CLOUDINARY_API_KEY: Your Cloudinary API key.
CLOUDINARY_API_SECRET: Your Cloudinary API secret.1   
1.
packagist.org
packagist.org
Build the app:
Bash

npm run build
Start the app:
Bash

npm start
Usage

Open the application in your web browser at http://localhost:5001 (or the port you specified in the .env file).
Sign up or sign in to the application.
Start chatting with other users!
