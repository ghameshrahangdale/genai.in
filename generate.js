
async function generateImages() {
    const prompt = document.getElementById('prompt').value;
    const imageContainerText = document.getElementById('imageContainerText');
    const accessKey = 'b9zAeH8yFXddKRHaSX1qvOS7aeOHS23TFSrowM_iJaM'; //Unsplash access key
    const url = `https://api.unsplash.com/photos/random?query=${prompt}&count=4&client_id=${accessKey}`;

    if(prompt === ''){
        imageContainerText.innerText = "Promt should not be empty please enter any prompt"; 
      return;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();

        const imageContainer = document.getElementById('imageContainer');
        imageContainer.innerHTML = ''; // Clear previous images
        imageContainerText.innerHTML = '';

        data.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.urls.regular;
            img.alt = photo.alt_description;
            imageContainer.appendChild(img);
            imageContainerText.innerText = "Here are the generated images based on your prompt"; 
        });
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}