Feature: Login to AI PoliteTech

  Scenario Outline: Successful login with Microsoft account
    Given I open the browser
    When I navigate to "https://ai.politetech.com/login"
    And I click on "Continue with Microsoft Account" button
    And I enter email "<email>"
    And I click on "Next" button
    And I enter password "<password>"
    And I click on "Sign in" button
    And I click on "Yes" button
    Then I should be logged in successfully

    Examples:
      | browser  | email                          | password    |
      | chromium | Phuong.nguyen@politetech.com   | Phuonglee98 |
      | chromium | Phuong.nguyen@politetech.com   | Phuonglee98 |

  Scenario Outline: Login failed with Microsoft account
    Given I open the browser
    When I navigate to "https://ai.politetech.com/login"
    And I click on "Continue with Microsoft Account" button
    And I enter email "<email>"
    And I click on "Next" button
    Then if invalid email is entered, verify the error message for email
    And I enter password "<password>"
    And I click on "Sign in" button
    And I click on "Yes" button
    Then if invalid password is entered, verify the error message for password 
    Examples:
      | browser  | email                          | password    | caseType        |
      | chromium | Phuongnguyen@politetech.com   | 123123123   | invalidEmail    |
      | chromium | Phuong.nguyen@politetech.com   | 123123123   | invalidPassword |
