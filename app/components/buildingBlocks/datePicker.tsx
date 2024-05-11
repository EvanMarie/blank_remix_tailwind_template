import { useState } from "react";
import Box from "~/components/buildingBlocks/box";
import Button from "~/components/buildingBlocks/button";
import Flex from "~/components/buildingBlocks/flex";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Icon from "~/components/buildingBlocks/icon";
import IconButton from "~/components/buildingBlocks/iconButton";
import VStack from "~/components/buildingBlocks/vStack";
import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon, CloseIcon } from "styles";
import useEscapeKey from "~/utils/useEscapeKey";
import FlexFull from "./flexFull";
import Text from "./text";
import Modal from "./modal";

interface CalendarProps {
  selectedDate: Date;
  onSelect: (date: Date) => void;
  allowPastDates: boolean;
}

const Calendar = ({
  selectedDate,
  onSelect,
  allowPastDates,
}: CalendarProps) => {
  const startDay = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
  ).getDay();
  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const weekDays = ["S", "M", "T", "W", "T", "F", "S"];
  const days: JSX.Element[] = weekDays.map((day, index) => (
    <div
      key={index * 100}
      className="p-[0.1vh] text-center font-semibold text-col-300 w-[3vh] h-[2.5vh] flex-shrink-0 flex justify-center items-center"
    >
      {day}
    </div>
  ));

  for (let i = 0; i < startDay; i++) {
    days.push(
      <div key={`empty-${i}`} className="p-2 border border-transparent" />
    );
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      day
    );
    const isPast = dayDate < today;
    const isDisabled = !allowPastDates && isPast;

    days.push(
      <Flex
        key={day}
        className="w-[2.3vh] md:w-[3vh] md:h-[2.5vh] flex-shrink-0 flex justify-center items-center"
      >
        <button
          disabled={isDisabled}
          className={`py-[0.1vh] px-[0.4vh] w-full h-full text-center flex justify-center ${
            isDisabled
              ? "text-col-140 hover:bg-transparent cursor-not-allowed"
              : "hover:bg-col-200 hover:text-col-900 hover:shadowNarrowNormal"
          }`}
          onClick={() => !isDisabled && onSelect(dayDate)}
        >
          {day}
        </button>
      </Flex>
    );
  }

  return (
    <div
      className={`w-[24vh] grid grid-cols-7 gap-y-[0.7vh] gap-x-[1.5vh] px-[1.5vh] justify-center items-center textShadow`}
    >
      {days}
    </div>
  );
};

interface DatePickerProps {
  isEditDate: boolean;
  setIsEditDate: (isEditDate: boolean) => void;
  setIsEditTime: (isEditTime: boolean) => void;
  dueDate: Date;
  allowPastDates?: boolean;
  label: string;
  onSelectDate?: (newDate: Date) => void;
  modalContentStyle?: string;
  headerStyle?: string;
  labelStyle?: string;
}

export default function DatePicker({
  isEditDate,
  setIsEditDate,
  setIsEditTime,
  dueDate,
  allowPastDates = true,
  onSelectDate,
  label,
  modalContentStyle,
  headerStyle,
  labelStyle,
}: DatePickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(dueDate);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setIsEditDate(false);
    if (onSelectDate) {
      onSelectDate(date); // Pass the selected date back to the parent component if needed
    }
  };

  const goToNextMonth = () => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1)
    );
  };

  const goToPreviousMonth = () => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1)
    );
  };

  const monthYearFormat = selectedDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const goToToday = () => {
    setSelectedDate(new Date());
    setIsEditDate(false);
    if (onSelectDate) {
      onSelectDate(new Date()); // Also update when going to today's date
    }
  };

  useEscapeKey(() => setIsEditDate(false));
  const zIndex = isEditDate ? "z-20" : "z-0";

  return (
    <div className="relative">
      <Box className="relative">
        <Icon
          icon={CalendarIcon}
          containerClassName="absolute top-[0.7vh] right-[1.1vh] text-col-900 hover:cursor-pointer"
          iconClassName="text-[2.3vh]"
          onClick={() => {
            setIsEditDate(!isEditDate);
            setIsEditTime(false);
          }}
        />
        <input
          type="text"
          readOnly
          value={selectedDate.toISOString().substring(0, 10)}
          className={`form-input w-[16vh] font-semibold inputStyles cursor-pointer`}
          onClick={() => {
            setIsEditDate(!isEditDate);
            setIsEditTime(false);
          }}
        />
      </Box>{" "}
      <Modal
        isOpen={isEditDate}
        setModalOpen={setIsEditDate}
        onClose={() => setIsEditDate(false)}
        modalSize="h-fit w-fit"
        showBottomClose={false}
        showTopClose={false}
      >
        <VStack className={`${modalContentStyle} left-0 ${zIndex}`}>
          {label !== "" && (
            <Text className={headerStyle}>Select {label} Time</Text>
          )}
          <FlexFull className="justify-between mb-[0.5vh] items-center">
            <IconButton
              type="smallNormal"
              icon={ArrowLeftIcon}
              onClick={goToPreviousMonth}
            />
            <Text className={labelStyle}>{monthYearFormat}</Text>
            <IconButton
              type="smallNormal"
              icon={ArrowRightIcon}
              onClick={goToNextMonth}
            />
          </FlexFull>
          <Calendar
            selectedDate={selectedDate}
            onSelect={handleDateSelect}
            allowPastDates={allowPastDates}
          />
          <HStackFull
            className="justify-between"
            hoverCursor="hover:cursor-pointer"
          >
            <Button
              type="unstyled"
              onClick={goToToday}
              className={`border-260-md text-[1.6vh] leading-[1.4vh] h-[2.2vh] px-[0.5vh] bg-col-700 hover:bg-col-600 flex items-center shadowNarrowNormal textShadow transition-400`}
              buttonText="Today"
            />
            <Button
              type="smallNormal"
              onClick={() => setIsEditDate(false)}
              iconLeft={CloseIcon}
              buttonText="Close"
            />
          </HStackFull>
        </VStack>
      </Modal>
    </div>
  );
}
