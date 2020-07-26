const fixturePath = 'audio/default.wav';

describe('dropTrack', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('create one channel when dropping one file', () => {
    cy.get('[data-cy="drop-track-input"]').attachFile(fixturePath, { subjectType: 'drag-n-drop' });
  });
});