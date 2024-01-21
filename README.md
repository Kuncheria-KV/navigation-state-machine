# navigation-state-machine
This repository demonstrates how to manage intricate navigation flows in React Native apps using XState, a powerful state machine library. It showcases a decoupled approach that enhances code organization, testability, and maintainability.

### Key Features
- **State Machine-Driven Navigation:** XState state machines control navigation decisions, leading to a clear separation of concerns and improved logic visibility.
- **Context Providers for State Access:** Components access and interact with the state machine effortlessly through React Context providers.
- **Services for Navigation Actions:** Navigation operations are encapsulated within services of the state machine.
- **Evnet Driven:** Provides an event driven mechanism for navigation where the components only emit certain events and the navigation logic is written in the state machine in a declarative fashion.

### Getting Started
#### 1. Clone the repository:
```bash
git clone https://github.com/Kuncheria-KV/navigation-state-machine.git
```
#### 2. Install dependencies: 
```bash
cd navigation-state-machine
npm install
```
#### 3. Run the app:
```bash
npm run android
npm run start
```

### Further Exploration
- **Explore the code:** Dive into the implementation to grasp the integration of XState with React Navigation.
- **Experiment with different flows:** Modify the state machines to create more complex navigation scenarios.
- **Test your changes:** Write tests to ensure the robustness of your navigation logic.
