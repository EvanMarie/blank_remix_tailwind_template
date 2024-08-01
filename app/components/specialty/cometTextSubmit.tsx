import { Form, useSubmit } from "@remix-run/react";
import FlexFull from "../buildingBlocks/flexFull";
import Box from "../buildingBlocks/box";
import TextArea from "../buildingBlocks/textArea";
import Flex from "../buildingBlocks/flex";
import IconButton from "../buildingBlocks/iconButton";
import BouncingDots from "./bouncingDots";
import Center from "../buildingBlocks/center";
import { useEffect, useRef } from "react";
import { verticalAlign } from "styles";
import CometBorder from "./cometBorder";
import { BsSend } from "react-icons/bs";

export default function CometTextSubmit({
  isLoading,
  onChange,
  onNewMessage,
  isDisabled,
  textAreaHeight = "h-full",
  onClick,
}: {
  isLoading: boolean;
  onChange: ((e: any) => void) | undefined;
  onNewMessage: (message: string) => void;
  isDisabled: boolean;
  textAreaHeight?: string;
  onClick?: () => void;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!isLoading) {
      formRef.current?.reset();
    }
  }, [isLoading]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const message = formData.get("chatInput") as string;
    onNewMessage(message);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onNewMessage(e?.currentTarget?.value);
    }
  };

  return (
    <>
      <FlexFull className={textAreaHeight}>
        <Form
          ref={formRef}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexShrink: 0,
            justifyContent: "center",
          }}
          onSubmit={handleSubmit}
          method="POST"
        >
          <Box className={`w-100% md:w-100% shadowNarrowTight`}>
            {isLoading ? (
              <CometBorder
                h="h-full"
                p="p-[0.1vh]"
                cometSize="p-[0.3vh]"
                cometSpeed="4s"
                cometLength="80%"
              >
                <FlexFull className="h-full relative">
                  <Center className="w-full h-full absolute top-0 left-0 bg-col-930">
                    <BouncingDots />
                  </Center>
                  <TextArea
                    name="chatInput"
                    textAreaHeight="h-full"
                    disabled={true}
                    textAreaWidth="w-full md:w-full"
                    value={contentRef.current?.value}
                  />
                </FlexFull>
              </CometBorder>
            ) : (
              <FlexFull className="h-full p-[0.3vh] relative">
                <Box className="absolute bottom-1vh right-1.5vh">
                  <IconButton
                    icon={BsSend}
                    htmlType="submit"
                    isDisabled={isDisabled}
                    label="send"
                    tooltipPlacement="topLeft"
                    onClick={onClick}
                  />
                </Box>
                <TextArea
                  name="chatInput"
                  textAreaHeight="h-full"
                  textAreaWidth="w-full md:w-full"
                  onChange={onChange}
                  className="pr-6vh"
                  onKeyDown={handleKeyDown}
                />
              </FlexFull>
            )}
          </Box>
          <Flex className={`${verticalAlign}`}></Flex>
        </Form>
      </FlexFull>
    </>
  );
}
