document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const contactData = {
        name: name,
        email: email,
        subject:subject,
        message: message

    };

    console.log(contactData)
    try {
        const response = await fetch('http://localhost:8080/submit', 
            {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contactData)
        });

        if (response.ok) {
            alert('Thank you for your message!');
            document.getElementById('contactForm').reset();
        } else {
            alert('There was an issue submitting your message. Please try again.');
        }
    } catch (error) {
        alert('An error occurred: ' + error.messaage);
    }
});