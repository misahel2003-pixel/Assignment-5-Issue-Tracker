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


function renderIssues(data) {
    if(!issueContainer) return;
    issueContainer.innerHTML = '';
    if(issueCountEl) {
        issueCountEl.innerText = `${data.length} Issues`;
    }
    
    data.forEach(issue => {
        const card = document.createElement('div');
        const statusClass = issue.status === 'open' ? 'card-open' : 'card-closed';
        
        
        const statusImg = issue.status === 'open' ? './assets/Open-Status.png' : './assets/Closed- Status .png';
        
        card.className = `bg-white p-6 shadow-md rounded-xl cursor-pointer transition transform hover:scale-105 border border-gray-100 ${statusClass}`;
        
        const priorityColor = issue.priority === 'HIGH' ? 'bg-red-100 text-red-700' : 
                             issue.priority === 'MEDIUM' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700';

        const labelsHtml = issue.labels.map(label => {
            let labelClass = 'bg-gray-100 text-gray-700'; 
            if(label.type === 'bug') labelClass = 'bg-red-50 text-red-600 border border-red-100';
            if(label.type === 'help') labelClass = 'bg-yellow-50 text-yellow-600 border border-yellow-100';
            if(label.type === 'enhancement') labelClass = 'bg-green-50 text-green-600 border border-green-100';

            
            return `<span class="flex items-center justify-center gap-1 ${labelClass} px-2 py-0.5 rounded-full text-[10px] font-bold tracking-tight uppercase">
                         ${label.name}
                    </span>`;
        }).join('');

        card.innerHTML = `
            <div class="flex justify-between items-start mb-3">
                <div class="w-8 h-8">
                    <img src="${statusImg}" alt="status" class="w-full h-full object-contain">
                </div>
                <span class="${priorityColor} px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">${issue.priority}</span>
            </div>
            <h3 class="font-bold text-gray-800 text-base leading-tight mb-2">${issue.title}</h3>
            <p class="text-gray-500 text-xs mb-4 line-clamp-2">${issue.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">${labelsHtml}</div>
            <hr class="border-gray-50 mb-4">
            <div class="flex flex-col gap-1 text-[11px] text-gray-400">
                <span>#${issue.number} by <span class="text-gray-600 font-semibold">${issue.author}</span></span>
                <span>${issue.createdAt}</span>
            </div>
        `;
        
        card.addEventListener('click', () => showModal(issue));
        issueContainer.appendChild(card);
    });
}


function showModal(issue) {
   
    modalContent.innerHTML = `
        <div class="space-y-6">
            <div class="border-b border-gray-100 pb-5">
                <h2 class="text-3xl font-bold text-gray-900 mb-2">${issue.title}</h2>
                <div class="flex items-center gap-3 text-sm text-gray-500">
                    <span class="px-4 py-1.5 rounded-full text-xs font-semibold uppercase ${issue.status === 'open' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'}">
                        ${issue.status === 'open' ? 'Opened' : 'Closed'}
                    </span>
                    <i class="fas fa-circle text-[5px]"></i>
                    <span>Opened by <strong>${issue.author}</strong></span>
                    <i class="fas fa-circle text-[5px]"></i>
                    <span>${issue.createdAt}</span>
                </div>
            </div>

            <div class="flex flex-wrap gap-2.5">
                ${issue.labels.map(label => {
                    let labelColor = 'bg-green-50 text-green-600 border border-green-100'; 
                    if(label.name.toUpperCase() === 'BUG') labelColor = 'bg-red-50 text-red-600 border border-red-100';
                    if(label.name.toUpperCase() === 'HELP WANTED') labelColor = 'bg-yellow-50 text-yellow-600 border border-yellow-100';
                    
                    return `<span class="flex items-center justify-center gap-1.5 ${labelColor} px-3 py-1 rounded-full text-xs font-bold uppercase">
                                <i class="fas fa-tag text-xs"></i> ${label.name}
                            </span>`;
                }).join('')}
            </div>
            
            <p class="text-gray-600 leading-relaxed text-base border-b border-gray-100 pb-6">${issue.description}</p>
            
            <div class="grid grid-cols-2 gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div>
                    <p class="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1.5">Assignee:</p>
                    <p class="font-bold text-gray-900 text-base">${issue.author}</p>
                </div>
                <div>
                    <p class="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1.5">Priority:</p>
                    <span class="px-4 py-1.5 rounded-full text-xs font-extrabold tracking-widest uppercase ${issue.priority === 'HIGH' ? 'bg-red-50 text-red-700' : issue.priority === 'MEDIUM' ? 'bg-yellow-50 text-yellow-700' : 'bg-gray-100 text-gray-700'}">
                        ${issue.priority}
                    </span>
                </div>
                
            </div>

            <div class="flex justify-end pt-5 border-t border-gray-100">
                <button id="modal-close-btn" class="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition">
                    Close
                </button>
            </div>
        </div>
    `;

    
    document.getElementById('modal-close-btn').onclick = () => modal.classList.add('hidden');
    modal.classList.remove('hidden');
}

if(closeModalBtn) {
    closeModalBtn.onclick = () => modal.classList.add('hidden');
}
window.onclick = (e) => { if(e.target === modal) modal.classList.add('hidden'); };


document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active', 'border-blue-600', 'text-blue-600'));
        e.target.classList.add('active', 'border-blue-600', 'text-blue-600');

        const tab = e.target.getAttribute('data-tab');
        const filtered = tab === 'all' ? issuesData : issuesData.filter(i => i.status === tab);
        renderIssues(filtered);
    });
});

if(searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = issuesData.filter(i => 
            i.title.toLowerCase().includes(term) || 
            i.description.toLowerCase().includes(term)
        );
        renderIssues(filtered);
    });
}