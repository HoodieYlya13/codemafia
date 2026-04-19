export const PLAYER_COLOR_MAP: Record<string, string> = {
  red: "#e53935",
  blue: "#1e88e5",
  green: "#43a047",
  orange: "#fb8c00",
  yellow: "#fdd835",
  purple: "#8e24aa",
  pink: "#ec407a",
  cyan: "#00acc1",
  teal: "#00897b",
  lime: "#c0ca33",
  brown: "#6d4c41",
  grey: "#757575",
  indigo: "#3949ab",
  maroon: "#880e4f",
  olive: "#827717",
  navy: "#1a237e",
  salmon: "#ff8a65",
  mint: "#80cbc4",
  coral: "#ff5252",
  gold: "#ffca28",
};

export const PLAYER_COLORS = Object.keys(PLAYER_COLOR_MAP);
export const MAX_PLAYERS = 20;

export type CategoryId =
  | "data-structures"
  | "oop"
  | "security"
  | "frontend"
  | "backend";

export interface CodeBlock {
  id: string;
  code: string;
  testCase: string;
  expectedOutput: string;
  passed: boolean;
}

export interface SabotageTask {
  id: string;
  description: string;
  lineRange: [number, number];
  completed: boolean;
  verificationTest: string;
}

export type GamePhase =
  | "menu"
  | "lobby"
  | "category-vote"
  | "role-reveal"
  | "playing"
  | "emergency-meeting"
  | "voting"
  | "vote-result"
  | "round-end"
  | "game-over";

export type GameWinner = "civilians" | "impostor" | null;

export interface CursorPosition {
  lineNumber: number;
  column: number;
}

export interface Player {
  id: string;
  name: string;
  color: string;
  isHost: boolean;
  isReady: boolean;
  isImpostor: boolean;
  isAlive: boolean;
  cursorPosition?: CursorPosition;
}

export interface ChatMessage {
  id: string;
  playerId: string;
  message: string;
}

export interface Vote {
  voterId: string;
  targetId: string | null;
}

export interface GameState {
  phase: GamePhase;
  lobbyId: string | null;
  players: Player[];
  currentPlayerId: string | null;
  category: CategoryId | null;
  categoryVotes: Record<string, CategoryId>;
  code: string;
  codeBlocks: CodeBlock[];
  sabotageTasks: SabotageTask[];
  currentRound: number;
  maxRounds: number;
  roundTimeRemaining: number;
  roundDuration: number;
  emergencyMeetingCalled: boolean;
  emergencyMeetingCallerId: string | null;
  votes: Vote[];
  votedOutPlayerId: string | null;
  chatMessages: ChatMessage[];
  winner: GameWinner;
}

export type ClientGameEvent =
  | { type: "join"; playerId: string; playerName: string }
  | { type: "ready"; playerId: string; ready: boolean }
  | { type: "vote-category"; playerId: string; category: CategoryId }
  | { type: "finalize-category" }
  | {
      type: "start-game";
      code: string;
      blocks: CodeBlock[];
      tasks: SabotageTask[];
    }
  | { type: "update-code"; code: string }
  | {
      type: "update-cursor";
      playerId: string;
      lineNumber: number;
      column: number;
    }
  | { type: "send-chat"; playerId: string; message: string }
  | { type: "call-emergency"; playerId: string }
  | { type: "transition-to-voting" }
  | { type: "cast-vote"; playerId: string; targetId: string | null }
  | { type: "finalize-votes" }
  | { type: "end-round" }
  | { type: "next-round" }
  | { type: "tick" }
  | { type: "reset-game" }
  | { type: "update-block-status"; blockId: string; passed: boolean }
  | { type: "update-task-status"; taskId: string; completed: boolean }
  | { type: "yjs-update"; update: number[] };

export interface GameLevel {
  code: string;
  blocks: CodeBlock[];
  tasks: SabotageTask[];
}

export const CATEGORY_NAMES: Record<CategoryId, string> = {
  "data-structures": "Data Structures & Algorithms",
  oop: "Object-Oriented Programming",
  security: "Security",
  frontend: "Front-End",
  backend: "Back-End",
};

