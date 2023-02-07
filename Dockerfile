FROM mcr.microsoft.com/playwright:v1.16.2-focal
WORKDIR /usr/automation/pup
COPY . /usr/automation/pup/

ADD playwright-report playwright-report

# Install dependencies
RUN npm install
# Install browsers
RUN npx playwright install

RUN npx playwright install-deps

# Run playwright test
#ENTRYPOINT npm run customTests
ENTRYPOINT npm run all
#CMD [ "npx", "playwright", "test --grep @Reg --config=playwright.config1.js --project=firefox"] 