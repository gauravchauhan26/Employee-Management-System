
const employees = [ 
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Update Login API",
        "description": "Improve security and response time of login endpoint.",
        "date": "2025-07-24",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Prepare Weekly Report",
        "description": "Summarize progress and blockers for the sprint.",
        "date": "2025-07-22",
        "category": "Management",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumber": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "UI Bug Fixes",
        "description": "Resolve spacing and alignment issues on dashboard.",
        "date": "2025-07-23",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Run Unit Tests",
        "description": "Execute test suites for new payment features.",
        "date": "2025-07-21",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumber": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstName": "Rohan",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Client Feedback Review",
        "description": "Analyze feedback from client and suggest improvements.",
        "date": "2025-07-20",
        "category": "Support",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Error Logging Setup",
        "description": "Integrate logging library for backend errors.",
        "date": "2025-07-24",
        "category": "DevOps",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumber": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstName": "Kavya",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Database Optimization",
        "description": "Index optimization and query analysis for performance.",
        "date": "2025-07-22",
        "category": "Database",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Refactor Codebase",
        "description": "Remove redundant components and update state handling.",
        "date": "2025-07-21",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumber": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "Neeraj",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Accessibility Review",
        "description": "Check and improve accessibility of UI components.",
        "date": "2025-07-20",
        "category": "UI/UX",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Implement Dark Mode",
        "description": "Add dark mode support across all screens.",
        "date": "2025-07-24",
        "category": "Frontend",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumber": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  }
];

const admin = [ {
    "id": 1,
    "email": "admin@me.com",
    "password": "123"
  }];


export const setLocalStorage = ()=>{    
     localStorage.setItem('employees',JSON.stringify(employees))
     localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

      return {employees , admin}

}