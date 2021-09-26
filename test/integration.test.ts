import newman from 'newman';
import collection from '../pgateway.postman_collection.json';

newman.run({ collection, reporters: 'cli' });
