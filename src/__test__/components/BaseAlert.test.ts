import { render, screen } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';

import BaseAlert from '@/components/base/BaseAlert.vue';

describe('Testing Base Alert component', () => {
  it('Should validate DOM when passing props', () => {
    render(BaseAlert, {
      props: {
        type: 'info',
        title: 'Testing title',
        description: 'Testing description',
        icon: 'plus',
      },
    });
    const alertContainer = screen.getByRole('alert');
    expect(alertContainer).toBeInTheDocument();
    expect(alertContainer).toHaveClass('alert alert--info');
    expect(screen.getByTestId('alert-icon-test')).toHaveClass('fas fa-plus');
    expect(screen.getByTestId('alert-title-test')).toHaveTextContent('Testing title');
    expect(screen.getByTestId('alert-description-test')).toHaveTextContent(
      'Testing description',
    );
  });

  it('Should validate DOM when not passing props', () => {
    render(BaseAlert, {
      props: {
        description: 'Testing description',
        icon: 'hashtag',
      },
    });
    const alertContainer = screen.getByRole('alert');
    expect(alertContainer).toBeInTheDocument();
    expect(alertContainer).toHaveClass('alert alert--error');
    expect(screen.getByTestId('alert-icon-test')).toHaveClass('fas fa-hashtag');
    expect(screen.getByTestId('alert-title-test')).toHaveTextContent(
      'Something wrong happened.',
    );
    expect(screen.getByTestId('alert-description-test')).toHaveTextContent(
      'Testing description',
    );
  });
});
