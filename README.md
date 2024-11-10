# Junction - Hackathon Project

## BIM for any building, by anyone.

### Challenge

The key challenge is that there is no easy-to-use tool to:

- 📐 **Create simple, recognizable 3D building models** based on limited input parameters, such as building address, 2D floor plans, and floor heights.
- 🏗 **Import, position, and orient 3D equipment models**, especially elevators, within the building model using a drag-and-drop interface.
- 🔄 **Export models and components** (e.g., equipment) into a standard 3D file format for further use in digital twin applications.

# Overview

## Main page

KONE 3DNow is based on the KONE main page. It showcases an initial 3D model of the building where elevator and equipment models are integrated to create a live digital twin.

### View the project here

[Link to the project](https://hackathon-junction-projects.onrender.com/)

![Main Page](/src/assets/MainPage.png)

### Input Parameters: 2D Plans

![Home Page](/src/assets/HomePage.png)

### Add Floor Heights (in meters)

Define the height of each floor in the building and adjust the number of floors as needed.

![Home Page 2](/src/assets/HomePage2.png)ModellingPage.png

### Modeling Page

![Modeling Page](/src/assets/ModellingPage.png)

### Our AI Training Model

![Our Training Model 1](/src/assets/OurTrainingModel1.jpg)

![Our Training Model 2](/src/assets/OurTrainingModel2.jpg)

## Key Features

1. 🖼️ **Upload 2D and 3D Images**

   - Supports both 2D and 3D image uploads, offering flexibility for diverse content types.

2. 📝 **AI-Powered 2D to 3D Conversion**

   - Uses AI to transform 2D images into 3D, adding depth and dimension for a richer visual experience.

3. 🏗 **Import, Position, and Scale 3D Models**

   - Provides an intuitive drag-and-drop interface for adding, positioning, and scaling 3D models of equipment, such as elevators, directly into building models.

4. 🔍 **Export in 2D (PNG) and 3D (PLY) Formats**

   - Supports exporting in both 2D and 3D formats, making it versatile for different applications.

5. 🌐 **Web-Based Accessibility**

   - Ensures easy access from any location, offering broad availability and usability.

6. 📐 **Responsive User Interface**

   - Designed to be responsive, delivering a consistent and optimized experience across all devices and screen sizes.

7. 📍 **3D Modeling of Existing Structures**

   - Enables the creation of accurate 3D models of existing structures, like trucks and elevators, for detailed digital representations.

8. 🔵 **KONE Branding for Easy Recognition**

   - Includes KONE branding elements, making it easy for users to identify the platform as part of KONE’s offerings.

9. 📊 **Data Visualization Tools**

   - Provides data visualization tools for insights and graphical representations.

10. 🐳 **Docker Support for Easy Access**

    - Offers convenient deployment with Docker Compose and Dockerfile, simplifying setup and access.

📈 **EXPERIMENTAL**

[Link to the quick video](https://www.youtube.com/watch?v=VpZ_8jWjT5w)

## Listen to Our Speaker about AI Training Model

[Link to the video](https://www.youtube.com/watch?v=tyo6iBdAe94)

## Getting Started

### Prerequisites

- **Node.js and npm** are required to run the React frontend. You can download them from the official [Node.js website](https://nodejs.org/).

### 🚀 Quick Start

#### Option 1: Run Locally

1. **Clone the Repository**

   ```bash
   git clone https://github.com/VienThanh12/hackathon-junction-projects.git
   cd hackathon-junction-projects
   ```

   - If your machine cannot reach Gitlab at this stage and nothing happens, it's a sign of a firewall issue between your machine and Github.

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the App Locally**

   ```bash
   npm run dev
   ```

4. **Open the application in your browser**
   ```bash
   http://localhost:5173
   ```

### Option 2: Using docker

1. **Clone the Repository**

   ```bash
   git clone https://github.com/VienThanh12/hackathon-junction-projects.git
   cd hackathon-junction-projects
   ```

   - If your machine cannot reach Gitlab at this stage and nothing happens, it's a sign of a firewall issue between your machine and Github.

2. **Using docker compose to run the app**

   ```bash
   docker compose up
   ```

3. **Open the application in your browser**
   ```bash
   http://localhost:5173
   ```

## Known Issues

1. **Backend and Frontend Communication Not Yet Established**

   - Due to the complexity of handling 3D models, we focused on the frontend and AI model training first. With limited time in the Junction hackathon, backend connections are still pending but will be completed soon.

2. **AI Model Still in Development**

   - Our initial model is trained on a small dataset. Future versions will use larger datasets to improve performance.

3. **UI Improvements Needed**

   - Initial efforts focused on functionality over design. UI enhancements are planned for future updates.

4. **Exporting 2D and 3D Pictures from 3D View Not Available Yet**

   - This feature is in development and will be included in a future release.

# Contributing

We're are open to contributions, so please fork this repository and contribute by making pull requests. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

# License

The project is licensed under the MIT license.

# Contact

Come check us out at the junction. Our team name is: Assemblers.

This repository is meant as a code and recipe library to be re-used in work. You don't have to ask for a permission to use it, as it's open source, but do contact if you need advice or ideas on how to apply it to your particular use case.
Preferred channel: Email.

- Frontend: (React and AntDesign)

  - vien.ha@nokia.com
  - kristian.lalev1@gmail.com

- Backend (+ training AI Model) (Python + Machine Learning + Neural Networks + Spartial AI)

  - thanhduonghd114@gmail.com
  - dmitri.kovalenko@wf34.ws

- Design: (Figma, PowerPoint, video editing)
  - htxuan842@gmail.com
