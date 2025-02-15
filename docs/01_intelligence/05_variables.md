# Chatbot Variables Documentation

## Introduction

This document provides a comprehensive overview of the various types of variables available in a chatbot, along with their descriptions, definitions, and the corresponding evaluation paths.

## Variable Types

### Message Variables
These variables are related to the message sent by the user.

| Variable | Description | Evaluation Path |
| --- | --- | --- |
| `MessageType` | The type of the message (e.g., text, image, video) | `PerceptData.MessageType` |
| `MessageText` | The text content of the message | `PerceptData.MessageData.Text` |
| `MessageCaption` | The caption of the message (e.g., for images or videos) | `PerceptData.MessageData.Caption` |
| `MessageDate` | The date and time when the message was sent | `PerceptData.MessageDate` |
| `MessageEditDate` | The date and time when the message was last edited | `PerceptData.EditDate` |

### Event Variables
These variables are related to events that occur in the chat, such as a user joining or leaving the chat.

| Variable | Description | Evaluation Path |
| --- | --- | --- |
| `EventType` | The type of the event (e.g., new chat, user joined, user left) | `PerceptData.EventType` |
| `EventNewChatTitle` | The title of the new chat | `PerceptData.EventData.NewChatTitle` |
| `NewChatUserUsername` | The username of the new chat user | `PerceptData.EventData.NewChatUser.Username` |
| `NewChatUserFirstName` | The first name of the new chat user | `PerceptData.EventData.NewChatUser.FirstName` |
| `NewChatUserLastName` | The last name of the new chat user | `PerceptData.EventData.NewChatUser.LastName` |
| `NewChatUserLanguageCode` | The language code of the new chat user | `PerceptData.EventData.NewChatUser.LanguageCode` |
| `NewChatUserIsBot` | Indicates whether the new chat user is a bot | `PerceptData.EventData.NewChatUser.IsBot` |
| `LeftChatUserUsername` | The username of the user who left the chat | `PerceptData.EventData.LeftChatUser.Username` |
| `LeftChatUserFirstName` | The first name of the user who left the chat | `PerceptData.EventData.LeftChatUser.FirstName` |
| `LeftChatUserLastName` | The last name of the user who left the chat | `PerceptData.EventData.LeftChatUser.LastName` |
| `LeftChatUserLangugeCode` | The language code of the user who left the chat | `PerceptData.EventData.LeftChatUser.LanguageCode` |
| `LeftChatUserIsBot` | Indicates whether the user who left the chat is a bot | `PerceptData.EventData.LeftChatUser.IsBot` |

### Signal Variables
These variables are related to signals that are triggered in the chatbot.

| Variable | Description | Evaluation Path |
| --- | --- | --- |
| `SignalName` | The name of the signal that was triggered | `PerceptData.Name` |

### Attribute Variables
These variables are related to various attributes associated with the chatbot, user, chat, or chat user.

| Variable | Description | Evaluation Path |
| --- | --- | --- |
| `OwnerAttribute` | Attributes associated with the chatbot owner | `OwnerAttribute` |
| `UserAttribute` | Attributes associated with the user | `UserAttribute` |
| `ChatAttribute` | Attributes associated with the chat | `ChatAttribute` |
| `ChatUserAttribute` | Attributes associated with the chat user | `ChatUserAttribute` |

### User Variables
These variables are related to the user interacting with the chatbot.

| Variable | Description | Evaluation Path |
| --- | --- | --- |
| `UserUserId` | The unique identifier of the user | `User.UserId` |
| `UserUsername` | The username of the user | `User.Username` |
| `UserFirstName` | The first name of the user | `User.FirstName` |
| `UserLastName` | The last name of the user | `User.LastName` |
| `UserLanguageCode` | The language code of the user | `User.LanguageCode` |
| `UserIsBot` | Indicates whether the user is a bot | `User.IsBot` |
| `UserName` | The full name of the user | `User.Name` |
| `UserPhoneNumber` | The phone number of the user | `User.PhoneNumber` |

