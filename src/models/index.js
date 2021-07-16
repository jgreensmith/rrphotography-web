// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { WLimages, Cimages, LSimages, BWimages } = initSchema(schema);

export {
  WLimages,
  Cimages,
  LSimages,
  BWimages
};