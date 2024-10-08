
# Scrive test automation framework
Testing framework for Scrive test application using WebdriverIO

---

## Description
This framework contains configuration files, page objects, test data, test cases, and corresponding keywords/methods for automating Scrive test web application

---

## Test Case Description
   1. Go to https://staging.scrive.com/t/9221714692410699950/7348c782641060a9
   2. Fill in the full name in the document.
   3. Click on Next
   4. Take a screenshot of a confirmation modal.
   5. Sign the document
   6. Verify that there is a text “Document Signed” on the screen.

---

## Requirements
* NodeJS is Installed
* NPM is Installed
* Visual Studio Code is Installed (optional)
* Git is Installed
* Google Chrome is Installed

---

## Test Case Execution

1. Clone the project to your local machine using the "git clone" command
```
    example: git clone  https://github.com/natalliaMuratava/Scrive-test.git 
```
Run tests on your local machine
```
    npm test
```
  
---

## Test Reporting
Reports are automatically generated using SPEC reporting.