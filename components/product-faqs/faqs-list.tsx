'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { formatFaqsCollection } from './_data/component-data';

import getNextProductFaqs from './_actions/get-next-product-faqs';

const ProductFaqsList = ({
  productId,
  limit,
  faqCollection
}: {
  productId: number;
  limit: number;
  faqCollection: Awaited<ReturnType<typeof formatFaqsCollection>>;
}) => {
  return (
    <>

    </>
  );
};

export default ProductFaqsList;
