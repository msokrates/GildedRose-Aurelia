Feature: Updating quality and sell in for items in our shop

Scenario: The current day is updated at the end of the day
  Given the current day is set up to be 5
	When the items are updated at the end of the day
	Then the current day is now 6

Scenario: A typical item degrades at the end of the day
	Given I have the following items
		| Name         | SellIn | Quality |
		| Copper Sword | 5      | 6       |
		| Magic Dagger | 20     | 10      |
	When the items are updated at the end of the day
	Then I should have the following items
		| Name         | SellIn | Quality |
		| Copper Sword | 4      | 5       |
		| Magic Dagger | 19     | 9       |
