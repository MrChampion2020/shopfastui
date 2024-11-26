// import React from 'react';
// import { Modal, Box, Typography } from '@mui/material';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from './CheckoutForm';

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

// const PaymentModal = ({
//   open,
//   onClose,
//   amount,
//   selected,
//   cartItems,
//   coming_from,
//   prodId,
//   token,
//   onSuccess,
// }) => {
//   return (
//     <Modal
//       open={open}
//       onClose={onClose}
//       aria-labelledby="payment-modal-title"
//       aria-describedby="payment-modal-description"
//     >
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           width: 400,
//           bgcolor: 'background.paper',
//           boxShadow: 24,
//           p: 4,
//           borderRadius: 2,
//         }}
//       >
//         <Typography id="payment-modal-title" variant="h6" component="h2" gutterBottom>
//           Enter Payment Details
//         </Typography>
//         <Elements stripe={stripePromise}>
//           <CheckoutForm
//             amount={amount}
//             selected={selected}
//             cartItems={cartItems}
//             coming_from={coming_from}
//             prodId={prodId}
//             token={token}
//             onSuccess={onSuccess}
//           />
//         </Elements>
//       </Box>
//     </Modal>
//   );
// };

// export default PaymentModal;




// import React from 'react';
// import { Modal, Box, Typography } from '@mui/material';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from './CheckoutForm';

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

// const PaymentModal = ({
//   open,
//   onClose,
//   amount,
//   selected,
//   cartItems,
//   coming_from,
//   prodId,
//   token,
//   onSuccess,
// }) => {
//   return (
//     <Modal
//       open={open}
//       onClose={onClose}
//       aria-labelledby="payment-modal-title"
//       aria-describedby="payment-modal-description"
//     >
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           width: 400,
//           bgcolor: 'background.paper',
//           boxShadow: 24,
//           p: 4,
//           borderRadius: 2,
//         }}
//       >
//         <Typography
//           id="payment-modal-title"
//           variant="h6"
//           component="h2"
//           gutterBottom
//         >
//           Enter Payment Details
//         </Typography>
//         <Elements stripe={stripePromise}>
//           <CheckoutForm
//             amount={amount}
//             selected={selected}
//             cartItems={cartItems}
//             coming_from={coming_from}
//             prodId={prodId}
//             token={token}
//             onSuccess={onSuccess}
//           />
//         </Elements>
//       </Box>
//     </Modal>
//   );
// };

// export default PaymentModal;


import React from 'react';
import { Modal, Box, Typography } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentModal = ({
  open,
  onClose,
  amount,
  selected,
  cartItems,
  coming_from,
  prodId,
  token,
  onSuccess,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="payment-modal-title"
      aria-describedby="payment-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography id="payment-modal-title" variant="h6" component="h2" gutterBottom>
          Enter Payment Details
        </Typography>
        <Elements stripe={stripePromise}>
          <CheckoutForm
            amount={amount}
            selected={selected}
            cartItems={cartItems}
            coming_from={coming_from}
            prodId={prodId}
            token={token}
            onSuccess={onSuccess}
            onClose={onClose}
          />
        </Elements>
      </Box>
    </Modal>
  );
};

export default PaymentModal;

