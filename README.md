"A fool can write code that a computer can understand. Good programmers write code that humans can understand."
— Martin Fowler


Automated end to end tests for the GoRest public API using Node.js, Mocha, Chai, Axios and Mochawesome reporting.
Prerequisites
Requirement	Version
Node.js	≥ 14.x
npm	≥ 6.x

Setup

1.	Clone this repository
2.	git clone <your fork url>
cd <repo>
3.	Install dependencies
npm install
4.	Configure your access token
o	Copy .env.example to .env
o	Add your GoRest personal access token:
GOREST_TOKEN=your_token_here
5.	Never commit real tokens—add .env to your .gitignore.
Running the Tests
npm test
Behind the scenes this runs:
npx mocha test/apiTest.js --reporter mochawesome
After the run finishes, open the generated HTML report (mochawesome-report/index.html) in your browser to view a full breakdown of passed/failed cases with response payloads.
Project Structure.

├── test/
│   └── apiTest.js    # Main test suite
├── .env.example      # Token template
├── package.json      # Scripts & dependencies
└── README.md         # You're here!

Useful npm Scripts

Script	Purpose
npm test	Run all API tests with report
npm run lint	Lint sources with ESLint (optional)
npm run clean	Remove previous report artefacts
Contributing
1.	Fork → branch → PR
2.	Write clear, self documenting code & tests
3.	Ensure npm test passes and reports no regressions
4.	Keep the README updated where needed
________________________________________
Happy testing! 🎉
