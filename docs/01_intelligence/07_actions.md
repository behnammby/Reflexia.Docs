# Actions

Chips can have one or more actions associated with them. These actions are executed in a specified order when the chips are triggered.

## String Manipulation

| Action                  | Description                                               |
|-------------------------|-----------------------------------------------------------|
| **Replace using string**       | Replaces specified parts of a string with new text.      |
| **Replace using pattern**        | Uses patterns to find and replace text in a string.      |
| **Remove strings**       | Removes specific strings from a larger text.             |
| **Regex search**         | Searches for patterns in a string and returns matches.   |

## Send Message

| Action                  | Description                                               |
|-------------------------|-----------------------------------------------------------|
| **Send Text**            | Sends a text message to the user.                         |
| **Send Photo**           | Sends a photo to the user.                               |
| **Send Audio**           | Sends an audio file to the user.                         |
| **Send Document**        | Sends a document to the user.                            |
| **Send Video**           | Sends a video to the user.                               |
| **Send Animation**       | Sends an animated file (like GIF) to the user.          |
| **Send Voice**           | Sends a voice message to the user.                       |
| **Send Video Note**       | Sends a short video note to the user.                   |
| **Send Media Group**      | Sends a group of media files together.                   |
| **Send Location**        | Sends a location to the user.                            |
| **Send Venue**           | Sends information about a venue.                         |
| **Send Contact**         | Sends a contact card to the user.                        |
| **Send Poll**            | Sends a poll to gather user responses.                   |
| **Forward Message**      | Forwards a message from one chat to another.             |

## Group Actions

| Action                                  | Description                                               |
|-----------------------------------------|-----------------------------------------------------------|
| **Kick Chat Member**                     | Removes a member from the chat.                          |
| **Unban Chat Member**                    | Allows a previously banned member back into the chat.    |
| **Restrict Chat Member**                 | Limits a member's permissions in the chat.               |
| **Promote Chat Member**                  | Gives a member administrative privileges.                |
| **Set Chat Permissions**                  | Adjusts the permissions for chat members.                |
| **Export Chat Invite Link**              | Creates a link for inviting new members to the chat.     |
| **Set Chat Image**                       | Changes the chat's profile picture.                      |
| **Remove Chat Image**                    | Removes the chat's profile picture.                      |
| **Set Chat Title**                       | Changes the name of the chat.                            |
| **Set Chat Description**                 | Updates the description of the chat.                     |
| **Pin Chat Message**                     | Pins a message to the top of the chat for visibility.    |
| **Unpin Chat Message**                   | Removes a pinned message from the chat.                  |
| **Leave Chat**                          | Exits the current chat.                                  |
| **Get Group Administrators**              | Retrieves a list of chat administrators.                  |
| **Set Group Administrator Custom Title**     | Assigns a custom title to a chat administrator.          |
| **Get Group Info**                            | Retrieves information about the chat.                     |
| **Get Group Members Count**                | Counts the number of members in the chat.                |
| **Get Group Member Info**                      | Gets information about a specific chat member.           |
| **Set Group Sticker Set**                  | Changes the sticker set used in the chat.                |
| **Delete Chat Sticker Set**               | Removes the sticker set from the chat.                   |

## Attributes

| Action                         | Description                                               |
|--------------------------------|-----------------------------------------------------------|
| **Set General Attribute**          | Sets specific attributes for the chat owner.             |
| **Set User Attribute**           | Sets specific attributes for a user.                     |
| **Set Group Attribute**           | Sets specific attributes for the chat.                   |
| **Set Group User Attribute**       | Sets attributes for a user within a chat.                |
| **Get Group Attributes**          | Retrieves the attributes of the chat.                    |

## Modify Flow

| Action                         | Description                                               |
|--------------------------------|-----------------------------------------------------------|
| **Jump to next chip**                       | Skips the current action and moves on to the next one.   |
| **Jump to next block**                   | Continues with the next action, possibly with updated information. |
| **Jump to another block by Id**                       | Jumps to a different state or action based on provided conditions. |
| **Connect to another block by Id**                    | Connects to another state or action, allowing for a change in flow. |

## Timer Actions

| Action                         | Description                                               |
|--------------------------------|-----------------------------------------------------------|
| **New Timer**                | Creates a new timer for specific actions.                 |
| **Delete Timer**                | Removes an existing timer.                               |
| **Get Timers**                | Retrieves information about existing timers.             |

## General

| Action                         | Description                                               |
|--------------------------------|-----------------------------------------------------------|
| **Fetch Item**                  | Retrieves the result of a previous action.               |

## API Actions

| Action                         | Description                                               |
|--------------------------------|-----------------------------------------------------------|
| **Make API call**            | Makes a request to an external API for data or actions.  |
| **Add to execution result**       | Adds new information to the existing execution result.   |
| **Add to execution results**      | Collects multiple results into a single response.        |

## Advanced Database

| Action                         | Description                                               |
|--------------------------------|-----------------------------------------------------------|
| **New Item**                   | Adds a new document to a NoSQL database.                 |
| **Update Item**                | Updates an existing document in a NoSQL database.        |
| **Replace Item**               | Replaces a document in a NoSQL database.                 |
| **Delete Item**                | Deletes a document from a NoSQL database.                |
| **Find Item by ID**              | Finds a document in a NoSQL database by its ID.         |
| **Find Item by Query**                  | Searches for documents in a NoSQL database based on a query. |

## Storage

| Action                         | Description                                               |
|--------------------------------|-----------------------------------------------------------|
| **Add new item**          | Adds a new item to storage for future use.               |
| **Get Item**             | Retrieves a specific item from storage.                  |
| **Get Database ID**               | Gets the unique identifier for a storage item.           |
| **Modify Item**          | Updates an existing item in storage.                     |



📌 [Back to Documentation Home](01_index.md)
