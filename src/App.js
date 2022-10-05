import { Button, Form, message, Radio, Space } from "antd"
import React from "react"
import { useGetData } from "use-axios-react"

export default function App() {
  const [responseData, loading] = useGetData(`http://localhost/api/questions`);

  const onChange = (e) => {};

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("submit answers");
  };

  const onFinishFailed = () => {
    message.warning("请填写全部选项");
  };

  return (
    <>
      {!loading && (
        <div className="wrapper">
          <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <h1>请完成下面性格测试</h1>
            {responseData.questions.map((question, index) => {
              return (
                <div key={question.id} className="answer">
                  <div>
                    {index + 1}. {question.title}
                  </div>
                  <Form.Item
                    name={question.id}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Radio.Group onChange={onChange}>
                      <Space direction="vertical">
                        {Object.keys(question.answer).map((key) => (
                          <Radio
                            name={question.id}
                            key={question.id + ":" + key}
                            value={question.id + ":" + key}
                          >
                            {question.answer[key]}
                          </Radio>
                        ))}
                      </Space>
                    </Radio.Group>
                  </Form.Item>
                </div>
              );
            })}
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </>
  );
}
