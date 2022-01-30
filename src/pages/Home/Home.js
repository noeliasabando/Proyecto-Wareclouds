import React, { useEffect, useState } from "react";
import locale from "antd/es/date-picker/locale/es_ES";
import { Row, Col, DatePicker, Space, Switch, notification } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import PictureList from "../../components/PictureList/PictureList";
import Picture from "../../components/Picture/Picture";
import Client from "../../api/client";
import "./Home.scss";

const Home = () => {
  const { RangePicker } = DatePicker;

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isChecked, setIsChecked] = useState(true);
  const [filterDate, setFilterDate] = useState();
  const [filterRange, setFilterRange] = useState();

  const onChange = (_dateString, date) => {
    setFilterRange(date);
    setFilterDate(date);
  };

  const onChangeSwitchRange = (checked) => {
    setIsChecked(checked);
  };

  const notificationError = (description, title = "Error") => {
    notification.error({
      description,
      message: title,
    });
  };

  const fetchData = () => {
    setData();
    setIsLoading(true);
    let params = {};
    if (isChecked && filterRange) {
      params = { start_date: filterRange[0], end_date: filterRange[1] };
    } else {
      params = { date: filterDate };
    }

    Client.getData(params)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          setData([response.data]);
        }
      })
      .catch(() => {
        notificationError("Error al cargar datos");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [filterDate, filterRange]);

  return (
    <Row className="home">
      <Col span={24}>
        <Row justify="center" className="home__containerDates">
          <p className="home__title">Buscar por rango</p>
          <Col className="home__switch">
            <Switch
              size="default"
              defaultChecked
              checkedChildren="Sí"
              unCheckedChildren="No"
              onChange={onChangeSwitchRange}
            />
          </Col>
          <Col>
            <Space direction="vertical">
              {isChecked ? (
                <RangePicker
                  className="home__picker"
                  onChange={onChange}
                  locale={locale}
                />
              ) : (
                <DatePicker
                  className="home__picker"
                  onChange={onChange}
                  locale={locale}
                />
              )}
            </Space>
          </Col>
        </Row>
        {isLoading && (
          <LoadingOutlined style={{ fontSize: "50px", margin: "80px auto" }} />
        )}
        {data && data.length === 1 && <Picture data={data[0]} />}
        {data && data.length > 1 && <PictureList data={data} />}
      </Col>
    </Row>
  );
};

export default Home;
