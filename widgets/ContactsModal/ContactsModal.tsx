import dynamic from "next/dynamic";
import { FC, ReactNode, RefObject, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

import useOnClickOutside from "@shared/lib/hooks/useClickOutside";
import useDisableScrollBody from "@shared/lib/hooks/useDisableScroll";
import { Button, IconButton, PhoneInput } from "@shared/ui";
import SvgTg from "@shared/icons/SvgTg";
import SvgWhatsapp from "@shared/icons/SvgWhatsapp";
import { useRouter } from "next/router";
import { contactLink } from "@shared/consts/routes";
import { sendContact } from "@shared/lib/utils/sendContact";
import { BreakpointsEnum } from "@shared/consts/types";

export type ContactsModalProps = {
  isVisible?: boolean;
  withStandartTitle?: boolean;
  withOutsideClick?: boolean;
  onClose: () => void;
  className?: string;
};

const Portal = dynamic(() => import("./portal/portal"), {
  ssr: false,
});

const ContactsModal: FC<ContactsModalProps> = ({
  onClose,
  isVisible = false,
  withOutsideClick = true,
  className,
}) => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  if (withOutsideClick) {
    useOnClickOutside(ref as RefObject<HTMLElement>, onClose);
  }

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isVisible) {
        e.preventDefault();
        onClose();
      }
    };

    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("keydown", close);
    };
  }, []);

  useDisableScrollBody(isVisible);

  if (!isVisible) {
    return null;
  }
  return (
    <Wrapper className="wrapper">
      <Body ref={ref} className={className}>
        <ContactTitle>Заполните форму и мы свяжемся с вами</ContactTitle>
        <Input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Имя"
        />
        <PhoneInput
          value={phone}
          onChange={(value) => setPhone(value)}
          placeholder="+7 (___) ___-__-__"
        />
        <Button
          onClick={() => sendContact(name, phone)}
          isFullWight
          text="ОБСУДИТЬ ПРОЕКТ"
        />
        <Options>
          <OptionTitle>или напишите нам</OptionTitle>
          <Flex>
            <IconButton
              onClick={() => router.push(contactLink.tg)}
              IconComponent={SvgTg}
            />
            <IconButton
              onClick={() => router.push(contactLink.whatsApp)}
              IconComponent={SvgWhatsapp}
            />
          </Flex>
        </Options>
      </Body>
    </Wrapper>
  );
};

export default ContactsModal;

const Wrapper = styled(Portal)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9991;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: inherit;
  background: rgba(28, 33, 45, 0.3);
`;

const Body = styled.div`
  position: relative;
  display: flex;
  backdrop-filter: blur(8px);
  flex-direction: column;
  width: 100%;
  margin: auto;
  box-shadow: 0 0 130px 30px #fff;
  background: #fff;
  outline: none;
  border-radius: 24px;
  padding: 32px;
  max-width: 529px;

  @media (max-width: ${BreakpointsEnum.sm}px) {
    position: absolute;
    bottom: 0;
    border-radius: 24px 24px 0 0;
    max-width: 100%;
  }
`;

const ContactTitle = styled.div`
  font-weight: 400;
  font-size: 18px;
  text-transform: uppercase;
  color: #282828;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid ${({ theme: { colors } }) => colors.additional.purple};
  border-radius: 11px;
  padding: 16px;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  outline: none;
  margin-bottom: 12px;
  &::placeholder {
    color: rgba(86, 86, 86, 0.7);
  }
`;
const OptionTitle = styled.div`
  font-weight: 400;
  font-size: 20px;
  text-transform: uppercase;
  color: #282828;
`;
const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 36px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
