import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);

  const handleNavigation = (role, page) => {
    setRole(role);
    navigate(`/${page}?role=${role}`);
  };

  return (
    <StyledWrapper>
      <div className="button-container">
        {/* Admin Button */}
        <button className="btn-53" onClick={() => handleNavigation("admin", "login")}>
          <div className="original">Admin</div>
          <div className="letters">
            <span>A</span>
            <span>D</span>
            <span>M</span>
            <span>I</span>
            <span>N</span>
          </div>
        </button>

        {/* User Button */}
        <button className="btn-53" onClick={() => handleNavigation("user", "signup")}>
          <div className="original">User</div>
          <div className="letters">
            <span>U</span>
            <span>S</span>
            <span>E</span>
            <span>R</span>
          </div>
        </button>
      </div>
    </StyledWrapper>
  );
};

// Styled Components for Button Animation
const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;

  .button-container {
    display: flex;
    gap: 30px;
  }

  .btn-53 {
    border: 1px solid;
    border-radius: 999px;
    box-sizing: border-box;
    display: block;
    font-weight: 900;
    overflow: hidden;
    padding: 1.2rem 3rem;
    position: relative;
    text-transform: uppercase;
    cursor: pointer;
  }

  .btn-53 .original {
    background: #fff;
    color: #000;
    display: grid;
    inset: 0;
    place-content: center;
    position: absolute;
    transition: transform 0.2s cubic-bezier(0.87, 0, 0.13, 1);
  }

  .btn-53:hover .original {
    transform: translateY(100%);
  }

  .btn-53 .letters {
    display: inline-flex;
  }

  .btn-53 span {
    opacity: 0;
    transform: translateY(-15px);
    transition: transform 0.2s cubic-bezier(0.87, 0, 0.13, 1), opacity 0.2s;
  }

  .btn-53 span:nth-child(2n) {
    transform: translateY(15px);
  }

  .btn-53:hover span {
    opacity: 1;
    transform: translateY(0);
  }

  .btn-53:hover span:nth-child(2) {
    transition-delay: 0.1s;
  }

  .btn-53:hover span:nth-child(3) {
    transition-delay: 0.2s;
  }

  .btn-53:hover span:nth-child(4) {
    transition-delay: 0.3s;
  }

  .btn-53:hover span:nth-child(5) {
    transition-delay: 0.4s;
  }
`;

export default Home;
