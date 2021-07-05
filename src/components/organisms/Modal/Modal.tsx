import Button from "components/atoms/Button/Button";
import CloseButton from "components/atoms/CloseButton/CloseButton";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  min-height: 140px;
  width: clamp(300px, 100%, 600px);
  padding: 10px;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  gap: 10px;
  z-index: 101;
  button {
    margin-right: 10px;
  }
`;
const BackgoundModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;

const Modal = ({
  active,
  setActive,
  children,
  yesFn,
}: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element[];
  yesFn: Function;
}) => {
  return (
    <>
      {active && (
        <BackgoundModal>
          <Wrapper>
            <CloseButton onClick={() => setActive(false)} />
            <div>{children}</div>
            <div>
              <Button
                onClick={() => {
                  setActive(false);
                  yesFn();
                }}
              >
                Yes
              </Button>
              <Button onClick={() => setActive(false)}>No</Button>
            </div>
          </Wrapper>
        </BackgoundModal>
      )}
    </>
  );
};

export default Modal;
