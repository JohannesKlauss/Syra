const fixturePath = 'audio/default.mp3';

describe('DropTrack', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  [{ type: 'regular', testId: 'drop-track-zone' }, { type: 'hidden', testId: 'drop-track-input' }].forEach(
    ({ type, testId }) => {
      describe(`${type} dropzone`, () => {
        it('create one channel when dropping one file', () => {
          cy.get(`[data-cy="${testId}"]`).attachFile(fixturePath, { subjectType: 'drag-n-drop' });

          cy.get('[data-cy="vertical-channel-list"]').contains('default');
        });
      });
    },
  );
});