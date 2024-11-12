import styled from "@emotion/styled";
import Title from "../common/Title";
import Input from "../common/Input";
import Button from "../common/Button";
import axios from "axios";
import { useState, useEffect } from "react";

const Hobby = () => {
  const [hobby, setHobby] = useState<string | null>(null);

  // 취미 가져오기
  const getHobby = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.log("토큰이 없습니다. 로그인해주세요.");
        return;
      }

      const response = await axios.get(
        `${import.meta.env.VITE_APP_BASE_URL}/user/my-hobby`,
        { headers: { token } }
      );

      if (response.data.result) {
        setHobby(response.data.result.hobby);
      } else {
        console.log("실패:", response.data.code);
      }
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  // 컴포넌트가 마운트될 때 취미 데이터를 가져옴
  useEffect(() => {
    getHobby();
  }, []);

  return (
    <Container>
      <FormLayout>
        <Title title="취미" />
        <Title title="나의 취미" fontSize="medium" />
        <Title
          title={hobby ? hobby : "취미 정보가 없습니다."}
          fontSize="small"
        />
        <Title title="다른 사람들의 취미" fontSize="medium" />
        <Input text="사용자 번호" />
        <Button text="검색" />
      </FormLayout>
    </Container>
  );
};

export default Hobby;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const FormLayout = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  padding: 3rem;
  border-radius: 10px;
`;
