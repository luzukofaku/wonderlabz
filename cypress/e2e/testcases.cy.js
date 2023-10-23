import 'cypress-iframe'

describe('Radio Buttons', () => {
  it('Radio Buttons', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('[type="radio"].radioButton').check("radio3")
      .should('be.checked');

    cy.get('[type="radio"].radioButton').check("radio2")
      .should('be.checked');
  })
})

describe('Suggession', () => {
  it('Suggession', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('input[id="autocomplete"]').type('South');

    cy.contains('South Africa').click();

    cy.get('input[id="autocomplete"]')
     .should('have.value', 'South Africa');

    cy.get('input[id="autocomplete"]').clear();

    cy.get('input[id="autocomplete"]').type('Republic');

    cy.contains('Congo, the Democratic Republic of the').click();

    cy.get('input[id="autocomplete"]').should('have.value', 'Congo, the Democratic Republic of the');
  })
})

describe('Checkboxes', () => {
  it('Checkboxes', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('[type="checkbox"]').check("option1")
     .should('be.checked');

    cy.get('[type="checkbox"]').check("option2")
     .should('be.checked');

    cy.get('[type="checkbox"]').check("option3")
     .should('be.checked');

    cy.get('[type="checkbox"]').uncheck("option1")
     .should('not.be.checked');

    cy.get('[type="checkbox"]').check("option1")
     .should('be.checked');

    cy.get('[type="checkbox"]').check("option2")
     .should('be.checked');

  })
})

describe('Show / hide', () => {
  it('Show / hide', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('input[id="hide-textbox"]').click();

    cy.get('input[id="displayed-text')
     .should('not.visible');

    cy.get('input[id="show-textbox"]').click()
     .should('be.visible');
  })
})

describe('Web Table Fixed header', function () {
  // test case
  it('Validate that the Amount for Joe Postman from Chennai has an amount of 46', function (){
     cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
     // identify first column
     cy.get('#product> tbody > tr > td:nth-child(1)').each(($row, index, $rows)=> {
        // text captured from column1
        const t = $row.text();
        // matching criteria
        if (t.includes('Joe')){
           // next sibling captured
           cy.get('#product > tbody > tr > td:nth-child(1)')
            .eq(index).next().then(function(d) {
                // text of following sibling
                const r = d.text();
                
                expect(r).to.contains('Postman');
            })

           cy.get('#product > tbody > tr > td:nth-child(2)')
            .eq(index).next().then(function(d) {
                // text of following sibling
                const r = d.text();
                
                expect(r).to.contains('Chennai');
            })

           cy.get('#product > tbody > tr > td:nth-child(3)')
            .eq(index).next().then(function(d) {
                // text of following sibling
                const r = d.text();
              
                expect(r).to.contains('46');
            })
        }
     })
  });

  it('Validate that the total amount collected is 296', function (){
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

      cy.get('#product> tbody > tr > td:nth-child(4)').then(($cells) => {
        
        const totals = $cells
          .toArray()
          .map((el) => el.innerText)
          .map(parseFloat);

        const sum = Cypress._.sum(totals)
        cy.log(sum);

        expect(sum).to.equal(296);
      })
  });

  it('Validate that the sum of all the rows is correct', function (){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get('#product> tbody > tr > td:nth-child(4)').then(($cells) => {
      
      const amounts = $cells
        .toArray()
        .map((el) => el.innerText)
        .map(parseFloat);

      const sum = Cypress._.sum(amounts);
      
      cy.contains('*[class^="totalAmount"]', sum);
    })
  });
});

describe('iFrame', () => {
  it('Find the iFrame and click on Learning Path menu item', () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.frameLoaded('[id="courses-iframe"]');

    cy.iframe().should('be.visible');

    cy.iframe().find("a[href*='learning-path']").eq(0).click();
  })
})