### Chat Variables
These variables are related to the chat in which the user is interacting with the chatbot.

| Variable | Description | Evaluation Path |
| --- | --- | --- |
| `ChatId` | The unique identifier of the chat | `Chat.ChatId` |
| `ChatTitle` | The title of the chat | `Chat.Title` |
| `ChatType` | The type of the chat (e.g., private, group) | `Chat.ChatType` |
| `ChatUsername` | The username of the chat | `Chat.ChatUsername` |

### Terminal Variables
These variables are related to the terminal or environment in which the chatbot is running.

| Variable | Description | Evaluation Path |
| --- | --- | --- |
| `BotType` | The type of the bot | `Bot.BotType` |
| `BotName` | The name of the bot | `Bot.Name` |

### State Variables
These variables are related to the state of the chatbot during execution.

| Variable | Description | Evaluation Path |
| --- | --- | --- |
| `StateHearType` | The type of the "hear" state | `HearType` |
| `StatePerceptType` | The type of the "percept" state | `PerceptData.PerceptType` |
| `ActionResult` | The result of the executed action | `ExecutionResult` |

### Forwarded Message Variables
These variables are related to messages that have been forwarded to the chatbot.

| Variable | Description | Evaluation Path |
| --- | --- | --- |
| `ForwardedMessageAuthorUserId` | The unique identifier of the author of the forwarded message | `PerceptData.Forward.Author.UserId` |
| `ForwardedMessageAuthorUsername` | The username of the author of the forwarded message | `PerceptData.Forward.Author.Username` |
| `ForwardedMessageAuthorFirstName` | The first name of the author of the forwarded message | `PerceptData.Forward.Author.FirstName` |
| `ForwardedMessageAuthorLastName` | The last name of the author of the forwarded message | `PerceptData.Forward.Author.LastName` |
| `ForwardedMessageAutorLanguageCode` | The language code of the author of the forwarded message | `PerceptData.Forward.Author.LanguageCode` |
| `ForwardedMessageAuthorName` | The full name of the author of the forwarded message | `PerceptData.Forward.Author.Name` |
| `ForwardedMessageChatId` | The unique identifier of the chat where the forwarded message originated | `PerceptData.Forward.Origin.ChatId` |
| `ForwardedMessageChatType` | The type of the chat where the forwarded message originated | `PerceptData.Forward.Origin.ChatType` |
| `ForwardedMessageChatTitle` | The title of the chat where the forwarded message originated | `PerceptData.Forward.Origin.ChatTitle` |
| `ForwardedMessageOriginalMessageDate` | The date and time when the forwarded message was originally sent | `PerceptData.Forward.OriginalMessageDate` |

### Reply To Message Variables
These variables are related to messages that the chatbot is replying to.

| Variable | Description | Evaluation Path |
| --- | --- | --- |
| `ReplyToMessageType` | The type of the message being replied to | `PerceptData.ReplyToMessage.MessageType` |
| `ReplyToMessageText` | The text content of the message being replied to | `PerceptData.ReplyToMessage.MessageData.Text` |
| `ReplyToMessageMessageCaption` | The caption of the message being replied to | `PerceptData.ReplyToMessage.MessageData.Caption` |

### Callback Variables
These variables are related to callbacks received by the chatbot.

| Variable | Description | Evaluation Path |
| --- | --- | --- |
| `CallbackData` | The data associated with the callback | `PerceptData.Data` |
| `CallbackId` | The unique identifier of the callback | `PerceptData.CallbackId` |

## Chatbot Variables Chart

Here is a chart that summarizes the different types of variables available in a chatbot, along with their corresponding evaluation paths:

