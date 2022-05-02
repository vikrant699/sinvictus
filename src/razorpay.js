// import Razorpay from 'razorpay';

// var instance = new Razorpay({
//   key_id: 'YOUR_KEY_ID',
//   key_secret: 'YOUR_KEY_SECRET',
// });

const script = document.createElement('script');

export const addRazorpayScript = () => {
  script.src = 'https://checkout.razorpay.com/v1/checkout.js';
  script.async = true;
  document.body.appendChild(script);
};

export const removeRazorpayScript = () => {
  document.body.removeChild(script);
};

export const loadRazorpay = async (planId, price, userData) => {
  // const data = await fetch('https://api.razorpay.com/v1/subscriptions', {
  //   mode: 'no-cors',
  //   method: 'POST',
  //   header: {
  //     Authorization:
  //       'Basic cnpwX3Rlc3RfNzZtSjZrMHNGOTV6V0k6SnI1TndMN3hSTmxxcGpXTEVGYmg4UHBS',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     plan_id: planId,
  //     total_count: 6,
  //     quantity: 1,
  //     customer_notify: 0,
  //     addons: [
  //       {
  //         item: {
  //           name: 'Delivery charges',
  //           amount: 3000,
  //           currency: 'INR',
  //         },
  //       },
  //     ],
  //     notes: {
  //       name: userData.FirstName,
  //       email: userData.Email,
  //     },
  //   }),
  // })
  //   .then(t => t.json())
  //   .catch(err => {
  //     console.log(err);
  //   });

  // const data = instance.subscriptions
  //   .create({
  //     plan_id: planId,
  //     total_count: 6,
  //     quantity: 1,
  //     customer_notify: 0,
  //     addons: [
  //       {
  //         item: {
  //           name: 'Delivery charges',
  //           amount: 3000,
  //           currency: 'INR',
  //         },
  //       },
  //     ],
  //     notes: {
  //       name: userData.FirstName,
  //       email: userData.Email,
  //     },
  //   })
  //   .then(t => t.json())
  //   .catch(err => {
  //     console.log(err);
  //   });

  var options = {
    key: 'rzp_test_76mJ6k0sF95zWI', // Enter the Key ID generated from the Dashboard
    amount: parseInt(price) * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: 'INR',
    name: 'Sinvictus',
    description: 'some plan',
    // image: 'https://example.com/your_logo',
    subscription_id: 'sub_JO10ApRunPgnit', // data.id,
    handler: function (response) {
      // alert(response.razorpay_payment_id);
      // alert(response.razorpay_order_id);
      // alert(response.razorpay_signature);
      // firebase
    },
    prefill: {
      name: `Mr. ${userData.FirstName} ${userData.LastName}`,
      email: userData.Email,
      contact: userData.PhoneNumber,
    },
    theme: {
      color: '#3399cc',
    },
  };
  var rzp1 = new window.Razorpay(options);
  rzp1.open();
};
