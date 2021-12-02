// Imports
require('dotenv').config()
require('express-async-errors');

// extra security packages
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');

const cors = require('cors');
const morgan = require('morgan')
const express = require('express');
const connectDB = require('./db/connect')
// const io = require('socket.io')(server);

// Swagger
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
// const YAML = require('yamljs');
// const swaggerDocument = YAML.load('./swagger/swagger.yaml');

// Variables
const PORT = process.env.PORT | 8801;
const application = express();
const carRoutes = require('./routes/car.routes');
const emailRoutes = require('./routes/email.routes');
const userRoutes = require('./routes/user.routes');
const tripRoutes = require('./routes/trip.routes');
const authRoutes = require('./routes/auth.routes');
const notificationRoutes = require('./routes/notification.routes');

const allowedOrigins = [
	'capacitor://localhost',
	'ionic://localhost',
	'http://localhost',
	'http://localhost:8080',
	'http://localhost:8100',
	'http://localhost:3001',
	'http://localhost:8101',
	'http://localhost:8100/home',
	'http://localhost:8102',
];
const swaggerOptions = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "GOODs API",
			version: "1.0.0",
			description: "GOODs API"
		},
		servers: [
			{
				url: "http://localhost:8801/"
			}
		]
	},
	apis: ["routes/*.js"]
}


// Swagger
const specs = swaggerJsDoc(swaggerOptions);
application.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))

application.set('trust proxy', 1);
application.use(
	rateLimiter({
		windowMs: 15 * 60 * 1000, // 15 minutes
		max: 100, // limit each IP to 100 requests per windowMs
	})
);

// Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
const corsOptions = {
	origin: (origin, callback) => {
		if (allowedOrigins.includes(origin) || !origin) {
			callback(null, true);
		} else {
			callback(new Error('Origin not allowed by CORS'));
		}
	}
}

application.options('*', cors(corsOptions));

application.use(cors(corsOptions))

// Middleware
application.use(helmet());
application.use(cors());
application.use(xss());
application.use(morgan('tiny'))
application.use(express.json());

// Routes
application.use('/api/v1/cars', carRoutes);
application.use('/api/v1/auth', authRoutes);
application.use('/api/v1/users', userRoutes);
application.use('/api/v1/trips', tripRoutes);
application.use('/api/v1/email', emailRoutes);
application.use('/api/v1/notifications', notificationRoutes);

application.get('/', function(request, response) {
	response.send({message: "application interface started."})
})

// Set socket.io listeners.
// io.on('connection', (socket) => {
//   console.log('a user connected');

//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });

// Start the server
const start = async () => {
	try {
		await connectDB();
		const server = application.listen(PORT, console.log(`Server is listening on port ${PORT}...`));
	} catch (error) {
		start()
	}
};
	
start();

