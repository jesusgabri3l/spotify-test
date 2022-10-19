import { render, screen } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';

import defaultImage from '@/assets/default.png';
import BaseHeaderProfile from '@/components/base/BaseHeaderProfile.vue';

describe('Testing BaseHeaderProfile component', () => {
  it('Should validate DOM when passing props', () => {
    const image =
      'https://media.revistagq.com/photos/62fe075f5ab63dcb237f86de/16:9/w_2560%2Cc_limit/better-call-saul.jpeg';
    render(BaseHeaderProfile, {
      props: {
        color: 'red',
        name: 'jesusgabri3l',
        image,
      },
    });
    const headerProfileContainer = screen.getByTestId('headerProfile-test');
    expect(headerProfileContainer).toBeInTheDocument();
    expect(headerProfileContainer).toHaveClass('header header--red');
    expect(screen.getByTestId('headerProfile-image-test')).toHaveAttribute('src', image);
    expect(screen.getByTestId('headerProfile-name-test')).toHaveTextContent(
      'jesusgabri3l',
    );
  });

  it('Should validate DOM when passing props', () => {
    render(BaseHeaderProfile);
    const headerProfileContainer = screen.getByTestId('headerProfile-test');
    expect(headerProfileContainer).toBeInTheDocument();
    expect(headerProfileContainer).toHaveClass('header header--blue');
    expect(screen.getByTestId('headerProfile-image-test')).toHaveAttribute(
      'src',
      defaultImage,
    );
    expect(screen.getByTestId('headerProfile-name-test')).toHaveTextContent(
      'Default profile name',
    );
  });
});
