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
 - Handles <code>.js</code> extensions.
 - Handles <code>.css</code> extensions.
 - Handles <code>.gif .jpe?g .png .svg</code> formats.

*Run Local:*
 - Clone repo.
 - Navigate to repo folder.
 - From command-line/terminal within same folder, run | <code>npm install</code>.
 - After installation, run | <code>npm run start-dev</code>.
 - View React App at http://localhost:5000.
