import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

interface CustomDropdownProps {
  options: { value: string; label: string }[];
  defaultLabel: string;
  value?: string;
  onChange?: (value: string) => void;
}

const CustomDropdown = ({ options, defaultLabel, value, onChange }: CustomDropdownProps) => {
  const [selectedLabel, setSelectedLabel] = useState(defaultLabel);

  // value 값이 변경될 때 selectedLabel 업데이트
  useEffect(() => {
    if (value) {
      const selectedOption = options.find((option) => option.value === value);
      if (selectedOption) {
        setSelectedLabel(selectedOption.label);
      }
    } else {
      setSelectedLabel(defaultLabel);
    }
  }, [value, options, defaultLabel]);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {selectedLabel}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options.map((option) => (
          <Dropdown.Item
            key={option.value}
            onClick={() => {
              setSelectedLabel(option.label);
              onChange?.(option.value);
            }}
          >
            {option.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

// 시/도 선택
export const CitySelect: React.FC<{ value?: string; onChange?: (value: string) => void }> = ({ value, onChange }) => (
  <CustomDropdown
    defaultLabel="시/도 선택"
    value={value}
    options={[
      { value: "시/도 선택", label: "시/도 선택" },
      { value: "서울특별시", label: "서울특별시" },
      { value: "부산광역시", label: "부산광역시" },
      { value: "대구광역시", label: "대구광역시" },
      { value: "인천광역시", label: "인천광역시" },
      { value: "광주광역시", label: "광주광역시" },
      { value: "대전광역시", label: "대전광역시" },
      { value: "울산광역시", label: "울산광역시" },
      { value: "세종특별자치시", label: "세종특별자치시" },
      { value: "경기도", label: "경기도" },
      { value: "강원특별자치도", label: "강원특별자치도" },
      { value: "충청북도", label: "충청북도" },
      { value: "충청남도", label: "충청남도" },
      { value: "전라북도", label: "전라북도" },
      { value: "전라남도", label: "전라남도" },
      { value: "경상북도", label: "경상북도" },
      { value: "경상남도", label: "경상남도" },
      { value: "제주특별자치도", label: "제주특별자치도" },
    ]}
    onChange={onChange}
  />
);

// 구/군 선택
export const DistrictSelect: React.FC<{ value?: string; onChange?: (value: string) => void }> = ({
  value,
  onChange,
}) => (
  <CustomDropdown
    defaultLabel="구/군 선택"
    value={value}
    options={[
      { value: "구/군 선택", label: "구/군 선택" },
      { value: "강남구", label: "강남구" },
      { value: "강동구", label: "강동구" },
      { value: "강북구", label: "강북구" },
      { value: "강서구", label: "강서구" },
      { value: "관악구", label: "관악구" },
      { value: "광진구", label: "광진구" },
      { value: "구로구", label: "구로구" },
      { value: "금천구", label: "금천구" },
      { value: "노원구", label: "노원구" },
      { value: "도봉구", label: "도봉구" },
      { value: "동대문구", label: "동대문구" },
      { value: "동작구", label: "동작구" },
      { value: "마포구", label: "마포구" },
      { value: "서대문구", label: "서대문구" },
      { value: "서초구", label: "서초구" },
      { value: "성동구", label: "성동구" },
      { value: "성북구", label: "성북구" },
      { value: "송파구", label: "송파구" },
      { value: "양천구", label: "양천구" },
      { value: "영등포구", label: "영등포구" },
      { value: "용산구", label: "용산구" },
      { value: "은평구", label: "은평구" },
      { value: "종로구", label: "종로구" },
      { value: "중구", label: "중구" },
      { value: "중랑구", label: "중랑구" },
    ]}
    onChange={onChange}
  />
);

// 예약시간 선택
export const TimeSelect: React.FC<{ onChange?: (value: string) => void }> = ({ onChange }) => (
  <CustomDropdown
    defaultLabel="예약시간 선택"
    options={[
      { value: "예약시간 선택", label: "예약시간 선택" },
      { value: "09:00", label: "오전 09:00" },
      { value: "10:00", label: "오전 10:00" },
      { value: "11:00", label: "오전 11:00" },
      { value: "12:00", label: "오후 12:00" },
      { value: "13:00", label: "오후 01:00" },
      { value: "14:00", label: "오후 02:00" },
      { value: "15:00", label: "오후 03:00" },
      { value: "16:00", label: "오후 04:00" },
      { value: "17:00", label: "오후 05:00" },
      { value: "18:00", label: "오후 06:00" },
      { value: "19:00", label: "오후 07:00" },
    ]}
    onChange={onChange}
  />
);

// 정렬 선택
export const FilterSelect: React.FC<{ onChange?: (value: string) => void }> = ({ onChange }) => (
  <CustomDropdown
    defaultLabel="기본정렬순"
    options={[
      { value: "기본정렬순", label: "기본정렬순" },
      { value: "리뷰높은순", label: "리뷰높은순" },
      { value: "리뷰낮은순", label: "리뷰낮은순" },
      { value: "리뷰많은순", label: "리뷰많은순" },
      { value: "리뷰적은순", label: "리뷰적은순" },
    ]}
    onChange={onChange}
  />
);

// 예약내역 정렬 선택
export const FilterReservationSelect: React.FC<{ value?: string; onChange?: (value: string) => void }> = ({
  value,
  onChange,
}) => (
  <CustomDropdown
    defaultLabel="기본정렬순"
    options={[
      { value: "기본정렬순", label: "기본정렬순" },
      { value: "최신예약순", label: "최신예약순" },
      { value: "오래된예약순", label: "오래된예약순" },
      { value: "예약대기", label: "예약대기" },
      { value: "시술대기", label: "시술대기" },
      { value: "예약취소", label: "예약취소" },
      { value: "시술완료", label: "시술완료" },
    ]}
    onChange={onChange}
  />
);

// 리뷰내역 정렬 선택
export const FilterReviewSelect: React.FC<{ value?: string; onChange?: (value: string) => void }> = ({
  value,
  onChange,
}) => (
  <CustomDropdown
    defaultLabel="기본정렬순"
    options={[
      { value: "기본정렬순", label: "기본정렬순" },
      { value: "최신등록순", label: "최신등록순" },
      { value: "리뷰높은순", label: "리뷰높은순" },
    ]}
    onChange={onChange}
  />
);

// 저장매장 정렬 선택
export const FilterSavedStoresSelect: React.FC<{ value?: string; onChange?: (value: string) => void }> = ({
  value,
  onChange,
}) => (
  <CustomDropdown
    defaultLabel="기본정렬순"
    options={[
      { value: "기본정렬순", label: "기본정렬순" },
      { value: "최신저장순", label: "최신등록순" },
      { value: "리뷰높은순", label: "리뷰높은순" },
    ]}
    onChange={onChange}
  />
);

export default CustomDropdown;