export const GAME_DATA: Record<CategoryId, GameLevel[]> = {
  "data-structures": [
    {
      code: `# Simple Stack Implementation
# Goal: Complete the 3 TODOs to make all tests pass

class Stack:
    def __init__(self):
        self.items = []
   
    def push(self, value):
        self.items.append(value)
        return True
   
    # TODO: Fix pop() to remove last item (LIFO), not first
    def pop(self):
        if self.is_empty():
            return None
        return self.items.pop(0)
   
    def peek(self):
        if self.is_empty():
            return None
        return self.items[-1]
   
    # TODO: Return number of items in stack
    def size(self):
        pass
   
    # TODO: Fix is_empty() - condition is always False
    def is_empty(self):
        return len(self.items) < 0
   
    def clear(self):
        self.items = []
   
    def to_list(self):
        return list(self.items)
   
    def contains(self, value):
        return value in self.items
   
    # TODO: Fix reverse() - should modify in-place, not return new list
    def reverse(self):
        return list(reversed(self.items))
   
    # TODO: Duplicate the top item if stack not empty
    def duplicate_top(self):
        pass

# Test the stack
def demo():
    s = Stack()
    s.push(1)
    s.push(2)
    return s.to_list()
`,
      blocks: [
        {
          id: "1",
          code: "pop removes last",
          testCase: "s=Stack(); s.push(1); s.push(2); assert s.pop()==2",
          expectedOutput: "True",
          passed: false,
        },
        {
          id: "2",
          code: "size works",
          testCase: "s=Stack(); s.push(1); assert s.size()==1",
          expectedOutput: "True",
          passed: false,
        },
        {
          id: "3",
          code: "is_empty works",
          testCase: "s=Stack(); assert s.is_empty() is True",
          expectedOutput: "True",
          passed: false,
        },
      ],
      tasks: [
        {
          id: "1",
          description: "Make pop always return None",
          lineRange: [14, 18],
          completed: false,
          verificationTest: "s=Stack(); s.push(1); assert s.pop() is None",
        },
        {
          id: "2",
          description: "Break size to return 999",
          lineRange: [26, 28],
          completed: false,
          verificationTest: "s=Stack(); s.push(1); assert s.size()==999",
        },
        {
          id: "3",
          description: "Invert is_empty logic",
          lineRange: [30, 32],
          completed: false,
          verificationTest:
            "s=Stack(); assert s.is_empty() is False; s.push(1); assert s.is_empty() is True",
        },
      ],
    },
    {
      code: `# Simple Linked List
# Goal: Complete the 3 TODOs to make all tests pass

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.count = 0
   
    # TODO: Add node at end of list
    def append(self, value):
        pass
   
    def prepend(self, value):
        node = Node(value)
        node.next = self.head
        self.head = node
        self.count += 1
   
    # TODO: Fix get() - returns next instead of current (off-by-one)
    def get(self, index):
        current = self.head
        i = 0
        while current and i < index:
            current = current.next
            i += 1
        return current.next.value if current else None
   
    def size(self):
        return self.count
   
    # TODO: Return list of all values
    def to_list(self):
        pass
   
    def find(self, value):
        idx = 0
        current = self.head
        while current:
            if current.value == value:
                return idx
            current = current.next
            idx += 1
        return -1

# Test the list
def demo():
    ll = LinkedList()
    ll.append(1)
    ll.append(2)
    return ll.to_list()
`,
      blocks: [
        {
          id: "1",
          code: "append to empty",
          testCase: "ll=LinkedList(); ll.append(1); assert ll.head.value==1",
          expectedOutput: "True",
          passed: false,
        },
        {
          id: "2",
          code: "get index 0",
          testCase: "ll=LinkedList(); ll.append(5); assert ll.get(0)==5",
          expectedOutput: "True",
          passed: false,
        },
        {
          id: "3",
          code: "to_list works",
          testCase:
            "ll=LinkedList(); ll.append(1); ll.append(2); assert ll.to_list()==[1,2]",
          expectedOutput: "True",
          passed: false,
        },
      ],
      tasks: [
        {
          id: "1",
          description: "Make append do nothing",
          lineRange: [14, 16],
          completed: false,
          verificationTest:
            "ll=LinkedList(); ll.append(1); assert ll.head is None",
        },
        {
          id: "2",
          description: "Make get always return None",
          lineRange: [24, 31],
          completed: false,
          verificationTest:
            "ll=LinkedList(); ll.append(5); assert ll.get(0) is None",
        },
        {
          id: "3",
          description: "Break to_list",
          lineRange: [36, 38],
          completed: false,
          verificationTest:
            "ll=LinkedList(); ll.append(1); result=ll.to_list(); assert result is None or result==[]",
        },
      ],
    },
  ],
  oop: [
    {
      code: `# Bank Account Class
# Goal: Complete the 3 TODOs to make all tests pass

class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
        self.history = []
   
    def deposit(self, amount):
        if amount <= 0:
            return False
        self.balance += amount
        self.history.append(("deposit", amount))
        return True
   
    # TODO: Fix withdraw() comparison - should be amount > balance
    def withdraw(self, amount):
        if amount < self.balance:
            return False
        self.balance -= amount
        self.history.append(("withdraw", amount))
        return True
   
    # TODO: Return current balance
    def get_balance(self):
        pass
   
    def transfer_to(self, other, amount):
        if not self.withdraw(amount):
            return False
        other.deposit(amount)
        return True
   
    def last_action(self):
        if len(self.history) == 0:
            return None
        return self.history[-1]
   
    def is_overdrawn(self):
        return self.balance < 0

# Test accounts
def demo():
    a = BankAccount("Alice", 100)
    b = BankAccount("Bob", 50)
    a.transfer_to(b, 20)
    return a.get_balance(), b.get_balance()
`,
      blocks: [
        {
          id: "1",
          code: "deposit works",
          testCase: 'a=BankAccount("A",0); a.deposit(5); assert a.balance==5',
          expectedOutput: "True",
          passed: false,
        },
        {
          id: "2",
          code: "withdraw blocked",
          testCase: 'a=BankAccount("A",5); assert a.withdraw(10) is False',
          expectedOutput: "True",
          passed: false,
        },
        {
          id: "3",
          code: "get_balance works",
          testCase: 'a=BankAccount("A",4); assert a.get_balance()==4',
          expectedOutput: "True",
          passed: false,
        },
      ],
      tasks: [
        {
          id: "1",
          description: "Make deposit do nothing",
          lineRange: [10, 15],
          completed: false,
          verificationTest:
            'a=BankAccount("A",0); a.deposit(5); assert a.balance==0',
        },
        {
          id: "2",
          description: "Allow any withdrawal",
          lineRange: [17, 23],
          completed: false,
          verificationTest:
            'a=BankAccount("A",5); assert a.withdraw(100) is True',
        },
        {
          id: "3",
          description: "Return wrong balance",
          lineRange: [25, 27],
          completed: false,
          verificationTest: 'a=BankAccount("A",10); assert a.get_balance()!=10',
        },
      ],
    },
    {
      code: `# Counter Class
# Goal: Complete the 3 TODOs to make all tests pass

class Counter:
    def __init__(self):
        self.count = 0
        self.history = []
   
    def increment(self):
        self.count += 1
        self.history.append("inc")
   
    # TODO: Fix decrement() - should subtract 1, not 2
    def decrement(self):
        self.count -= 2
        self.history.append("dec")
   
    def increment_by(self, amount):
        if amount < 0:
            return False
        self.count += amount
        return True
   
    def decrement_by(self, amount):
        if amount < 0:
            return False
        self.count -= amount
        return True
   
    # TODO: Reset count to zero
    def reset(self):
        pass
   
    # TODO: Fix value() - returns history length, not count
    def value(self):
        return len(self.history)
   
    def last_change(self):
        if len(self.history) == 0:
            return None
        return self.history[-1]

# Test counter
def demo():
    c = Counter()
    c.increment()
    c.increment_by(5)
    return c.value()
`,
      blocks: [
        {
          id: "1",
          code: "increment works",
          testCase: "c=Counter(); c.increment(); assert c.count==1",
          expectedOutput: "True",
          passed: false,
        },
        {
          id: "2",
          code: "decrement works",
          testCase:
            "c=Counter(); c.increment(); c.decrement(); assert c.count==0",
          expectedOutput: "True",
          passed: false,
        },
        {
          id: "3",
          code: "reset works",
          testCase: "c=Counter(); c.increment(); c.reset(); assert c.count==0",
          expectedOutput: "True",
          passed: false,
        },
      ],
      tasks: [
        {
          id: "1",
          description: "Make increment add 2",
          lineRange: [9, 11],
          completed: false,
          verificationTest: "c=Counter(); c.increment(); assert c.count==2",
        },
        {
          id: "2",
          description: "Make decrement increase",
          lineRange: [13, 16],
          completed: false,
          verificationTest:
            "c=Counter(); c.count=5; c.decrement(); assert c.count>5",
        },
        {
          id: "3",
          description: "Reset to 100",
          lineRange: [30, 32],
          completed: false,
          verificationTest: "c=Counter(); c.reset(); assert c.count==100",
        },
      ],
    },
  ],
  security: [
    {
      code: `# Input Validator
# Goal: Complete the 3 TODOs to make all tests pass

def is_safe_username(name):
    if name is None or len(name) < 3:
        return False
    # TODO: Reject spaces in usernames (currently accepts them)
    if " " in name:
        return True
    return name.isalnum()

def has_forbidden_chars(text):
    forbidden = ["<", ">", "{", "}"]
    for ch in forbidden:
        if ch in text:
            return True
    return False

# TODO: Remove '<' and '>' from text
def sanitize_input(text):
    pass

def clamp_length(text, max_len):
    if text is None:
        return ""
    if len(text) > max_len:
        return text[:max_len]
    return text

# TODO: Fix is_safe_message() - should return False if has forbidden chars
def is_safe_message(text):
    if text is None or len(text) > 200:
        return False
    if has_forbidden_chars(text):
        return True
    return True

# Test validation
def demo():
    username = "user123"
    message = "Hello world"
    return is_safe_username(username) and is_safe_message(message)
`,
      blocks: [
        {
          id: "1",
          code: "reject spaces",
          testCase: 'assert is_safe_username("a b") is False',
          expectedOutput: "True",
          passed: false,
        },
        {
          id: "2",
          code: "allow alnum",
          testCase: 'assert is_safe_username("user123") is True',
          expectedOutput: "True",
          passed: false,
        },
        {
          id: "3",
          code: "sanitize works",
          testCase: 'assert sanitize_input("<hi>")=="hi"',
          expectedOutput: "True",
          passed: false,
        },
      ],
      tasks: [
        {
          id: "1",
          description: "Allow all usernames",
          lineRange: [4, 10],
          completed: false,
          verificationTest: 'assert is_safe_username("any thing") is True',
        },
        {
          id: "2",
          description: "Sanitize does nothing",
          lineRange: [19, 21],
          completed: false,
          verificationTest: 'assert sanitize_input("<test>") == "<test>"',
        },
        {
          id: "3",
          description: "Reject all messages",
          lineRange: [31, 37],
          completed: false,
          verificationTest: 'assert is_safe_message("hello") is False',
        },
      ],
    },
    {
      code: `# Password Checker
# Goal: Complete the 3 TODOs to make all tests pass

def has_number(text):
    for ch in text:
        if ch.isdigit():
            return True
    return False

def has_upper(text):
    for ch in text:
        if ch.isupper():
            return True
    return False

def has_lower(text):
    for ch in text:
        if ch.islower():
            return True
    return False

# TODO: Fix is_strong_password() - should return False if no number
def is_strong_password(pw):
    if pw is None or len(pw) < 6:
        return False
    if not has_number(pw):
        return True
    if not has_upper(pw) or not has_lower(pw):
        return False
    return True

# TODO: Hide all but last 2 chars with '*'
def mask_password(pw):
    pass

def password_report(pw):
    return {
        "length": len(pw),
        "has_number": has_number(pw),
        "has_upper": has_upper(pw),
        "has_lower": has_lower(pw)
    }

# Test passwords
def demo():
    return is_strong_password("Abc123")
`,
      blocks: [
        {
          id: "1",
          code: "reject short",
          testCase: 'assert is_strong_password("abc") is False',
          expectedOutput: "True",
          passed: false,
        },
        {
          id: "2",
          code: "require number",
          testCase: 'assert is_strong_password("Abcdef") is False',
          expectedOutput: "True",
          passed: false,
        },
        {
          id: "3",
          code: "mask works",
          testCase: 'assert mask_password("secret")=="****et"',
          expectedOutput: "True",
          passed: false,
        },
      ],
      tasks: [
        {
          id: "1",
          description: "Make has_number always False",
          lineRange: [4, 8],
          completed: false,
          verificationTest: 'assert has_number("abc123") is False',
        },
        {
          id: "2",
          description: "Allow any password",
          lineRange: [22, 30],
          completed: false,
          verificationTest: 'assert is_strong_password("weak") is True',
        },
        {
          id: "3",
          description: "Mask shows all",
          lineRange: [32, 34],
          completed: false,
          verificationTest: 'assert mask_password("test1234") == "test1234"',
        },
      ],
    },
  ],
  frontend: [
    {
      code: `# Form Validation
# Goal: Complete the 3 TODOs to make all tests pass

def validate_email(text):
    if text is None:
        return False
    # TODO: Fix validate_email() - should return False if no '@'
    if "@" not in text:
        return True
    return "." in text

def validate_required(text):
    if text is None:
        return False
    return len(text.strip()) > 0

def normalize_email(text):
    if text is None:
        return ""
    return text.strip().lower()

# TODO: Age must be int >= 13
def validate_age(text):
    pass

# TODO: Fix validate_username() - should allow alphanumeric, not just letters
def validate_username(text):
    if text is None:
        return False
    return text.isalpha()

def form_is_valid(email, age_text, username):
    return (validate_email(email) and
            validate_age(age_text) and
            validate_username(username))

# Test form
def demo():
    return form_is_valid("a@b.com", "15", "user1")
`,
      blocks: [
        {
          id: "1",
          code: "email needs @",
          testCase: 'assert validate_email("a.com") is False',
          expectedOutput: "True",
          passed: false,
        },
        {
          id: "2",
          code: "email needs dot",
          testCase: 'assert validate_email("a@b") is False',
          expectedOutput: "True",
          passed: false,
        },
        {
          id: "3",
          code: "age >= 13",
          testCase: 'assert validate_age("12") is False',
          expectedOutput: "True",
          passed: false,
        },
      ],
      tasks: [
        {
          id: "1",
          description: "Accept any email",
          lineRange: [4, 10],
          completed: false,
          verificationTest: 'assert validate_email("not-an-email") is True',
        },
        {
          id: "2",
          description: "Allow any age",
          lineRange: [22, 24],
          completed: false,
          verificationTest: 'assert validate_age("5") is True',
        },
        {
          id: "3",
          description: "Reject all usernames",
          lineRange: [26, 30],
          completed: false,
          verificationTest: 'assert validate_username("valid") is False',
        },
      ],
    },
    {
      code: `# Input Normalizer
# Goal: Complete the 3 TODOs to make all tests pass

def normalize_name(name):
    if name is None:
        return ""
    # TODO: Fix normalize_name() - should strip whitespace
    return name

def normalize_phone(text):
    if text is None:
        return ""
    digits = ""
    for ch in text:
        if ch.isdigit():
            digits += ch
    return digits

def normalize_tags(tags):
    if tags is None:
        return []
    parts = tags.split(",")
    return [p.strip().lower() for p in parts]

# TODO: Return True if text has content after strip
def is_non_empty(text):
    pass

# TODO: Fix is_valid_zip() - should require exactly 5 digits
def is_valid_zip(text):
    if text is None:
        return False
    return len(text) >= 3 and text.isdigit()

def build_profile(name, phone, tags):
    return {
        "name": normalize_name(name),
        "phone": normalize_phone(phone),
        "tags": normalize_tags(tags)
    }

# Test normalization
def demo():
    return build_profile(" Ana ", "(555) 123", "One, Two")
`,
      blocks: [
        {
          id: "1",
          code: "normalize strips",
          testCase: 'assert normalize_name(" a ")=="a"',
          expectedOutput: "True",
          passed: false,
        },
        {
          id: "2",
          code: "is_non_empty false on spaces",
          testCase: 'assert is_non_empty("  ") is False',
          expectedOutput: "True",
          passed: false,
        },
        {
          id: "3",
          code: "zip needs 5 digits",
          testCase: 'assert is_valid_zip("123") is False',
          expectedOutput: "True",
          passed: false,
        },
      ],
      tasks: [
        {
          id: "1",
          description: "Return name unchanged",
          lineRange: [4, 8],
          completed: false,
          verificationTest: 'assert normalize_name("  test  ") == "  test  "',
        },
        {
          id: "2",
          description: "is_non_empty always True",
          lineRange: [25, 27],
          completed: false,
          verificationTest: 'assert is_non_empty("   ") is True',
        },
        {
          id: "3",
          description: "Allow any zip",
          lineRange: [29, 33],
          completed: false,
          verificationTest: 'assert is_valid_zip("123") is True',
        },
      ],
    },
  ],
  backend: [
    {
      code: `# User API Handler
# Goal: Complete the 3 TODOs to make all tests pass

def handle_get_user(users, user_id):
    # TODO: Fix handle_get_user() - returns value even when missing
    if user_id not in users:
        return users[user_id]
    return users[user_id]

def handle_list_users(users):
    result = []
    for key in users:
        result.append({"id": key, "name": users[key]})
    return result

# TODO: Add user if not exists, return False if exists
def handle_create_user(users, user_id, name):
    pass

# TODO: Fix handle_update_user() - should return False if user doesn't exist
def handle_update_user(users, user_id, name):
    if user_id not in users:
        users[user_id] = name
        return True
    users[user_id] = name
    return True

def handle_delete_user(users, user_id):
    if user_id in users:
        del users[user_id]
        return True
    return False

# Test API
def demo():
    users = {"1": "Alice"}
    handle_create_user(users, "2", "Bob")
    return handle_list_users(users)
`,
      blocks: [
        {
          id: "1",
          code: "get found",
          testCase: 'u={"1":"A"}; assert handle_get_user(u,"1")=="A"',
          expectedOutput: "True",
          passed: false,
        },
        {
          id: "2",
          code: "get missing returns None",
          testCase: 'u={"1":"A"}; assert handle_get_user(u,"2") is None',
          expectedOutput: "True",
          passed: false,
        },
        {
          id: "3",
          code: "create adds user",
          testCase: 'u={}; handle_create_user(u,"1","A"); assert u["1"]=="A"',
          expectedOutput: "True",
          passed: false,
        },
      ],
      tasks: [
        {
          id: "1",
          description: "Return user_id as value",
          lineRange: [4, 8],
          completed: false,
          verificationTest:
            'u={"1":"Alice"}; assert handle_get_user(u,"1") == "1"',
        },
        {
          id: "2",
          description: "Create does nothing",
          lineRange: [16, 18],
          completed: false,
          verificationTest:
            'u={}; handle_create_user(u,"1","A"); assert len(u)==0',
        },
        {
          id: "3",
          description: "Update creates new users",
          lineRange: [20, 26],
          completed: false,
          verificationTest:
            'u={}; assert handle_update_user(u,"1","A") is True; assert "1" in u',
        },
      ],
    },
    {
      code: `# Counter Endpoint
# Goal: Complete the 3 TODOs to make all tests pass

def get_count(store):
    return store.get("count", 0)

def set_count(store, value):
    store["count"] = value
    return True

# TODO: Fix increment() - should add to count, not replace it
def increment(store, amount=1):
    store["count"] = amount
    return get_count(store)

# TODO: Decrease count by amount
def decrement(store, amount=1):
    pass

def reset(store):
    store["count"] = 0
    return True

# TODO: Fix increment_capped() - returns True even if already at max
def increment_capped(store, amount, max_val):
    current = get_count(store)
    if current >= max_val:
        return True
    new_val = min(current + amount, max_val)
    set_count(store, new_val)
    return True

# Test counter
def demo():
    store = {}
    increment(store, 5)
    increment(store, 3)
    return get_count(store)
`,
      blocks: [
        {
          id: "1",
          code: "increment adds",
          testCase: 's={"count":0}; increment(s,5); assert s["count"]==5',
          expectedOutput: "True",
          passed: false,
        },
        {
          id: "2",
          code: "increment accumulates",
          testCase: 's={"count":2}; increment(s,3); assert s["count"]==5',
          expectedOutput: "True",
          passed: false,
        },
        {
          id: "3",
          code: "decrement works",
          testCase: 's={"count":5}; decrement(s,2); assert s["count"]==3',
          expectedOutput: "True",
          passed: false,
        },
      ],
      tasks: [
        {
          id: "1",
          description: "Increment always sets to 0",
          lineRange: [11, 14],
          completed: false,
          verificationTest:
            's={"count":5}; increment(s,3); assert s["count"]==0',
        },
        {
          id: "2",
          description: "Decrement increases instead",
          lineRange: [16, 18],
          completed: false,
          verificationTest:
            's={"count":5}; decrement(s,2); assert s["count"]>5',
        },
        {
          id: "3",
          description: "Return False at cap",
          lineRange: [23, 31],
          completed: false,
          verificationTest:
            's={"count":10}; assert increment_capped(s,5,10) is False',
        },
      ],
    },
  ],
};

// Helper function to pick a random level for a given category
export const getRandomLevel = (categoryId: CategoryId): GameLevel => {
  const levels = GAME_DATA[categoryId];
  return levels[Math.floor(Math.random() * levels.length)];
};
