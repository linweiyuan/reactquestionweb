import { ConfigProvider } from "antd"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import zhCN from "antd/es/locale/zh_CN"

import "./App.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
);
