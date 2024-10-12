import React, { useState } from 'react';
import { DatePicker, Space, Select } from 'antd';
import moment from 'moment'; 

const { RangePicker } = DatePicker;
const { Option } = Select;

const FilterPanel = ({ onFilterChange }) => {
  const [selectedDateRange, setSelectedDateRange] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(null); 

  const handleDateRangeChange = (dates) => {
    setSelectedDateRange(dates);
    onFilterChange({ 
      startDate: dates[0] ? dates[0].format('YYYY-MM-DD') : null,
      endDate: dates[1] ? dates[1].format('YYYY-MM-DD') : null 
    });
  };

  const handleStatusChange = (value) => {
    setSelectedStatus(value);
    onFilterChange({ status: value }); 
  };

  return (
    <Space direction="vertical" size={20}>
      <RangePicker 
        onChange={handleDateRangeChange} 
        value={selectedDateRange.length > 0 
          ? [moment(selectedDateRange[0]), moment(selectedDateRange[1])] 
          : []}
        format="YYYY-MM-DD"
      />
      <Select
        placeholder="Filter by Status"
        onChange={handleStatusChange}
        value={selectedStatus}
        allowClear
      >
        <Option value="Settled">Settled</Option>
        <Option value="Pending">Pending</Option>
        <Option value="Failed">Failed</Option>
      </Select>
    </Space>
  );
};

export default FilterPanel;