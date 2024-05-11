import { useState } from "react";
import DatePicker from "./datePicker";
import TimePicker from "./timePicker";
import HStack from "./hStack";

interface InputDateTimeProps {
  dueDate?: Date;
  containerHeight?: string;
  className?: string;
  name?: string;
  editDateOpen?: boolean;
  editTimeOpen?: boolean;
  label?: string;
}

export default function InputDateTime({
  dueDate = new Date(),
  className,
  name,
  editDateOpen = false,
  editTimeOpen = false,
  label,
}: InputDateTimeProps) {
  const [dateTime, setDateTime] = useState(dueDate);
  const [isEditDate, setIsEditDate] = useState(editDateOpen);
  const [isEditTime, setIsEditTime] = useState(editTimeOpen);

  const handleDateChange = (newDate: Date) => {
    const updatedDateTime = new Date(
      newDate.getFullYear(),
      newDate.getMonth(),
      newDate.getDate(),
      dateTime.getHours(),
      dateTime.getMinutes()
    );
    setDateTime(updatedDateTime);
  };

  const handleTimeChange = (newTime: Date) => {
    const updatedDateTime = new Date(
      dateTime.getFullYear(),
      dateTime.getMonth(),
      dateTime.getDate(),
      newTime.getHours(),
      newTime.getMinutes()
    );
    setDateTime(updatedDateTime);
  };
  const modalContentStyle = `text-xs text-col-100 p-[1.5vh] w-[30vh] p-[2vh] justify-center items-center textShadow bg-col-800 bg-gradient-to-b from-col-800/50 via-col-700/40 to-col-800/50 border-900-md shadowNarrowNormal`;
  const labelStyle = `text-col-100 font-semibold`;
  const headerStyle = "text-[2vh] textShadow text-white";
  console.log("dateTime", dateTime);
  console.log("dateTime type", typeof dateTime);
  return (
    <HStack className={`justify-evenly ${className} relative`}>
      <input type="hidden" name={name} value={dateTime.toISOString()} />
      <DatePicker
        isEditDate={isEditDate}
        setIsEditDate={setIsEditDate}
        setIsEditTime={setIsEditTime}
        dueDate={dateTime}
        onSelectDate={handleDateChange}
        label={label || ""}
        modalContentStyle={modalContentStyle}
        headerStyle={headerStyle}
        labelStyle={labelStyle}
      />
      <TimePicker
        selectedTime={dateTime}
        onSelectTime={handleTimeChange}
        setIsEditDate={setIsEditDate}
        isEditTime={isEditTime}
        setIsEditTime={setIsEditTime}
        label={label || ""}
        modalContentStyle={modalContentStyle}
        headerStyle={headerStyle}
        labelStyle={labelStyle}
      />
    </HStack>
  );
}
