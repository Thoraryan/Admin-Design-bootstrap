const users = [
    {
        id: 1, img: "./assest/img/Users/4.jpg", name: 'John Doe', email: 'john@example.com', role: "Admin", status: 'Active', timeline: {
            create_date: '2024-04-14', event: 'Account created', updated_date: "2024-05-10"
        }
    },
    {
        id: 2, img: "./assest/img/Users/5.jpg", name: 'Jane Smith', email: 'jane@example.com', role: "User", status: 'Inactive', timeline: {
            create_date: '2024-04-14', event: 'Account created', updated_date: "2024-05-10"
        }
    },
    {
        id: 3, img: "./assest/img/Users/6.jpg", name: 'Aryan Smith', email: 'Aryan@example.com', role: "designer", status: 'Inactive', timeline: {
            create_date: '2024-04-14', event: 'Account created', updated_date: "2024-05-10"
        }
    },
    {
        id: 4, img: "./assest/img/Users/7.jpg", name: 'robert Down', email: 'robert@example.com', role: "Admin", status: 'Active', timeline: {
            create_date: '2024-04-14', event: 'Account created', updated_date: "2024-05-10"
        }
    }
];

// Function to render user table
function renderUserTable() {
    const tbody = document.getElementById('userTableBody');
    tbody.innerHTML = '';
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <th scope="row">
                <img src="${user.img}" class="user-list-img" />    
            </th>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            ${user.status === "Active"
                ? `<td><span class="status text-success">${user.status}</span></td>`
                : `<td><span class="status text-danger">${user.status}</span></td>`}
            <td><span class="status">${user.timeline.create_date}</span></td>
            <td><span class="status">${user.timeline.updated_date}</span></td>
            <td class="action-buttons">
                <button class="btn btn-success btn-sm" onclick="openEditModal(${user.id})"><i class="fa fa-edit"></i></button>
                <button class="btn btn-danger btn-sm" onclick="deleteUser(${user.id})"><i class="fa fa-trash"></i></button>
                <button class="btn btn-light btn-sm dropdown" onClick="viewUser(${user.id})"><i class="dropbtn fa fa-ellipsis-v"></i>
                <div class="dropdown-content-2">
                    <a href="#home">VIEW DETAIL</a>
                </div>
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}


// Function to open edit user modal
function openEditModal(userId) {
    const user = users.find(user => user.id === userId);
    document.getElementById('editUserName').value = user.name;
    document.getElementById('editUserEmail').value = user.email;
    document.getElementById('editUserStatus').value = user.status;
    document.getElementById('editUserForm').dataset.userId = user.id;
    document.getElementById('editUserModal').classList.add('show');
}
// function close edit users
function closeEditModel() {
    document.getElementById('editUserModal').classList.remove('show');
}

// Function to save user changes
function saveUserChanges() {
    const userId = parseInt(document.getElementById('editUserForm').dataset.userId);
    const user = users.find(user => user.id === userId);
    user.name = document.getElementById('editUserName').value;
    user.email = document.getElementById('editUserEmail').value;
    user.status = document.getElementById('editUserStatus').value;
    document.getElementById('editUserModal').modal('hide');
    renderUserTable();
}

// Function to delete user
function deleteUser(userId) {
    const userIndex = users.findIndex(user => user.id === userId);
    users.splice(userIndex, 1);
    renderUserTable();
}

// Function to open status timeline modal
function openTimelineModal(userId) {
    const user = users.find(user => user.id === userId);
    const timelineList = document.getElementById('timelineList');
    timelineList.innerHTML = '';
    user.timeline.forEach(event => {
        const listItem = document.createElement('li');
        listItem.className = 'timeline-item';
        listItem.innerHTML = `< strong > ${event.date}</strong > - ${event.event}`;
        timelineList.appendChild(listItem);
    });
    document.getElementById('statusTimelineModal').classList.add('show');
}

// Initialize user table
renderUserTable();

const viewUser = (id) => {
    document.getElementsByClassName('dropdown-content-2')[0].classList.toggle('user-show')
}