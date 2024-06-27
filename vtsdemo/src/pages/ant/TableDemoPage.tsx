import { Table, version } from "antd";
import { useEffect, useState } from "react";

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
];

export default function TableDemoPage() {
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
  ]);

  useEffect(() => {
    if (dataSource.length < 10) {
      const newRows = [
        {
          key: `1`,
          name: `胡彦斌1`,
          age: 1,
          address: `西湖区湖底公园1号`,
        },
      ];
      for (let i = 0; i < 1000; ++i) {
        newRows.push({
          key: `${i + 20}`,
          name: `胡彦斌${i}`,
          age: i,
          address: `西湖区湖底公园${i}号`,
        });
      }
      setDataSource(newRows);
    }
  });

  return (
    <div>
      {version}
      <Table dataSource={dataSource} columns={columns} rowKey="key"/>
    </div>
  );
}
