describe('Challenge Page', () => {
    it('should successfully loads', () => {
      cy.visit('/') // change URL to match your dev URL
    })
  })

describe('Both Radio Button is Clickable', () => {
    it('should click on Manager Radio Button!', () => {
      cy.contains('Manager').click()
    })

    it('should click on Admin Radio Button!', () => {
      cy.contains('Admin').click()
    })
  })