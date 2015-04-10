# Server Checker
A very simple service to check if your server is up or down and notify you.

## Setup - Follow these steps:

1. Open up [Drive](https://drive.google.com)

2. Create a New Google Sheet

    ![Server Checker Step 2](https://raw.githubusercontent.com/dankantor/server-checker/master/screenshots/serverchecker-1.png)

3. Click 'Tools -> Script editor...'

    ![Server Checker Step 3](https://raw.githubusercontent.com/dankantor/server-checker/master/screenshots/serverchecker-2.png)
    
4. Create script for 'Blank Project'

    ![Server Checker Step 4](https://raw.githubusercontent.com/dankantor/server-checker/master/screenshots/serverchecker-3.png)
    
5. Paste the code from Code.gs in this repo into the Code.gs file in the Script Editor

    ![Server Checker Step 5](https://raw.githubusercontent.com/dankantor/server-checker/master/screenshots/serverchecker-4.png)
    
6. Edit the first 3 lines of the Code.gs file inside the Script Editor to add your server url, a name you'll recognize and the email address you want to be notified at

    ![Server Checker Step 6](https://raw.githubusercontent.com/dankantor/server-checker/master/screenshots/serverchecker-5.png)
    
7. Save the Code.gs file and give it a name

    ![Server Checker Step 7](https://raw.githubusercontent.com/dankantor/server-checker/master/screenshots/serverchecker-6.png)
    
8. Click 'Resources -> Libraries...'

    ![Server Checker Step 8](https://raw.githubusercontent.com/dankantor/server-checker/master/screenshots/serverchecker-7.png)
    
9. In the 'Find a Library' input paste this key: `Mg6pvEB4DVYkHEw0WQhuhRqOFunn5iDS7` then click 'Select'
    
    ![Server Checker Step 9](https://raw.githubusercontent.com/dankantor/server-checker/master/screenshots/serverchecker-8.png)
    
10. Click on 'Version' and choose the latest. Then click 'Save'

    ![Server Checker Step 10](https://raw.githubusercontent.com/dankantor/server-checker/master/screenshots/serverchecker-9.png)
    
11. Click 'Run -> initialize'. This will ask for some permissions then set up the sheet.

    ![Server Checker Step 11](https://raw.githubusercontent.com/dankantor/server-checker/master/screenshots/serverchecker-10.png)

12. A dialog will ask you for Authorization to run. Click 'Continue'

    ![Server Checker Step 12](https://raw.githubusercontent.com/dankantor/server-checker/master/screenshots/serverchecker-11.png)
    
13. Another dialog will ask you for permission to access Sheets and Email. Click 'Accept'

    ![Server Checker Step 13](https://raw.githubusercontent.com/dankantor/server-checker/master/screenshots/serverchecker-12.png)

14. Go back to the Sheet tab. You should see some Columns and Sheets

    ![Server Checker Step 14](https://raw.githubusercontent.com/dankantor/server-checker/master/screenshots/serverchecker-13.png)
    
15. Refresh the sheet tab. You should see a new menu with the name you gave your server. Click on it then click 'Run'

    ![Server Checker Step 15](https://raw.githubusercontent.com/dankantor/server-checker/master/screenshots/serverchecker-14.png)

16. After Run, you should see your first entry. It shows the Date, Status Code and Response Time

    ![Server Checker Step 16](https://raw.githubusercontent.com/dankantor/server-checker/master/screenshots/serverchecker-15.png)
    
17. Click back to Script Editor. If it closed when you refreshed the tab in step 15, click 'Tools -> Script editor...' to re-open. On the Script editor click 'Resources -> Current project's triggers'

    ![Server Checker Step 17](https://raw.githubusercontent.com/dankantor/server-checker/master/screenshots/serverchecker-16.png)
    
18. A dialog will open. Click 'No trigger set up. Click here to here to add on now.'

    ![Server Checker Step 18](https://raw.githubusercontent.com/dankantor/server-checker/master/screenshots/serverchecker-17.png)
    
19. Click the 'Run' dropdown and choose 'fetch'. It will then be set to run ever hour. You can adjust this with the 'Events' dropdowns. Click 'Save'

    ![Server Checker Step 19](https://raw.githubusercontent.com/dankantor/server-checker/master/screenshots/serverchecker-18.png)
    
20. That's it! You are now all set up. It will run as often as you told it to. If the Status Code changes (eg. from 200 to something else) it will email you.

    