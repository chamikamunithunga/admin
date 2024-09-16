// script.js
document.addEventListener('DOMContentLoaded', () => {
    const classForm = document.getElementById('classForm');
    const classList = document.getElementById('classList');
    let classes = [];
  
    function renderClasses() {
      classList.innerHTML = '';
      classes.forEach((cls, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <div>
            <img src="${cls.photo}" alt="${cls.name}" onclick="bookClass(${index})">
          </div>
          <div>
            <strong>${cls.name}</strong> <br>
            Date: ${cls.date} <br>
            Time: ${cls.time} <br>
            Zoom Link: <a href="${cls.zoomLink}" target="_blank">${cls.zoomLink}</a>
          </div>
          <button onclick="editClass(${index})">Edit</button>
          <button onclick="deleteClass(${index})">Delete</button>
        `;
        classList.appendChild(li);
      });
    }
  
    function saveClass(e) {
      e.preventDefault();
      const id = document.getElementById('classId').value;
      const name = document.getElementById('className').value;
      const date = document.getElementById('classDate').value;
      const time = document.getElementById('classTime').value;
      const zoomLink = document.getElementById('classZoomLink').value;
      const photoInput = document.getElementById('classPhoto');
      const photoFile = photoInput.files[0];
      const photoUrl = URL.createObjectURL(photoFile); // Generate URL for the uploaded file
  
      if (id) {
        classes[id] = { name, date, time, zoomLink, photo: photoUrl };
      } else {
        classes.push({ name, date, time, zoomLink, photo: photoUrl });
      }
  
      classForm.reset();
      document.getElementById('classId').value = '';
      renderClasses();
    }
  
    function editClass(index) {
      const cls = classes[index];
      document.getElementById('classId').value = index;
      document.getElementById('className').value = cls.name;
      document.getElementById('classDate').value = cls.date;
      document.getElementById('classTime').value = cls.time;
      document.getElementById('classZoomLink').value = cls.zoomLink;
      // Set photo input to empty as you can't set a file input value programmatically
    }
  
    function deleteClass(index) {
      classes.splice(index, 1);
      renderClasses();
    }
  
    function bookClass(index) {
      const cls = classes[index];
      window.location.href = cls.zoomLink; // Redirect to Zoom link for booking
    }
  
    classForm.addEventListener('submit', saveClass);
  
    // Initial render
    renderClasses();
  });
  