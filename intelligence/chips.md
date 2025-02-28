# Adding a Chip

## Overview
To add a chip, you must navigate to your chip group. Chips are organized into levels within a chip group, resembling an inverse tree structure.

### Chip Organization
- **Levels**: Each chip group contains levels, with the following characteristics:
  - **Level One (Root)**: Can only have one chip set.
  - **Chip Sets**: Each level can contain one or more chip sets.
  - **Chip Sets and Chips**: Each chip set can hold one or more chips that share the same previous chip.

### Chip Triggering Mechanism
- When a chip is triggered, the agent state moves to the next chip set containing one or more chips and waits for a new bot update.
- Upon receiving a bot update, conditions for each chip within the chip set are evaluated from top to bottom based on their order number:
  - **Order Number**: Lower numbers indicate higher priority.
  - **Matching**: When the first chip matches, subsequent chips are ignored.

### Adding a New Chip Set and Chip
If there are no chips in the chip group, you can add a new chip set along with a new chip by following these steps:

1. **Click on the "Add New Chip Set" Button**: This will open a wizard.
2. **Follow the Wizard Steps**:
   - **Adding Chip Title**: Specify an appropriate name for the new chip.
   - **Choosing Previous Chip**: Select the chip to connect to. This must be from an above level. If adding a chip at the first level, you can skip this step.
     - **Root Level**: No previous chip is required.
   - **Adding Chip Condition**: Construct the condition under which the chip will trigger.
   - **Adding Chip Actions**: Specify one or more actions that the chip must execute upon triggering.

### Managing Chips in a Chip Set
- After adding chips, you can change their order within the chip set by:
  - Clicking on a chip and selecting **Move Up** or **Move Down**.
- You can also modify the following:
  - **Title**
  - **Conditions**
  - **Actions**

### Deleting Chips
- A chip can be deleted only if it has no connected subsequent chips.

### Visual Connections
- After adding chips, they are visually connected using lines.
- You can modify the connections by dragging and dropping these lines.