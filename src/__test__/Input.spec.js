import Input from '../Input.svelte';
import { render, cleanup } from '@testing-library/svelte';

const renderInput = (props) => {
  const { container } = render(Input, { props });
  return container;
};

beforeEach(cleanup);

describe('Input', () => {
  test('should render specified type', () => {
    const types = [
      'button',
      'checkbox',
      'color',
      'date',
      'datetime-local',
      'email',
      'file',
      'month',
      'number',
      'password',
      'radio',
      'range',
      'reset',
      'search',
      // 'select',
      'submit',
      'switch',
      'tel',
      'text',
      // 'textarea',
      'time',
      'url',
      'week'
    ];
    types.forEach((type) => {
      const { container, unmount } = render(Input, { type });
      const input = container.querySelector('input');
      switch (type) {
        case 'checkbox':
        case 'radio':
        case 'switch':
          expect(input.className).toContain('form-check-input');
          break;
        case 'color':
          expect(input.className).toContain('form-control form-control-color');
          break;
        case 'file':
          expect(input.className).toContain('form-file-input');
          break;
        case 'range':
          expect(input.className).toContain('form-range');
          break;
        case 'button':
        case 'reset':
        case 'submit':
          expect(input.className).toContain('btn');
          break;
        default:
          expect(input.className).toContain('form-control');
      }
      unmount();
    });
  });

  test('should render sm size', () => {
    const container = renderInput({ size: 'sm' });
    const input = container.querySelector('input');
    expect(input.className).toContain('form-control form-control-sm');
  });

  test('should render lg size', () => {
    const container = renderInput({ size: 'lg' });
    const input = container.querySelector('input');
    expect(input.className).toContain('form-control-lg');
  });

  test('should render disabled', () => {
    const container = renderInput({ disabled: true });
    const input = container.querySelector('input');
    expect(input.disabled).toBe(true);
  });

  test('should render readonly', () => {
    const container = renderInput({ readonly: true });
    const input = container.querySelector('input');
    expect(input.readOnly).toBe(true);
  });

  test('should render value', () => {
    const container = renderInput({ value: '$1000000' });
    const input = container.querySelector('input');
    expect(input.value).toBe('$1000000');
  });

  test('should render custom class', () => {
    const container = renderInput({ class: 'boogie' });
    const input = container.querySelector('input');
    expect(input.className).toContain('boogie');
  });
});