import { db, collection, getDocs, addDoc, query, orderBy } from '../firebase-init.js';

const form = document.querySelector('#form');
form.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const title = document.getElementById('destination').value.trim();
    const description = document.getElementById('description').value.trim();
    const position = document.getElementById('location').value.trim();
    const imageUrl = document.getElementById('image-upload').value.trim();

    if (!destination || !description || !position) {
        alert('Please fill out all required fields.');
        return;
    }

    try {
        await addDoc(collection(db, 'destinations'), {
            name,
            title,
            description,
            position,
            imageUrl
        });

        alert('Submitted Successfully');
        form.reset();

    } catch (error) {
        console.error('Error adding post:', error);
        alert('Failed to submit post.');
    }
}