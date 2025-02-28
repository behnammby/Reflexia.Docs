# Advanced Database

Welcome to the Advanced Database! This feature allows you to easily store, retrieve, update, and manage your documents in a structured way using simple key-value pairs formatted as JSON strings.

## Overview

The Advanced Database enables you to add documents containing key-value pairs, retrieve them later, and perform various operations like updating or deleting records. This is particularly useful for organizing and accessing your data efficiently.

## Key Features

- **Add Documents**: Store data in the form of JSON strings.
- **Retrieve Records**: Fetch documents using specific queries or unique IDs.
- **Update and Delete**: Modify existing records or remove them as needed.
- **Dynamic Data**: Use variables within your JSON to personalize data entries.

## Getting Started

### Adding Items to the Database

To add a new item to the database, follow these steps:

1. **Navigate to Advanced Database**:
   - In the actions menu, select "Advanced Database."
   
2. **Select Action Type**:
   - Choose the "New Item" action type.

3. **Provide Required Information**:
   - **Collection**: Specify the collection where you want to store the item.
   - **Optional Indexes**: You can add indexes to improve search performance (optional).
   - **Data in JSON Format**: Enter your data using JSON format. For example:
     ```json
     {
       "FirstName": "Behnam",
       "LastName": "Mirzabeygi"
     }
     ```

4. **Record ID Generation**:
   - Once the record is added, a unique record ID is generated. This ID is saved in the `ExecutionResult` state variable. You can check this variable to find out the ID of the newly added data, which may be useful for future actions.

5. **Using Variables**:
   - You can also include variables in your JSON. For instance:
     ```json
     {
       "FirstName": "((User.FirstName))",
       "LastName": "((User.LastName))"
     }
     ```

### Retrieving Data

You can retrieve items from the database in two ways: by query or by ID.

#### Fetching by Query

To find items based on specific criteria:

1. **Provide Collection Name**: Specify the collection you want to search in.
2. **Write Your Query**: For example, to find all records with an age greater than 20, you would write:
   ```
   Age > 20
   ```
3. **Pagination**: Optionally, you can specify pagination settings like page number and limit.

The results are stored as an array of items in the `ExecutionResults` state variable. You can then enumerate through this array to access each item using the "Fetch Item" action in the General action category.

#### Fetching by ID

To retrieve a specific item by its unique ID:

1. **Provide Document ID**: Pass the document ID along with its collection name.
2. **Access Result**: The result will be saved in the `ExecutionResult` state variable.

### Updating, Deleting, and Replacing Items

- **Update an Item**: Modify existing records with new data.
- **Delete an Item**: Remove records from the database when they are no longer needed.
- **Replace an Item**: Substitute existing records with new data entirely.