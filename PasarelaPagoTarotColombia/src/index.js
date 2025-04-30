import dotenv from 'dotenv';

import Server from './config.js';

dotenv.config();
const server = new Server();
/* 
const app = express();
app.use(morgan('dev'));    
app.use(express.json());
app.use(paymentRoutes); 

app.listen(PORT);

console.log('Server is running on port ', PORT); */