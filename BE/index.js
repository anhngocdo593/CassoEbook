const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const payOS = require('./utils/payos');

const app = express();
const PORT = process.env.PORT || 3030;
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', express.static('public'));
app.use('/payment', require('./controllers/payment-controller'));
app.use('/order', require('./controllers/order-controller'));

app.post('/create-payment-link-a', async (req, res) => {
    const YOUR_DOMAIN = 'https://cassoebook-anhngoc.netlify.app';
    const body = {
        orderCode: Number(String(Date.now()).slice(-6)),
        amount: 10000,
        description: 'Ebook',
        returnUrl: `${YOUR_DOMAIN}/finish`,
        cancelUrl: `${YOUR_DOMAIN}`
    };

    try {
        const paymentLinkResponse = await payOS.createPaymentLink(body);
        res.redirect(paymentLinkResponse.checkoutUrl);  
        
    } catch (error) {
        console.error(error);
        res.send('Something went error');
    }
});
app.post('/create-payment-link-b', async (req, res) => {
    const YOUR_DOMAIN = 'https://cassoebook-anhngoc.netlify.app';
    const body = {
        orderCode: Number(String(Date.now()).slice(-6)),
        amount: 2000,
        description: 'Ebook',
        returnUrl: `${YOUR_DOMAIN}/finish`,
        cancelUrl: `${YOUR_DOMAIN}`
    };

    try {
        const paymentLinkResponse = await payOS.createPaymentLink(body);
        res.redirect(paymentLinkResponse.checkoutUrl);  
        
    } catch (error) {
        console.error(error);
        res.send('Something went error');
    }
});

app.listen(PORT, function () {
    console.log(`Server is listening on port ${PORT}`);
});