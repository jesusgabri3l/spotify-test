import { render, screen } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';

import defaultImage from '@/assets/default.png';
import BaseCard from '@/components/base/BaseCard.vue';

describe('Testing Base Card component', () => {
  it('Should validate DOM when passing props', () => {
    const image =
      'https://media.revistagq.com/photos/62fe075f5ab63dcb237f86de/16:9/w_2560%2Cc_limit/better-call-saul.jpeg';
    render(BaseCard, {
      props: {
        title: 'Better Call Saul',
        description: 'Best serie',
        image,
      },
    });
    const cardContainer = screen.getByTestId('card-test');
    expect(cardContainer).toBeInTheDocument();
    expect(screen.getByTestId('card-image-test')).toHaveAttribute('src', image);
    expect(screen.getByTestId('card-title-test')).toHaveTextContent('Better Call Saul');
    expect(screen.getByTestId('card-description-test')).toHaveTextContent('Best serie');
  });

  it('Should validate DOM when not passing props', () => {
    render(BaseCard);
    const cardContainer = screen.getByTestId('card-test');
    expect(cardContainer).toBeInTheDocument();
    expect(screen.getByTestId('card-image-test')).toHaveAttribute('src', defaultImage);
    expect(screen.getByTestId('card-title-test')).toHaveTextContent('Title default');
    expect(screen.getByTestId('card-description-test')).toHaveTextContent(
      'Description default',
    );
  });
});
