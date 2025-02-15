'use server';

import { client } from '~/client';

import { formatFaqsCollection, MetafieldsQuery } from '../_data/component-data';

const getNextProductFaqs = async (
  productId: number,
  limit: number,
  endCursor?: string | null
) => {
  
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  await sleep(200);

  // throw new Error("Something went wrong");

  const response = await client.fetch({
    document: MetafieldsQuery,
    variables: {
      productId,
      limit,
      after: endCursor,
    },
  });

  const product = response.data.site.product;

  if (!product?.metafields) {
    return { endCursor: null, faqs: [] };
  }
  return formatFaqsCollection(product);
};

export default getNextProductFaqs;
