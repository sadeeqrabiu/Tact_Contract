import "@stdlib/deploy";

/**
 * A simple demonstration contract that showcases basic Tact functionality
 * including primitive types, getters, and string manipulation
 */
contract SimpleContract with Deployable {
  /// Counter state variable stored as uint32
  count: Int as uint32;

    /// Initializes the contract with a default counter value of 17
    init() {
        self.count = 17;
    }
 
    /// Returns the current value of the counter
    get fun counter(): Int {
        return self.count;
    }

    /// Returns the contract's address using the built-in myAddress() function
    get fun location(): Address {
        return myAddress();
    }

    /// Returns a static greeting message
    get fun greeting(): String {
        return "hello world";
    }

    /// Demonstrates basic arithmetic by adding two integers
    get fun sum(a: Int, b: Int): Int {
        return a + b;
    }

    /// Demonstrates boolean logic with AND operation
    get fun and(a: Bool, b: Bool): Bool {
        return a && b;
    }

    /// Creates a formatted string response using StringBuilder
    get fun answer(a: Int): String {
        let sb: StringBuilder = beginString();
        sb.append("The meaning of life is ");
        sb.append(a.toString());
        return sb.toString();
    }
}
