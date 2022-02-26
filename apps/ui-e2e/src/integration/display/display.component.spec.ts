describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=displaycomponent--primary&args=content:default;'));
  it('should render the component', () => {
    cy.get('storybook-demo-display').should('exist');
  });
});