| Variable Type | Evaluation Path |
| --- | --- |
| **Message Variables** |
| `MessageType` | `PerceptData.MessageType` |
| `MessageText` | `PerceptData.MessageData.Text` |
| `MessageCaption` | `PerceptData.MessageData.Caption` |
| `MessageDate` | `PerceptData.MessageDate` |
| `MessageEditDate` | `PerceptData.EditDate` |
| **Event Variables** |
| `EventType` | `PerceptData.EventType` |
| `EventNewChatTitle` | `PerceptData.EventData.NewChatTitle` |
| `NewChatUserUsername` | `PerceptData.EventData.NewChatUser.Username` |
| `NewChatUserFirstName` | `PerceptData.EventData.NewChatUser.FirstName` |
| `NewChatUserLastName` | `PerceptData.EventData.NewChatUser.LastName` |
| `NewChatUserLanguageCode` | `PerceptData.EventData.NewChatUser.LanguageCode` |
| `NewChatUserIsBot` | `PerceptData.EventData.NewChatUser.IsBot` |
| `LeftChatUserUsername` | `PerceptData.EventData.LeftChatUser.Username` |
| `LeftChatUserFirstName` | `PerceptData.EventData.LeftChatUser.FirstName` |
| `LeftChatUserLastName` | `PerceptData.EventData.LeftChatUser.LastName` |
| `LeftChatUserLangugeCode` | `PerceptData.EventData.LeftChatUser.LanguageCode` |
| `LeftChatUserIsBot` | `PerceptData.EventData.LeftChatUser.IsBot` |
| **Signal Variables** |
| `SignalName` | `PerceptData.Name` |
| **Attribute Variables** |
| `OwnerAttribute` | `OwnerAttribute` |
| `UserAttribute` | `UserAttribute` |
| `ChatAttribute` | `ChatAttribute` |
| `ChatUserAttribute` | `ChatUserAttribute` |
| **User Variables** |
| `UserUserId` | `User.UserId` |
| `UserUsername` | `User.Username` |
| `UserFirstName` | `User.FirstName` |
| `UserLastName` | `User.LastName` |
| `UserLanguageCode` | `User.LanguageCode` |
| `UserIsBot` | `User.IsBot` |
| `UserName` | `User.Name` |
| `UserPhoneNumber` | `User.PhoneNumber` |
| **Chat Variables** |
| `ChatId` | `Chat.ChatId` |
| `ChatTitle` | `Chat.Title` |
| `ChatType` | `Chat.ChatType` |
| `ChatUsername` | `Chat.ChatUsername` |
| **Terminal Variables** |
| `BotType` | `Bot.BotType` |
| `BotName` | `Bot.Name` |
| **State Variables** |
| `StateHearType` | `HearType` |
| `StatePerceptType` | `PerceptData.PerceptType` |
| `ActionResult` | `ExecutionResult` |
| **Forwarded Message Variables** |
| `ForwardedMessageAuthorUserId` | `PerceptData.Forward.Author.UserId` |
| `ForwardedMessageAuthorUsername` | `PerceptData.Forward.Author.Username` |
| `ForwardedMessageAuthorFirstName` | `PerceptData.Forward.Author.FirstName` |
| `ForwardedMessageAuthorLastName` | `PerceptData.Forward.Author.LastName` |
| `ForwardedMessageAutorLanguageCode` | `PerceptData.Forward.Author.LanguageCode` |
| `ForwardedMessageAuthorName` | `PerceptData.Forward.Author.Name` |
| `ForwardedMessageChatId` | `PerceptData.Forward.Origin.ChatId` |
| `ForwardedMessageChatType` | `PerceptData.Forward.Origin.ChatType` |
| `ForwardedMessageChatTitle` | `PerceptData.Forward.Origin.ChatTitle` |
| `ForwardedMessageOriginalMessageDate` | `PerceptData.Forward.OriginalMessageDate` |
| **Reply To Message Variables** |
| `ReplyToMessageType` | `PerceptData.ReplyToMessage.MessageType` |
| `ReplyToMessageText` | `PerceptData.ReplyToMessage.MessageData.Text` |
| `ReplyToMessageMessageCaption` | `PerceptData.ReplyToMessage.MessageData.Caption` |
| **Callback Variables** |
| `CallbackData` | `PerceptData.Data` |
| `CallbackId` | `PerceptData.CallbackId` |



📌 [Back to Documentation Home](01_index.md)