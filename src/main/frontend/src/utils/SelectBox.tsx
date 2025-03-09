import React from 'react';

interface SelectBoxProps {
    options: { value: string; label: string }[];
    defaultLabel: string;
    onChange?: (value: string) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({ options, defaultLabel, onChange }) => {
    return (
        <select onChange={(e) => onChange?.(e.target.value)}>
            <option>{defaultLabel}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}

export const CitySelect: React.FC<{ onChange?: (value: string) => void }> = ({ onChange }) => (
    <SelectBox
        defaultLabel="시/도 선택"
        options={[
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
            { value: "제주특별자치도", label: "제주특별자치도" }
        ]}
        onChange={onChange}
    />
);

export const DistrictSelect: React.FC<{ onChange?: (value: string) => void }> = ({ onChange }) => (
    <SelectBox
        defaultLabel="구/군 선택"
        options={[
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
            { value: "중랑구", label: "중랑구" }
        ]}
        onChange={onChange}
    />
)

export const TimeSelect: React.FC<{ onChange?: (value: string) => void }> = ({ onChange }) => (
    <SelectBox
        defaultLabel="예약 시간 선택"
        options={[
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
            { value: "19:00", label: "오후 07:00" }
        ]}
        onChange={onChange}
    />
)


export default SelectBox;