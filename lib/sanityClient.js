import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'd9qbprid',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skXPrUT2b1F5r6eobvEiI5URFFGrXffiSCCpUPBwm2JqqQXZLuL14cXGHxjPCFZ4DQc5YkunvhpSOBa3M2wO80WDovOKJorP9yN6dUl2xmWnZoMZyYizstBb8PJBNOeHA5GiJZb4WJETr4dOWxHdf28525cWcLN5JJzpvcWWno9YZpz3oUWV',
  useCdn: false,
})
