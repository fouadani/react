This is a React application built with Next.js and TypeScript.

## Getting Started
### Prerequisites
You must have installed in your machine
- Node.js (version 16 or higher)
- NPM (version 8 or higher)
- git client
- mockoon

### Installation
1. Clone the repository:
Clone the repository from githab
```bash
git clone https://github.com/fouadani/react.git nameProject
cd nameProject
```
3. Install the dependencies:
```bash
npm install
```

### Mock Server Setup

1. Install and run Mockoon:
- Download Mockoon from the official website (https://mockoon.com/) and install it on your computer.
- Launch Mockoon.

2. Import the Mockoon configuration:
- Download the `mockoon.json` file provided.
- Open Mockoon and click on the "Import" or "Importer" button.
- Select the `mockoon.json` file and import the configuration.

3. Ensure that the Mockoon server is running on port 3001.

### Starting the Application

1. Update the API endpoint in `api/dates.ts`:
- Open the file `api/dates.ts`.
- Replace the current URL with the URL of the Mockoon server (http://localhost:3001/initialDate).

2. After, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open your web browser and visit `http://localhost:3000` to see the application running.

## Usage

- The application allows you to calculate the number of days between two dates.
- Two date input fields are provided along with a submit button.
- When valid dates are entered and submitted, the application will display the number of days between those dates below.
- The first date input field is pre-filled with data from the Mockoon server as an initial date.

## Contributing

Contributions are welcome! If you find any issues or would like to suggest improvements, please create a new issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).


