import expres from expres
import dotenv from dotenv

// Load env variables
dotenv.config()

// Define port
const PORT = process.env.PORT || 3000;
// Create express app instance
const app = expres()

// Define routes
app.get('/', (req, res) => {
    res.send('Hello This is Application Ready For CI/CD With Jenkins')
})

async function main () {
    try {
        console.log(`Server is running on http://localhost:${PORT}`);
    } catch (error) {
        console.error('Error starting server: ', error);
    }
}

// Start the server
app.listen(PORT, main);
