import React from "react";

type Props = {
    text: string;
};

const MyComponent: React.FC<Props> = ({ text }) => {
    return <div style={{ padding: 10, background: "#f4f4f4" }}>{text}</div>;
};

export default MyComponent;