
# User Guide for Defining Chip Conditions

## Introduction
This guide will help you understand how to define conditions for chips using a simple web interface. A condition consists of two parts: a left operand and a right operand, along with an operator that determines how these operands interact.

## Components of a Condition

### 1. **Operands**
Operands can be:
- **Constant**: Fixed values like numbers, text, or any specific value.
- **Variable**: Dynamic values that change based on the current state. These can represent:
  - Message
  - Event
  - Signal
  - Attributes
  - User
  - Chat
  - Terminal
  - State
  - Forwarded Message
  - Reply To Message
  - Callback

You can switch between constant and variable operands by clicking on the folder icon in the interface.

### 2. **Operators**
Operators define the relationship between the operands. Here are the types of operators you can use:

- **Logical Operators**:
  - **And**: Both conditions must be true.
  - **Or**: At least one condition must be true.

- **Existential Operators**:
  - **IsEmpty**: Checks if the operand is empty.
  - **IsNotEmpty**: Checks if the operand is not empty.

- **Comparison Operators**:
  - **Equal**: Checks if both operands are equal.
  - **NotEqual**: Checks if operands are different.
  - **GreaterThan**: Checks if the left operand is greater than the right.
  - **LessThan**: Checks if the left operand is less than the right.

- **Containment Operators**:
  - **Contain**: Checks if the left operand contains the right operand.
  - **NotContain**: Checks if it does not contain the right operand.
  - **ContainOneOf**: Checks if the left operand contains any of the items in the right.
  - **ContainAllOf**: Checks if the left operand contains all items in the right.

- **String Matching Operators**:
  - **StartWith**: Checks if the left operand starts with the right operand.
  - **EndWith**: Checks if the left operand ends with the right operand.

### 3. **Creating a Condition**
To create a condition, follow these steps:

1. **Select Operands**:
   - Choose your left operand (constant or variable).
   - Choose your right operand (constant or variable).

2. **Choose an Operator**:
   - Select the appropriate operator from the list based on how you want the operands to interact.

3. **Using Variables in Constants**:
   - You can include variables within constant operands. To do this, enclose the variable path in double parentheses `(( ))`. For example, if you want to include a user attribute, you might write: `User((UserName))`.

### Example
Let’s say you want to check if a message contains a specific keyword. You would:
- Set the left operand to `Message`.
- Set the right operand to a constant value like `"Hello"`.
- Choose the operator `Contain`.

This condition would evaluate to true if the message includes the word "Hello".