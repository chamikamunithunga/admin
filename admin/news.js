document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('classForm');
    const classList = document.getElementById('classList');
    
    let newsData = []; // This will store the news items
  
    // Handle form submission
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      
      if (newsData.length >= 3) {
        alert('You can only add up to 3 news items.');
        return;
      }
      
      const className = document.getElementById('className').value;
      const classPhoto = document.getElementById('classPhoto').files[0];
  
      if (!className || !classPhoto) {
        alert('Please fill out all fields.');
        return;
      }
  
      // Add new news
      const newId = Date.now().toString();
      newsData.push({ id: newId, name: className, photo: classPhoto });
  
      // Reset form and update news list
      form.reset();
      updateNewsList();
    });
  
    // Update news list
    function updateNewsList() {
      classList.innerHTML = '';
      newsData.forEach(news => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <img src="${URL.createObjectURL(news.photo)}" alt="${news.name}" style="width: 100px; height: auto;">
          <span>${news.name}</span>
          <button onclick="deleteNews('${news.id}')">Delete</button>
        `;
        classList.appendChild(listItem);
      });
    }
  
    // Delete news
    window.deleteNews = (id) => {
      newsData = newsData.filter(news => news.id !== id);
      updateNewsList();
    };
  });
  