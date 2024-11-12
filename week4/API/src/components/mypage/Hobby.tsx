import styled from "@emotion/styled";
import Title from "../common/Title";
import Input from "../common/Input";
import Button from "../common/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Hobby = () => {
  const [hobby, setHobby] = useState<string | null>(null);
  const [otherHobby, setOtherHobby] = useState<string | null>(null);
  const [userNumber, setUserNumber] = useState<string>("");
  const token = localStorage.getItem("token");
  const nav = useNavigate();

  // 취미 가져오기 API
  const getHobby = async () => {
    try {
      if (!token) {
        console.log("토큰이 없습니다. 로그인해주세요.");
        nav("/");
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

  // 타 사용자 취미 검색 API
  const searchedHobby = async () => {
    if (!userNumber) {
      alert("사용자 번호를 입력해주세요.");
      return;
    }

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_BASE_URL}/user/${userNumber}/hobby`,
        { headers: { token } }
      );
      if (response.data.result) {
        setOtherHobby(response.data.result.hobby);
      } else {
        setOtherHobby(null);
        console.log("실패:", response.data.code);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          alert("존재하지 않는 회원입니다.");
        } else {
          alert("에러가 발생했습니다.");
        }
      } else {
        console.error("알 수 없는 에러:", error);
      }
      setOtherHobby(null);
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
        <Input
          value={userNumber}
          onChange={(e) => setUserNumber(e.target.value)}
          text="사용자 번호"
        />
        <Button text="검색" onClick={searchedHobby} />
        {otherHobby && <Title title={otherHobby} fontSize="small" />}
      </FormLayout>
    </Container>
  );
};

export default Hobby;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const FormLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  padding: 3rem;
  border-radius: 10px;
`;
