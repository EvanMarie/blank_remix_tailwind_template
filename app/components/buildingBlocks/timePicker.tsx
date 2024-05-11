import { useState, useEffect } from "react";
import Box from "~/components/buildingBlocks/box";
import Icon from "~/components/buildingBlocks/icon";
import VStack from "~/components/buildingBlocks/vStack";
import HStackFull from "./hStackFull";
import VStackFull from "./vStackFull";
import useEscapeKey from "~/utils/useEscapeKey";
import { CloseButton } from "./closeButton";
import Text from "./text";
import { LuClock2 } from "react-icons/lu";
import Modal from "./modal";

interface TimePickerProps {
  selectedTime: Date;
  onSelectTime: (time: Date) => void;
  isEditTime: boolean;
  setIsEditDate: (isEditDate: boolean) => void;
  setIsEditTime: (isEditTime: boolean) => void;
  labelStyle: string;
}

const ScrollableSelector = ({
  items,
  onSelect,
  selectedItem,
  label,
  labelStyle,
}: {
  items: number[];
  onSelect: (item: number) => void;
  selectedItem: number;
  label: string;
  labelStyle: string;
}) => {
  return (
    <VStack className="w-35%" gap="gap-[0.5vh]">
      <Text className={labelStyle}>{label}</Text>
      <VStackFull
        className={`overflow-auto h-[23vh] max-h-[25vh] py-[1vh] items-start insetShadowMd bg-100-diagonal3op75`}
        gap="gap-[0.7vh]"
      >
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => onSelect(item)}
            className={` px-[0.4vh] ${
              item === selectedItem
                ? "bg-col-200 text-col-900 transition-300"
                : "hover:bg-col-200 hover:text-col-900"
            }`}
          >
            {String(item < 10 ? `0${item}` : item)}
          </button>
        ))}
      </VStackFull>
    </VStack>
  );
};

interface TimePickerProps {
  selectedTime: Date;
  onSelectTime: (time: Date) => void;
  isEditTime: boolean;
  setIsEditDate: (isEditDate: boolean) => void;
  setIsEditTime: (isEditTime: boolean) => void;
  label: string;
  modalContentStyle: string;
  headerStyle: string;
  labelStyle: string;
}

const TimePicker = ({
  selectedTime,
  onSelectTime,
  isEditTime,
  setIsEditDate,
  setIsEditTime,
  label,
  modalContentStyle,
  headerStyle,
  labelStyle,
}: TimePickerProps) => {
  const [hour, setHour] = useState(selectedTime.getHours());
  const [minute, setMinute] = useState(selectedTime.getMinutes());
  const [isPM, setIsPM] = useState(selectedTime.getHours() >= 12);
  const zIndex = isEditTime ? "z-20" : "";

  // Update only on opening or major external change, not continuously
  useEffect(() => {
    if (isEditTime) {
      setHour(selectedTime.getHours());
      setMinute(selectedTime.getMinutes());
      setIsPM(selectedTime.getHours() >= 12);
    }
  }, [selectedTime, isEditTime]);

  const finalizeTime = () => {
    const adjustedHour = isPM ? (hour % 12) + 12 : hour % 12;
    const newTime = new Date(selectedTime);
    newTime.setHours(adjustedHour, minute);
    onSelectTime(newTime);
  };

  const toggleAmPm = () => {
    setIsPM(!isPM);
    finalizeTime(); // Update time when AM/PM toggles
  };

  useEscapeKey(() => setIsEditTime(false));

  return (
    <div className="relative">
      <Box className="relative">
        <Icon
          icon={LuClock2}
          iconClassName="text-[2.5vh]"
          containerClassName="absolute top-[0.5vh] right-[1.1vh] text-col-900 hover:cursor-pointer"
          onClick={() => {
            setIsEditTime(!isEditTime);
            setIsEditDate(false);
          }}
        />
        <input
          type="text"
          readOnly
          value={`${hour % 12 === 0 ? 12 : hour % 12}:${
            minute < 10 ? `0${minute}` : minute
          } ${isPM ? "PM" : "AM"}`}
          className={`form-input inputStyles font-semibold w-[13vh] cursor-pointer`}
          onClick={() => {
            setIsEditTime(!isEditTime);
            setIsEditDate(false);
          }}
        />
      </Box>

      <Modal
        isOpen={isEditTime}
        setModalOpen={setIsEditTime}
        onClose={() => setIsEditTime(false)}
        modalSize="h-fit w-fit"
        showBottomClose={false}
        showTopClose={false}
      >
        <VStack className={`${modalContentStyle} right-0 ${zIndex}`}>
          {label !== "" && (
            <Text className={headerStyle}>Select {label} Date</Text>
          )}
          <HStackFull className="justify-evenly items-stretch">
            <ScrollableSelector
              labelStyle={labelStyle}
              label="hour"
              items={Array.from({ length: 12 }, (_, i) => i + 1)}
              onSelect={setHour}
              selectedItem={hour % 12 === 0 ? 12 : hour % 12}
            />
            <ScrollableSelector
              labelStyle={labelStyle}
              label="min"
              items={Array.from({ length: 60 }, (_, i) => i)}
              onSelect={setMinute}
              selectedItem={minute}
            />
            <VStack className="w-20% pt-[4.5vh] pl-[1vh] h-[27vh] justify-between items-end">
              <VStack className="pr-[1.5vh]">
                <button
                  onClick={toggleAmPm}
                  className={`w-full px-[0.7vh] ${
                    isPM
                      ? "bg-transparent text-col-100 hover:bg-col-200 hover:text-col-900 transition-300"
                      : "bg-col-200 text-col-900 hover:bg-col-200 hover:text-col-900"
                  }`}
                >
                  am
                </button>
                <button
                  onClick={toggleAmPm}
                  className={`w-full px-[0.5vh] ${
                    !isPM
                      ? "bg-transparent text-col-100 hover:bg-col-200 hover:text-col-900 transition-300"
                      : "bg-col-200 text-col-900 hover:bg-col-200 hover:text-col-900"
                  }`}
                >
                  pm
                </button>
              </VStack>
              <CloseButton
                type="smallNormal"
                onClose={() => setIsEditTime(false)}
              />
            </VStack>
          </HStackFull>
        </VStack>
      </Modal>
    </div>
  );
};

export default TimePicker;
