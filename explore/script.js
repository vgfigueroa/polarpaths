import { db, collection, getDocs } from '../firebase-init.js';

async function loadDestinations() {
  const cardsContainer = document.getElementById('cardsFlex');
  const map = document.getElementById('gmap');
  cardsContainer.innerHTML = '';

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
        <h2>${data.title}</h2>
        <div class="card-content">
          <p>${data.description}</p>
          ${data.imageUrl ? `<img src="${data.imageUrl}" alt="${data.title}" width="80" height="100">` : ''}
        </div>
        <i class="fa-solid fa-heart heart-icon"></i>
      `;
      cardsContainer.appendChild(card);

      const pin = document.createElement('gmp-advanced-marker');
      pin.setAttribute('position', data.position);
      pin.setAttribute('title', data.title);
      map.appendChild(pin);

    });
  } catch (error) {
    console.error("Error loading destinations:", error);
    cardsContainer.innerHTML = `<p>Error loading destinations: ${error.message}</p>`;
  }
}

loadDestinations();
