import React from "react";
import Editor from './Editor';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'


describe('Basic rendering', () => {
  beforeEach(() => {
    global.URL.createObjectURL = jest.fn();
  });

  it('render one audio channel', () => {
    const { getByText } = render(<Editor />);
    expect(getByText('AUDIO 1')).toBeInTheDocument();
  })
  it('render header', () => {
    const { getByText } = render(<Editor />);
    expect(getByText('Syra')).toBeInTheDocument();
  })
  it('render Drop field to drop tracks', () => {
    const { getByText } = render(<Editor />);
    expect(getByText('DROP AUDIO HERE TO ADD NEW TRACK')).toBeInTheDocument();
  })
});