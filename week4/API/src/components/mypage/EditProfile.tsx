import styled from "@emotion/styled";
import Title from "../common/Title";
import Input from "../common/Input";
import Button from "../common/Button";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const nav = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [newHobby, setNewHobby] = useState("");

  // 변경 핸들러
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleHobbyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewHobby(e.target.value);
  };

  // 유저 정보 수정 API 호출 함수
  const updateUserInfo = async () => {
    if (!newPassword && !newHobby) {
      alert("비밀번호와 취미를 입력해주세요!");
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      alert("로그인이 필요합니다.");
      nav("./");
      return;
    }

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_APP_BASE_URL}/user`,
        {
          hobby: newHobby,
          password: newPassword,
        },
        {
          headers: {
            token: token,
          },
        }
      );

      console.log("수정 성공:", response.data);
      alert("회원 정보가 성공적으로 수정되었습니다.");
    } catch (error) {
      console.log("수정 실패:", error);
      alert("정보 수정 중 오류가 발생했습니다.");
    }
  };

  return (
    <Container>
      <FormLayout>
        <Title title="내 정보 수정하기" />

        <Title title="새 비밀번호" fontSize="medium" />
        <Input value={newPassword} onChange={handlePasswordChange} />

        <Title title="새 취미" fontSize="medium" />
        <Input value={newHobby} onChange={handleHobbyChange} />

        <Button text="수정하기" onClick={updateUserInfo} />
      </FormLayout>
    </Container>
  );
};

export default EditProfile;

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
