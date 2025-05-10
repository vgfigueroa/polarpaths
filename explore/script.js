import { db, collection, getDocs } from '../firebase-init.js';

async function loadDestinations() {
  const cardsContainer = document.getElementById('cardsFlex');
  cardsContainer.innerHTML = '';  // Clear existing content if any

  try {
    const querySnapshot = await getDocs(collection(db, "destinations"));
    if (querySnapshot.empty) {
      cardsContainer.innerHTML = '<p>No destinations found.</p>';
      return;
    }

    querySnapshot.forEach(doc => {
      const data = doc.data();

      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h1>${data.title}</h1>
        <div class="card-content">
          <p>${data.description}</p>
          ${data.imageUrl ? `<img src="${data.imageUrl}" alt="${data.title}" width="80" height="100">` : ''}
        </div>
        <i class="fa-solid fa-heart heart-icon"></i>
      `;
      cardsContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading destinations:", error);
    cardsContainer.innerHTML = `<p>Error loading destinations: ${error.message}</p>`;
  }
}

// Load on page load
loadDestinations();
