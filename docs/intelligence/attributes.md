# Attributes

Attributes allow agents to persist data between flows, providing a way to store and retrieve information based on different scopes.

## Attribute Scopes

1. **Owner Attributes**
   - Stored per account.
   - Accessible across all bots of an account.
   - Useful for maintaining consistent data across multiple bots.

2. **User Attributes**
   - Stored per bot user.
   - Unique across bot users.
   - Example: The attribute `profileImage` for User A differs from `profileImage` for User B of the same bot.

3. **Chat Attributes**
   - Unique across different chats.
   - Useful for storing information relevant to specific chat contexts.

4. **Chat User Attributes**
   - Unique between different chat users.
   - The same user in different chats can have different values for the same attribute.

## Managing Attributes

To create and manage attributes, you can use actions from the **Attribute** category. 

Additionally, you can manage owner attributes in the **General Attributes** section of **Reflexia**.