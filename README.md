**React App with Server-side HTML rendering & webpack*

*Benefits:*
 - Faster 'first-time' rendering for better user experience.
 - SEO can be more discoverable.

*Process:*
 - 2 Seperate webpack configurations.
 - 1 for server bundling.
 - 1 for browser/client bundling.

 - The server bundling method will not re-add output files in public folder on build, only browser side will.

*Abilities:*
 - Handles .js extensions.
 - Handles .css extensions.
 - Handles .gif .jpe?g .png .svg formats.

*Run Local:*
 - Clone repo.
 - Navigate to repo folder.
 - Run from command-line/terminal within same folder - npm install.
 - After installation, run - <code>npm run start-dev</code>.
 - View React App at http://localhost:5000.
