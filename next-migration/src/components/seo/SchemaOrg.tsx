import React from 'react';
import { JsonLd } from './JsonLd';

export function SchemaOrg({ schema }: { schema: any }) {
  return <JsonLd schema={schema} />;
}
