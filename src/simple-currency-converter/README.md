# Work on project. Stage 4/4: Loop it!

Project: Simple Currency Converter

## Loop it!

Hard
14 minutes

## 1. Description

In the final stage, we will loop our program to make it run continuously until the exit command is prompted.

First, ask the user what they want to do: `What do you want to do?`

Give two choices to users: one is conversion, the other is the exit. Users need to input `1` and `2`, respectively: `1-Convert currencies 2-Exit program`

In case of any wrong input, you need to ask again for the input and repeat the process.

Print the following message when users choose to exit the program: `Have a nice day!`

Print the following message when unknown input occurs: `Unknown input`

## 2. Objectives

In this stage, your program should:

1. Continuously ask for new currency input;
2. Give two choices to users;
3. Handle unknown inputs.

## 3. Examples

The greater-than symbol followed by a space (`> `) represents the user input. Note that it's not part of the input.

**Example 1:** **USD to JPY**

```text
Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP
What do you want to do?
1-Convert currencies 2-Exit program
> 1
What do you want to convert?
From: > USD
To: > JPY
Amount: > 115
Result: 115 USD equals 13052.5000 JPY
What do you want to do?
1-Convert currencies 2-Exit program
```

**Example 2:** *unknown currency*

```text
Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP
What do you want to do?
1-Convert currencies 2-Exit program
> 1
What do you want to convert?
From: > TL
Unknown currency
What do you want to convert?
From: 
```

**Example 3:** *exiting the program*

```text
Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP
What do you want to do?
1-Convert currencies 2-Exit program
> 2
Have a nice day!
```

**Example 4:** *unknown input*

```text
Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP
What do you want to do?
1-Convert currencies 2-Exit program
> a
Unknown input
What do you want to do?
1-Convert currencies 2-Exit program
```

Write a program
