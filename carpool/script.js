import { db, collection, getDocs, addDoc, query, orderBy } from '../firebase-init.js';

const form = document.querySelector('.post-form');
form.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('creator-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const title = document.getElementById('event-name').value.trim();
    const date = document.getElementById('event-date').value;
    const description = document.getElementById('new-event-description').value.trim();

    if (!name || !title || !email || !date || !description) {
        alert('Please fill out all fields.');
        return;
    }

    try {
        await addDoc(collection(db, 'carpool-posts'), {
            name,
            email,
            title,
            date,
            description,
        });

        alert('Submitted Successfully');
        form.reset();
        loadPosts();

    } catch (error) {
        console.error('Error adding post:', error);
        alert('Failed to submit post.');
    }
}

async function loadPosts() {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';

    try {
        // Query with orderBy
        const q = query(collection(db, "carpool-posts"), orderBy("date", "asc"));

        const querySnapshot = await getDocs(q);
        console.log(querySnapshot)

        if (querySnapshot.empty) {
            postsContainer.innerHTML = '<p>No posts found.</p>';
            return;
        }

        querySnapshot.forEach(doc => {
            const data = doc.data();
            const post = document.createElement('div');
            post.className = 'post';

            post.innerHTML = `
          <h3>${data.title}</h3>
          <div class="info-row">
              <div>
                <span>${data.name}</span>
                <span class="email-display">${data.email}</span>
              </div>
              <span>${data.date}</span>
          </div>
          <p>${data.description}</p>
        `;
            postsContainer.appendChild(post);
        });
    } catch (error) {
        console.error("Error loading posts:", error);
        postsContainer.innerHTML = `<p>Error loading posts: ${error.message}</p>`;
    }
}

loadPosts();