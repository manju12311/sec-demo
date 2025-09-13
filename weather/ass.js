 // DOM element references
        const jokeButton = document.getElementById('joke-button');
        const jokeContainer = document.getElementById('joke-container');
        const setupText = document.getElementById('joke-setup');
        const punchlineText = document.getElementById('joke-punchline');
        const loadingMessage = document.getElementById('loading-message');
        const errorMessage = document.getElementById('error-message');

        /**
         * Fetches a random joke from the API.
         * @returns {Promise<Object>} A promise that resolves to the joke data.
         */
        async function getJoke() {
            // Hide previous joke and error messages, and show loading indicator
            setupText.classList.add('hidden');
            punchlineText.classList.add('hidden');
            errorMessage.classList.add('hidden');
            loadingMessage.classList.remove('hidden');

            try {
                // Fetch data from the API
                const response = await fetch('https://official-joke-api.appspot.com/random_joke');
                
                // Check if the response is successful
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                // Parse the JSON response
                const jokeData = await response.json();
                
                // Display the joke on the page
                displayJoke(jokeData);

            } catch (error) {
                console.error("Fetch error: ", error);
                loadingMessage.classList.add('hidden');
                errorMessage.classList.remove('hidden');
            }
        }

        /**
         * Updates the DOM with the joke's setup and punchline.
         * @param {Object} joke - The joke data object.
         */
        function displayJoke(joke) {
            // Hide loading message and any error messages
            loadingMessage.classList.add('hidden');
            errorMessage.classList.add('hidden');

            // Update the text content of the setup and punchline elements
            setupText.textContent = joke.setup;
            punchlineText.textContent = joke.punchline;

            // Show the joke elements
            setupText.classList.remove('hidden');
            punchlineText.classList.remove('hidden');
            
            // Update the button text for the next joke
            jokeButton.textContent = 'Next Joke';
        }

        // Add an event listener to the button to trigger the getJoke function
        jokeButton.addEventListener('click', getJoke);
        