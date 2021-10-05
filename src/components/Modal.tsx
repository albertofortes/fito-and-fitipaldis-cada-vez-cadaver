import React, { FC, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import ITheme from "../components/styled-component-types"
import { MdClose } from 'react-icons/md';

const Background = styled('div')<ITheme>`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

const ModalWrapper = styled('div')<ITheme>`
  max-width: 90%;
  max-height: 90vh;
  color: #000;
  position: relative;
  z-index: 10;

  @media (min-width: 960px) {
    max-width: 50rem;
    max-height: 80vh;
  }

  @media (min-width: 1500px) {
    max-width: 80rem;
    max-height: 80rem;
  }
`

const ModalImg = styled('img')<ITheme>`
  width: 100%;
  height: 100%;
  border-radius: 0;
  background: #000;
`

const CloseModalButton = styled(MdClose)<ITheme>`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`

type Props = {
  showModal: boolean,
  modalImg: string,
  setShowModal: (value: boolean) => void,
}

const Modal: FC<Props> = ({ showModal, setShowModal, modalImg }) => {
  const modalRef = useRef();

  const closeModal = (e):void => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  }

  const keyPress = useCallback(
    (e):void => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    }, [setShowModal, showModal]
  )

  useEffect( () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]
  )

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper showModal={showModal}>
            <ModalImg src={modalImg} alt='lorem' />
            <CloseModalButton aria-label='Close modal' onClick={()=> setShowModal(false)} />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  )
}

export default Modal;