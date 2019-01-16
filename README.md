## Usage

* clone project locally
* cd client
* yarn start

## Process

Before development a list was created to detail out each task required.

### Server
* Clone prisma starter template
* Make a Prisma data model
  * Id, title, body, createdAt
* Add in some seed data to use
* Deploy to Prisma cloud

### Frontend
* Clone create-react-app
* Add in dependencies (react-apollo, apollo-client, graphql, graphql-tag etc)
* Render out title ‘Ideas’ and cards from server
  * Cards should be 150px width with 10px margin
* Add an Add idea button that toggles showing an entry form with the title and body
  * Body can have a max length of 140 characters
  * Auto focus the title when showing the form
* Integrate mutation to add idea to the database and update the existing list with the new entry
* Make title and body editable as inputs
  * Add onblur handler to save the data if it’s changed and reshow the text item
* Add delete item
  * Add onhover handler on card to show delete icon
  * Remove item off the list after deleted

### Improvements

* No need to mention the obvious but better styling and tests
* The shared card component passes actions through to render top left and top right icons that trigger mutations. The current setup was to prevent CSS duplication but it has made the code less modular (more coupled). Instead it would be easier to maintain if you pass through the top left or right icon components so they can be managed separately in their own folders.
