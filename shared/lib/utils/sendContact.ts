export const sendContact = async (name: string, phoneNumber: string) => {
  try {
    const response = await fetch(
      "https://taxi.aktau-go.kz/v1/order-requests/send-message-to-bekkhan",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phoneNumber }),
      }
    );
  } catch (error) {
    console.error("Ошибка при отправке контакта:", error);
  }
};
