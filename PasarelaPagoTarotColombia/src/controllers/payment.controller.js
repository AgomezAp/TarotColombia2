import dotenv from 'dotenv';
import {
  MercadoPagoConfig,
  Preference,
} from 'mercadopago';

dotenv.config();

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN,
});
const preference = new Preference(client);
export const createOrder = async (req, res) => {
  try {
    const result = await preference.create({
      body: {
        items: [
          {
            id: "1",
            title: "Lectura de cartas tarot",
            quantity: 1,
            unit_price: 15000,
          },
        ],
        back_urls: {
         success: 'https://cartastarotcolombia.com/descripcion-cartas?status=success',
         failure: 'https://cartastarotcolombia.com/welcome?status=failure' 
          
        },
        notification_url:
          "https://44c3-181-129-218-198.ngrok-free.app/weebhook",
        payment_methods: {
          excluded_payment_methods: [
            {
              id: "efecty",
            },
            {
              id: "pse",
            }
          ],
          installments: 3,
        },
        auto_return: "approved",
      },
    });
    console.log(result);
    res.send(result);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).send({ error: "Error creating order" });
  }
};

export const recieveWebhook = async (req, res) => {
  try {
    console.log("Webhook received:", req.body);
    // Mostrar todos los datos que llegan
    console.log("All received data:", req.body);

    res.status(200).send("Webhook received");
  } catch (error) {
    console.error("Error handling webhook:", error);
    res.status(500).send("Error handling webhook");
  }
};
