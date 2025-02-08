import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './product'
import shoes from './shoes'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, shoes],
}
