# Car Insurance Test

## Original Instructions
Saved in `original_instructions.md` file-

## Usage
- Clone Repo
- `npm install`
- `npm run after-30-days` will output results in console
- Request `localhost:5000/` from Postman or your browser to see in json format

- Running in heroku, check it [here](https://car-insurance-test.herokuapp.com/) it might take a few seconds when you first open it since heroku sleeps the servers after some time of not using it.
- Front end available at [car-insurance-test.web.app](car-insurance-test.web.app)

## Considerations
`products_after_30_days.txt` contains wrong data for:

- Full Coverage plan price is increasing by 2 instead of 1 since day 3
- Super Sale also has errors
