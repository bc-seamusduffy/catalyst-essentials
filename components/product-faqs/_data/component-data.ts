import { removeEdgesAndNodes } from '@bigcommerce/catalyst-client';
import { z } from 'zod';
import { FragmentOf, graphql } from '~/client/graphql';

export const FaqMetafieldsFragment = graphql(`
  fragment FaqMetafieldsFragment on Product {

  }
`);

export const MetafieldsQuery = graphql(
  `

  `
);

export const formatFaqsCollection = (
  product: FragmentOf<typeof FaqMetafieldsFragment>
) => {
  return {
    endCursor: null,
    faqs: [],
  };
};