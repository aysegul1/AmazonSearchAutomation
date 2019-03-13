#**What is the amazon search automation suite and what does it test?**

A simple automation test built with the protractor framework that tests Amazon's search function as well as adding an item to the shopping cart with more than one quantity.These tests run will find any bugs that might get introduced to search box, department selection for filtering search, results page, overview page of an item, quantity count, and shopping cart item display.

#Reasons:

1. The main goal is to test search box and search / go button functionality.
2. Searching with department filtering enable me to implement code to find element with different automation identifier.
3. Results page validation for items not found in specific department was to show sting comparison.
4. I was able to show implementation of simple reusable functions to test selecting quantity and adding the item to the shopping cart. 


#**what does it NOT test?**

Please note that amazon automation test suite will not test search filtering for each department, returned count on search page, recommended results, filtering on result page, any description / review / etc of an item on the overview page, and lastly it will not test any functionality of shopping cart other than verifying an item gets added to the cart.

#Reasons:

1. Timeboxing project to limited time also limited test case selection.
2. Some of the decisions were made according to what is closest to the scope and what is not.
3. More testing on overview page would have been more string comparison which was already shown.
4. Returned count on search page wasn't included because I believed return count was not always explicit which could result in invalid testing.
5. Testing filtering each department is testing filtering over and over. Instead, a test case to test if all departments are present could be implemented in the future.


#**How To**
1. Install VS Code from [Visual Studio Code](https://code.visualstudio.com/download) following the insturctions provided by visual studio.
2. Download Git Bash [Here](https://git-scm.com/downloads)
3. Install Node v6.16 or older [Here](https://nodejs.org/en/blog/release/v6.16.0/)
4. Navigate to the repository [Here](https://github.com/aysegul1/amazon_automation/tree/f/searchTests). Make sure f/searchTests branch is selected.
5. Click Clone or Download button on the right and copy repository URL.
6. Open git bash console
7. Navigate to the folder you would like to save this project to by typing cd {your folder path}
8. Create a folder for amazon search test automation project by typing mkdir Amazon and hit enter - this should create a new folder
9. Type git clone {repository URL} and hit enter - this should start cloning the repository down to your local machine
10. Launch VS Code
11. Click File > Open Folder
12. Navigate to the Amazon folder you just created and click on the repository folder name - This should open the project in VS Code
13. Click Terminal > New Terminal - this should open terminal with the repository path
14. type npm install - this will install dependencies from the package.json file
15. type webdriver-manager update - this will update the webdriver

**To Run**
protractor protractor.conf.js


Note: Please reach out to Ayse Lufcy for any questions or concerns.


    