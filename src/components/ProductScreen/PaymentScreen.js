import React, { useState } from 'react';
import styled from 'styled-components';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const ScreenWrapper = styled.div`
  background-color: #ffc0cb;
  width: 375px;
  height: 98vh;
  border: 1px solid #f3f4f5;
  margin-top: 4px;
  overflow: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;

const IconWrapper = styled.div`
  margin: 20px;
  cursor: pointer;
`;

const PaymentInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-left: 32px;
  margin-right: 32px;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 400;
`;

const StyledInput = styled.input`
  padding: 12px;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: #ffffff;
`;

const StyledButton = styled.button`
  padding: 12px;
  border-radius: 10px;
  margin-top: 12px;
  background-color: #ff69b4;
  color: white;
  font-size: 16px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  width: '300px',
  border: 'none',
  outline: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const PaymentScreen = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setCardNumber('');
    setCardHolderName('');
    setExpireDate('');
    setSecurityCode('');
  };

  const load = () => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  };

  const handlePayNow = () => {
    if (!cardNumber || !cardHolderName || !expireDate || !securityCode) {
      alert('Please fill in all fields');
    } else {
      setOpen(true);
      load();
    }
  };

  return (
    <ScreenWrapper className='home'>
      <IconWrapper onClick={() => navigate('/product')}>
        <KeyboardBackspaceIcon />
      </IconWrapper>
      <PaymentInput>
        <InputWrapper>
          <Label>Card Number</Label>
          <StyledInput
            type='text'
            pattern='[0-9]*'
            maxLength={16}
            placeholder='Enter Card Number'
            onChange={(e) => setCardNumber(e.target.value)}
            value={cardNumber}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Name</Label>
          <StyledInput
            type='text'
            placeholder='Enter Card Holder Name'
            onChange={(e) => setCardHolderName(e.target.value)}
            value={cardHolderName}
          />
        </InputWrapper>
        <div>
          <InputWrapper>
            <Label>Expiration Date</Label>
            <StyledInput
              type='text'
              pattern='[0-9]*'
              maxLength={4}
              placeholder='Enter Expire Data'
              onChange={(e) => setExpireDate(e.target.value)}
              value={expireDate}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Security Code</Label>
            <StyledInput
              type='text'
              pattern='[0-9]*'
              maxLength={4}
              placeholder='Enter Security Code'
              onChange={(e) => setSecurityCode(e.target.value)}
              value={securityCode}
            />
          </InputWrapper>
        </div>
        <InputWrapper>
          <StyledButton onClick={handlePayNow}>
            <LockIcon sx={{ marginRight: '8px' }} />
            Pay Now
          </StyledButton>
        </InputWrapper>
        {open ? (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box sx={style}>
              <Typography id='modal-modal-title' variant='h6' component='h2'>
                {!loading ? (
                  <Label>Please Wait, we are processing your payment.</Label>
                ) : (
                  <span>Payment Successful</span>
                )}
              </Typography>
              {!loading ? (
                <CircularProgress sx={{ margin: '12px' }} />
              ) : (
                <DoneAllIcon sx={{ fontSize: '58px', color: 'green' }} />
              )}
              <button
                onClick={handleClose}
                style={{
                  padding: '12px',
                  borderRadius: '10px',
                  border: 'none',
                  outline: 'none',
                  marginTop: '16px',
                  backgroundColor: 'antiquewhite',
                  cursor: 'pointer',
                }}
              >
                Close
              </button>
            </Box>
          </Modal>
        ) : (
          ''
        )}
      </PaymentInput>
    </ScreenWrapper>
  );
};

export default PaymentScreen;
