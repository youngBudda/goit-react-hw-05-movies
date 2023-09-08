import { StyledAdditionalButton } from './AdditionButton.styled';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AdditionalInformation from 'components/AdditionalInformation/AdditionalInformation';

const AdditionalButton = () => {
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname.includes('reviews')) {
      setHidden(false);
      return;
    }
  }, []);

  const handlerClick = () => {
    if (window.location.pathname.includes('reviews')) {
      return;
    }
    navigate('reviews');
    setHidden(false);
  };

  return (
    <>
      <StyledAdditionalButton
        onClick={handlerClick}
        type="button"
        className={hidden === false ? 'hidden' : ''}
      >
        Additional Information
      </StyledAdditionalButton>
      {hidden === false && <AdditionalInformation />}
    </>
  );
};
export default AdditionalButton;
