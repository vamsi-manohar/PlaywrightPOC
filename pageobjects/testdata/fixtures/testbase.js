const base = require('@playwright/test');

exports.customtest = base.test.extend
(
    {
    dummyUser:
    {
        username: "vamsi.manohar@productsup.com",
        password: "Radar@1996"
    }
}
)