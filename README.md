## Patient Management Dashboard
Patient Management Dashboard that allows healthcare providers to view and manage patient information. The application include the following features:

### Features

**Patient List View**

- List of patients with basic information including search/filter functionality and sorting by different fields.
 

**Patient Detail View**
- Detailed patient information when a patient is selected including current medications, condition and upcoming appointments.

**Header Component** 
- Reusable header component that appears on all pages, except the landing page including navigation links. Displaying and logged in Doctor's information when logged in and showing sign out button for authenticated users


**Dark mode** 
- dark mode toggle


## Prerequisites

### Setting up the required node/npm versions

This project uses [Volta](https://volta.sh/) for consistent Node.js versioning. 

#### Install Volta
```bash
# Install Volta
curl https://get.volta.sh | bash

# Install the Node.js version specified in package.json
volta install node@23.7.0
volta install npm@11.1.0
```

### Start the backend API
[json-server](https://github.com/typicode/json-server) was used to create the backend API, you can see what endpoints are available in the `api/db.json` file. You shouldn't need to modify the `api/db.json` file, but if you need to, you can do so.
```bash
npx json-server api/db.json
```

The API will be available at `http://localhost:3000` with the following endpoints:
- `GET /patients` - List all patients
- `GET /patients/:id` - Get a specific patient
- `GET /appointments` - List all appointments
- `GET /appointments/:id` - Get a specific appointment

### Start the frontend application
```bash
npm run dev
```

The application will be available at `http://localhost:5173`


<br>

[![📃](https://raw.githubusercontent.com/MoazIrfan/wc-cli/main/.github/license.png)](./../../)
## License

MIT © [Moaz Irfan](https://twitter.com/MoazIrfan/)

<br>

[![🙌](https://github.com/MoazIrfan/wc-cli/raw/main/.github/connect.png)](./../../)

## Connect

<div align="left">
    <p>
    <a href="https://github.com/MoazIrfan">
        <img alt="GitHub @MoazIrfan" align="center" src="https://img.shields.io/badge/GITHUB-gray.svg?colorB=6cc644&style=flat" />
    </a>&nbsp;
    <a href="https://twitter.com/MoazIrfan/">
        <img alt="Twitter @MoazIrfan" align="center" src="https://img.shields.io/badge/TWITTER-gray.svg?colorB=1da1f2&style=flat" />
    </a>&nbsp;
    <a href="https://moazirfan.com/">
        <img alt="Site: moazirfan.com" align="center" src="https://img.shields.io/badge/MY%20SITE-gray.svg?colorB=4D2AFF&style=flat" />
    </a>&nbsp;
    <a href="https://www.linkedin.com/in/moazirfan/">
        <img alt="LinkedIn @MoazIrfan" align="center" src="https://img.shields.io/badge/LINKEDIN-gray.svg?colorB=0077b5&style=flat" />
    </a>&nbsp;
</p>
</div>
