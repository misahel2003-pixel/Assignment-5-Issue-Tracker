const issuesData = [
    { 
        id: 1, 
        number: 1, 
        title: "Fix Navigation Menu On Mobile Devices", 
        description: "The navigation menu doesn't collapse properly on mobile devices.Need to fix the responsive behavior", 
        status: "open", 
        author: "john_doe", 
        priority: "HIGH", 
        labels: [{name: "BUG", type: "bug" }, { name: "HELP WANTED", type: "help" }], 
        createdAt: "2/22/2026" 
    },
    { 
        id: 2, 
        number: 2, 
        title: "Fix Navigation Menu On Mobile Devices", 
        description: "The navigation menu doesn't collapse properly on mobile devices.Need to fix the responsive behavior", 
        status: "closed", 
        author: "john_doe", 
        priority: "LOW", 
        labels: [{ name: "ENHANCEMENT", type: "enhancement" }], 
        createdAt: "2/22/2026" 
    },
    { 
        id: 3, 
        number: 3, 
        title: "Fix Navigation Menu On Mobile Devices", 
        description: "The navigation menu doesn't collapse properly on mobile devices.Need to fix the responsive behavior", 
        status: "open", 
        author: "john_doe", 
        priority: "HIGH", 
        labels: [{ name: "BUG", type: "bug" }, { name: "HELP WANTED", type: "help" }], 
        createdAt: "2/22/2026" 
    },
    { 
        id: 4, 
        number: 4, 
        title: "Fix Navigation Menu On Mobile Devices", 
        description: "The navigation menu doesn't collapse properly on mobile devices.Need to fix the responsive behavior", 
        status: "open", 
        author: "john_doe", 
        priority: "HIGH", 
        labels: [{ name: "BUG", type: "bug" }, { name: "HELP WANTED", type: "help" }], 
        createdAt: "2/22/2026" 
    },
    { 
        id: 5, 
        number: 5, 
        title: "Fix Navigation Menu On Mobile Devices", 
        description: "The navigation menu doesn't collapse properly on mobile devices.Need to fix the responsive behavior",  
        status: "open", 
        author: "john_doe", 
        priority: "HIGH", 
        labels: [{ name: "BUG", type: "bug" }, { name: "HELP WANTED", type: "help" }], 
        createdAt: "2/22/2026" 
    },
    { 
        id: 6, 
        number: 6, 
        title: "Fix Navigation Menu On Mobile Devices", 
        description: "The navigation menu doesn't collapse properly on mobile devices.Need to fix the responsive behavior", 
        status: "closed", 
        author: "john_doe", 
        priority: "LOW", 
        labels: [{ name: "BUG", type: "bug" }, { name: "HELP WANTED", type: "help" }], 
        createdAt: "2/22/2026" 
    },
    { 
        id: 7, 
        number: 7, 
        title: "Fix Navigation Menu On Mobile Devices", 
        description: "The navigation menu doesn't collapse properly on mobile devices.Need to fix the responsive behavior",  
        status: "open", 
        author: "john_doe", 
        priority: "MEDIUM", 
        labels: [{ name: "BUG", type: "bug" }, { name: "HELP WANTED", type: "help" }], 
        createdAt: "2/22/2026" 
    },
    { 
        id: 8, 
        number: 8, 
        title: "Fix Navigation Menu On Mobile Devices", 
        description: "The navigation menu doesn't collapse properly on mobile devices.Need to fix the responsive behavior", 
        status: "closed", 
        author: "john_doe", 
        priority: "LOW", 
        labels: [{ name: "BUG", type: "bug" }, { name: "HELP WANTED", type: "help" }], 
        createdAt: "2/22/2026" 
    },
    { 
        id: 9, 
        number: 9, 
       title: "Fix Navigation Menu On Mobile Devices", 
        description: "The navigation menu doesn't collapse properly on mobile devices.Need to fix the responsive behavior",  
        status: "open", 
        author: "john_doe", 
        priority: "MEDIUM", 
        labels: [{ name: "BUG", type: "bug" }, { name: "HELP WANTED", type: "help" }], 
        createdAt: "2/22/2026" 
    },
    { 
        id: 10, 
        number: 10, 
       title: "Fix Navigation Menu On Mobile Devices", 
        description: "The navigation menu doesn't collapse properly on mobile devices.Need to fix the responsive behavior",  
        status: "open", 
        author: "john_doe", 
        priority: "HIGH", 
        labels: [{ name: "BUG", type: "bug" }, { name: "HELP WANTED", type: "help" }], 
        createdAt: "2/22/2026" 
    },
    { 
        id: 11, 
        number: 11, 
        title: "Fix Navigation Menu On Mobile Devices", 
        description: "The navigation menu doesn't collapse properly on mobile devices.Need to fix the responsive behavior", 
        status: "open", 
        author: "john_doe", 
        priority: "MEDIUM", 
        labels: [{ name: "BUG", type: "bug" }, { name: "HELP WANTED", type: "help" }], 
        createdAt: "2/22/2026" 
    },
    { 
        id: 12, 
        number: 12, 
        title: "Fix Navigation Menu On Mobile Devices", 
        description: "The navigation menu doesn't collapse properly on mobile devices.Need to fix the responsive behavior", 
        status: "open", 
        author: "john_doe", 
        priority: "HIGH", 
        labels: [{ name: "BUG", type: "bug" }, { name: "HELP WANTED", type: "help" }], 
        createdAt: "2/22/2026" 
    },
    { 
        id: 13, 
        number: 13, 
        title: "Fix Navigation Menu On Mobile Devices", 
        description: "The navigation menu doesn't collapse properly on mobile devices.Need to fix the responsive behavior", 
        status: "closed", 
        author: "john_doe", 
        priority: "LOW", 
        labels: [{ name: "BUG", type: "bug" }, { name: "HELP WANTED", type: "help" }], 
        createdAt: "2/22/2026" 
    },
    { 
        id: 14, 
        number: 14, 
        title: "Fix Navigation Menu On Mobile Devices", 
        description: "The navigation menu doesn't collapse properly on mobile devices.Need to fix the responsive behavior", 
        status: "open", 
        author: "john_doe", 
        priority: "HIGH", 
        labels: [{ name: "BUG", type: "bug" }, { name: "HELP WANTED", type: "help" }], 
        createdAt: "2/22/2026" 
    },
    { 
        id: 15, 
        number: 15, 
        title: "Fix Navigation Menu On Mobile Devices", 
        description: "The navigation menu doesn't collapse properly on mobile devices.Need to fix the responsive behavior", 
        status: "closed", 
        author: "john_doe", 
        priority: "LOW", 
        labels: [{ name: "BUG", type: "bug" }, { name: "HELP WANTED", type: "help" }], 
        createdAt: "2/22/2026" 
    },
    { 
        id: 16, 
        number: 16, 
        title: "Fix Navigation Menu On Mobile Devices", 
        description: "The navigation menu doesn't collapse properly on mobile devices.Need to fix the responsive behavior", 
        status: "open", 
        author: "john_doe", 
        priority: "HIGH", 
        labels: [{ name: "BUG", type: "bug" }, { name: "HELP WANTED", type: "help" }], 
        createdAt: "2/22/2026" 
    },
    { 
        id: 17, 
        number: 17, 
        title: "Fix Navigation Menu On Mobile Devices", 
        description: "The navigation menu doesn't collapse properly on mobile devices.Need to fix the responsive behavior",  
        status: "closed", 
        author: "john_doe", 
        priority: "LOW", 
        labels: [{ name: "BUG", type: "bug" }, { name: "HELP WANTED", type: "help" }], 
        createdAt: "2/22/2026" 
    },
    { 
        id: 18, 
        number: 18, 
        title: "Fix Navigation Menu On Mobile Devices", 
        description: "The navigation menu doesn't collapse properly on mobile devices.Need to fix the responsive behavior", 
        status: "open", 
        author: "john_doe", 
        priority: "HIGH", 
        labels: [{ name: "BUG", type: "bug" }, { name: "HELP WANTED", type: "help" }], 
        createdAt: "2/22/2026" 
    },
    { 
        id: 19, 
        number: 19, 
        title: "Fix Navigation Menu On Mobile Devices", 
        description: "The navigation menu doesn't collapse properly on mobile devices.Need to fix the responsive behavior",  
        status: "open", 
        author: "john_doe", 
        priority: "MEDIUM", 
        labels: [{ name: "BUG", type: "bug" }, { name: "HELP WANTED", type: "help" }], 
        createdAt: "2/22/2026" 
    },
    { 
        id: 20, 
        number: 20, 
        title: "Fix Navigation Menu On Mobile Devices", 
        description: "The navigation menu doesn't collapse properly on mobile devices.Need to fix the responsive behavior",  
        status: "open", 
        author: "john_doe", 
        priority: "HIGH", 
        labels: [{ name: "BUG", type: "bug" }, { name: "HELP WANTED", type: "help" }], 
        createdAt: "2/22/2026" 
    },
];

const loginPage = document.getElementById('login-page');
const mainPage = document.getElementById('main-page');
const issueContainer = document.getElementById('issue-container');
const loginBtn = document.getElementById('login-btn');
const searchInput = document.getElementById('search-input');
const issueCountEl = document.getElementById('issue-count');
const modal = document.getElementById('issue-modal');
const modalContent = document.getElementById('modal-content');
const closeModalBtn = document.getElementById('close-modal');

loginBtn.addEventListener('click', () => {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === 'admin' && pass === 'admin123') {
        loginPage.classList.add('hidden');
        mainPage.classList.remove('hidden');
        renderIssues(issuesData);
    } else {
        alert('Wrong! (Hint: admin / admin123)');
    }
});

