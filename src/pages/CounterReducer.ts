// Define the state type
export type CounterState = {
    count: number;
  };
  
  // Define action types
  export type CounterAction =
    | { type: "INCREMENT" }
    | { type: "DECREMENT" }
    | { type: "RESET" };
  
  // Reducer function
  export function counterReducer(state: CounterState, action: CounterAction): CounterState {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      case "RESET":
        return { count: 0 };
      default:
        return state;
    }
  }
  