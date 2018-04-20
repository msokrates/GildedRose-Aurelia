Feature: Updating quality and sell in for items in our shop

Scenario: The current day is updated at the end of the day
  Given the current day is set up to be 5
	When the items are updated at the end of the day
	Then the current day is now 6
