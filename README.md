
# john-rsm-test
This project contains two folders: frontend and backend. The frontend folder contains a React app that allows users to drag images from a sidebar onto a canvas, and save them to a MySQL database using a Node.js API provided in the backend folder.

Installation
To run this project locally, you'll need to have Node.js installed on your computer.




## Installation

1. Clone the repository to your local machine:

```bash
git clone git@github.com:jonpecson/john-rsm-test.git
```

2. In a terminal window, navigate to the backend folder and install the required dependencies:


```bash
cd backend
npm install
```

3. Start the Node.js server:

```bash
npm run dev
```

4. In a separate terminal window, navigate to the frontend folder and install the required dependencies:

```bash
cd frontend
npm install
```

5. Start the React app:
```bash
npm run dev
```

## Usage
Once the project is running, you should be able to access the React app in your browser at http://127.0.0.1:5173. The app consists of a sidebar containing a list of images, and a canvas where you can drag images from the sidebar.

To add a new image to the database, simply drag an image from the sidebar onto the canvas and click the "Save" button. To update an existing image in the database, click on the image in the canvas and make your changes, then click the "Save" button.





