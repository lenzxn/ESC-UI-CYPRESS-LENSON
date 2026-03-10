## Köra tester lokalt

Starta webbplatsen med VS Code Live Server (port 5501).  
Starta sedan Cypress med:

npx cypress open

## Köra tester mot deployad version

Tester kan också köras mot den deployade versionen av webbplatsen med:

npx cypress open --env baseUrl=https://lenzxn.github.io/ESC-UI-CYPRESS-LENSON/

## Vad som testas

Testerna verifierar att startsidan laddar, att statiskt innehåll visas, att navigation mellan sidor fungerar, att filterfunktionen på challenges-sidan fungerar samt att felmeddelanden visas korrekt i bokningsflödet.
